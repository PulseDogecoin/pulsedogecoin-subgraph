import { Address, BigDecimal, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts"
import {
  PulseDogecoin,
  Approval,
  Claim,
  Transfer
} from "../generated/PulseDogecoin/PulseDogecoin"
import { _GlobalInfo, _Claim, _Transfer, _TokenHolder, _MetaCounts } from "../generated/schema"

function schemaLimiter(metaCountName: string, limiter: BigInt, eventBlockNumber: BigInt): boolean{
  let validSave = false; 
  let metaCount = _MetaCounts.load(metaCountName);
  if (metaCount == null) {
    metaCount = new _MetaCounts(metaCountName); 
    metaCount.count = eventBlockNumber;
  } 
  if (metaCount != null) {
    let nextValidBlock = metaCount.count + limiter; 
    if(nextValidBlock < eventBlockNumber){ 
      metaCount.count = eventBlockNumber;
      validSave = true;
    } 
  } 

  metaCount.save();

  return validSave;
}

export function handleGlobalInfo(block: ethereum.Block):void{

  let id = block.timestamp.toString() + block.number.toString(); 
  let _globalInfo = _GlobalInfo.load(id);

  if (_globalInfo == null) {
    _globalInfo = new _GlobalInfo(id);
  }
  else {
    return;
  }

  let plsdContract = PulseDogecoin.bind(Address.fromString("0x34F0915a5f15a66Eba86F6a58bE1A471FB7836A7"));

  _globalInfo.totalSupply = plsdContract.totalSupply();
  _globalInfo.numberOfClaims = plsdContract.numberOfClaims();
  _globalInfo.currentDay = plsdContract.currentDay();
  _globalInfo.timestamp = block.timestamp;
  _globalInfo.blocknumber = block.number;

  _globalInfo.save();
}

function parseInput(input: Bytes): string {
  //0x3d13f874 - freeClaim
  //0x5f575529 - uniswapV3

  var result = ""; 
  let temp = input.toHexString();

  let tempSlice = temp.slice(0,10);    
   
  //log.debug('The tempSlice: {}, the temp: {}', [tempSlice, temp]);

  if(tempSlice == "0x3d13f874"){
    result = "freeClaim"
  }
  if(tempSlice == "0x5f575529"){
    result = "uniswapV3"
  }

  return result;
}

export function handleApproval(event: Approval): void {}

export function handleClaim(event: Claim): void {
  let id = event.params.to.toHexString();
  let _claim = _Claim.load(event.params.to.toHexString());

  let plsdContract = PulseDogecoin.bind(Address.fromString("0x34F0915a5f15a66Eba86F6a58bE1A471FB7836A7"));

  if (_claim == null) {
    _claim = new _Claim(id);
  }
  _claim.to = event.params.to;
  _claim.amount = event.params.amount;
  _claim.currentDay = plsdContract.currentDay();
  _claim.timestamp = event.block.timestamp;
  
  _claim.save();
}

export function handleTransfer(event: Transfer): void { 
  let _metaCount = _MetaCounts.load("Transfer");
  if (_metaCount == null) {
    _metaCount = new _MetaCounts("Transfer");
    let zero = BigInt.fromI32(0);
    _metaCount.count = zero;
  }
  let one = BigInt.fromI32(1);
  _metaCount.count = _metaCount.count.plus(one);
  _metaCount.save();

  let id = _metaCount.count.toString() + event.transaction.hash.toHexString();

  let _transfer = _Transfer.load(id);

  if (_transfer == null) {
    _transfer = new _Transfer(id);
  }

  let plsdContract = PulseDogecoin.bind(Address.fromString("0x34F0915a5f15a66Eba86F6a58bE1A471FB7836A7"));

  _transfer.numeralIndex = _metaCount.count;
  _transfer.transactionHash = event.transaction.hash;
  _transfer.gasLimit = event.transaction.gasLimit;
  _transfer.gasPrice = event.transaction.gasPrice;

  _transfer.input = event.transaction.input.toHexString();
  let methodId = parseInput(event.transaction.input);
  if(methodId != ""){
    _transfer.methodId =  methodId;
  }
  else{
    _transfer.methodId =  null; 
  }
  _transfer.from = event.params.from; 
  _transfer.to = event.params.to; 
  _transfer.value = event.params.value;
  _transfer.currentDay = plsdContract.currentDay();
  _transfer.timestamp = event.block.timestamp;
  _transfer.save();
 
  ///////TokenHolder from Update/////// 
  updateTokenHolder(event.params.from, event.params.value.toString(), '-', event.block.timestamp, event.block.number);

  ///////TokenHolder to Update///////
  updateTokenHolder(event.params.to, event.params.value.toString(), '+', event.block.timestamp, event.block.number);

}

function updateTokenHolder(address:Address, value: string, operator:string, eventTimestamp:BigInt, eventBlockNumber:BigInt): void {
  let Id = address.toHexString();

  let _tokenHolder = _TokenHolder.load(Id);
  let currentTokenBalance = BigDecimal.fromString("0"); 
  let currentTotalSent = BigDecimal.fromString("0"); 
  let currentTotalReceived = BigDecimal.fromString("0"); 
  let plsdContract = PulseDogecoin.bind(Address.fromString("0x34F0915a5f15a66Eba86F6a58bE1A471FB7836A7"));
  let currentDay = plsdContract.currentDay();
  
  if (_tokenHolder == null) {
    _tokenHolder = new _TokenHolder(Id);
    _tokenHolder.totalSent = currentTotalSent;
    _tokenHolder.totalReceived = currentTotalReceived;
    _tokenHolder.createdTimeStamp = eventTimestamp;
    _tokenHolder.createdBlocknumber = eventBlockNumber;
    _tokenHolder.createdDay = currentDay;
    let _metaCount = _MetaCounts.load("TokenHolder");
    if (_metaCount == null) {
      _metaCount = new _MetaCounts("TokenHolder");
      let zero = BigInt.fromI32(0);
      _metaCount.count = zero;
    }
    let one = BigInt.fromI32(1);
    _metaCount.count = _metaCount.count.plus(one);
    _metaCount.save();
    _tokenHolder.numeralIndex = _metaCount.count;
  }
  else{
    currentTokenBalance = _tokenHolder.tokenBalance;
    if(operator == '+'){
      currentTotalReceived = _tokenHolder.totalReceived; 
    }
    if(operator == '-'){
      currentTotalSent = _tokenHolder.totalSent; 
    }
  }

  let valueBigDecimal:BigDecimal = BigDecimal.fromString(value);
  let newTokenBalance:BigDecimal = BigDecimal.fromString("0"); 
  let newTotalSent:BigDecimal = BigDecimal.fromString("0"); 
  let newTotalReceived:BigDecimal = BigDecimal.fromString("0"); 

  if(operator == '+'){
    newTokenBalance = currentTokenBalance + valueBigDecimal; 
    newTotalReceived = currentTotalReceived + valueBigDecimal; 
    _tokenHolder.totalReceived = newTotalReceived;
  }
  if(operator == '-'){
    newTokenBalance = currentTokenBalance - valueBigDecimal; 
    newTotalSent = currentTotalSent + valueBigDecimal;
    _tokenHolder.totalSent = newTotalSent;
  }
  _tokenHolder.lastModifiedDay = currentDay;
  _tokenHolder.lastModifiedTimeStamp = eventTimestamp;
  _tokenHolder.holderAddress = address;
  _tokenHolder.tokenBalance = newTokenBalance;
  
  _tokenHolder.save(); 
}