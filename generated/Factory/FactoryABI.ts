// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class BeaconConfigUpdated extends ethereum.Event {
  get params(): BeaconConfigUpdated__Params {
    return new BeaconConfigUpdated__Params(this);
  }
}

export class BeaconConfigUpdated__Params {
  _event: BeaconConfigUpdated;

  constructor(event: BeaconConfigUpdated) {
    this._event = event;
  }

  get _name(): string {
    return this._event.parameters[0].value.toString();
  }

  get _ipfsHash(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class BeaconDeregistered extends ethereum.Event {
  get params(): BeaconDeregistered__Params {
    return new BeaconDeregistered__Params(this);
  }
}

export class BeaconDeregistered__Params {
  _event: BeaconDeregistered;

  constructor(event: BeaconDeregistered) {
    this._event = event;
  }

  get _name(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class BeaconRegistered extends ethereum.Event {
  get params(): BeaconRegistered__Params {
    return new BeaconRegistered__Params(this);
  }
}

export class BeaconRegistered__Params {
  _event: BeaconRegistered;

  constructor(event: BeaconRegistered) {
    this._event = event;
  }

  get _name(): string {
    return this._event.parameters[0].value.toString();
  }

  get _address(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _ipfsHash(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class BeaconUpgraded extends ethereum.Event {
  get params(): BeaconUpgraded__Params {
    return new BeaconUpgraded__Params(this);
  }
}

export class BeaconUpgraded__Params {
  _event: BeaconUpgraded;

  constructor(event: BeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class VaultCreated extends ethereum.Event {
  get params(): VaultCreated__Params {
    return new VaultCreated__Params(this);
  }
}

export class VaultCreated__Params {
  _event: VaultCreated;

  constructor(event: VaultCreated) {
    this._event = event;
  }

  get deployer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get vault(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get beaconName(): string {
    return this._event.parameters[2].value.toString();
  }

  get tokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get vaultManager(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class VaultStateChanged extends ethereum.Event {
  get params(): VaultStateChanged__Params {
    return new VaultStateChanged__Params(this);
  }
}

export class VaultStateChanged__Params {
  _event: VaultStateChanged;

  constructor(event: VaultStateChanged) {
    this._event = event;
  }

  get vault(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newState(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class FactoryABI__getVaultByStrategyAndIndexResultValue0Struct extends ethereum.Tuple {
  get state(): i32 {
    return this[0].toI32();
  }

  get tokenId(): BigInt {
    return this[1].toBigInt();
  }

  get vaultID(): BigInt {
    return this[2].toBigInt();
  }

  get payloadIpfs(): string {
    return this[3].toString();
  }

  get vaultAddress(): Address {
    return this[4].toAddress();
  }

  get beaconName(): string {
    return this[5].toString();
  }
}

export class FactoryABI__getVaultDetailsResultValue0Struct extends ethereum.Tuple {
  get state(): i32 {
    return this[0].toI32();
  }

  get tokenId(): BigInt {
    return this[1].toBigInt();
  }

  get vaultID(): BigInt {
    return this[2].toBigInt();
  }

  get payloadIpfs(): string {
    return this[3].toString();
  }

  get vaultAddress(): Address {
    return this[4].toAddress();
  }

  get beaconName(): string {
    return this[5].toString();
  }
}

export class FactoryABI extends ethereum.SmartContract {
  static bind(address: Address): FactoryABI {
    return new FactoryABI("FactoryABI", address);
  }

  admin(): Address {
    let result = super.call("admin", "admin():(address)", []);

    return result[0].toAddress();
  }

  try_admin(): ethereum.CallResult<Address> {
    let result = super.tryCall("admin", "admin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  implementation(): Address {
    let result = super.call("implementation", "implementation():(address)", []);

    return result[0].toAddress();
  }

  try_implementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "implementation",
      "implementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  beaconAddresses(param0: string): Address {
    let result = super.call(
      "beaconAddresses",
      "beaconAddresses(string):(address)",
      [ethereum.Value.fromString(param0)]
    );

    return result[0].toAddress();
  }

  try_beaconAddresses(param0: string): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "beaconAddresses",
      "beaconAddresses(string):(address)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  beaconTypes(param0: Address): string {
    let result = super.call("beaconTypes", "beaconTypes(address):(string)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toString();
  }

  try_beaconTypes(param0: Address): ethereum.CallResult<string> {
    let result = super.tryCall("beaconTypes", "beaconTypes(address):(string)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  createVault(
    _params: Bytes,
    _tokenId: BigInt,
    _beaconName: string,
    _vaultManager: Address,
    _payloadIpfs: string
  ): Address {
    let result = super.call(
      "createVault",
      "createVault(bytes,uint256,string,address,string):(address)",
      [
        ethereum.Value.fromBytes(_params),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromString(_beaconName),
        ethereum.Value.fromAddress(_vaultManager),
        ethereum.Value.fromString(_payloadIpfs)
      ]
    );

    return result[0].toAddress();
  }

  try_createVault(
    _params: Bytes,
    _tokenId: BigInt,
    _beaconName: string,
    _vaultManager: Address,
    _payloadIpfs: string
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createVault",
      "createVault(bytes,uint256,string,address,string):(address)",
      [
        ethereum.Value.fromBytes(_params),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromString(_beaconName),
        ethereum.Value.fromAddress(_vaultManager),
        ethereum.Value.fromString(_payloadIpfs)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deployAndRegisterBeacon(
    _address: Address,
    _name: string,
    _ipfsConfigForBeacon: string
  ): Address {
    let result = super.call(
      "deployAndRegisterBeacon",
      "deployAndRegisterBeacon(address,string,string):(address)",
      [
        ethereum.Value.fromAddress(_address),
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_ipfsConfigForBeacon)
      ]
    );

    return result[0].toAddress();
  }

  try_deployAndRegisterBeacon(
    _address: Address,
    _name: string,
    _ipfsConfigForBeacon: string
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployAndRegisterBeacon",
      "deployAndRegisterBeacon(address,string,string):(address)",
      [
        ethereum.Value.fromAddress(_address),
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_ipfsConfigForBeacon)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  doISupportInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "doISupportInterface",
      "doISupportInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_doISupportInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "doISupportInterface",
      "doISupportInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getStrategyCreatorForVault(_vault: Address): Address {
    let result = super.call(
      "getStrategyCreatorForVault",
      "getStrategyCreatorForVault(address):(address)",
      [ethereum.Value.fromAddress(_vault)]
    );

    return result[0].toAddress();
  }

  try_getStrategyCreatorForVault(
    _vault: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getStrategyCreatorForVault",
      "getStrategyCreatorForVault(address):(address)",
      [ethereum.Value.fromAddress(_vault)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getVaultByStrategyAndIndex(
    _tokenId: BigInt,
    _vaultId: BigInt
  ): FactoryABI__getVaultByStrategyAndIndexResultValue0Struct {
    let result = super.call(
      "getVaultByStrategyAndIndex",
      "getVaultByStrategyAndIndex(uint256,uint256):((uint8,uint256,uint256,string,address,string))",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_vaultId)
      ]
    );

    return changetype<FactoryABI__getVaultByStrategyAndIndexResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getVaultByStrategyAndIndex(
    _tokenId: BigInt,
    _vaultId: BigInt
  ): ethereum.CallResult<
    FactoryABI__getVaultByStrategyAndIndexResultValue0Struct
  > {
    let result = super.tryCall(
      "getVaultByStrategyAndIndex",
      "getVaultByStrategyAndIndex(uint256,uint256):((uint8,uint256,uint256,string,address,string))",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_vaultId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<FactoryABI__getVaultByStrategyAndIndexResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getVaultCountByStrategyId(_tokenId: BigInt): BigInt {
    let result = super.call(
      "getVaultCountByStrategyId",
      "getVaultCountByStrategyId(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );

    return result[0].toBigInt();
  }

  try_getVaultCountByStrategyId(_tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getVaultCountByStrategyId",
      "getVaultCountByStrategyId(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getVaultDetails(
    _address: Address
  ): FactoryABI__getVaultDetailsResultValue0Struct {
    let result = super.call(
      "getVaultDetails",
      "getVaultDetails(address):((uint8,uint256,uint256,string,address,string))",
      [ethereum.Value.fromAddress(_address)]
    );

    return changetype<FactoryABI__getVaultDetailsResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getVaultDetails(
    _address: Address
  ): ethereum.CallResult<FactoryABI__getVaultDetailsResultValue0Struct> {
    let result = super.tryCall(
      "getVaultDetails",
      "getVaultDetails(address):((uint8,uint256,uint256,string,address,string))",
      [ethereum.Value.fromAddress(_address)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<FactoryABI__getVaultDetailsResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  interfaceImplementations(param0: string, param1: Bytes): boolean {
    let result = super.call(
      "interfaceImplementations",
      "interfaceImplementations(string,bytes4):(bool)",
      [ethereum.Value.fromString(param0), ethereum.Value.fromFixedBytes(param1)]
    );

    return result[0].toBoolean();
  }

  try_interfaceImplementations(
    param0: string,
    param1: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "interfaceImplementations",
      "interfaceImplementations(string,bytes4):(bool)",
      [ethereum.Value.fromString(param0), ethereum.Value.fromFixedBytes(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  linkedVaults(param0: BigInt, param1: BigInt): Address {
    let result = super.call(
      "linkedVaults",
      "linkedVaults(uint256,uint256):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toAddress();
  }

  try_linkedVaults(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "linkedVaults",
      "linkedVaults(uint256,uint256):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  orchestrator(): Address {
    let result = super.call("orchestrator", "orchestrator():(address)", []);

    return result[0].toAddress();
  }

  try_orchestrator(): ethereum.CallResult<Address> {
    let result = super.tryCall("orchestrator", "orchestrator():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  strategyRegistry(): Address {
    let result = super.call(
      "strategyRegistry",
      "strategyRegistry():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_strategyRegistry(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "strategyRegistry",
      "strategyRegistry():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalVaultCount(): BigInt {
    let result = super.call(
      "totalVaultCount",
      "totalVaultCount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalVaultCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalVaultCount",
      "totalVaultCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  whitelistRegistry(): Address {
    let result = super.call(
      "whitelistRegistry",
      "whitelistRegistry():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_whitelistRegistry(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "whitelistRegistry",
      "whitelistRegistry():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class AdminCall extends ethereum.Call {
  get inputs(): AdminCall__Inputs {
    return new AdminCall__Inputs(this);
  }

  get outputs(): AdminCall__Outputs {
    return new AdminCall__Outputs(this);
  }
}

export class AdminCall__Inputs {
  _call: AdminCall;

  constructor(call: AdminCall) {
    this._call = call;
  }
}

export class AdminCall__Outputs {
  _call: AdminCall;

  constructor(call: AdminCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class ChangeAdminCall extends ethereum.Call {
  get inputs(): ChangeAdminCall__Inputs {
    return new ChangeAdminCall__Inputs(this);
  }

  get outputs(): ChangeAdminCall__Outputs {
    return new ChangeAdminCall__Outputs(this);
  }
}

export class ChangeAdminCall__Inputs {
  _call: ChangeAdminCall;

  constructor(call: ChangeAdminCall) {
    this._call = call;
  }

  get newAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeAdminCall__Outputs {
  _call: ChangeAdminCall;

  constructor(call: ChangeAdminCall) {
    this._call = call;
  }
}

export class ImplementationCall extends ethereum.Call {
  get inputs(): ImplementationCall__Inputs {
    return new ImplementationCall__Inputs(this);
  }

  get outputs(): ImplementationCall__Outputs {
    return new ImplementationCall__Outputs(this);
  }
}

export class ImplementationCall__Inputs {
  _call: ImplementationCall;

  constructor(call: ImplementationCall) {
    this._call = call;
  }
}

export class ImplementationCall__Outputs {
  _call: ImplementationCall;

  constructor(call: ImplementationCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}

export class CreateVaultCall extends ethereum.Call {
  get inputs(): CreateVaultCall__Inputs {
    return new CreateVaultCall__Inputs(this);
  }

  get outputs(): CreateVaultCall__Outputs {
    return new CreateVaultCall__Outputs(this);
  }
}

export class CreateVaultCall__Inputs {
  _call: CreateVaultCall;

  constructor(call: CreateVaultCall) {
    this._call = call;
  }

  get _params(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _beaconName(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _vaultManager(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _payloadIpfs(): string {
    return this._call.inputValues[4].value.toString();
  }
}

export class CreateVaultCall__Outputs {
  _call: CreateVaultCall;

  constructor(call: CreateVaultCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DeployAndRegisterBeaconCall extends ethereum.Call {
  get inputs(): DeployAndRegisterBeaconCall__Inputs {
    return new DeployAndRegisterBeaconCall__Inputs(this);
  }

  get outputs(): DeployAndRegisterBeaconCall__Outputs {
    return new DeployAndRegisterBeaconCall__Outputs(this);
  }
}

export class DeployAndRegisterBeaconCall__Inputs {
  _call: DeployAndRegisterBeaconCall;

  constructor(call: DeployAndRegisterBeaconCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _ipfsConfigForBeacon(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class DeployAndRegisterBeaconCall__Outputs {
  _call: DeployAndRegisterBeaconCall;

  constructor(call: DeployAndRegisterBeaconCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DeregisterBeaconCall extends ethereum.Call {
  get inputs(): DeregisterBeaconCall__Inputs {
    return new DeregisterBeaconCall__Inputs(this);
  }

  get outputs(): DeregisterBeaconCall__Outputs {
    return new DeregisterBeaconCall__Outputs(this);
  }
}

export class DeregisterBeaconCall__Inputs {
  _call: DeregisterBeaconCall;

  constructor(call: DeregisterBeaconCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class DeregisterBeaconCall__Outputs {
  _call: DeregisterBeaconCall;

  constructor(call: DeregisterBeaconCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _orchestrator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _strategyRegistry(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _whitelistRegistry(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class RegisterBeaconCall extends ethereum.Call {
  get inputs(): RegisterBeaconCall__Inputs {
    return new RegisterBeaconCall__Inputs(this);
  }

  get outputs(): RegisterBeaconCall__Outputs {
    return new RegisterBeaconCall__Outputs(this);
  }
}

export class RegisterBeaconCall__Inputs {
  _call: RegisterBeaconCall;

  constructor(call: RegisterBeaconCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _address(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _ipfsConfigForBeacon(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class RegisterBeaconCall__Outputs {
  _call: RegisterBeaconCall;

  constructor(call: RegisterBeaconCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UpdateBeaconConfigCall extends ethereum.Call {
  get inputs(): UpdateBeaconConfigCall__Inputs {
    return new UpdateBeaconConfigCall__Inputs(this);
  }

  get outputs(): UpdateBeaconConfigCall__Outputs {
    return new UpdateBeaconConfigCall__Outputs(this);
  }
}

export class UpdateBeaconConfigCall__Inputs {
  _call: UpdateBeaconConfigCall;

  constructor(call: UpdateBeaconConfigCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _newIPFSConfigForBeacon(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class UpdateBeaconConfigCall__Outputs {
  _call: UpdateBeaconConfigCall;

  constructor(call: UpdateBeaconConfigCall) {
    this._call = call;
  }
}

export class UpdateInterfaceImplementationsCall extends ethereum.Call {
  get inputs(): UpdateInterfaceImplementationsCall__Inputs {
    return new UpdateInterfaceImplementationsCall__Inputs(this);
  }

  get outputs(): UpdateInterfaceImplementationsCall__Outputs {
    return new UpdateInterfaceImplementationsCall__Outputs(this);
  }
}

export class UpdateInterfaceImplementationsCall__Inputs {
  _call: UpdateInterfaceImplementationsCall;

  constructor(call: UpdateInterfaceImplementationsCall) {
    this._call = call;
  }

  get beaconName(): string {
    return this._call.inputValues[0].value.toString();
  }

  get selectors(): Array<Bytes> {
    return this._call.inputValues[1].value.toBytesArray();
  }

  get isImplemented(): Array<boolean> {
    return this._call.inputValues[2].value.toBooleanArray();
  }
}

export class UpdateInterfaceImplementationsCall__Outputs {
  _call: UpdateInterfaceImplementationsCall;

  constructor(call: UpdateInterfaceImplementationsCall) {
    this._call = call;
  }
}

export class UpdateVaultStateCall extends ethereum.Call {
  get inputs(): UpdateVaultStateCall__Inputs {
    return new UpdateVaultStateCall__Inputs(this);
  }

  get outputs(): UpdateVaultStateCall__Outputs {
    return new UpdateVaultStateCall__Outputs(this);
  }
}

export class UpdateVaultStateCall__Inputs {
  _call: UpdateVaultStateCall;

  constructor(call: UpdateVaultStateCall) {
    this._call = call;
  }

  get _vault(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _newState(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class UpdateVaultStateCall__Outputs {
  _call: UpdateVaultStateCall;

  constructor(call: UpdateVaultStateCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get initialLogic(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get initialAdmin(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
