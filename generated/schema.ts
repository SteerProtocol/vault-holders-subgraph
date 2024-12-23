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

export class Account extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Account must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Account", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Account | null {
    return changetype<Account | null>(store.get("Account", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get asERC20(): Bytes | null {
    let value = this.get("asERC20");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set asERC20(value: Bytes | null) {
    if (!value) {
      this.unset("asERC20");
    } else {
      this.set("asERC20", Value.fromBytes(<Bytes>value));
    }
  }

  get ERC20balances(): Array<string> {
    let value = this.get("ERC20balances");
    return value!.toStringArray();
  }

  set ERC20balances(value: Array<string>) {
    this.set("ERC20balances", Value.fromStringArray(value));
  }

  get ERC20approvalsOwner(): Array<string> {
    let value = this.get("ERC20approvalsOwner");
    return value!.toStringArray();
  }

  set ERC20approvalsOwner(value: Array<string>) {
    this.set("ERC20approvalsOwner", Value.fromStringArray(value));
  }

  get ERC20approvalsSpender(): Array<string> {
    let value = this.get("ERC20approvalsSpender");
    return value!.toStringArray();
  }

  set ERC20approvalsSpender(value: Array<string>) {
    this.set("ERC20approvalsSpender", Value.fromStringArray(value));
  }

  get ERC20transferFromEvent(): Array<string> {
    let value = this.get("ERC20transferFromEvent");
    return value!.toStringArray();
  }

  set ERC20transferFromEvent(value: Array<string>) {
    this.set("ERC20transferFromEvent", Value.fromStringArray(value));
  }

  get ERC20transferToEvent(): Array<string> {
    let value = this.get("ERC20transferToEvent");
    return value!.toStringArray();
  }

  set ERC20transferToEvent(value: Array<string>) {
    this.set("ERC20transferToEvent", Value.fromStringArray(value));
  }

  get events(): Array<string> {
    let value = this.get("events");
    return value!.toStringArray();
  }

  set events(value: Array<string>) {
    this.set("events", Value.fromStringArray(value));
  }
}

export class ERC20Contract extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));

    this.set("asAccount", Value.fromBytes(Bytes.empty()));
    this.set("decimals", Value.fromI32(0));
    this.set("totalSupply", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC20Contract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type ERC20Contract must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC20Contract", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): ERC20Contract | null {
    return changetype<ERC20Contract | null>(
      store.get("ERC20Contract", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get asAccount(): Bytes {
    let value = this.get("asAccount");
    return value!.toBytes();
  }

  set asAccount(value: Bytes) {
    this.set("asAccount", Value.fromBytes(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (!value) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(<string>value));
    }
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    return value!.toI32();
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }

  get totalSupply(): string {
    let value = this.get("totalSupply");
    return value!.toString();
  }

  set totalSupply(value: string) {
    this.set("totalSupply", Value.fromString(value));
  }

  get balances(): Array<string> {
    let value = this.get("balances");
    return value!.toStringArray();
  }

  set balances(value: Array<string>) {
    this.set("balances", Value.fromStringArray(value));
  }

  get approvals(): Array<string> {
    let value = this.get("approvals");
    return value!.toStringArray();
  }

  set approvals(value: Array<string>) {
    this.set("approvals", Value.fromStringArray(value));
  }

  get transfers(): Array<string> {
    let value = this.get("transfers");
    return value!.toStringArray();
  }

  set transfers(value: Array<string>) {
    this.set("transfers", Value.fromStringArray(value));
  }
}

export class ERC20Balance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("contract", Value.fromBytes(Bytes.empty()));
    this.set("value", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("valueExact", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC20Balance entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC20Balance must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC20Balance", id.toString(), this);
    }
  }

  static load(id: string): ERC20Balance | null {
    return changetype<ERC20Balance | null>(store.get("ERC20Balance", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }

  get account(): Bytes | null {
    let value = this.get("account");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set account(value: Bytes | null) {
    if (!value) {
      this.unset("account");
    } else {
      this.set("account", Value.fromBytes(<Bytes>value));
    }
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }

  get valueExact(): BigInt {
    let value = this.get("valueExact");
    return value!.toBigInt();
  }

  set valueExact(value: BigInt) {
    this.set("valueExact", Value.fromBigInt(value));
  }

  get transferFromEvent(): Array<string> {
    let value = this.get("transferFromEvent");
    return value!.toStringArray();
  }

  set transferFromEvent(value: Array<string>) {
    this.set("transferFromEvent", Value.fromStringArray(value));
  }

  get transferToEvent(): Array<string> {
    let value = this.get("transferToEvent");
    return value!.toStringArray();
  }

  set transferToEvent(value: Array<string>) {
    this.set("transferToEvent", Value.fromStringArray(value));
  }
}

export class ERC20Approval extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("contract", Value.fromBytes(Bytes.empty()));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("spender", Value.fromBytes(Bytes.empty()));
    this.set("value", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("valueExact", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC20Approval entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC20Approval must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC20Approval", id.toString(), this);
    }
  }

  static load(id: string): ERC20Approval | null {
    return changetype<ERC20Approval | null>(store.get("ERC20Approval", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get spender(): Bytes {
    let value = this.get("spender");
    return value!.toBytes();
  }

  set spender(value: Bytes) {
    this.set("spender", Value.fromBytes(value));
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }

  get valueExact(): BigInt {
    let value = this.get("valueExact");
    return value!.toBigInt();
  }

  set valueExact(value: BigInt) {
    this.set("valueExact", Value.fromBigInt(value));
  }
}

export class ERC20Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("emitter", Value.fromBytes(Bytes.empty()));
    this.set("transaction", Value.fromString(""));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("contract", Value.fromBytes(Bytes.empty()));
    this.set("value", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("valueExact", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC20Transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC20Transfer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC20Transfer", id.toString(), this);
    }
  }

  static load(id: string): ERC20Transfer | null {
    return changetype<ERC20Transfer | null>(store.get("ERC20Transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get emitter(): Bytes {
    let value = this.get("emitter");
    return value!.toBytes();
  }

  set emitter(value: Bytes) {
    this.set("emitter", Value.fromBytes(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }

  get from(): Bytes | null {
    let value = this.get("from");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set from(value: Bytes | null) {
    if (!value) {
      this.unset("from");
    } else {
      this.set("from", Value.fromBytes(<Bytes>value));
    }
  }

  get fromBalance(): string | null {
    let value = this.get("fromBalance");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set fromBalance(value: string | null) {
    if (!value) {
      this.unset("fromBalance");
    } else {
      this.set("fromBalance", Value.fromString(<string>value));
    }
  }

  get to(): Bytes | null {
    let value = this.get("to");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set to(value: Bytes | null) {
    if (!value) {
      this.unset("to");
    } else {
      this.set("to", Value.fromBytes(<Bytes>value));
    }
  }

  get toBalance(): string | null {
    let value = this.get("toBalance");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set toBalance(value: string | null) {
    if (!value) {
      this.unset("toBalance");
    } else {
      this.set("toBalance", Value.fromString(<string>value));
    }
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }

  get valueExact(): BigInt {
    let value = this.get("valueExact");
    return value!.toBigInt();
  }

  set valueExact(value: BigInt) {
    this.set("valueExact", Value.fromBigInt(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transaction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Transaction must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Transaction", id.toString(), this);
    }
  }

  static load(id: string): Transaction | null {
    return changetype<Transaction | null>(store.get("Transaction", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get events(): Array<string> {
    let value = this.get("events");
    return value!.toStringArray();
  }

  set events(value: Array<string>) {
    this.set("events", Value.fromStringArray(value));
  }
}
