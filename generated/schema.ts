// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class _GlobalInfo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save _GlobalInfo entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type _GlobalInfo must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("_GlobalInfo", id.toString(), this);
    }
  }

  static load(id: string): _GlobalInfo | null {
    return changetype<_GlobalInfo | null>(store.get("_GlobalInfo", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value!.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get numberOfClaims(): BigInt {
    let value = this.get("numberOfClaims");
    return value!.toBigInt();
  }

  set numberOfClaims(value: BigInt) {
    this.set("numberOfClaims", Value.fromBigInt(value));
  }

  get plsdDay(): BigInt {
    let value = this.get("plsdDay");
    return value!.toBigInt();
  }

  set plsdDay(value: BigInt) {
    this.set("plsdDay", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blocknumber(): BigInt {
    let value = this.get("blocknumber");
    return value!.toBigInt();
  }

  set blocknumber(value: BigInt) {
    this.set("blocknumber", Value.fromBigInt(value));
  }

  get globalInfoCount(): BigDecimal {
    let value = this.get("globalInfoCount");
    return value!.toBigDecimal();
  }

  set globalInfoCount(value: BigDecimal) {
    this.set("globalInfoCount", Value.fromBigDecimal(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class _Claim extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save _Claim entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type _Claim must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("_Claim", id.toString(), this);
    }
  }

  static load(id: string): _Claim | null {
    return changetype<_Claim | null>(store.get("_Claim", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get plsdDay(): BigInt {
    let value = this.get("plsdDay");
    return value!.toBigInt();
  }

  set plsdDay(value: BigInt) {
    this.set("plsdDay", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class _Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save _Transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type _Transfer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("_Transfer", id.toString(), this);
    }
  }

  static load(id: string): _Transfer | null {
    return changetype<_Transfer | null>(store.get("_Transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get plsdDay(): BigInt {
    let value = this.get("plsdDay");
    return value!.toBigInt();
  }

  set plsdDay(value: BigInt) {
    this.set("plsdDay", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get numeralIndex(): BigInt {
    let value = this.get("numeralIndex");
    return value!.toBigInt();
  }

  set numeralIndex(value: BigInt) {
    this.set("numeralIndex", Value.fromBigInt(value));
  }

  get gasLimit(): BigInt {
    let value = this.get("gasLimit");
    return value!.toBigInt();
  }

  set gasLimit(value: BigInt) {
    this.set("gasLimit", Value.fromBigInt(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value!.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get input(): string {
    let value = this.get("input");
    return value!.toString();
  }

  set input(value: string) {
    this.set("input", Value.fromString(value));
  }

  get methodId(): string | null {
    let value = this.get("methodId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set methodId(value: string | null) {
    if (!value) {
      this.unset("methodId");
    } else {
      this.set("methodId", Value.fromString(<string>value));
    }
  }
}

export class _TokenHolder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save _TokenHolder entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type _TokenHolder must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("_TokenHolder", id.toString(), this);
    }
  }

  static load(id: string): _TokenHolder | null {
    return changetype<_TokenHolder | null>(store.get("_TokenHolder", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get numeralIndex(): BigInt {
    let value = this.get("numeralIndex");
    return value!.toBigInt();
  }

  set numeralIndex(value: BigInt) {
    this.set("numeralIndex", Value.fromBigInt(value));
  }

  get holderAddress(): Bytes {
    let value = this.get("holderAddress");
    return value!.toBytes();
  }

  set holderAddress(value: Bytes) {
    this.set("holderAddress", Value.fromBytes(value));
  }

  get totalSent(): BigDecimal {
    let value = this.get("totalSent");
    return value!.toBigDecimal();
  }

  set totalSent(value: BigDecimal) {
    this.set("totalSent", Value.fromBigDecimal(value));
  }

  get totalReceived(): BigDecimal {
    let value = this.get("totalReceived");
    return value!.toBigDecimal();
  }

  set totalReceived(value: BigDecimal) {
    this.set("totalReceived", Value.fromBigDecimal(value));
  }

  get tokenBalance(): BigDecimal {
    let value = this.get("tokenBalance");
    return value!.toBigDecimal();
  }

  set tokenBalance(value: BigDecimal) {
    this.set("tokenBalance", Value.fromBigDecimal(value));
  }

  get createdTimeStamp(): BigInt {
    let value = this.get("createdTimeStamp");
    return value!.toBigInt();
  }

  set createdTimeStamp(value: BigInt) {
    this.set("createdTimeStamp", Value.fromBigInt(value));
  }

  get createdBlocknumber(): BigInt {
    let value = this.get("createdBlocknumber");
    return value!.toBigInt();
  }

  set createdBlocknumber(value: BigInt) {
    this.set("createdBlocknumber", Value.fromBigInt(value));
  }

  get createdDay(): BigInt {
    let value = this.get("createdDay");
    return value!.toBigInt();
  }

  set createdDay(value: BigInt) {
    this.set("createdDay", Value.fromBigInt(value));
  }

  get lastModifiedDay(): BigInt {
    let value = this.get("lastModifiedDay");
    return value!.toBigInt();
  }

  set lastModifiedDay(value: BigInt) {
    this.set("lastModifiedDay", Value.fromBigInt(value));
  }

  get lastModifiedTimeStamp(): BigInt {
    let value = this.get("lastModifiedTimeStamp");
    return value!.toBigInt();
  }

  set lastModifiedTimeStamp(value: BigInt) {
    this.set("lastModifiedTimeStamp", Value.fromBigInt(value));
  }
}

export class _MetaCounts extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save _MetaCounts entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type _MetaCounts must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("_MetaCounts", id.toString(), this);
    }
  }

  static load(id: string): _MetaCounts | null {
    return changetype<_MetaCounts | null>(store.get("_MetaCounts", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }
}
