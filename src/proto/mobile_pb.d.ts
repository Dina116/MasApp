// package: mobile
// file: mobile.proto

import * as jspb from "google-protobuf";

export class PaymentDetail extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasCheqno(): boolean;
  clearCheqno(): void;
  getCheqno(): string | undefined;
  setCheqno(value: string): void;

  hasCheqbank(): boolean;
  clearCheqbank(): void;
  getCheqbank(): string | undefined;
  setCheqbank(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentDetail.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentDetail): PaymentDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentDetail;
  static deserializeBinaryFromReader(message: PaymentDetail, reader: jspb.BinaryReader): PaymentDetail;
}

export namespace PaymentDetail {
  export type AsObject = {
    id?: number,
    amount?: number,
    description?: string,
    cheqno?: string,
    cheqbank?: string,
  }
}

export class FEES_TRANSACTIONS extends jspb.Message {
  hasBillCustkey(): boolean;
  clearBillCustkey(): void;
  getBillCustkey(): string | undefined;
  setBillCustkey(value: string): void;

  hasCollectionId(): boolean;
  clearCollectionId(): void;
  getCollectionId(): number | undefined;
  setCollectionId(value: number): void;

  hasTransId(): boolean;
  clearTransId(): void;
  getTransId(): string | undefined;
  setTransId(value: string): void;

  hasTransactionDate(): boolean;
  clearTransactionDate(): void;
  getTransactionDate(): string | undefined;
  setTransactionDate(value: string): void;

  hasFeeAmount(): boolean;
  clearFeeAmount(): void;
  getFeeAmount(): number | undefined;
  setFeeAmount(value: number): void;

  hasTotalAmount(): boolean;
  clearTotalAmount(): void;
  getTotalAmount(): number | undefined;
  setTotalAmount(value: number): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FEES_TRANSACTIONS.AsObject;
  static toObject(includeInstance: boolean, msg: FEES_TRANSACTIONS): FEES_TRANSACTIONS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FEES_TRANSACTIONS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FEES_TRANSACTIONS;
  static deserializeBinaryFromReader(message: FEES_TRANSACTIONS, reader: jspb.BinaryReader): FEES_TRANSACTIONS;
}

export namespace FEES_TRANSACTIONS {
  export type AsObject = {
    billCustkey?: string,
    collectionId?: number,
    transId?: string,
    transactionDate?: string,
    feeAmount?: number,
    totalAmount?: number,
    paymentNo?: string,
  }
}

export class Bill_Collection extends jspb.Message {
  hasHhcollectionid(): boolean;
  clearHhcollectionid(): void;
  getHhcollectionid(): number | undefined;
  setHhcollectionid(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPaymentno(): boolean;
  clearPaymentno(): void;
  getPaymentno(): string | undefined;
  setPaymentno(value: string): void;

  hasAmountcollected(): boolean;
  clearAmountcollected(): void;
  getAmountcollected(): number | undefined;
  setAmountcollected(value: number): void;

  hasCollectbyid(): boolean;
  clearCollectbyid(): void;
  getCollectbyid(): number | undefined;
  setCollectbyid(value: number): void;

  hasCollectiondate(): boolean;
  clearCollectiondate(): void;
  getCollectiondate(): string | undefined;
  setCollectiondate(value: string): void;

  hasDiscount(): boolean;
  clearDiscount(): void;
  getDiscount(): number | undefined;
  setDiscount(value: number): void;

  hasDiscountdocumentno(): boolean;
  clearDiscountdocumentno(): void;
  getDiscountdocumentno(): string | undefined;
  setDiscountdocumentno(value: string): void;

  hasCollectionmethod(): boolean;
  clearCollectionmethod(): void;
  getCollectionmethod(): CollectionMethodMap[keyof CollectionMethodMap] | undefined;
  setCollectionmethod(value: CollectionMethodMap[keyof CollectionMethodMap]): void;

  hasCollectiontype(): boolean;
  clearCollectiontype(): void;
  getCollectiontype(): CollectionTypeMap[keyof CollectionTypeMap] | undefined;
  setCollectiontype(value: CollectionTypeMap[keyof CollectionTypeMap]): void;

  hasCheqno(): boolean;
  clearCheqno(): void;
  getCheqno(): string | undefined;
  setCheqno(value: string): void;

  hasCheqbank(): boolean;
  clearCheqbank(): void;
  getCheqbank(): string | undefined;
  setCheqbank(value: string): void;

  hasAccurecy(): boolean;
  clearAccurecy(): void;
  getAccurecy(): number | undefined;
  setAccurecy(value: number): void;

  hasLat(): boolean;
  clearLat(): void;
  getLat(): number | undefined;
  setLat(value: number): void;

  hasLng(): boolean;
  clearLng(): void;
  getLng(): number | undefined;
  setLng(value: number): void;

  hasEmpid(): boolean;
  clearEmpid(): void;
  getEmpid(): number | undefined;
  setEmpid(value: number): void;

  hasLock(): boolean;
  clearLock(): void;
  getLock(): boolean | undefined;
  setLock(value: boolean): void;

  hasNote(): boolean;
  clearNote(): void;
  getNote(): string | undefined;
  setNote(value: string): void;

  hasDocumentno(): boolean;
  clearDocumentno(): void;
  getDocumentno(): string | undefined;
  setDocumentno(value: string): void;

  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  hasSyncst(): boolean;
  clearSyncst(): void;
  getSyncst(): number | undefined;
  setSyncst(value: number): void;

  hasCollectionnote(): boolean;
  clearCollectionnote(): void;
  getCollectionnote(): number | undefined;
  setCollectionnote(value: number): void;

  hasReciptcharge1(): boolean;
  clearReciptcharge1(): void;
  getReciptcharge1(): number | undefined;
  setReciptcharge1(value: number): void;

  hasReciptcharge2(): boolean;
  clearReciptcharge2(): void;
  getReciptcharge2(): number | undefined;
  setReciptcharge2(value: number): void;

  hasReciptcharge3(): boolean;
  clearReciptcharge3(): void;
  getReciptcharge3(): number | undefined;
  setReciptcharge3(value: number): void;

  clearPaymentdetailsList(): void;
  getPaymentdetailsList(): Array<PaymentDetail>;
  setPaymentdetailsList(value: Array<PaymentDetail>): void;
  addPaymentdetails(value?: PaymentDetail, index?: number): PaymentDetail;

  hasPaymentmethod(): boolean;
  clearPaymentmethod(): void;
  getPaymentmethod(): number | undefined;
  setPaymentmethod(value: number): void;

  hasPrintpercntage(): boolean;
  clearPrintpercntage(): void;
  getPrintpercntage(): number | undefined;
  setPrintpercntage(value: number): void;

  hasIsretry(): boolean;
  clearIsretry(): void;
  getIsretry(): boolean | undefined;
  setIsretry(value: boolean): void;

  hasTransId(): boolean;
  clearTransId(): void;
  getTransId(): string | undefined;
  setTransId(value: string): void;

  hasIsFawryPos(): boolean;
  clearIsFawryPos(): void;
  getIsFawryPos(): boolean | undefined;
  setIsFawryPos(value: boolean): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  hasFawryReference(): boolean;
  clearFawryReference(): void;
  getFawryReference(): string | undefined;
  setFawryReference(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bill_Collection.AsObject;
  static toObject(includeInstance: boolean, msg: Bill_Collection): Bill_Collection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bill_Collection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bill_Collection;
  static deserializeBinaryFromReader(message: Bill_Collection, reader: jspb.BinaryReader): Bill_Collection;
}

export namespace Bill_Collection {
  export type AsObject = {
    hhcollectionid?: number,
    custkey?: string,
    paymentno?: string,
    amountcollected?: number,
    collectbyid?: number,
    collectiondate?: string,
    discount?: number,
    discountdocumentno?: string,
    collectionmethod?: CollectionMethodMap[keyof CollectionMethodMap],
    collectiontype?: CollectionTypeMap[keyof CollectionTypeMap],
    cheqno?: string,
    cheqbank?: string,
    accurecy?: number,
    lat?: number,
    lng?: number,
    empid?: number,
    lock?: boolean,
    note?: string,
    documentno?: string,
    deviceid?: string,
    syncst?: number,
    collectionnote?: number,
    reciptcharge1?: number,
    reciptcharge2?: number,
    reciptcharge3?: number,
    paymentdetailsList: Array<PaymentDetail.AsObject>,
    paymentmethod?: number,
    printpercntage?: number,
    isretry?: boolean,
    transId?: string,
    isFawryPos?: boolean,
    cycleId?: number,
    fawryReference?: string,
  }
}

export class MeterImage extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): void;

  hasExt(): boolean;
  clearExt(): void;
  getExt(): string | undefined;
  setExt(value: string): void;

  hasMeterRef(): boolean;
  clearMeterRef(): void;
  getMeterRef(): string | undefined;
  setMeterRef(value: string): void;

  hasLat(): boolean;
  clearLat(): void;
  getLat(): number | undefined;
  setLat(value: number): void;

  hasLng(): boolean;
  clearLng(): void;
  getLng(): number | undefined;
  setLng(value: number): void;

  hasIsFormGallery(): boolean;
  clearIsFormGallery(): void;
  getIsFormGallery(): boolean | undefined;
  setIsFormGallery(value: boolean): void;

  hasCompressionAlgorithm(): boolean;
  clearCompressionAlgorithm(): void;
  getCompressionAlgorithm(): string | undefined;
  setCompressionAlgorithm(value: string): void;

  hasIsCompressed(): boolean;
  clearIsCompressed(): void;
  getIsCompressed(): boolean | undefined;
  setIsCompressed(value: boolean): void;

  hasWidth(): boolean;
  clearWidth(): void;
  getWidth(): number | undefined;
  setWidth(value: number): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): number | undefined;
  setHeight(value: number): void;

  hasIsretry(): boolean;
  clearIsretry(): void;
  getIsretry(): boolean | undefined;
  setIsretry(value: boolean): void;

  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookNo(): boolean;
  clearBookNo(): void;
  getBookNo(): string | undefined;
  setBookNo(value: string): void;

  hasWalkNo(): boolean;
  clearWalkNo(): void;
  getWalkNo(): string | undefined;
  setWalkNo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeterImage.AsObject;
  static toObject(includeInstance: boolean, msg: MeterImage): MeterImage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeterImage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeterImage;
  static deserializeBinaryFromReader(message: MeterImage, reader: jspb.BinaryReader): MeterImage;
}

export namespace MeterImage {
  export type AsObject = {
    custkey?: string,
    cycleId?: number,
    image: Uint8Array | string,
    ext?: string,
    meterRef?: string,
    lat?: number,
    lng?: number,
    isFormGallery?: boolean,
    compressionAlgorithm?: string,
    isCompressed?: boolean,
    width?: number,
    height?: number,
    isretry?: boolean,
    stationNo?: number,
    billgroup?: string,
    bookNo?: string,
    walkNo?: string,
  }
}

export class CustReading extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasMeterRef(): boolean;
  clearMeterRef(): void;
  getMeterRef(): string | undefined;
  setMeterRef(value: string): void;

  hasMeterType(): boolean;
  clearMeterType(): void;
  getMeterType(): string | undefined;
  setMeterType(value: string): void;

  hasReadingNote(): boolean;
  clearReadingNote(): void;
  getReadingNote(): number | undefined;
  setReadingNote(value: number): void;

  hasCrReading(): boolean;
  clearCrReading(): void;
  getCrReading(): number | undefined;
  setCrReading(value: number): void;

  hasReadingDate(): boolean;
  clearReadingDate(): void;
  getReadingDate(): string | undefined;
  setReadingDate(value: string): void;

  hasLat(): boolean;
  clearLat(): void;
  getLat(): number | undefined;
  setLat(value: number): void;

  hasLng(): boolean;
  clearLng(): void;
  getLng(): number | undefined;
  setLng(value: number): void;

  hasAccurecy(): boolean;
  clearAccurecy(): void;
  getAccurecy(): number | undefined;
  setAccurecy(value: number): void;

  hasGpsSource(): boolean;
  clearGpsSource(): void;
  getGpsSource(): string | undefined;
  setGpsSource(value: string): void;

  hasIsRef(): boolean;
  clearIsRef(): void;
  getIsRef(): boolean | undefined;
  setIsRef(value: boolean): void;

  hasNfcTag(): boolean;
  clearNfcTag(): void;
  getNfcTag(): string | undefined;
  setNfcTag(value: string): void;

  hasIsretry(): boolean;
  clearIsretry(): void;
  getIsretry(): boolean | undefined;
  setIsretry(value: boolean): void;

  hasMetarNote(): boolean;
  clearMetarNote(): void;
  getMetarNote(): string | undefined;
  setMetarNote(value: string): void;

  hasReadingDesc(): boolean;
  clearReadingDesc(): void;
  getReadingDesc(): string | undefined;
  setReadingDesc(value: string): void;

  hasCustNid(): boolean;
  clearCustNid(): void;
  getCustNid(): number | undefined;
  setCustNid(value: number): void;

  hasPenefitialyNid(): boolean;
  clearPenefitialyNid(): void;
  getPenefitialyNid(): number | undefined;
  setPenefitialyNid(value: number): void;

  hasPenefitialyName(): boolean;
  clearPenefitialyName(): void;
  getPenefitialyName(): string | undefined;
  setPenefitialyName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustReading.AsObject;
  static toObject(includeInstance: boolean, msg: CustReading): CustReading.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustReading, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustReading;
  static deserializeBinaryFromReader(message: CustReading, reader: jspb.BinaryReader): CustReading;
}

export namespace CustReading {
  export type AsObject = {
    custkey?: string,
    cycleId?: number,
    stationNo?: number,
    propRef?: string,
    meterRef?: string,
    meterType?: string,
    readingNote?: number,
    crReading?: number,
    readingDate?: string,
    lat?: number,
    lng?: number,
    accurecy?: number,
    gpsSource?: string,
    isRef?: boolean,
    nfcTag?: string,
    isretry?: boolean,
    metarNote?: string,
    readingDesc?: string,
    custNid?: number,
    penefitialyNid?: number,
    penefitialyName?: string,
  }
}

export class BalanceDetail extends jspb.Message {
  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  hasOrgPaymentNo(): boolean;
  clearOrgPaymentNo(): void;
  getOrgPaymentNo(): string | undefined;
  setOrgPaymentNo(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): string | undefined;
  setBilngDate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceDetail.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceDetail): BalanceDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BalanceDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalanceDetail;
  static deserializeBinaryFromReader(message: BalanceDetail, reader: jspb.BinaryReader): BalanceDetail;
}

export namespace BalanceDetail {
  export type AsObject = {
    amount?: number,
    orgPaymentNo?: string,
    description?: string,
    cycleId?: number,
    custkey?: string,
    bilngDate?: string,
  }
}

export class CtypeDtl extends jspb.Message {
  hasBillCustkey(): boolean;
  clearBillCustkey(): void;
  getBillCustkey(): string | undefined;
  setBillCustkey(value: string): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasCtype(): boolean;
  clearCtype(): void;
  getCtype(): string | undefined;
  setCtype(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  hasWateramount(): boolean;
  clearWateramount(): void;
  getWateramount(): number | undefined;
  setWateramount(value: number): void;

  hasSeweramount(): boolean;
  clearSeweramount(): void;
  getSeweramount(): number | undefined;
  setSeweramount(value: number): void;

  hasOtheramount(): boolean;
  clearOtheramount(): void;
  getOtheramount(): number | undefined;
  setOtheramount(value: number): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasCtypegroupid(): boolean;
  clearCtypegroupid(): void;
  getCtypegroupid(): string | undefined;
  setCtypegroupid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CtypeDtl.AsObject;
  static toObject(includeInstance: boolean, msg: CtypeDtl): CtypeDtl.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CtypeDtl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CtypeDtl;
  static deserializeBinaryFromReader(message: CtypeDtl, reader: jspb.BinaryReader): CtypeDtl;
}

export namespace CtypeDtl {
  export type AsObject = {
    billCustkey?: string,
    paymentNo?: string,
    ctype?: string,
    amount?: number,
    wateramount?: number,
    seweramount?: number,
    otheramount?: number,
    description?: string,
    ctypegroupid?: string,
  }
}

export class Customer extends jspb.Message {
  hasBillCustkey(): boolean;
  clearBillCustkey(): void;
  getBillCustkey(): string | undefined;
  setBillCustkey(value: string): void;

  hasTentName(): boolean;
  clearTentName(): void;
  getTentName(): string | undefined;
  setTentName(value: string): void;

  hasMeterType(): boolean;
  clearMeterType(): void;
  getMeterType(): string | undefined;
  setMeterType(value: string): void;

  hasMeterRef(): boolean;
  clearMeterRef(): void;
  getMeterRef(): string | undefined;
  setMeterRef(value: string): void;

  hasUaAdress1(): boolean;
  clearUaAdress1(): void;
  getUaAdress1(): string | undefined;
  setUaAdress1(value: string): void;

  hasUaAdress2(): boolean;
  clearUaAdress2(): void;
  getUaAdress2(): string | undefined;
  setUaAdress2(value: string): void;

  hasUaAdress3(): boolean;
  clearUaAdress3(): void;
  getUaAdress3(): string | undefined;
  setUaAdress3(value: string): void;

  hasUaAdress4(): boolean;
  clearUaAdress4(): void;
  getUaAdress4(): string | undefined;
  setUaAdress4(value: string): void;

  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasDeviceId(): boolean;
  clearDeviceId(): void;
  getDeviceId(): string | undefined;
  setDeviceId(value: string): void;

  hasSeqNo(): boolean;
  clearSeqNo(): void;
  getSeqNo(): number | undefined;
  setSeqNo(value: number): void;

  hasCType(): boolean;
  clearCType(): void;
  getCType(): string | undefined;
  setCType(value: string): void;

  hasCtypegrpId(): boolean;
  clearCtypegrpId(): void;
  getCtypegrpId(): string | undefined;
  setCtypegrpId(value: string): void;

  hasNoUnits(): boolean;
  clearNoUnits(): void;
  getNoUnits(): number | undefined;
  setNoUnits(value: number): void;

  hasOldKey(): boolean;
  clearOldKey(): void;
  getOldKey(): string | undefined;
  setOldKey(value: string): void;

  hasServAloc(): boolean;
  clearServAloc(): void;
  getServAloc(): string | undefined;
  setServAloc(value: string): void;

  hasSrccycleid(): boolean;
  clearSrccycleid(): void;
  getSrccycleid(): number | undefined;
  setSrccycleid(value: number): void;

  hasLatRef(): boolean;
  clearLatRef(): void;
  getLatRef(): number | undefined;
  setLatRef(value: number): void;

  hasLngRef(): boolean;
  clearLngRef(): void;
  getLngRef(): number | undefined;
  setLngRef(value: number): void;

  hasNfcTag(): boolean;
  clearNfcTag(): void;
  getNfcTag(): string | undefined;
  setNfcTag(value: string): void;

  hasMinchargeamount(): boolean;
  clearMinchargeamount(): void;
  getMinchargeamount(): number | undefined;
  setMinchargeamount(value: number): void;

  hasMinchargecount(): boolean;
  clearMinchargecount(): void;
  getMinchargecount(): number | undefined;
  setMinchargecount(value: number): void;

  hasMinchargeop(): boolean;
  clearMinchargeop(): void;
  getMinchargeop(): MIN_CHARGE_OPMap[keyof MIN_CHARGE_OPMap] | undefined;
  setMinchargeop(value: MIN_CHARGE_OPMap[keyof MIN_CHARGE_OPMap]): void;

  hasIscody(): boolean;
  clearIscody(): void;
  getIscody(): boolean | undefined;
  setIscody(value: boolean): void;

  hasMinchargeamount2(): boolean;
  clearMinchargeamount2(): void;
  getMinchargeamount2(): number | undefined;
  setMinchargeamount2(value: number): void;

  hasMinchargecount2(): boolean;
  clearMinchargecount2(): void;
  getMinchargecount2(): number | undefined;
  setMinchargecount2(value: number): void;

  hasMinchargeop2(): boolean;
  clearMinchargeop2(): void;
  getMinchargeop2(): MIN_CHARGE_OPMap[keyof MIN_CHARGE_OPMap] | undefined;
  setMinchargeop2(value: MIN_CHARGE_OPMap[keyof MIN_CHARGE_OPMap]): void;

  hasIscody2(): boolean;
  clearIscody2(): void;
  getIscody2(): boolean | undefined;
  setIscody2(value: boolean): void;

  hasRandomlyMeterPicture(): boolean;
  clearRandomlyMeterPicture(): void;
  getRandomlyMeterPicture(): boolean | undefined;
  setRandomlyMeterPicture(value: boolean): void;

  hasPenefitialyNid(): boolean;
  clearPenefitialyNid(): void;
  getPenefitialyNid(): number | undefined;
  setPenefitialyNid(value: number): void;

  hasPenefitialyName(): boolean;
  clearPenefitialyName(): void;
  getPenefitialyName(): string | undefined;
  setPenefitialyName(value: string): void;

  hasNid(): boolean;
  clearNid(): void;
  getNid(): string | undefined;
  setNid(value: string): void;

  hasMinChaargeCollAmt(): boolean;
  clearMinChaargeCollAmt(): void;
  getMinChaargeCollAmt(): number | undefined;
  setMinChaargeCollAmt(value: number): void;

  hasCTypeGroupDesc(): boolean;
  clearCTypeGroupDesc(): void;
  getCTypeGroupDesc(): string | undefined;
  setCTypeGroupDesc(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Customer.AsObject;
  static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Customer;
  static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
  export type AsObject = {
    billCustkey?: string,
    tentName?: string,
    meterType?: string,
    meterRef?: string,
    uaAdress1?: string,
    uaAdress2?: string,
    uaAdress3?: string,
    uaAdress4?: string,
    propRef?: string,
    deviceId?: string,
    seqNo?: number,
    cType?: string,
    ctypegrpId?: string,
    noUnits?: number,
    oldKey?: string,
    servAloc?: string,
    srccycleid?: number,
    latRef?: number,
    lngRef?: number,
    nfcTag?: string,
    minchargeamount?: number,
    minchargecount?: number,
    minchargeop?: MIN_CHARGE_OPMap[keyof MIN_CHARGE_OPMap],
    iscody?: boolean,
    minchargeamount2?: number,
    minchargecount2?: number,
    minchargeop2?: MIN_CHARGE_OPMap[keyof MIN_CHARGE_OPMap],
    iscody2?: boolean,
    randomlyMeterPicture?: boolean,
    penefitialyNid?: number,
    penefitialyName?: string,
    nid?: string,
    minChaargeCollAmt?: number,
    cTypeGroupDesc?: string,
  }
}

export class HHStatm extends jspb.Message {
  hasBillCustkey(): boolean;
  clearBillCustkey(): void;
  getBillCustkey(): string | undefined;
  setBillCustkey(value: string): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasDueAmount(): boolean;
  clearDueAmount(): void;
  getDueAmount(): number | undefined;
  setDueAmount(value: number): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): string | undefined;
  setBilngDate(value: string): void;

  hasCType(): boolean;
  clearCType(): void;
  getCType(): string | undefined;
  setCType(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasClBlnce(): boolean;
  clearClBlnce(): void;
  getClBlnce(): number | undefined;
  setClBlnce(value: number): void;

  hasDeliverySt(): boolean;
  clearDeliverySt(): void;
  getDeliverySt(): number | undefined;
  setDeliverySt(value: number): void;

  hasWaterAmt(): boolean;
  clearWaterAmt(): void;
  getWaterAmt(): number | undefined;
  setWaterAmt(value: number): void;

  hasSewerAmt(): boolean;
  clearSewerAmt(): void;
  getSewerAmt(): number | undefined;
  setSewerAmt(value: number): void;

  hasBasicAmt(): boolean;
  clearBasicAmt(): void;
  getBasicAmt(): number | undefined;
  setBasicAmt(value: number): void;

  hasTaxAmt(): boolean;
  clearTaxAmt(): void;
  getTaxAmt(): number | undefined;
  setTaxAmt(value: number): void;

  hasInstallsAmt(): boolean;
  clearInstallsAmt(): void;
  getInstallsAmt(): number | undefined;
  setInstallsAmt(value: number): void;

  hasDbtAmt(): boolean;
  clearDbtAmt(): void;
  getDbtAmt(): number | undefined;
  setDbtAmt(value: number): void;

  hasCrdtAmt(): boolean;
  clearCrdtAmt(): void;
  getCrdtAmt(): number | undefined;
  setCrdtAmt(value: number): void;

  hasAgreemAmt(): boolean;
  clearAgreemAmt(): void;
  getAgreemAmt(): number | undefined;
  setAgreemAmt(value: number): void;

  hasTakafulAmt(): boolean;
  clearTakafulAmt(): void;
  getTakafulAmt(): number | undefined;
  setTakafulAmt(value: number): void;

  hasTanzeemAmt(): boolean;
  clearTanzeemAmt(): void;
  getTanzeemAmt(): number | undefined;
  setTanzeemAmt(value: number): void;

  hasMeterInstallsAmt(): boolean;
  clearMeterInstallsAmt(): void;
  getMeterInstallsAmt(): number | undefined;
  setMeterInstallsAmt(value: number): void;

  hasConnInstallsAmt(): boolean;
  clearConnInstallsAmt(): void;
  getConnInstallsAmt(): number | undefined;
  setConnInstallsAmt(value: number): void;

  hasRoundAmt(): boolean;
  clearRoundAmt(): void;
  getRoundAmt(): number | undefined;
  setRoundAmt(value: number): void;

  hasOtherAmt(): boolean;
  clearOtherAmt(): void;
  getOtherAmt(): number | undefined;
  setOtherAmt(value: number): void;

  hasOtherAmt1(): boolean;
  clearOtherAmt1(): void;
  getOtherAmt1(): number | undefined;
  setOtherAmt1(value: number): void;

  hasOtherAmt2(): boolean;
  clearOtherAmt2(): void;
  getOtherAmt2(): number | undefined;
  setOtherAmt2(value: number): void;

  hasOtherAmt3(): boolean;
  clearOtherAmt3(): void;
  getOtherAmt3(): number | undefined;
  setOtherAmt3(value: number): void;

  hasOtherAmt4(): boolean;
  clearOtherAmt4(): void;
  getOtherAmt4(): number | undefined;
  setOtherAmt4(value: number): void;

  hasOtherAmt5(): boolean;
  clearOtherAmt5(): void;
  getOtherAmt5(): number | undefined;
  setOtherAmt5(value: number): void;

  hasMeterAmt(): boolean;
  clearMeterAmt(): void;
  getMeterAmt(): number | undefined;
  setMeterAmt(value: number): void;

  hasConnAmt(): boolean;
  clearConnAmt(): void;
  getConnAmt(): number | undefined;
  setConnAmt(value: number): void;

  hasMeterManAmt(): boolean;
  clearMeterManAmt(): void;
  getMeterManAmt(): number | undefined;
  setMeterManAmt(value: number): void;

  hasComputerAmt(): boolean;
  clearComputerAmt(): void;
  getComputerAmt(): number | undefined;
  setComputerAmt(value: number): void;

  hasContractAmt(): boolean;
  clearContractAmt(): void;
  getContractAmt(): number | undefined;
  setContractAmt(value: number): void;

  hasGovAmt(): boolean;
  clearGovAmt(): void;
  getGovAmt(): number | undefined;
  setGovAmt(value: number): void;

  hasUniAmt(): boolean;
  clearUniAmt(): void;
  getUniAmt(): number | undefined;
  setUniAmt(value: number): void;

  hasOtherCurAmt(): boolean;
  clearOtherCurAmt(): void;
  getOtherCurAmt(): number | undefined;
  setOtherCurAmt(value: number): void;

  hasCleanAmt(): boolean;
  clearCleanAmt(): void;
  getCleanAmt(): number | undefined;
  setCleanAmt(value: number): void;

  hasCollectionAmt(): boolean;
  clearCollectionAmt(): void;
  getCollectionAmt(): number | undefined;
  setCollectionAmt(value: number): void;

  hasPartialCurAmt(): boolean;
  clearPartialCurAmt(): void;
  getPartialCurAmt(): number | undefined;
  setPartialCurAmt(value: number): void;

  hasSConsump(): boolean;
  clearSConsump(): void;
  getSConsump(): number | undefined;
  setSConsump(value: number): void;

  hasSPrReading(): boolean;
  clearSPrReading(): void;
  getSPrReading(): number | undefined;
  setSPrReading(value: number): void;

  hasSCrReading(): boolean;
  clearSCrReading(): void;
  getSCrReading(): number | undefined;
  setSCrReading(value: number): void;

  hasCalcType(): boolean;
  clearCalcType(): void;
  getCalcType(): string | undefined;
  setCalcType(value: string): void;

  hasIsLocked(): boolean;
  clearIsLocked(): void;
  getIsLocked(): boolean | undefined;
  setIsLocked(value: boolean): void;

  hasOpBlnce(): boolean;
  clearOpBlnce(): void;
  getOpBlnce(): number | undefined;
  setOpBlnce(value: number): void;

  hasInstalment(): boolean;
  clearInstalment(): void;
  getInstalment(): number | undefined;
  setInstalment(value: number): void;

  hasCurPayment(): boolean;
  clearCurPayment(): void;
  getCurPayment(): number | undefined;
  setCurPayment(value: number): void;

  hasOldKey(): boolean;
  clearOldKey(): void;
  getOldKey(): string | undefined;
  setOldKey(value: string): void;

  hasNoUnits(): boolean;
  clearNoUnits(): void;
  getNoUnits(): number | undefined;
  setNoUnits(value: number): void;

  hasLatRef(): boolean;
  clearLatRef(): void;
  getLatRef(): number | undefined;
  setLatRef(value: number): void;

  hasLngRef(): boolean;
  clearLngRef(): void;
  getLngRef(): number | undefined;
  setLngRef(value: number): void;

  clearReceiptsList(): void;
  getReceiptsList(): Array<Receipt>;
  setReceiptsList(value: Array<Receipt>): void;
  addReceipts(value?: Receipt, index?: number): Receipt;

  hasIsremoved(): boolean;
  clearIsremoved(): void;
  getIsremoved(): boolean | undefined;
  setIsremoved(value: boolean): void;

  clearCtypedtlsList(): void;
  getCtypedtlsList(): Array<CtypeDtl>;
  setCtypedtlsList(value: Array<CtypeDtl>): void;
  addCtypedtls(value?: CtypeDtl, index?: number): CtypeDtl;

  hasEmpid(): boolean;
  clearEmpid(): void;
  getEmpid(): number | undefined;
  setEmpid(value: number): void;

  hasReadType(): boolean;
  clearReadType(): void;
  getReadType(): number | undefined;
  setReadType(value: number): void;

  hasInstalmentDate(): boolean;
  clearInstalmentDate(): void;
  getInstalmentDate(): string | undefined;
  setInstalmentDate(value: string): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): string | undefined;
  setMessage(value: string): void;

  hasCollectionstatus(): boolean;
  clearCollectionstatus(): void;
  getCollectionstatus(): COLLECTION_STATUSMap[keyof COLLECTION_STATUSMap] | undefined;
  setCollectionstatus(value: COLLECTION_STATUSMap[keyof COLLECTION_STATUSMap]): void;

  hasIslastbill(): boolean;
  clearIslastbill(): void;
  getIslastbill(): boolean | undefined;
  setIslastbill(value: boolean): void;

  hasSMeterStatus(): boolean;
  clearSMeterStatus(): void;
  getSMeterStatus(): string | undefined;
  setSMeterStatus(value: string): void;

  hasFawryNo(): boolean;
  clearFawryNo(): void;
  getFawryNo(): string | undefined;
  setFawryNo(value: string): void;

  hasConsumpSanitary(): boolean;
  clearConsumpSanitary(): void;
  getConsumpSanitary(): number | undefined;
  setConsumpSanitary(value: number): void;

  hasAgremReminderCount(): boolean;
  clearAgremReminderCount(): void;
  getAgremReminderCount(): number | undefined;
  setAgremReminderCount(value: number): void;

  hasAgremReminderAmount(): boolean;
  clearAgremReminderAmount(): void;
  getAgremReminderAmount(): number | undefined;
  setAgremReminderAmount(value: number): void;

  hasAccountCode(): boolean;
  clearAccountCode(): void;
  getAccountCode(): string | undefined;
  setAccountCode(value: string): void;

  hasDiamOwnerDesc(): boolean;
  clearDiamOwnerDesc(): void;
  getDiamOwnerDesc(): string | undefined;
  setDiamOwnerDesc(value: string): void;

  hasAccountTypeDesc(): boolean;
  clearAccountTypeDesc(): void;
  getAccountTypeDesc(): string | undefined;
  setAccountTypeDesc(value: string): void;

  hasMonthesBetweenRd(): boolean;
  clearMonthesBetweenRd(): void;
  getMonthesBetweenRd(): number | undefined;
  setMonthesBetweenRd(value: number): void;

  hasSanitaryDesc(): boolean;
  clearSanitaryDesc(): void;
  getSanitaryDesc(): string | undefined;
  setSanitaryDesc(value: string): void;

  hasEnablePartialCollection(): boolean;
  clearEnablePartialCollection(): void;
  getEnablePartialCollection(): boolean | undefined;
  setEnablePartialCollection(value: boolean): void;

  hasMincharge(): boolean;
  clearMincharge(): void;
  getMincharge(): number | undefined;
  setMincharge(value: number): void;

  hasCollectedAmt(): boolean;
  clearCollectedAmt(): void;
  getCollectedAmt(): number | undefined;
  setCollectedAmt(value: number): void;

  hasRecTransfer(): boolean;
  clearRecTransfer(): void;
  getRecTransfer(): boolean | undefined;
  setRecTransfer(value: boolean): void;

  hasCtypegroupdesc(): boolean;
  clearCtypegroupdesc(): void;
  getCtypegroupdesc(): string | undefined;
  setCtypegroupdesc(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HHStatm.AsObject;
  static toObject(includeInstance: boolean, msg: HHStatm): HHStatm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HHStatm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HHStatm;
  static deserializeBinaryFromReader(message: HHStatm, reader: jspb.BinaryReader): HHStatm;
}

export namespace HHStatm {
  export type AsObject = {
    billCustkey?: string,
    cycleId?: number,
    paymentNo?: string,
    dueAmount?: number,
    bilngDate?: string,
    cType?: string,
    description?: string,
    clBlnce?: number,
    deliverySt?: number,
    waterAmt?: number,
    sewerAmt?: number,
    basicAmt?: number,
    taxAmt?: number,
    installsAmt?: number,
    dbtAmt?: number,
    crdtAmt?: number,
    agreemAmt?: number,
    takafulAmt?: number,
    tanzeemAmt?: number,
    meterInstallsAmt?: number,
    connInstallsAmt?: number,
    roundAmt?: number,
    otherAmt?: number,
    otherAmt1?: number,
    otherAmt2?: number,
    otherAmt3?: number,
    otherAmt4?: number,
    otherAmt5?: number,
    meterAmt?: number,
    connAmt?: number,
    meterManAmt?: number,
    computerAmt?: number,
    contractAmt?: number,
    govAmt?: number,
    uniAmt?: number,
    otherCurAmt?: number,
    cleanAmt?: number,
    collectionAmt?: number,
    partialCurAmt?: number,
    sConsump?: number,
    sPrReading?: number,
    sCrReading?: number,
    calcType?: string,
    isLocked?: boolean,
    opBlnce?: number,
    instalment?: number,
    curPayment?: number,
    oldKey?: string,
    noUnits?: number,
    latRef?: number,
    lngRef?: number,
    receiptsList: Array<Receipt.AsObject>,
    isremoved?: boolean,
    ctypedtlsList: Array<CtypeDtl.AsObject>,
    empid?: number,
    readType?: number,
    instalmentDate?: string,
    message?: string,
    collectionstatus?: COLLECTION_STATUSMap[keyof COLLECTION_STATUSMap],
    islastbill?: boolean,
    sMeterStatus?: string,
    fawryNo?: string,
    consumpSanitary?: number,
    agremReminderCount?: number,
    agremReminderAmount?: number,
    accountCode?: string,
    diamOwnerDesc?: string,
    accountTypeDesc?: string,
    monthesBetweenRd?: number,
    sanitaryDesc?: string,
    enablePartialCollection?: boolean,
    mincharge?: number,
    collectedAmt?: number,
    recTransfer?: boolean,
    ctypegroupdesc?: string,
  }
}

export class HHStatmRec extends jspb.Message {
  hasCustomer(): boolean;
  clearCustomer(): void;
  getCustomer(): Customer;
  setCustomer(value?: Customer): void;

  clearStatmentsList(): void;
  getStatmentsList(): Array<HHStatm>;
  setStatmentsList(value: Array<HHStatm>): void;
  addStatments(value?: HHStatm, index?: number): HHStatm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HHStatmRec.AsObject;
  static toObject(includeInstance: boolean, msg: HHStatmRec): HHStatmRec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HHStatmRec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HHStatmRec;
  static deserializeBinaryFromReader(message: HHStatmRec, reader: jspb.BinaryReader): HHStatmRec;
}

export namespace HHStatmRec {
  export type AsObject = {
    customer: Customer.AsObject,
    statmentsList: Array<HHStatm.AsObject>,
  }
}

export class HHSyncResponce extends jspb.Message {
  hasBillCustkey(): boolean;
  clearBillCustkey(): void;
  getBillCustkey(): string | undefined;
  setBillCustkey(value: string): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  hasPrRead1(): boolean;
  clearPrRead1(): void;
  getPrRead1(): number | undefined;
  setPrRead1(value: number): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): string | undefined;
  setBilngDate(value: string): void;

  hasMinConsump(): boolean;
  clearMinConsump(): void;
  getMinConsump(): number | undefined;
  setMinConsump(value: number): void;

  hasMaxConsump(): boolean;
  clearMaxConsump(): void;
  getMaxConsump(): number | undefined;
  setMaxConsump(value: number): void;

  hasIsReadingRow(): boolean;
  clearIsReadingRow(): void;
  getIsReadingRow(): number | undefined;
  setIsReadingRow(value: number): void;

  hasLatRef(): boolean;
  clearLatRef(): void;
  getLatRef(): number | undefined;
  setLatRef(value: number): void;

  hasLngRef(): boolean;
  clearLngRef(): void;
  getLngRef(): number | undefined;
  setLngRef(value: number): void;

  hasDistanceRef(): boolean;
  clearDistanceRef(): void;
  getDistanceRef(): number | undefined;
  setDistanceRef(value: number): void;

  hasOperationFlage(): boolean;
  clearOperationFlage(): void;
  getOperationFlage(): number | undefined;
  setOperationFlage(value: number): void;

  hasPrConsump(): boolean;
  clearPrConsump(): void;
  getPrConsump(): number | undefined;
  setPrConsump(value: number): void;

  hasCrReading(): boolean;
  clearCrReading(): void;
  getCrReading(): number | undefined;
  setCrReading(value: number): void;

  hasIsLockedR(): boolean;
  clearIsLockedR(): void;
  getIsLockedR(): boolean | undefined;
  setIsLockedR(value: boolean): void;

  hasIsRef(): boolean;
  clearIsRef(): void;
  getIsRef(): boolean | undefined;
  setIsRef(value: boolean): void;

  hasCustomer(): boolean;
  clearCustomer(): void;
  getCustomer(): Customer;
  setCustomer(value?: Customer): void;

  hasPrOpStatus(): boolean;
  clearPrOpStatus(): void;
  getPrOpStatus(): number | undefined;
  setPrOpStatus(value: number): void;

  hasPrReadingNote(): boolean;
  clearPrReadingNote(): void;
  getPrReadingNote(): number | undefined;
  setPrReadingNote(value: number): void;

  hasPreMessage(): boolean;
  clearPreMessage(): void;
  getPreMessage(): string | undefined;
  setPreMessage(value: string): void;

  hasMetarNote(): boolean;
  clearMetarNote(): void;
  getMetarNote(): string | undefined;
  setMetarNote(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HHSyncResponce.AsObject;
  static toObject(includeInstance: boolean, msg: HHSyncResponce): HHSyncResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HHSyncResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HHSyncResponce;
  static deserializeBinaryFromReader(message: HHSyncResponce, reader: jspb.BinaryReader): HHSyncResponce;
}

export namespace HHSyncResponce {
  export type AsObject = {
    billCustkey?: string,
    cycleId?: number,
    prRead1?: number,
    bilngDate?: string,
    minConsump?: number,
    maxConsump?: number,
    isReadingRow?: number,
    latRef?: number,
    lngRef?: number,
    distanceRef?: number,
    operationFlage?: number,
    prConsump?: number,
    crReading?: number,
    isLockedR?: boolean,
    isRef?: boolean,
    customer: Customer.AsObject,
    prOpStatus?: number,
    prReadingNote?: number,
    preMessage?: string,
    metarNote?: string,
  }
}

export class HHSyncResponceSTA extends jspb.Message {
  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  hasCycleid(): boolean;
  clearCycleid(): void;
  getCycleid(): number | undefined;
  setCycleid(value: number): void;

  hasMhhcount(): boolean;
  clearMhhcount(): void;
  getMhhcount(): number | undefined;
  setMhhcount(value: number): void;

  hasStemcount(): boolean;
  clearStemcount(): void;
  getStemcount(): number | undefined;
  setStemcount(value: number): void;

  hasSumblnce(): boolean;
  clearSumblnce(): void;
  getSumblnce(): number | undefined;
  setSumblnce(value: number): void;

  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  hasBranchid(): boolean;
  clearBranchid(): void;
  getBranchid(): number | undefined;
  setBranchid(value: number): void;

  hasBranchname(): boolean;
  clearBranchname(): void;
  getBranchname(): string | undefined;
  setBranchname(value: string): void;

  hasBilngdate(): boolean;
  clearBilngdate(): void;
  getBilngdate(): string | undefined;
  setBilngdate(value: string): void;

  hasMinlat(): boolean;
  clearMinlat(): void;
  getMinlat(): number | undefined;
  setMinlat(value: number): void;

  hasMinlng(): boolean;
  clearMinlng(): void;
  getMinlng(): number | undefined;
  setMinlng(value: number): void;

  hasMaxlat(): boolean;
  clearMaxlat(): void;
  getMaxlat(): number | undefined;
  setMaxlat(value: number): void;

  hasMaxlng(): boolean;
  clearMaxlng(): void;
  getMaxlng(): number | undefined;
  setMaxlng(value: number): void;

  hasApplywalkref(): boolean;
  clearApplywalkref(): void;
  getApplywalkref(): number | undefined;
  setApplywalkref(value: number): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasDiablereadingwithoutimage(): boolean;
  clearDiablereadingwithoutimage(): void;
  getDiablereadingwithoutimage(): boolean | undefined;
  setDiablereadingwithoutimage(value: boolean): void;

  clearRowsList(): void;
  getRowsList(): Array<HHSyncResponce>;
  setRowsList(value: Array<HHSyncResponce>): void;
  addRows(value?: HHSyncResponce, index?: number): HHSyncResponce;

  hasBilinggroupdescription(): boolean;
  clearBilinggroupdescription(): void;
  getBilinggroupdescription(): string | undefined;
  setBilinggroupdescription(value: string): void;

  hasBookdescription(): boolean;
  clearBookdescription(): void;
  getBookdescription(): string | undefined;
  setBookdescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HHSyncResponceSTA.AsObject;
  static toObject(includeInstance: boolean, msg: HHSyncResponceSTA): HHSyncResponceSTA.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HHSyncResponceSTA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HHSyncResponceSTA;
  static deserializeBinaryFromReader(message: HHSyncResponceSTA, reader: jspb.BinaryReader): HHSyncResponceSTA;
}

export namespace HHSyncResponceSTA {
  export type AsObject = {
    billgroup?: string,
    bookno?: string,
    walkno?: string,
    cycleid?: number,
    mhhcount?: number,
    stemcount?: number,
    sumblnce?: number,
    deviceid?: string,
    branchid?: number,
    branchname?: string,
    bilngdate?: string,
    minlat?: number,
    minlng?: number,
    maxlat?: number,
    maxlng?: number,
    applywalkref?: number,
    description?: string,
    diablereadingwithoutimage?: boolean,
    rowsList: Array<HHSyncResponce.AsObject>,
    bilinggroupdescription?: string,
    bookdescription?: string,
  }
}

export class HHStatmentsSTA extends jspb.Message {
  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  hasStmcount(): boolean;
  clearStmcount(): void;
  getStmcount(): number | undefined;
  setStmcount(value: number): void;

  hasSumblnce(): boolean;
  clearSumblnce(): void;
  getSumblnce(): number | undefined;
  setSumblnce(value: number): void;

  hasBranchid(): boolean;
  clearBranchid(): void;
  getBranchid(): number | undefined;
  setBranchid(value: number): void;

  hasBranchname(): boolean;
  clearBranchname(): void;
  getBranchname(): string | undefined;
  setBranchname(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  clearCyclesList(): void;
  getCyclesList(): Array<number>;
  setCyclesList(value: Array<number>): void;
  addCycles(value: number, index?: number): number;

  hasBilinggroupdescription(): boolean;
  clearBilinggroupdescription(): void;
  getBilinggroupdescription(): string | undefined;
  setBilinggroupdescription(value: string): void;

  hasBookdescription(): boolean;
  clearBookdescription(): void;
  getBookdescription(): string | undefined;
  setBookdescription(value: string): void;

  clearCustomersList(): void;
  getCustomersList(): Array<HHStatmRec>;
  setCustomersList(value: Array<HHStatmRec>): void;
  addCustomers(value?: HHStatmRec, index?: number): HHStatmRec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HHStatmentsSTA.AsObject;
  static toObject(includeInstance: boolean, msg: HHStatmentsSTA): HHStatmentsSTA.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HHStatmentsSTA, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HHStatmentsSTA;
  static deserializeBinaryFromReader(message: HHStatmentsSTA, reader: jspb.BinaryReader): HHStatmentsSTA;
}

export namespace HHStatmentsSTA {
  export type AsObject = {
    billgroup?: string,
    bookno?: string,
    walkno?: string,
    stmcount?: number,
    sumblnce?: number,
    branchid?: number,
    branchname?: string,
    description?: string,
    cyclesList: Array<number>,
    bilinggroupdescription?: string,
    bookdescription?: string,
    customersList: Array<HHStatmRec.AsObject>,
  }
}

export class HHUser extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasUserName(): boolean;
  clearUserName(): void;
  getUserName(): string | undefined;
  setUserName(value: string): void;

  hasPassword(): boolean;
  clearPassword(): void;
  getPassword(): string | undefined;
  setPassword(value: string): void;

  hasFullName(): boolean;
  clearFullName(): void;
  getFullName(): string | undefined;
  setFullName(value: string): void;

  hasDeviceId(): boolean;
  clearDeviceId(): void;
  getDeviceId(): string | undefined;
  setDeviceId(value: string): void;

  hasBranchId(): boolean;
  clearBranchId(): void;
  getBranchId(): number | undefined;
  setBranchId(value: number): void;

  hasBranche(): boolean;
  clearBranche(): void;
  getBranche(): string | undefined;
  setBranche(value: string): void;

  hasNotes(): boolean;
  clearNotes(): void;
  getNotes(): string | undefined;
  setNotes(value: string): void;

  hasExpire(): boolean;
  clearExpire(): void;
  getExpire(): number | undefined;
  setExpire(value: number): void;

  hasSeeall(): boolean;
  clearSeeall(): void;
  getSeeall(): number | undefined;
  setSeeall(value: number): void;

  hasIscurrent(): boolean;
  clearIscurrent(): void;
  getIscurrent(): number | undefined;
  setIscurrent(value: number): void;

  hasReading(): boolean;
  clearReading(): void;
  getReading(): boolean | undefined;
  setReading(value: boolean): void;

  hasCollection(): boolean;
  clearCollection(): void;
  getCollection(): boolean | undefined;
  setCollection(value: boolean): void;

  hasSysAdmin(): boolean;
  clearSysAdmin(): void;
  getSysAdmin(): boolean | undefined;
  setSysAdmin(value: boolean): void;

  hasDataAdmin(): boolean;
  clearDataAdmin(): void;
  getDataAdmin(): boolean | undefined;
  setDataAdmin(value: boolean): void;

  hasDataEntry(): boolean;
  clearDataEntry(): void;
  getDataEntry(): boolean | undefined;
  setDataEntry(value: boolean): void;

  hasReportingViewer(): boolean;
  clearReportingViewer(): void;
  getReportingViewer(): boolean | undefined;
  setReportingViewer(value: boolean): void;

  hasCasher(): boolean;
  clearCasher(): void;
  getCasher(): boolean | undefined;
  setCasher(value: boolean): void;

  hasDashboard(): boolean;
  clearDashboard(): void;
  getDashboard(): boolean | undefined;
  setDashboard(value: boolean): void;

  hasQuota(): boolean;
  clearQuota(): void;
  getQuota(): number | undefined;
  setQuota(value: number): void;

  hasDepositsQuota(): boolean;
  clearDepositsQuota(): void;
  getDepositsQuota(): number | undefined;
  setDepositsQuota(value: number): void;

  hasCloseReadingCycle(): boolean;
  clearCloseReadingCycle(): void;
  getCloseReadingCycle(): boolean | undefined;
  setCloseReadingCycle(value: boolean): void;

  hasCloseCollectionCycle(): boolean;
  clearCloseCollectionCycle(): void;
  getCloseCollectionCycle(): boolean | undefined;
  setCloseCollectionCycle(value: boolean): void;

  hasFlage1(): boolean;
  clearFlage1(): void;
  getFlage1(): boolean | undefined;
  setFlage1(value: boolean): void;

  hasFlage2(): boolean;
  clearFlage2(): void;
  getFlage2(): boolean | undefined;
  setFlage2(value: boolean): void;

  hasReadingPercent(): boolean;
  clearReadingPercent(): void;
  getReadingPercent(): number | undefined;
  setReadingPercent(value: number): void;

  hasDayReadingPercent(): boolean;
  clearDayReadingPercent(): void;
  getDayReadingPercent(): number | undefined;
  setDayReadingPercent(value: number): void;

  hasAllowOverPayment(): boolean;
  clearAllowOverPayment(): void;
  getAllowOverPayment(): boolean | undefined;
  setAllowOverPayment(value: boolean): void;

  hasDepositDuration(): boolean;
  clearDepositDuration(): void;
  getDepositDuration(): number | undefined;
  setDepositDuration(value: number): void;

  hasOfflinePeriod(): boolean;
  clearOfflinePeriod(): void;
  getOfflinePeriod(): number | undefined;
  setOfflinePeriod(value: number): void;

  hasBillsCountAllowedOffline(): boolean;
  clearBillsCountAllowedOffline(): void;
  getBillsCountAllowedOffline(): number | undefined;
  setBillsCountAllowedOffline(value: number): void;

  hasEnableHhPrinting(): boolean;
  clearEnableHhPrinting(): void;
  getEnableHhPrinting(): boolean | undefined;
  setEnableHhPrinting(value: boolean): void;

  hasDepositDurationExtraDayes(): boolean;
  clearDepositDurationExtraDayes(): void;
  getDepositDurationExtraDayes(): number | undefined;
  setDepositDurationExtraDayes(value: number): void;

  hasDisabled(): boolean;
  clearDisabled(): void;
  getDisabled(): boolean | undefined;
  setDisabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HHUser.AsObject;
  static toObject(includeInstance: boolean, msg: HHUser): HHUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HHUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HHUser;
  static deserializeBinaryFromReader(message: HHUser, reader: jspb.BinaryReader): HHUser;
}

export namespace HHUser {
  export type AsObject = {
    id?: number,
    userName?: string,
    password?: string,
    fullName?: string,
    deviceId?: string,
    branchId?: number,
    branche?: string,
    notes?: string,
    expire?: number,
    seeall?: number,
    iscurrent?: number,
    reading?: boolean,
    collection?: boolean,
    sysAdmin?: boolean,
    dataAdmin?: boolean,
    dataEntry?: boolean,
    reportingViewer?: boolean,
    casher?: boolean,
    dashboard?: boolean,
    quota?: number,
    depositsQuota?: number,
    closeReadingCycle?: boolean,
    closeCollectionCycle?: boolean,
    flage1?: boolean,
    flage2?: boolean,
    readingPercent?: number,
    dayReadingPercent?: number,
    allowOverPayment?: boolean,
    depositDuration?: number,
    offlinePeriod?: number,
    billsCountAllowedOffline?: number,
    enableHhPrinting?: boolean,
    depositDurationExtraDayes?: number,
    disabled?: boolean,
  }
}

export class HHDevice extends jspb.Message {
  static AsObject: {};
  hasDeviceId(): boolean;
  clearDeviceId(): void;
  getDeviceId(): string | undefined;
  setDeviceId(value: string): void;

  hasSimNo(): boolean;
  clearSimNo(): void;
  getSimNo(): string | undefined;
  setSimNo(value: string): void;

  hasCompany(): boolean;
  clearCompany(): void;
  getCompany(): string | undefined;
  setCompany(value: string): void;

  hasModel(): boolean;
  clearModel(): void;
  getModel(): string | undefined;
  setModel(value: string): void;

  hasOs(): boolean;
  clearOs(): void;
  getOs(): string | undefined;
  setOs(value: string): void;

  hasBatteryNo(): boolean;
  clearBatteryNo(): void;
  getBatteryNo(): string | undefined;
  setBatteryNo(value: string): void;

  hasAssignTo(): boolean;
  clearAssignTo(): void;
  getAssignTo(): number | undefined;
  setAssignTo(value: number): void;

  hasUsername(): boolean;
  clearUsername(): void;
  getUsername(): string | undefined;
  setUsername(value: string): void;

  hasPassword(): boolean;
  clearPassword(): void;
  getPassword(): string | undefined;
  setPassword(value: string): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): string | undefined;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HHDevice.AsObject;
  static toObject(includeInstance: boolean, msg: HHDevice): HHDevice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HHDevice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HHDevice;
  static deserializeBinaryFromReader(message: HHDevice, reader: jspb.BinaryReader): HHDevice;
}

export namespace HHDevice {
  export type AsObject = {
    deviceId?: string,
    simNo?: string,
    company?: string,
    model?: string,
    os?: string,
    batteryNo?: string,
    assignTo?: number,
    username?: string,
    password?: string,
    version?: string,
  }
}

export class LuType extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasDescribe(): boolean;
  clearDescribe(): void;
  getDescribe(): string | undefined;
  setDescribe(value: string): void;

  hasNotactive(): boolean;
  clearNotactive(): void;
  getNotactive(): boolean | undefined;
  setNotactive(value: boolean): void;

  hasLock(): boolean;
  clearLock(): void;
  getLock(): boolean | undefined;
  setLock(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LuType.AsObject;
  static toObject(includeInstance: boolean, msg: LuType): LuType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LuType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LuType;
  static deserializeBinaryFromReader(message: LuType, reader: jspb.BinaryReader): LuType;
}

export namespace LuType {
  export type AsObject = {
    code?: string,
    describe?: string,
    notactive?: boolean,
    lock?: boolean,
  }
}

export class LookupsType extends jspb.Message {
  clearTypesList(): void;
  getTypesList(): Array<LuType>;
  setTypesList(value: Array<LuType>): void;
  addTypes(value?: LuType, index?: number): LuType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupsType.AsObject;
  static toObject(includeInstance: boolean, msg: LookupsType): LookupsType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LookupsType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupsType;
  static deserializeBinaryFromReader(message: LookupsType, reader: jspb.BinaryReader): LookupsType;
}

export namespace LookupsType {
  export type AsObject = {
    typesList: Array<LuType.AsObject>,
  }
}

export class ReadingResponce extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): string | undefined;
  setMessage(value: string): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): ReadingAcceptanceStatusMap[keyof ReadingAcceptanceStatusMap] | undefined;
  setStatus(value: ReadingAcceptanceStatusMap[keyof ReadingAcceptanceStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadingResponce.AsObject;
  static toObject(includeInstance: boolean, msg: ReadingResponce): ReadingResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadingResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadingResponce;
  static deserializeBinaryFromReader(message: ReadingResponce, reader: jspb.BinaryReader): ReadingResponce;
}

export namespace ReadingResponce {
  export type AsObject = {
    custkey?: string,
    cycleId?: number,
    message?: string,
    status?: ReadingAcceptanceStatusMap[keyof ReadingAcceptanceStatusMap],
  }
}

export class PaymentMethod extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentMethod.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentMethod): PaymentMethod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentMethod;
  static deserializeBinaryFromReader(message: PaymentMethod, reader: jspb.BinaryReader): PaymentMethod;
}

export namespace PaymentMethod {
  export type AsObject = {
    id?: number,
    description?: string,
  }
}

export class Receipt extends jspb.Message {
  hasReceiptno(): boolean;
  clearReceiptno(): void;
  getReceiptno(): string | undefined;
  setReceiptno(value: string): void;

  hasCollectionid(): boolean;
  clearCollectionid(): void;
  getCollectionid(): number | undefined;
  setCollectionid(value: number): void;

  hasDepositid(): boolean;
  clearDepositid(): void;
  getDepositid(): number | undefined;
  setDepositid(value: number): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPaymentno(): boolean;
  clearPaymentno(): void;
  getPaymentno(): string | undefined;
  setPaymentno(value: string): void;

  hasCancelled(): boolean;
  clearCancelled(): void;
  getCancelled(): boolean | undefined;
  setCancelled(value: boolean): void;

  hasEmpid(): boolean;
  clearEmpid(): void;
  getEmpid(): number | undefined;
  setEmpid(value: number): void;

  hasCollectiontype(): boolean;
  clearCollectiontype(): void;
  getCollectiontype(): number | undefined;
  setCollectiontype(value: number): void;

  hasCollectionmethod(): boolean;
  clearCollectionmethod(): void;
  getCollectionmethod(): number | undefined;
  setCollectionmethod(value: number): void;

  hasCollectiondate(): boolean;
  clearCollectiondate(): void;
  getCollectiondate(): string | undefined;
  setCollectiondate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Receipt.AsObject;
  static toObject(includeInstance: boolean, msg: Receipt): Receipt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Receipt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Receipt;
  static deserializeBinaryFromReader(message: Receipt, reader: jspb.BinaryReader): Receipt;
}

export namespace Receipt {
  export type AsObject = {
    receiptno?: string,
    collectionid?: number,
    depositid?: number,
    amount?: number,
    custkey?: string,
    paymentno?: string,
    cancelled?: boolean,
    empid?: number,
    collectiontype?: number,
    collectionmethod?: number,
    collectiondate?: string,
  }
}

export class FeesTransactions extends jspb.Message {
  hasCollectionId(): boolean;
  clearCollectionId(): void;
  getCollectionId(): number | undefined;
  setCollectionId(value: number): void;

  hasTransId(): boolean;
  clearTransId(): void;
  getTransId(): string | undefined;
  setTransId(value: string): void;

  hasCancel(): boolean;
  clearCancel(): void;
  getCancel(): number | undefined;
  setCancel(value: number): void;

  hasCancelBy(): boolean;
  clearCancelBy(): void;
  getCancelBy(): string | undefined;
  setCancelBy(value: string): void;

  hasCancelReason(): boolean;
  clearCancelReason(): void;
  getCancelReason(): string | undefined;
  setCancelReason(value: string): void;

  hasDepositId(): boolean;
  clearDepositId(): void;
  getDepositId(): number | undefined;
  setDepositId(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPaymentno(): boolean;
  clearPaymentno(): void;
  getPaymentno(): string | undefined;
  setPaymentno(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeesTransactions.AsObject;
  static toObject(includeInstance: boolean, msg: FeesTransactions): FeesTransactions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeesTransactions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeesTransactions;
  static deserializeBinaryFromReader(message: FeesTransactions, reader: jspb.BinaryReader): FeesTransactions;
}

export namespace FeesTransactions {
  export type AsObject = {
    collectionId?: number,
    transId?: string,
    cancel?: number,
    cancelBy?: string,
    cancelReason?: string,
    depositId?: number,
    custkey?: string,
    paymentno?: string,
  }
}

export class CollectionReport extends jspb.Message {
  hasBilngdate(): boolean;
  clearBilngdate(): void;
  getBilngdate(): string | undefined;
  setBilngdate(value: string): void;

  hasIssuedamount(): boolean;
  clearIssuedamount(): void;
  getIssuedamount(): number | undefined;
  setIssuedamount(value: number): void;

  hasIssuedcount(): boolean;
  clearIssuedcount(): void;
  getIssuedcount(): number | undefined;
  setIssuedcount(value: number): void;

  hasCollectedamount(): boolean;
  clearCollectedamount(): void;
  getCollectedamount(): number | undefined;
  setCollectedamount(value: number): void;

  hasCollectedcount(): boolean;
  clearCollectedcount(): void;
  getCollectedcount(): number | undefined;
  setCollectedcount(value: number): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  hasDeliverydate(): boolean;
  clearDeliverydate(): void;
  getDeliverydate(): string | undefined;
  setDeliverydate(value: string): void;

  hasReceiptno(): boolean;
  clearReceiptno(): void;
  getReceiptno(): string | undefined;
  setReceiptno(value: string): void;

  hasDepositid(): boolean;
  clearDepositid(): void;
  getDepositid(): number | undefined;
  setDepositid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionReport.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionReport): CollectionReport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionReport;
  static deserializeBinaryFromReader(message: CollectionReport, reader: jspb.BinaryReader): CollectionReport;
}

export namespace CollectionReport {
  export type AsObject = {
    bilngdate?: string,
    issuedamount?: number,
    issuedcount?: number,
    collectedamount?: number,
    collectedcount?: number,
    billgroup?: string,
    bookno?: string,
    walkno?: string,
    deliverydate?: string,
    receiptno?: string,
    depositid?: number,
  }
}

export class Version extends jspb.Message {
  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): string | undefined;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
  export type AsObject = {
    version?: string,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class DownloadReadingMetersRequest extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookNo(): boolean;
  clearBookNo(): void;
  getBookNo(): string | undefined;
  setBookNo(value: string): void;

  hasWalkNo(): boolean;
  clearWalkNo(): void;
  getWalkNo(): string | undefined;
  setWalkNo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadReadingMetersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadReadingMetersRequest): DownloadReadingMetersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadReadingMetersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadReadingMetersRequest;
  static deserializeBinaryFromReader(message: DownloadReadingMetersRequest, reader: jspb.BinaryReader): DownloadReadingMetersRequest;
}

export namespace DownloadReadingMetersRequest {
  export type AsObject = {
    deviceid?: string,
    custkey?: string,
    billgroup?: string,
    bookNo?: string,
    walkNo?: string,
  }
}

export class DownloadReadingMetersResponce extends jspb.Message {
  clearStaList(): void;
  getStaList(): Array<HHSyncResponceSTA>;
  setStaList(value: Array<HHSyncResponceSTA>): void;
  addSta(value?: HHSyncResponceSTA, index?: number): HHSyncResponceSTA;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadReadingMetersResponce.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadReadingMetersResponce): DownloadReadingMetersResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadReadingMetersResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadReadingMetersResponce;
  static deserializeBinaryFromReader(message: DownloadReadingMetersResponce, reader: jspb.BinaryReader): DownloadReadingMetersResponce;
}

export namespace DownloadReadingMetersResponce {
  export type AsObject = {
    staList: Array<HHSyncResponceSTA.AsObject>,
  }
}

export class DownloadStatmentsRequest extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  clearCustkeyList(): void;
  getCustkeyList(): Array<string>;
  setCustkeyList(value: Array<string>): void;
  addCustkey(value: string, index?: number): string;

  hasIsnotnotifiedonly(): boolean;
  clearIsnotnotifiedonly(): void;
  getIsnotnotifiedonly(): boolean | undefined;
  setIsnotnotifiedonly(value: boolean): void;

  hasIsCasher(): boolean;
  clearIsCasher(): void;
  getIsCasher(): boolean | undefined;
  setIsCasher(value: boolean): void;

  hasIsEmpPrivate(): boolean;
  clearIsEmpPrivate(): void;
  getIsEmpPrivate(): boolean | undefined;
  setIsEmpPrivate(value: boolean): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookNo(): boolean;
  clearBookNo(): void;
  getBookNo(): string | undefined;
  setBookNo(value: string): void;

  hasWalkNo(): boolean;
  clearWalkNo(): void;
  getWalkNo(): string | undefined;
  setWalkNo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadStatmentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadStatmentsRequest): DownloadStatmentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadStatmentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadStatmentsRequest;
  static deserializeBinaryFromReader(message: DownloadStatmentsRequest, reader: jspb.BinaryReader): DownloadStatmentsRequest;
}

export namespace DownloadStatmentsRequest {
  export type AsObject = {
    deviceid?: string,
    custkeyList: Array<string>,
    isnotnotifiedonly?: boolean,
    isCasher?: boolean,
    isEmpPrivate?: boolean,
    billgroup?: string,
    bookNo?: string,
    walkNo?: string,
  }
}

export class DownloadStatmentsResponce extends jspb.Message {
  clearStaList(): void;
  getStaList(): Array<HHStatmentsSTA>;
  setStaList(value: Array<HHStatmentsSTA>): void;
  addSta(value?: HHStatmentsSTA, index?: number): HHStatmentsSTA;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadStatmentsResponce.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadStatmentsResponce): DownloadStatmentsResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadStatmentsResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadStatmentsResponce;
  static deserializeBinaryFromReader(message: DownloadStatmentsResponce, reader: jspb.BinaryReader): DownloadStatmentsResponce;
}

export namespace DownloadStatmentsResponce {
  export type AsObject = {
    staList: Array<HHStatmentsSTA.AsObject>,
  }
}

export class DownloadModifiedStatmentsResponce extends jspb.Message {
  clearStatmentsList(): void;
  getStatmentsList(): Array<HHStatm>;
  setStatmentsList(value: Array<HHStatm>): void;
  addStatments(value?: HHStatm, index?: number): HHStatm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadModifiedStatmentsResponce.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadModifiedStatmentsResponce): DownloadModifiedStatmentsResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadModifiedStatmentsResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadModifiedStatmentsResponce;
  static deserializeBinaryFromReader(message: DownloadModifiedStatmentsResponce, reader: jspb.BinaryReader): DownloadModifiedStatmentsResponce;
}

export namespace DownloadModifiedStatmentsResponce {
  export type AsObject = {
    statmentsList: Array<HHStatm.AsObject>,
  }
}

export class GetUsersRequest extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersRequest): GetUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersRequest;
  static deserializeBinaryFromReader(message: GetUsersRequest, reader: jspb.BinaryReader): GetUsersRequest;
}

export namespace GetUsersRequest {
  export type AsObject = {
    deviceid?: string,
  }
}

export class GetUsersResponce extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<HHUser>;
  setUsersList(value: Array<HHUser>): void;
  addUsers(value?: HHUser, index?: number): HHUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersResponce.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersResponce): GetUsersResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersResponce;
  static deserializeBinaryFromReader(message: GetUsersResponce, reader: jspb.BinaryReader): GetUsersResponce;
}

export namespace GetUsersResponce {
  export type AsObject = {
    usersList: Array<HHUser.AsObject>,
  }
}

export class RegsiterDeviceRequest extends jspb.Message {
  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): HHDevice;
  setDevice(value?: HHDevice): void;

  hasDeviceregistrationcode(): boolean;
  clearDeviceregistrationcode(): void;
  getDeviceregistrationcode(): string | undefined;
  setDeviceregistrationcode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegsiterDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegsiterDeviceRequest): RegsiterDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegsiterDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegsiterDeviceRequest;
  static deserializeBinaryFromReader(message: RegsiterDeviceRequest, reader: jspb.BinaryReader): RegsiterDeviceRequest;
}

export namespace RegsiterDeviceRequest {
  export type AsObject = {
    device: HHDevice.AsObject,
    deviceregistrationcode?: string,
  }
}

export class RegsiterDeviceResponce extends jspb.Message {
  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): HHDevice;
  setDevice(value?: HHDevice): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegsiterDeviceResponce.AsObject;
  static toObject(includeInstance: boolean, msg: RegsiterDeviceResponce): RegsiterDeviceResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegsiterDeviceResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegsiterDeviceResponce;
  static deserializeBinaryFromReader(message: RegsiterDeviceResponce, reader: jspb.BinaryReader): RegsiterDeviceResponce;
}

export namespace RegsiterDeviceResponce {
  export type AsObject = {
    device: HHDevice.AsObject,
  }
}

export class ConfirmDownloadRequest extends jspb.Message {
  hasSta(): boolean;
  clearSta(): void;
  getSta(): HHSyncResponceSTA;
  setSta(value?: HHSyncResponceSTA): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmDownloadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmDownloadRequest): ConfirmDownloadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfirmDownloadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmDownloadRequest;
  static deserializeBinaryFromReader(message: ConfirmDownloadRequest, reader: jspb.BinaryReader): ConfirmDownloadRequest;
}

export namespace ConfirmDownloadRequest {
  export type AsObject = {
    sta: HHSyncResponceSTA.AsObject,
  }
}

export class ConfirmDownloadResponce extends jspb.Message {
  hasIssuccssed(): boolean;
  clearIssuccssed(): void;
  getIssuccssed(): boolean | undefined;
  setIssuccssed(value: boolean): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): string | undefined;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmDownloadResponce.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmDownloadResponce): ConfirmDownloadResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfirmDownloadResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmDownloadResponce;
  static deserializeBinaryFromReader(message: ConfirmDownloadResponce, reader: jspb.BinaryReader): ConfirmDownloadResponce;
}

export namespace ConfirmDownloadResponce {
  export type AsObject = {
    issuccssed?: boolean,
    message?: string,
  }
}

export class UpdateReadingsRequest extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  clearReadingsList(): void;
  getReadingsList(): Array<CustReading>;
  setReadingsList(value: Array<CustReading>): void;
  addReadings(value?: CustReading, index?: number): CustReading;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReadingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReadingsRequest): UpdateReadingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateReadingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReadingsRequest;
  static deserializeBinaryFromReader(message: UpdateReadingsRequest, reader: jspb.BinaryReader): UpdateReadingsRequest;
}

export namespace UpdateReadingsRequest {
  export type AsObject = {
    deviceid?: string,
    readingsList: Array<CustReading.AsObject>,
  }
}

export class UpdateReadingsResponce extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  clearStatusList(): void;
  getStatusList(): Array<ReadingResponce>;
  setStatusList(value: Array<ReadingResponce>): void;
  addStatus(value?: ReadingResponce, index?: number): ReadingResponce;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReadingsResponce.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReadingsResponce): UpdateReadingsResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateReadingsResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReadingsResponce;
  static deserializeBinaryFromReader(message: UpdateReadingsResponce, reader: jspb.BinaryReader): UpdateReadingsResponce;
}

export namespace UpdateReadingsResponce {
  export type AsObject = {
    deviceid?: string,
    statusList: Array<ReadingResponce.AsObject>,
  }
}

export class GetWalkStatusRequest extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  clearCycleidList(): void;
  getCycleidList(): Array<number>;
  setCycleidList(value: Array<number>): void;
  addCycleid(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWalkStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWalkStatusRequest): GetWalkStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWalkStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWalkStatusRequest;
  static deserializeBinaryFromReader(message: GetWalkStatusRequest, reader: jspb.BinaryReader): GetWalkStatusRequest;
}

export namespace GetWalkStatusRequest {
  export type AsObject = {
    deviceid?: string,
    billgroup?: string,
    bookno?: string,
    walkno?: string,
    cycleidList: Array<number>,
  }
}

export class WalkStatus extends jspb.Message {
  hasCycleid(): boolean;
  clearCycleid(): void;
  getCycleid(): number | undefined;
  setCycleid(value: number): void;

  hasIscloseindevicec(): boolean;
  clearIscloseindevicec(): void;
  getIscloseindevicec(): boolean | undefined;
  setIscloseindevicec(value: boolean): void;

  hasIscloseindevicer(): boolean;
  clearIscloseindevicer(): void;
  getIscloseindevicer(): boolean | undefined;
  setIscloseindevicer(value: boolean): void;

  hasIscompletedc(): boolean;
  clearIscompletedc(): void;
  getIscompletedc(): boolean | undefined;
  setIscompletedc(value: boolean): void;

  hasIscompletedr(): boolean;
  clearIscompletedr(): void;
  getIscompletedr(): boolean | undefined;
  setIscompletedr(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalkStatus.AsObject;
  static toObject(includeInstance: boolean, msg: WalkStatus): WalkStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WalkStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalkStatus;
  static deserializeBinaryFromReader(message: WalkStatus, reader: jspb.BinaryReader): WalkStatus;
}

export namespace WalkStatus {
  export type AsObject = {
    cycleid?: number,
    iscloseindevicec?: boolean,
    iscloseindevicer?: boolean,
    iscompletedc?: boolean,
    iscompletedr?: boolean,
  }
}

export class GetWalkStatusResponce extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  hasCycleid(): boolean;
  clearCycleid(): void;
  getCycleid(): number | undefined;
  setCycleid(value: number): void;

  hasIscloseindevicec(): boolean;
  clearIscloseindevicec(): void;
  getIscloseindevicec(): boolean | undefined;
  setIscloseindevicec(value: boolean): void;

  hasIscloseindevicer(): boolean;
  clearIscloseindevicer(): void;
  getIscloseindevicer(): boolean | undefined;
  setIscloseindevicer(value: boolean): void;

  hasIscompletedc(): boolean;
  clearIscompletedc(): void;
  getIscompletedc(): boolean | undefined;
  setIscompletedc(value: boolean): void;

  hasIscompletedr(): boolean;
  clearIscompletedr(): void;
  getIscompletedr(): boolean | undefined;
  setIscompletedr(value: boolean): void;

  clearWalkstatusList(): void;
  getWalkstatusList(): Array<WalkStatus>;
  setWalkstatusList(value: Array<WalkStatus>): void;
  addWalkstatus(value?: WalkStatus, index?: number): WalkStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWalkStatusResponce.AsObject;
  static toObject(includeInstance: boolean, msg: GetWalkStatusResponce): GetWalkStatusResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWalkStatusResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWalkStatusResponce;
  static deserializeBinaryFromReader(message: GetWalkStatusResponce, reader: jspb.BinaryReader): GetWalkStatusResponce;
}

export namespace GetWalkStatusResponce {
  export type AsObject = {
    deviceid?: string,
    billgroup?: string,
    bookno?: string,
    walkno?: string,
    cycleid?: number,
    iscloseindevicec?: boolean,
    iscloseindevicer?: boolean,
    iscompletedc?: boolean,
    iscompletedr?: boolean,
    walkstatusList: Array<WalkStatus.AsObject>,
  }
}

export class GetPaymentMethodsResponce extends jspb.Message {
  clearPaymentmethodsList(): void;
  getPaymentmethodsList(): Array<PaymentMethod>;
  setPaymentmethodsList(value: Array<PaymentMethod>): void;
  addPaymentmethods(value?: PaymentMethod, index?: number): PaymentMethod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentMethodsResponce.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentMethodsResponce): GetPaymentMethodsResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPaymentMethodsResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentMethodsResponce;
  static deserializeBinaryFromReader(message: GetPaymentMethodsResponce, reader: jspb.BinaryReader): GetPaymentMethodsResponce;
}

export namespace GetPaymentMethodsResponce {
  export type AsObject = {
    paymentmethodsList: Array<PaymentMethod.AsObject>,
  }
}

export class GetPaymentRequest extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  hasPaymentno(): boolean;
  clearPaymentno(): void;
  getPaymentno(): string | undefined;
  setPaymentno(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentRequest): GetPaymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPaymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentRequest;
  static deserializeBinaryFromReader(message: GetPaymentRequest, reader: jspb.BinaryReader): GetPaymentRequest;
}

export namespace GetPaymentRequest {
  export type AsObject = {
    deviceid?: string,
    paymentno?: string,
  }
}

export class CollectRequest extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  hasReceipt(): boolean;
  clearReceipt(): void;
  getReceipt(): Bill_Collection;
  setReceipt(value?: Bill_Collection): void;

  hasFees(): boolean;
  clearFees(): void;
  getFees(): FEES_TRANSACTIONS | undefined;
  setFees(value?: FEES_TRANSACTIONS): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CollectRequest): CollectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectRequest;
  static deserializeBinaryFromReader(message: CollectRequest, reader: jspb.BinaryReader): CollectRequest;
}

export namespace CollectRequest {
  export type AsObject = {
    deviceid?: string,
    receipt: Bill_Collection.AsObject,
    fees?: FEES_TRANSACTIONS.AsObject,
  }
}

export class ResendFessesRequest extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  hasFees(): boolean;
  clearFees(): void;
  getFees(): FEES_TRANSACTIONS | undefined;
  setFees(value?: FEES_TRANSACTIONS): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendFessesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResendFessesRequest): ResendFessesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResendFessesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendFessesRequest;
  static deserializeBinaryFromReader(message: ResendFessesRequest, reader: jspb.BinaryReader): ResendFessesRequest;
}

export namespace ResendFessesRequest {
  export type AsObject = {
    deviceid?: string,
    fees?: FEES_TRANSACTIONS.AsObject,
  }
}

export class GetAccessCodesResponce extends jspb.Message {
  clearCodesList(): void;
  getCodesList(): Array<LuType>;
  setCodesList(value: Array<LuType>): void;
  addCodes(value?: LuType, index?: number): LuType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccessCodesResponce.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccessCodesResponce): GetAccessCodesResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccessCodesResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccessCodesResponce;
  static deserializeBinaryFromReader(message: GetAccessCodesResponce, reader: jspb.BinaryReader): GetAccessCodesResponce;
}

export namespace GetAccessCodesResponce {
  export type AsObject = {
    codesList: Array<LuType.AsObject>,
  }
}

export class GetHafzaRequest extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHafzaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHafzaRequest): GetHafzaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHafzaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHafzaRequest;
  static deserializeBinaryFromReader(message: GetHafzaRequest, reader: jspb.BinaryReader): GetHafzaRequest;
}

export namespace GetHafzaRequest {
  export type AsObject = {
    deviceid?: string,
  }
}

export class GetHafzaReponce extends jspb.Message {
  clearReceiptsList(): void;
  getReceiptsList(): Array<Receipt>;
  setReceiptsList(value: Array<Receipt>): void;
  addReceipts(value?: Receipt, index?: number): Receipt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHafzaReponce.AsObject;
  static toObject(includeInstance: boolean, msg: GetHafzaReponce): GetHafzaReponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHafzaReponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHafzaReponce;
  static deserializeBinaryFromReader(message: GetHafzaReponce, reader: jspb.BinaryReader): GetHafzaReponce;
}

export namespace GetHafzaReponce {
  export type AsObject = {
    receiptsList: Array<Receipt.AsObject>,
  }
}

export class GetCollectionReportRequest extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  hasBilngdate(): boolean;
  clearBilngdate(): void;
  getBilngdate(): string | undefined;
  setBilngdate(value: string): void;

  hasDeliverydate(): boolean;
  clearDeliverydate(): void;
  getDeliverydate(): string | undefined;
  setDeliverydate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollectionReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollectionReportRequest): GetCollectionReportRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCollectionReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollectionReportRequest;
  static deserializeBinaryFromReader(message: GetCollectionReportRequest, reader: jspb.BinaryReader): GetCollectionReportRequest;
}

export namespace GetCollectionReportRequest {
  export type AsObject = {
    deviceid?: string,
    billgroup?: string,
    bookno?: string,
    walkno?: string,
    bilngdate?: string,
    deliverydate?: string,
  }
}

export class GetCollectionReportResponce extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<CollectionReport>;
  setDataList(value: Array<CollectionReport>): void;
  addData(value?: CollectionReport, index?: number): CollectionReport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollectionReportResponce.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollectionReportResponce): GetCollectionReportResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCollectionReportResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollectionReportResponce;
  static deserializeBinaryFromReader(message: GetCollectionReportResponce, reader: jspb.BinaryReader): GetCollectionReportResponce;
}

export namespace GetCollectionReportResponce {
  export type AsObject = {
    dataList: Array<CollectionReport.AsObject>,
  }
}

export class DepositRecord extends jspb.Message {
  hasDepositdate(): boolean;
  clearDepositdate(): void;
  getDepositdate(): string | undefined;
  setDepositdate(value: string): void;

  hasCount(): boolean;
  clearCount(): void;
  getCount(): number | undefined;
  setCount(value: number): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositRecord.AsObject;
  static toObject(includeInstance: boolean, msg: DepositRecord): DepositRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DepositRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositRecord;
  static deserializeBinaryFromReader(message: DepositRecord, reader: jspb.BinaryReader): DepositRecord;
}

export namespace DepositRecord {
  export type AsObject = {
    depositdate?: string,
    count?: number,
    amount?: number,
  }
}

export class GetDepositsRequest extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDepositsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDepositsRequest): GetDepositsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDepositsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDepositsRequest;
  static deserializeBinaryFromReader(message: GetDepositsRequest, reader: jspb.BinaryReader): GetDepositsRequest;
}

export namespace GetDepositsRequest {
  export type AsObject = {
    deviceid?: string,
  }
}

export class GetDepositsResponce extends jspb.Message {
  clearDepositsList(): void;
  getDepositsList(): Array<DepositRecord>;
  setDepositsList(value: Array<DepositRecord>): void;
  addDeposits(value?: DepositRecord, index?: number): DepositRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDepositsResponce.AsObject;
  static toObject(includeInstance: boolean, msg: GetDepositsResponce): GetDepositsResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDepositsResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDepositsResponce;
  static deserializeBinaryFromReader(message: GetDepositsResponce, reader: jspb.BinaryReader): GetDepositsResponce;
}

export namespace GetDepositsResponce {
  export type AsObject = {
    depositsList: Array<DepositRecord.AsObject>,
  }
}

export class LasDepositDate extends jspb.Message {
  hasDepositdate(): boolean;
  clearDepositdate(): void;
  getDepositdate(): string | undefined;
  setDepositdate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LasDepositDate.AsObject;
  static toObject(includeInstance: boolean, msg: LasDepositDate): LasDepositDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LasDepositDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LasDepositDate;
  static deserializeBinaryFromReader(message: LasDepositDate, reader: jspb.BinaryReader): LasDepositDate;
}

export namespace LasDepositDate {
  export type AsObject = {
    depositdate?: string,
  }
}

export class DeviceSettingRequest extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceSettingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceSettingRequest): DeviceSettingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceSettingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceSettingRequest;
  static deserializeBinaryFromReader(message: DeviceSettingRequest, reader: jspb.BinaryReader): DeviceSettingRequest;
}

export namespace DeviceSettingRequest {
  export type AsObject = {
    deviceid?: string,
  }
}

export class DeviceSettingResponce extends jspb.Message {
  hasLocationinterval(): boolean;
  clearLocationinterval(): void;
  getLocationinterval(): number | undefined;
  setLocationinterval(value: number): void;

  hasPinginterval(): boolean;
  clearPinginterval(): void;
  getPinginterval(): number | undefined;
  setPinginterval(value: number): void;

  hasInvoicereport(): boolean;
  clearInvoicereport(): void;
  getInvoicereport(): string | undefined;
  setInvoicereport(value: string): void;

  hasPreinvoicereport(): boolean;
  clearPreinvoicereport(): void;
  getPreinvoicereport(): string | undefined;
  setPreinvoicereport(value: string): void;

  hasLogo(): boolean;
  clearLogo(): void;
  getLogo(): string | undefined;
  setLogo(value: string): void;

  hasCompanyname(): boolean;
  clearCompanyname(): void;
  getCompanyname(): string | undefined;
  setCompanyname(value: string): void;

  hasSectorname(): boolean;
  clearSectorname(): void;
  getSectorname(): string | undefined;
  setSectorname(value: string): void;

  hasPartialreport(): boolean;
  clearPartialreport(): void;
  getPartialreport(): string | undefined;
  setPartialreport(value: string): void;

  hasEnablepartialcollection(): boolean;
  clearEnablepartialcollection(): void;
  getEnablepartialcollection(): boolean | undefined;
  setEnablepartialcollection(value: boolean): void;

  hasEnableprinting(): boolean;
  clearEnableprinting(): void;
  getEnableprinting(): boolean | undefined;
  setEnableprinting(value: boolean): void;

  hasStablelocationtimeout(): boolean;
  clearStablelocationtimeout(): void;
  getStablelocationtimeout(): number | undefined;
  setStablelocationtimeout(value: number): void;

  hasEnablewebsockets(): boolean;
  clearEnablewebsockets(): void;
  getEnablewebsockets(): boolean | undefined;
  setEnablewebsockets(value: boolean): void;

  hasListreport(): boolean;
  clearListreport(): void;
  getListreport(): string | undefined;
  setListreport(value: string): void;

  hasCustkeytitle(): boolean;
  clearCustkeytitle(): void;
  getCustkeytitle(): string | undefined;
  setCustkeytitle(value: string): void;

  hasPropreftitle(): boolean;
  clearPropreftitle(): void;
  getPropreftitle(): string | undefined;
  setPropreftitle(value: string): void;

  hasOldkeytitle(): boolean;
  clearOldkeytitle(): void;
  getOldkeytitle(): string | undefined;
  setOldkeytitle(value: string): void;

  hasEnablemincharge(): boolean;
  clearEnablemincharge(): void;
  getEnablemincharge(): boolean | undefined;
  setEnablemincharge(value: boolean): void;

  hasEnablecamera(): boolean;
  clearEnablecamera(): void;
  getEnablecamera(): boolean | undefined;
  setEnablecamera(value: boolean): void;

  hasEnableqnb(): boolean;
  clearEnableqnb(): void;
  getEnableqnb(): boolean | undefined;
  setEnableqnb(value: boolean): void;

  hasEnablenfc(): boolean;
  clearEnablenfc(): void;
  getEnablenfc(): boolean | undefined;
  setEnablenfc(value: boolean): void;

  hasHidestmreading(): boolean;
  clearHidestmreading(): void;
  getHidestmreading(): boolean | undefined;
  setHidestmreading(value: boolean): void;

  hasUpgrademode(): boolean;
  clearUpgrademode(): void;
  getUpgrademode(): UpgradeModeMap[keyof UpgradeModeMap] | undefined;
  setUpgrademode(value: UpgradeModeMap[keyof UpgradeModeMap]): void;

  hasEnabledevicelocation(): boolean;
  clearEnabledevicelocation(): void;
  getEnabledevicelocation(): boolean | undefined;
  setEnabledevicelocation(value: boolean): void;

  hasEnablemessaging(): boolean;
  clearEnablemessaging(): void;
  getEnablemessaging(): boolean | undefined;
  setEnablemessaging(value: boolean): void;

  hasEnablecdu(): boolean;
  clearEnablecdu(): void;
  getEnablecdu(): boolean | undefined;
  setEnablecdu(value: boolean): void;

  hasIsaccumulated(): boolean;
  clearIsaccumulated(): void;
  getIsaccumulated(): boolean | undefined;
  setIsaccumulated(value: boolean): void;

  hasIsfawry(): boolean;
  clearIsfawry(): void;
  getIsfawry(): boolean | undefined;
  setIsfawry(value: boolean): void;

  hasCduHost(): boolean;
  clearCduHost(): void;
  getCduHost(): string | undefined;
  setCduHost(value: string): void;

  hasRandomlymeterpicture(): boolean;
  clearRandomlymeterpicture(): void;
  getRandomlymeterpicture(): boolean | undefined;
  setRandomlymeterpicture(value: boolean): void;

  hasHhPassword(): boolean;
  clearHhPassword(): void;
  getHhPassword(): string | undefined;
  setHhPassword(value: string): void;

  hasFawryUsername(): boolean;
  clearFawryUsername(): void;
  getFawryUsername(): string | undefined;
  setFawryUsername(value: string): void;

  hasFawryPassword(): boolean;
  clearFawryPassword(): void;
  getFawryPassword(): string | undefined;
  setFawryPassword(value: string): void;

  hasListLength(): boolean;
  clearListLength(): void;
  getListLength(): number | undefined;
  setListLength(value: number): void;

  hasPrelistinvoicereport(): boolean;
  clearPrelistinvoicereport(): void;
  getPrelistinvoicereport(): string | undefined;
  setPrelistinvoicereport(value: string): void;

  hasEnableVisa(): boolean;
  clearEnableVisa(): void;
  getEnableVisa(): boolean | undefined;
  setEnableVisa(value: boolean): void;

  hasImageQuality(): boolean;
  clearImageQuality(): void;
  getImageQuality(): string | undefined;
  setImageQuality(value: string): void;

  hasImageWidth(): boolean;
  clearImageWidth(): void;
  getImageWidth(): string | undefined;
  setImageWidth(value: string): void;

  hasImageHeight(): boolean;
  clearImageHeight(): void;
  getImageHeight(): string | undefined;
  setImageHeight(value: string): void;

  hasRandomlyMeterPicturePercent(): boolean;
  clearRandomlyMeterPicturePercent(): void;
  getRandomlyMeterPicturePercent(): number | undefined;
  setRandomlyMeterPicturePercent(value: number): void;

  hasDeleteHhStatement(): boolean;
  clearDeleteHhStatement(): void;
  getDeleteHhStatement(): boolean | undefined;
  setDeleteHhStatement(value: boolean): void;

  hasEnableTransFees(): boolean;
  clearEnableTransFees(): void;
  getEnableTransFees(): boolean | undefined;
  setEnableTransFees(value: boolean): void;

  hasFeesAmount(): boolean;
  clearFeesAmount(): void;
  getFeesAmount(): number | undefined;
  setFeesAmount(value: number): void;

  hasMoodParBill(): boolean;
  clearMoodParBill(): void;
  getMoodParBill(): boolean | undefined;
  setMoodParBill(value: boolean): void;

  hasDepositDuration(): boolean;
  clearDepositDuration(): void;
  getDepositDuration(): number | undefined;
  setDepositDuration(value: number): void;

  hasOfflinePeriod(): boolean;
  clearOfflinePeriod(): void;
  getOfflinePeriod(): number | undefined;
  setOfflinePeriod(value: number): void;

  hasHhMinCloseBalance(): boolean;
  clearHhMinCloseBalance(): void;
  getHhMinCloseBalance(): number | undefined;
  setHhMinCloseBalance(value: number): void;

  hasPrintQuality(): boolean;
  clearPrintQuality(): void;
  getPrintQuality(): number | undefined;
  setPrintQuality(value: number): void;

  hasMeterNote(): boolean;
  clearMeterNote(): void;
  getMeterNote(): boolean | undefined;
  setMeterNote(value: boolean): void;

  hasReadingDescription(): boolean;
  clearReadingDescription(): void;
  getReadingDescription(): boolean | undefined;
  setReadingDescription(value: boolean): void;

  hasBillsCountAllowedOffline(): boolean;
  clearBillsCountAllowedOffline(): void;
  getBillsCountAllowedOffline(): number | undefined;
  setBillsCountAllowedOffline(value: number): void;

  hasRequireImageCapture(): boolean;
  clearRequireImageCapture(): void;
  getRequireImageCapture(): boolean | undefined;
  setRequireImageCapture(value: boolean): void;

  hasRequireNoUnits(): boolean;
  clearRequireNoUnits(): void;
  getRequireNoUnits(): boolean | undefined;
  setRequireNoUnits(value: boolean): void;

  hasRequireCtype(): boolean;
  clearRequireCtype(): void;
  getRequireCtype(): boolean | undefined;
  setRequireCtype(value: boolean): void;

  hasRequireSewer(): boolean;
  clearRequireSewer(): void;
  getRequireSewer(): boolean | undefined;
  setRequireSewer(value: boolean): void;

  hasRequireNotionalId(): boolean;
  clearRequireNotionalId(): void;
  getRequireNotionalId(): boolean | undefined;
  setRequireNotionalId(value: boolean): void;

  hasRequireTelephoneNo(): boolean;
  clearRequireTelephoneNo(): void;
  getRequireTelephoneNo(): boolean | undefined;
  setRequireTelephoneNo(value: boolean): void;

  hasRequireCommercialRef(): boolean;
  clearRequireCommercialRef(): void;
  getRequireCommercialRef(): boolean | undefined;
  setRequireCommercialRef(value: boolean): void;

  hasRequireTaxRef(): boolean;
  clearRequireTaxRef(): void;
  getRequireTaxRef(): boolean | undefined;
  setRequireTaxRef(value: boolean): void;

  hasRequireFloorNo(): boolean;
  clearRequireFloorNo(): void;
  getRequireFloorNo(): boolean | undefined;
  setRequireFloorNo(value: boolean): void;

  hasRequireFlatNo(): boolean;
  clearRequireFlatNo(): void;
  getRequireFlatNo(): boolean | undefined;
  setRequireFlatNo(value: boolean): void;

  hasHandHeldAssigne(): boolean;
  clearHandHeldAssigne(): void;
  getHandHeldAssigne(): string | undefined;
  setHandHeldAssigne(value: string): void;

  hasDirCollection(): boolean;
  clearDirCollection(): void;
  getDirCollection(): number | undefined;
  setDirCollection(value: number): void;

  hasQuota(): boolean;
  clearQuota(): void;
  getQuota(): number | undefined;
  setQuota(value: number): void;

  hasDepositsQuota(): boolean;
  clearDepositsQuota(): void;
  getDepositsQuota(): number | undefined;
  setDepositsQuota(value: number): void;

  hasReadingPercent(): boolean;
  clearReadingPercent(): void;
  getReadingPercent(): number | undefined;
  setReadingPercent(value: number): void;

  hasDayReadingPercent(): boolean;
  clearDayReadingPercent(): void;
  getDayReadingPercent(): number | undefined;
  setDayReadingPercent(value: number): void;

  hasUpdModifiedCustomers(): boolean;
  clearUpdModifiedCustomers(): void;
  getUpdModifiedCustomers(): boolean | undefined;
  setUpdModifiedCustomers(value: boolean): void;

  hasAllowOverPayment(): boolean;
  clearAllowOverPayment(): void;
  getAllowOverPayment(): boolean | undefined;
  setAllowOverPayment(value: boolean): void;

  hasCloseReadingCycle(): boolean;
  clearCloseReadingCycle(): void;
  getCloseReadingCycle(): boolean | undefined;
  setCloseReadingCycle(value: boolean): void;

  hasCloseCollectionCycle(): boolean;
  clearCloseCollectionCycle(): void;
  getCloseCollectionCycle(): boolean | undefined;
  setCloseCollectionCycle(value: boolean): void;

  hasEnableJwt(): boolean;
  clearEnableJwt(): void;
  getEnableJwt(): boolean | undefined;
  setEnableJwt(value: boolean): void;

  hasGatewayJwt(): boolean;
  clearGatewayJwt(): void;
  getGatewayJwt(): string | undefined;
  setGatewayJwt(value: string): void;

  hasDepositDurationExtraDayes(): boolean;
  clearDepositDurationExtraDayes(): void;
  getDepositDurationExtraDayes(): number | undefined;
  setDepositDurationExtraDayes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceSettingResponce.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceSettingResponce): DeviceSettingResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceSettingResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceSettingResponce;
  static deserializeBinaryFromReader(message: DeviceSettingResponce, reader: jspb.BinaryReader): DeviceSettingResponce;
}

export namespace DeviceSettingResponce {
  export type AsObject = {
    locationinterval?: number,
    pinginterval?: number,
    invoicereport?: string,
    preinvoicereport?: string,
    logo?: string,
    companyname?: string,
    sectorname?: string,
    partialreport?: string,
    enablepartialcollection?: boolean,
    enableprinting?: boolean,
    stablelocationtimeout?: number,
    enablewebsockets?: boolean,
    listreport?: string,
    custkeytitle?: string,
    propreftitle?: string,
    oldkeytitle?: string,
    enablemincharge?: boolean,
    enablecamera?: boolean,
    enableqnb?: boolean,
    enablenfc?: boolean,
    hidestmreading?: boolean,
    upgrademode?: UpgradeModeMap[keyof UpgradeModeMap],
    enabledevicelocation?: boolean,
    enablemessaging?: boolean,
    enablecdu?: boolean,
    isaccumulated?: boolean,
    isfawry?: boolean,
    cduHost?: string,
    randomlymeterpicture?: boolean,
    hhPassword?: string,
    fawryUsername?: string,
    fawryPassword?: string,
    listLength?: number,
    prelistinvoicereport?: string,
    enableVisa?: boolean,
    imageQuality?: string,
    imageWidth?: string,
    imageHeight?: string,
    randomlyMeterPicturePercent?: number,
    deleteHhStatement?: boolean,
    enableTransFees?: boolean,
    feesAmount?: number,
    moodParBill?: boolean,
    depositDuration?: number,
    offlinePeriod?: number,
    hhMinCloseBalance?: number,
    printQuality?: number,
    meterNote?: boolean,
    readingDescription?: boolean,
    billsCountAllowedOffline?: number,
    requireImageCapture?: boolean,
    requireNoUnits?: boolean,
    requireCtype?: boolean,
    requireSewer?: boolean,
    requireNotionalId?: boolean,
    requireTelephoneNo?: boolean,
    requireCommercialRef?: boolean,
    requireTaxRef?: boolean,
    requireFloorNo?: boolean,
    requireFlatNo?: boolean,
    handHeldAssigne?: string,
    dirCollection?: number,
    quota?: number,
    depositsQuota?: number,
    readingPercent?: number,
    dayReadingPercent?: number,
    updModifiedCustomers?: boolean,
    allowOverPayment?: boolean,
    closeReadingCycle?: boolean,
    closeCollectionCycle?: boolean,
    enableJwt?: boolean,
    gatewayJwt?: string,
    depositDurationExtraDayes?: number,
  }
}

export class FIELDS_VALIDATION extends jspb.Message {
  hasFieldname(): boolean;
  clearFieldname(): void;
  getFieldname(): string | undefined;
  setFieldname(value: string): void;

  hasFielddescription(): boolean;
  clearFielddescription(): void;
  getFielddescription(): string | undefined;
  setFielddescription(value: string): void;

  hasIsrequired(): boolean;
  clearIsrequired(): void;
  getIsrequired(): boolean | undefined;
  setIsrequired(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FIELDS_VALIDATION.AsObject;
  static toObject(includeInstance: boolean, msg: FIELDS_VALIDATION): FIELDS_VALIDATION.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FIELDS_VALIDATION, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FIELDS_VALIDATION;
  static deserializeBinaryFromReader(message: FIELDS_VALIDATION, reader: jspb.BinaryReader): FIELDS_VALIDATION;
}

export namespace FIELDS_VALIDATION {
  export type AsObject = {
    fieldname?: string,
    fielddescription?: string,
    isrequired?: boolean,
  }
}

export class DeviceDataBaseBackupRequest extends jspb.Message {
  hasBackup(): boolean;
  clearBackup(): void;
  getBackup(): string | undefined;
  setBackup(value: string): void;

  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceDataBaseBackupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceDataBaseBackupRequest): DeviceDataBaseBackupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceDataBaseBackupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceDataBaseBackupRequest;
  static deserializeBinaryFromReader(message: DeviceDataBaseBackupRequest, reader: jspb.BinaryReader): DeviceDataBaseBackupRequest;
}

export namespace DeviceDataBaseBackupRequest {
  export type AsObject = {
    backup?: string,
    deviceid?: string,
  }
}

export class DeviceDataBaseBackupResponce extends jspb.Message {
  hasIssuccssed(): boolean;
  clearIssuccssed(): void;
  getIssuccssed(): boolean | undefined;
  setIssuccssed(value: boolean): void;

  hasErrormessage(): boolean;
  clearErrormessage(): void;
  getErrormessage(): string | undefined;
  setErrormessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceDataBaseBackupResponce.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceDataBaseBackupResponce): DeviceDataBaseBackupResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceDataBaseBackupResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceDataBaseBackupResponce;
  static deserializeBinaryFromReader(message: DeviceDataBaseBackupResponce, reader: jspb.BinaryReader): DeviceDataBaseBackupResponce;
}

export namespace DeviceDataBaseBackupResponce {
  export type AsObject = {
    issuccssed?: boolean,
    errormessage?: string,
  }
}

export class CancelReceiptRequest extends jspb.Message {
  hasPaymentno(): boolean;
  clearPaymentno(): void;
  getPaymentno(): string | undefined;
  setPaymentno(value: string): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasCollectionid(): boolean;
  clearCollectionid(): void;
  getCollectionid(): number | undefined;
  setCollectionid(value: number): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  hasCollectiondate(): boolean;
  clearCollectiondate(): void;
  getCollectiondate(): string | undefined;
  setCollectiondate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelReceiptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelReceiptRequest): CancelReceiptRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelReceiptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelReceiptRequest;
  static deserializeBinaryFromReader(message: CancelReceiptRequest, reader: jspb.BinaryReader): CancelReceiptRequest;
}

export namespace CancelReceiptRequest {
  export type AsObject = {
    paymentno?: string,
    custkey?: string,
    collectionid?: number,
    amount?: number,
    collectiondate?: string,
  }
}

export class CancelReceiptResponce extends jspb.Message {
  hasIssuccssed(): boolean;
  clearIssuccssed(): void;
  getIssuccssed(): boolean | undefined;
  setIssuccssed(value: boolean): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): string | undefined;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelReceiptResponce.AsObject;
  static toObject(includeInstance: boolean, msg: CancelReceiptResponce): CancelReceiptResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelReceiptResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelReceiptResponce;
  static deserializeBinaryFromReader(message: CancelReceiptResponce, reader: jspb.BinaryReader): CancelReceiptResponce;
}

export namespace CancelReceiptResponce {
  export type AsObject = {
    issuccssed?: boolean,
    message?: string,
  }
}

export class GetApkInfoRequest extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApkInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetApkInfoRequest): GetApkInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetApkInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApkInfoRequest;
  static deserializeBinaryFromReader(message: GetApkInfoRequest, reader: jspb.BinaryReader): GetApkInfoRequest;
}

export namespace GetApkInfoRequest {
  export type AsObject = {
    deviceid?: string,
  }
}

export class GetApkInfoResponce extends jspb.Message {
  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): string | undefined;
  setVersion(value: string): void;

  hasRefurl(): boolean;
  clearRefurl(): void;
  getRefurl(): string | undefined;
  setRefurl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApkInfoResponce.AsObject;
  static toObject(includeInstance: boolean, msg: GetApkInfoResponce): GetApkInfoResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetApkInfoResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApkInfoResponce;
  static deserializeBinaryFromReader(message: GetApkInfoResponce, reader: jspb.BinaryReader): GetApkInfoResponce;
}

export namespace GetApkInfoResponce {
  export type AsObject = {
    version?: string,
    refurl?: string,
  }
}

export class ConsumpType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string | undefined;
  setId(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumpType.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumpType): ConsumpType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsumpType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumpType;
  static deserializeBinaryFromReader(message: ConsumpType, reader: jspb.BinaryReader): ConsumpType;
}

export namespace ConsumpType {
  export type AsObject = {
    id?: string,
    description?: string,
  }
}

export class ConsumpTypesResponce extends jspb.Message {
  clearConsumptypesList(): void;
  getConsumptypesList(): Array<ConsumpType>;
  setConsumptypesList(value: Array<ConsumpType>): void;
  addConsumptypes(value?: ConsumpType, index?: number): ConsumpType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumpTypesResponce.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumpTypesResponce): ConsumpTypesResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsumpTypesResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumpTypesResponce;
  static deserializeBinaryFromReader(message: ConsumpTypesResponce, reader: jspb.BinaryReader): ConsumpTypesResponce;
}

export namespace ConsumpTypesResponce {
  export type AsObject = {
    consumptypesList: Array<ConsumpType.AsObject>,
  }
}

export class PrintLogMessage extends jspb.Message {
  hasPrintdate(): boolean;
  clearPrintdate(): void;
  getPrintdate(): string | undefined;
  setPrintdate(value: string): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPaymentno(): boolean;
  clearPaymentno(): void;
  getPaymentno(): string | undefined;
  setPaymentno(value: string): void;

  hasCycleid(): boolean;
  clearCycleid(): void;
  getCycleid(): number | undefined;
  setCycleid(value: number): void;

  hasLat(): boolean;
  clearLat(): void;
  getLat(): number | undefined;
  setLat(value: number): void;

  hasLng(): boolean;
  clearLng(): void;
  getLng(): number | undefined;
  setLng(value: number): void;

  hasEmpid(): boolean;
  clearEmpid(): void;
  getEmpid(): number | undefined;
  setEmpid(value: number): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): number | undefined;
  setStatus(value: number): void;

  hasPrinttype(): boolean;
  clearPrinttype(): void;
  getPrinttype(): number | undefined;
  setPrinttype(value: number): void;

  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrintLogMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PrintLogMessage): PrintLogMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrintLogMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrintLogMessage;
  static deserializeBinaryFromReader(message: PrintLogMessage, reader: jspb.BinaryReader): PrintLogMessage;
}

export namespace PrintLogMessage {
  export type AsObject = {
    printdate?: string,
    custkey?: string,
    paymentno?: string,
    cycleid?: number,
    lat?: number,
    lng?: number,
    empid?: number,
    status?: number,
    printtype?: number,
    id?: number,
  }
}

export class PrintLogRequest extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  clearPrintlogsList(): void;
  getPrintlogsList(): Array<PrintLogMessage>;
  setPrintlogsList(value: Array<PrintLogMessage>): void;
  addPrintlogs(value?: PrintLogMessage, index?: number): PrintLogMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrintLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PrintLogRequest): PrintLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrintLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrintLogRequest;
  static deserializeBinaryFromReader(message: PrintLogRequest, reader: jspb.BinaryReader): PrintLogRequest;
}

export namespace PrintLogRequest {
  export type AsObject = {
    deviceid?: string,
    printlogsList: Array<PrintLogMessage.AsObject>,
  }
}

export class PrintLogResponce extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  hasIsSuccssed(): boolean;
  clearIsSuccssed(): void;
  getIsSuccssed(): boolean | undefined;
  setIsSuccssed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrintLogResponce.AsObject;
  static toObject(includeInstance: boolean, msg: PrintLogResponce): PrintLogResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrintLogResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrintLogResponce;
  static deserializeBinaryFromReader(message: PrintLogResponce, reader: jspb.BinaryReader): PrintLogResponce;
}

export namespace PrintLogResponce {
  export type AsObject = {
    deviceid?: string,
    isSuccssed?: boolean,
  }
}

export class DashboardMessageItem extends jspb.Message {
  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): number | undefined;
  setValue(value: number): void;

  hasSubValue(): boolean;
  clearSubValue(): void;
  getSubValue(): number | undefined;
  setSubValue(value: number): void;

  hasSubDescription(): boolean;
  clearSubDescription(): void;
  getSubDescription(): string | undefined;
  setSubDescription(value: string): void;

  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardMessageItem.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardMessageItem): DashboardMessageItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardMessageItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardMessageItem;
  static deserializeBinaryFromReader(message: DashboardMessageItem, reader: jspb.BinaryReader): DashboardMessageItem;
}

export namespace DashboardMessageItem {
  export type AsObject = {
    description?: string,
    value?: number,
    subValue?: number,
    subDescription?: string,
    stationNo?: number,
  }
}

export class DashboardMessage extends jspb.Message {
  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): string | undefined;
  setCategory(value: string): void;

  clearItemsList(): void;
  getItemsList(): Array<DashboardMessageItem>;
  setItemsList(value: Array<DashboardMessageItem>): void;
  addItems(value?: DashboardMessageItem, index?: number): DashboardMessageItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardMessage): DashboardMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardMessage;
  static deserializeBinaryFromReader(message: DashboardMessage, reader: jspb.BinaryReader): DashboardMessage;
}

export namespace DashboardMessage {
  export type AsObject = {
    category?: string,
    itemsList: Array<DashboardMessageItem.AsObject>,
  }
}

export class DashboardRequest extends jspb.Message {
  hasUserid(): boolean;
  clearUserid(): void;
  getUserid(): number | undefined;
  setUserid(value: number): void;

  hasEmpid(): boolean;
  clearEmpid(): void;
  getEmpid(): number | undefined;
  setEmpid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardRequest): DashboardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardRequest;
  static deserializeBinaryFromReader(message: DashboardRequest, reader: jspb.BinaryReader): DashboardRequest;
}

export namespace DashboardRequest {
  export type AsObject = {
    userid?: number,
    empid?: number,
  }
}

export class DashboardResponce extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<DashboardMessage>;
  setMessagesList(value: Array<DashboardMessage>): void;
  addMessages(value?: DashboardMessage, index?: number): DashboardMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardResponce.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardResponce): DashboardResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardResponce;
  static deserializeBinaryFromReader(message: DashboardResponce, reader: jspb.BinaryReader): DashboardResponce;
}

export namespace DashboardResponce {
  export type AsObject = {
    messagesList: Array<DashboardMessage.AsObject>,
  }
}

export class UnPostedSummaryData extends jspb.Message {
  hasCollectedAmount(): boolean;
  clearCollectedAmount(): void;
  getCollectedAmount(): number | undefined;
  setCollectedAmount(value: number): void;

  hasCollectedCount(): boolean;
  clearCollectedCount(): void;
  getCollectedCount(): number | undefined;
  setCollectedCount(value: number): void;

  hasDeliveryDate(): boolean;
  clearDeliveryDate(): void;
  getDeliveryDate(): string | undefined;
  setDeliveryDate(value: string): void;

  hasCollectorName(): boolean;
  clearCollectorName(): void;
  getCollectorName(): string | undefined;
  setCollectorName(value: string): void;

  hasIsCollectedByOwner(): boolean;
  clearIsCollectedByOwner(): void;
  getIsCollectedByOwner(): boolean | undefined;
  setIsCollectedByOwner(value: boolean): void;

  hasIsCollectedByOther(): boolean;
  clearIsCollectedByOther(): void;
  getIsCollectedByOther(): boolean | undefined;
  setIsCollectedByOther(value: boolean): void;

  hasIsHhPrinting(): boolean;
  clearIsHhPrinting(): void;
  getIsHhPrinting(): boolean | undefined;
  setIsHhPrinting(value: boolean): void;

  hasLastForCollectCycle(): boolean;
  clearLastForCollectCycle(): void;
  getLastForCollectCycle(): boolean | undefined;
  setLastForCollectCycle(value: boolean): void;

  hasIsCody(): boolean;
  clearIsCody(): void;
  getIsCody(): boolean | undefined;
  setIsCody(value: boolean): void;

  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasStationName(): boolean;
  clearStationName(): void;
  getStationName(): string | undefined;
  setStationName(value: string): void;

  hasEmpId(): boolean;
  clearEmpId(): void;
  getEmpId(): number | undefined;
  setEmpId(value: number): void;

  hasIssuedAmount(): boolean;
  clearIssuedAmount(): void;
  getIssuedAmount(): number | undefined;
  setIssuedAmount(value: number): void;

  hasIssuedCount(): boolean;
  clearIssuedCount(): void;
  getIssuedCount(): number | undefined;
  setIssuedCount(value: number): void;

  hasHasErorr(): boolean;
  clearHasErorr(): void;
  getHasErorr(): boolean | undefined;
  setHasErorr(value: boolean): void;

  hasStampDate(): boolean;
  clearStampDate(): void;
  getStampDate(): string | undefined;
  setStampDate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnPostedSummaryData.AsObject;
  static toObject(includeInstance: boolean, msg: UnPostedSummaryData): UnPostedSummaryData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnPostedSummaryData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnPostedSummaryData;
  static deserializeBinaryFromReader(message: UnPostedSummaryData, reader: jspb.BinaryReader): UnPostedSummaryData;
}

export namespace UnPostedSummaryData {
  export type AsObject = {
    collectedAmount?: number,
    collectedCount?: number,
    deliveryDate?: string,
    collectorName?: string,
    isCollectedByOwner?: boolean,
    isCollectedByOther?: boolean,
    isHhPrinting?: boolean,
    lastForCollectCycle?: boolean,
    isCody?: boolean,
    stationNo?: number,
    stationName?: string,
    empId?: number,
    issuedAmount?: number,
    issuedCount?: number,
    hasErorr?: boolean,
    stampDate?: string,
  }
}

export class UnPostedSummaryResponce extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<UnPostedSummaryData>;
  setMessagesList(value: Array<UnPostedSummaryData>): void;
  addMessages(value?: UnPostedSummaryData, index?: number): UnPostedSummaryData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnPostedSummaryResponce.AsObject;
  static toObject(includeInstance: boolean, msg: UnPostedSummaryResponce): UnPostedSummaryResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnPostedSummaryResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnPostedSummaryResponce;
  static deserializeBinaryFromReader(message: UnPostedSummaryResponce, reader: jspb.BinaryReader): UnPostedSummaryResponce;
}

export namespace UnPostedSummaryResponce {
  export type AsObject = {
    messagesList: Array<UnPostedSummaryData.AsObject>,
  }
}

export class ValidateReceiptRequest extends jspb.Message {
  hasCollectionid(): boolean;
  clearCollectionid(): void;
  getCollectionid(): number | undefined;
  setCollectionid(value: number): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPaymentno(): boolean;
  clearPaymentno(): void;
  getPaymentno(): string | undefined;
  setPaymentno(value: string): void;

  hasCycleid(): boolean;
  clearCycleid(): void;
  getCycleid(): number | undefined;
  setCycleid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateReceiptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateReceiptRequest): ValidateReceiptRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateReceiptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateReceiptRequest;
  static deserializeBinaryFromReader(message: ValidateReceiptRequest, reader: jspb.BinaryReader): ValidateReceiptRequest;
}

export namespace ValidateReceiptRequest {
  export type AsObject = {
    collectionid?: number,
    amount?: number,
    custkey?: string,
    paymentno?: string,
    cycleid?: number,
  }
}

export class ValidateTransFeeRequest extends jspb.Message {
  hasCollectionid(): boolean;
  clearCollectionid(): void;
  getCollectionid(): number | undefined;
  setCollectionid(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateTransFeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateTransFeeRequest): ValidateTransFeeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateTransFeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateTransFeeRequest;
  static deserializeBinaryFromReader(message: ValidateTransFeeRequest, reader: jspb.BinaryReader): ValidateTransFeeRequest;
}

export namespace ValidateTransFeeRequest {
  export type AsObject = {
    collectionid?: number,
    custkey?: string,
  }
}

export class ValidateTransFeeResponce extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ValidateTransFeeRequest;
  setRequest(value?: ValidateTransFeeRequest): void;

  hasIssuccssed(): boolean;
  clearIssuccssed(): void;
  getIssuccssed(): boolean | undefined;
  setIssuccssed(value: boolean): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): string | undefined;
  setMessage(value: string): void;

  hasCollectionId(): boolean;
  clearCollectionId(): void;
  getCollectionId(): number | undefined;
  setCollectionId(value: number): void;

  hasTransId(): boolean;
  clearTransId(): void;
  getTransId(): string | undefined;
  setTransId(value: string): void;

  hasCancel(): boolean;
  clearCancel(): void;
  getCancel(): number | undefined;
  setCancel(value: number): void;

  hasCancelBy(): boolean;
  clearCancelBy(): void;
  getCancelBy(): string | undefined;
  setCancelBy(value: string): void;

  hasCancelReason(): boolean;
  clearCancelReason(): void;
  getCancelReason(): string | undefined;
  setCancelReason(value: string): void;

  hasDepositId(): boolean;
  clearDepositId(): void;
  getDepositId(): number | undefined;
  setDepositId(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasPaymentno(): boolean;
  clearPaymentno(): void;
  getPaymentno(): string | undefined;
  setPaymentno(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateTransFeeResponce.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateTransFeeResponce): ValidateTransFeeResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateTransFeeResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateTransFeeResponce;
  static deserializeBinaryFromReader(message: ValidateTransFeeResponce, reader: jspb.BinaryReader): ValidateTransFeeResponce;
}

export namespace ValidateTransFeeResponce {
  export type AsObject = {
    request: ValidateTransFeeRequest.AsObject,
    issuccssed?: boolean,
    message?: string,
    collectionId?: number,
    transId?: string,
    cancel?: number,
    cancelBy?: string,
    cancelReason?: string,
    depositId?: number,
    custkey?: string,
    paymentno?: string,
  }
}

export class ValidateReceiptResponce extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ValidateReceiptRequest;
  setRequest(value?: ValidateReceiptRequest): void;

  hasIssuccssed(): boolean;
  clearIssuccssed(): void;
  getIssuccssed(): boolean | undefined;
  setIssuccssed(value: boolean): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): string | undefined;
  setMessage(value: string): void;

  hasDepositid(): boolean;
  clearDepositid(): void;
  getDepositid(): number | undefined;
  setDepositid(value: number): void;

  hasIscancelled(): boolean;
  clearIscancelled(): void;
  getIscancelled(): boolean | undefined;
  setIscancelled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateReceiptResponce.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateReceiptResponce): ValidateReceiptResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateReceiptResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateReceiptResponce;
  static deserializeBinaryFromReader(message: ValidateReceiptResponce, reader: jspb.BinaryReader): ValidateReceiptResponce;
}

export namespace ValidateReceiptResponce {
  export type AsObject = {
    request: ValidateReceiptRequest.AsObject,
    issuccssed?: boolean,
    message?: string,
    depositid?: number,
    iscancelled?: boolean,
  }
}

export class BackupRequest extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  hasExt(): boolean;
  clearExt(): void;
  getExt(): string | undefined;
  setExt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BackupRequest): BackupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BackupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackupRequest;
  static deserializeBinaryFromReader(message: BackupRequest, reader: jspb.BinaryReader): BackupRequest;
}

export namespace BackupRequest {
  export type AsObject = {
    data: Uint8Array | string,
    deviceid?: string,
    ext?: string,
  }
}

export class BackupResponce extends jspb.Message {
  hasIssuccssed(): boolean;
  clearIssuccssed(): void;
  getIssuccssed(): boolean | undefined;
  setIssuccssed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackupResponce.AsObject;
  static toObject(includeInstance: boolean, msg: BackupResponce): BackupResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BackupResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackupResponce;
  static deserializeBinaryFromReader(message: BackupResponce, reader: jspb.BinaryReader): BackupResponce;
}

export namespace BackupResponce {
  export type AsObject = {
    issuccssed?: boolean,
  }
}

export class CloseWalkRequest extends jspb.Message {
  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookno(): boolean;
  clearBookno(): void;
  getBookno(): string | undefined;
  setBookno(value: string): void;

  hasWalkno(): boolean;
  clearWalkno(): void;
  getWalkno(): string | undefined;
  setWalkno(value: string): void;

  hasCycleid(): boolean;
  clearCycleid(): void;
  getCycleid(): number | undefined;
  setCycleid(value: number): void;

  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseWalkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CloseWalkRequest): CloseWalkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseWalkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseWalkRequest;
  static deserializeBinaryFromReader(message: CloseWalkRequest, reader: jspb.BinaryReader): CloseWalkRequest;
}

export namespace CloseWalkRequest {
  export type AsObject = {
    billgroup?: string,
    bookno?: string,
    walkno?: string,
    cycleid?: number,
    deviceid?: string,
  }
}

export class CloseWalkResponce extends jspb.Message {
  hasIssuccssed(): boolean;
  clearIssuccssed(): void;
  getIssuccssed(): boolean | undefined;
  setIssuccssed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseWalkResponce.AsObject;
  static toObject(includeInstance: boolean, msg: CloseWalkResponce): CloseWalkResponce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseWalkResponce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseWalkResponce;
  static deserializeBinaryFromReader(message: CloseWalkResponce, reader: jspb.BinaryReader): CloseWalkResponce;
}

export namespace CloseWalkResponce {
  export type AsObject = {
    issuccssed?: boolean,
  }
}

export class UploadMetersImagesReq extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  clearImagesList(): void;
  getImagesList(): Array<MeterImage>;
  setImagesList(value: Array<MeterImage>): void;
  addImages(value?: MeterImage, index?: number): MeterImage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadMetersImagesReq.AsObject;
  static toObject(includeInstance: boolean, msg: UploadMetersImagesReq): UploadMetersImagesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadMetersImagesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadMetersImagesReq;
  static deserializeBinaryFromReader(message: UploadMetersImagesReq, reader: jspb.BinaryReader): UploadMetersImagesReq;
}

export namespace UploadMetersImagesReq {
  export type AsObject = {
    deviceid?: string,
    imagesList: Array<MeterImage.AsObject>,
  }
}

export class UploadMetersImagesRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadMetersImagesRes.AsObject;
  static toObject(includeInstance: boolean, msg: UploadMetersImagesRes): UploadMetersImagesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadMetersImagesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadMetersImagesRes;
  static deserializeBinaryFromReader(message: UploadMetersImagesRes, reader: jspb.BinaryReader): UploadMetersImagesRes;
}

export namespace UploadMetersImagesRes {
  export type AsObject = {
  }
}

export class Survey extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): string | undefined;
  setAddress(value: string): void;

  hasNounits(): boolean;
  clearNounits(): void;
  getNounits(): number | undefined;
  setNounits(value: number): void;

  hasCtype(): boolean;
  clearCtype(): void;
  getCtype(): string | undefined;
  setCtype(value: string): void;

  hasHavesewer(): boolean;
  clearHavesewer(): void;
  getHavesewer(): boolean | undefined;
  setHavesewer(value: boolean): void;

  hasTelephone(): boolean;
  clearTelephone(): void;
  getTelephone(): string | undefined;
  setTelephone(value: string): void;

  hasNid(): boolean;
  clearNid(): void;
  getNid(): string | undefined;
  setNid(value: string): void;

  hasLat(): boolean;
  clearLat(): void;
  getLat(): number | undefined;
  setLat(value: number): void;

  hasLng(): boolean;
  clearLng(): void;
  getLng(): number | undefined;
  setLng(value: number): void;

  hasAccurecy(): boolean;
  clearAccurecy(): void;
  getAccurecy(): number | undefined;
  setAccurecy(value: number): void;

  hasStampdate(): boolean;
  clearStampdate(): void;
  getStampdate(): string | undefined;
  setStampdate(value: string): void;

  hasStampuser(): boolean;
  clearStampuser(): void;
  getStampuser(): string | undefined;
  setStampuser(value: string): void;

  hasTaxref(): boolean;
  clearTaxref(): void;
  getTaxref(): string | undefined;
  setTaxref(value: string): void;

  hasCommercialref(): boolean;
  clearCommercialref(): void;
  getCommercialref(): string | undefined;
  setCommercialref(value: string): void;

  hasIsretry(): boolean;
  clearIsretry(): void;
  getIsretry(): boolean | undefined;
  setIsretry(value: boolean): void;

  clearSurveyimagesList(): void;
  getSurveyimagesList(): Array<SurveyImages>;
  setSurveyimagesList(value: Array<SurveyImages>): void;
  addSurveyimages(value?: SurveyImages, index?: number): SurveyImages;

  hasSurveyDeviceId(): boolean;
  clearSurveyDeviceId(): void;
  getSurveyDeviceId(): number | undefined;
  setSurveyDeviceId(value: number): void;

  hasEmpid(): boolean;
  clearEmpid(): void;
  getEmpid(): number | undefined;
  setEmpid(value: number): void;

  hasDeviceId(): boolean;
  clearDeviceId(): void;
  getDeviceId(): string | undefined;
  setDeviceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Survey.AsObject;
  static toObject(includeInstance: boolean, msg: Survey): Survey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Survey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Survey;
  static deserializeBinaryFromReader(message: Survey, reader: jspb.BinaryReader): Survey;
}

export namespace Survey {
  export type AsObject = {
    custkey?: string,
    address?: string,
    nounits?: number,
    ctype?: string,
    havesewer?: boolean,
    telephone?: string,
    nid?: string,
    lat?: number,
    lng?: number,
    accurecy?: number,
    stampdate?: string,
    stampuser?: string,
    taxref?: string,
    commercialref?: string,
    isretry?: boolean,
    surveyimagesList: Array<SurveyImages.AsObject>,
    surveyDeviceId?: number,
    empid?: number,
    deviceId?: string,
  }
}

export class SurveyImages extends jspb.Message {
  hasImage(): boolean;
  clearImage(): void;
  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): void;

  hasCaptureDate(): boolean;
  clearCaptureDate(): void;
  getCaptureDate(): string | undefined;
  setCaptureDate(value: string): void;

  hasExt(): boolean;
  clearExt(): void;
  getExt(): string | undefined;
  setExt(value: string): void;

  hasMeterRef(): boolean;
  clearMeterRef(): void;
  getMeterRef(): string | undefined;
  setMeterRef(value: string): void;

  hasLat(): boolean;
  clearLat(): void;
  getLat(): number | undefined;
  setLat(value: number): void;

  hasLng(): boolean;
  clearLng(): void;
  getLng(): number | undefined;
  setLng(value: number): void;

  hasIsFormGallery(): boolean;
  clearIsFormGallery(): void;
  getIsFormGallery(): boolean | undefined;
  setIsFormGallery(value: boolean): void;

  hasCompressionAlgorithm(): boolean;
  clearCompressionAlgorithm(): void;
  getCompressionAlgorithm(): string | undefined;
  setCompressionAlgorithm(value: string): void;

  hasIsCompressed(): boolean;
  clearIsCompressed(): void;
  getIsCompressed(): boolean | undefined;
  setIsCompressed(value: boolean): void;

  hasWidth(): boolean;
  clearWidth(): void;
  getWidth(): number | undefined;
  setWidth(value: number): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): number | undefined;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyImages.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyImages): SurveyImages.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SurveyImages, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyImages;
  static deserializeBinaryFromReader(message: SurveyImages, reader: jspb.BinaryReader): SurveyImages;
}

export namespace SurveyImages {
  export type AsObject = {
    image: Uint8Array | string,
    captureDate?: string,
    ext?: string,
    meterRef?: string,
    lat?: number,
    lng?: number,
    isFormGallery?: boolean,
    compressionAlgorithm?: string,
    isCompressed?: boolean,
    width?: number,
    height?: number,
  }
}

export class SurveyRequest extends jspb.Message {
  clearSurveiesList(): void;
  getSurveiesList(): Array<Survey>;
  setSurveiesList(value: Array<Survey>): void;
  addSurveies(value?: Survey, index?: number): Survey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyRequest): SurveyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SurveyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyRequest;
  static deserializeBinaryFromReader(message: SurveyRequest, reader: jspb.BinaryReader): SurveyRequest;
}

export namespace SurveyRequest {
  export type AsObject = {
    surveiesList: Array<Survey.AsObject>,
  }
}

export class Complaint extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): string | undefined;
  setAddress(value: string): void;

  hasType(): boolean;
  clearType(): void;
  getType(): string | undefined;
  setType(value: string): void;

  hasDegree(): boolean;
  clearDegree(): void;
  getDegree(): string | undefined;
  setDegree(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasLat(): boolean;
  clearLat(): void;
  getLat(): number | undefined;
  setLat(value: number): void;

  hasLng(): boolean;
  clearLng(): void;
  getLng(): number | undefined;
  setLng(value: number): void;

  hasAccurecy(): boolean;
  clearAccurecy(): void;
  getAccurecy(): number | undefined;
  setAccurecy(value: number): void;

  hasStampdate(): boolean;
  clearStampdate(): void;
  getStampdate(): string | undefined;
  setStampdate(value: string): void;

  hasStampuser(): boolean;
  clearStampuser(): void;
  getStampuser(): string | undefined;
  setStampuser(value: string): void;

  hasIsretry(): boolean;
  clearIsretry(): void;
  getIsretry(): boolean | undefined;
  setIsretry(value: boolean): void;

  hasDeviceComplaintId(): boolean;
  clearDeviceComplaintId(): void;
  getDeviceComplaintId(): number | undefined;
  setDeviceComplaintId(value: number): void;

  clearComplaintimagesList(): void;
  getComplaintimagesList(): Array<ComplaintImages>;
  setComplaintimagesList(value: Array<ComplaintImages>): void;
  addComplaintimages(value?: ComplaintImages, index?: number): ComplaintImages;

  hasEmpid(): boolean;
  clearEmpid(): void;
  getEmpid(): number | undefined;
  setEmpid(value: number): void;

  hasDeviceId(): boolean;
  clearDeviceId(): void;
  getDeviceId(): string | undefined;
  setDeviceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Complaint.AsObject;
  static toObject(includeInstance: boolean, msg: Complaint): Complaint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Complaint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Complaint;
  static deserializeBinaryFromReader(message: Complaint, reader: jspb.BinaryReader): Complaint;
}

export namespace Complaint {
  export type AsObject = {
    custkey?: string,
    address?: string,
    type?: string,
    degree?: string,
    description?: string,
    lat?: number,
    lng?: number,
    accurecy?: number,
    stampdate?: string,
    stampuser?: string,
    isretry?: boolean,
    deviceComplaintId?: number,
    complaintimagesList: Array<ComplaintImages.AsObject>,
    empid?: number,
    deviceId?: string,
  }
}

export class ComplaintsRequest extends jspb.Message {
  clearComplaintsList(): void;
  getComplaintsList(): Array<Complaint>;
  setComplaintsList(value: Array<Complaint>): void;
  addComplaints(value?: Complaint, index?: number): Complaint;

  hasDeviceId(): boolean;
  clearDeviceId(): void;
  getDeviceId(): string | undefined;
  setDeviceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplaintsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ComplaintsRequest): ComplaintsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComplaintsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComplaintsRequest;
  static deserializeBinaryFromReader(message: ComplaintsRequest, reader: jspb.BinaryReader): ComplaintsRequest;
}

export namespace ComplaintsRequest {
  export type AsObject = {
    complaintsList: Array<Complaint.AsObject>,
    deviceId?: string,
  }
}

export class ComplaintImages extends jspb.Message {
  hasImage(): boolean;
  clearImage(): void;
  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): void;

  hasCaptureDate(): boolean;
  clearCaptureDate(): void;
  getCaptureDate(): string | undefined;
  setCaptureDate(value: string): void;

  hasExt(): boolean;
  clearExt(): void;
  getExt(): string | undefined;
  setExt(value: string): void;

  hasMeterRef(): boolean;
  clearMeterRef(): void;
  getMeterRef(): string | undefined;
  setMeterRef(value: string): void;

  hasLat(): boolean;
  clearLat(): void;
  getLat(): number | undefined;
  setLat(value: number): void;

  hasLng(): boolean;
  clearLng(): void;
  getLng(): number | undefined;
  setLng(value: number): void;

  hasIsFormGallery(): boolean;
  clearIsFormGallery(): void;
  getIsFormGallery(): boolean | undefined;
  setIsFormGallery(value: boolean): void;

  hasCompressionAlgorithm(): boolean;
  clearCompressionAlgorithm(): void;
  getCompressionAlgorithm(): string | undefined;
  setCompressionAlgorithm(value: string): void;

  hasIsCompressed(): boolean;
  clearIsCompressed(): void;
  getIsCompressed(): boolean | undefined;
  setIsCompressed(value: boolean): void;

  hasWidth(): boolean;
  clearWidth(): void;
  getWidth(): number | undefined;
  setWidth(value: number): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): number | undefined;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplaintImages.AsObject;
  static toObject(includeInstance: boolean, msg: ComplaintImages): ComplaintImages.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComplaintImages, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComplaintImages;
  static deserializeBinaryFromReader(message: ComplaintImages, reader: jspb.BinaryReader): ComplaintImages;
}

export namespace ComplaintImages {
  export type AsObject = {
    image: Uint8Array | string,
    captureDate?: string,
    ext?: string,
    meterRef?: string,
    lat?: number,
    lng?: number,
    isFormGallery?: boolean,
    compressionAlgorithm?: string,
    isCompressed?: boolean,
    width?: number,
    height?: number,
  }
}

export class BadConn extends jspb.Message {
  hasNofloors(): boolean;
  clearNofloors(): void;
  getNofloors(): number | undefined;
  setNofloors(value: number): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): string | undefined;
  setAddress(value: string): void;

  hasNounits(): boolean;
  clearNounits(): void;
  getNounits(): number | undefined;
  setNounits(value: number): void;

  hasCtype(): boolean;
  clearCtype(): void;
  getCtype(): string | undefined;
  setCtype(value: string): void;

  hasHavesewer(): boolean;
  clearHavesewer(): void;
  getHavesewer(): boolean | undefined;
  setHavesewer(value: boolean): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasLat(): boolean;
  clearLat(): void;
  getLat(): number | undefined;
  setLat(value: number): void;

  hasLng(): boolean;
  clearLng(): void;
  getLng(): number | undefined;
  setLng(value: number): void;

  hasAccurecy(): boolean;
  clearAccurecy(): void;
  getAccurecy(): number | undefined;
  setAccurecy(value: number): void;

  hasStampdate(): boolean;
  clearStampdate(): void;
  getStampdate(): string | undefined;
  setStampdate(value: string): void;

  hasStampuser(): boolean;
  clearStampuser(): void;
  getStampuser(): string | undefined;
  setStampuser(value: string): void;

  hasIsretry(): boolean;
  clearIsretry(): void;
  getIsretry(): boolean | undefined;
  setIsretry(value: boolean): void;

  hasDeviceBadConnId(): boolean;
  clearDeviceBadConnId(): void;
  getDeviceBadConnId(): number | undefined;
  setDeviceBadConnId(value: number): void;

  clearBadconnimagesList(): void;
  getBadconnimagesList(): Array<BadConnImages>;
  setBadconnimagesList(value: Array<BadConnImages>): void;
  addBadconnimages(value?: BadConnImages, index?: number): BadConnImages;

  hasEmpid(): boolean;
  clearEmpid(): void;
  getEmpid(): number | undefined;
  setEmpid(value: number): void;

  hasDeviceId(): boolean;
  clearDeviceId(): void;
  getDeviceId(): string | undefined;
  setDeviceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BadConn.AsObject;
  static toObject(includeInstance: boolean, msg: BadConn): BadConn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BadConn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BadConn;
  static deserializeBinaryFromReader(message: BadConn, reader: jspb.BinaryReader): BadConn;
}

export namespace BadConn {
  export type AsObject = {
    nofloors?: number,
    address?: string,
    nounits?: number,
    ctype?: string,
    havesewer?: boolean,
    description?: string,
    lat?: number,
    lng?: number,
    accurecy?: number,
    stampdate?: string,
    stampuser?: string,
    isretry?: boolean,
    deviceBadConnId?: number,
    badconnimagesList: Array<BadConnImages.AsObject>,
    empid?: number,
    deviceId?: string,
  }
}

export class BadConnImages extends jspb.Message {
  hasImage(): boolean;
  clearImage(): void;
  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): void;

  hasCaptureDate(): boolean;
  clearCaptureDate(): void;
  getCaptureDate(): string | undefined;
  setCaptureDate(value: string): void;

  hasEmpid(): boolean;
  clearEmpid(): void;
  getEmpid(): number | undefined;
  setEmpid(value: number): void;

  hasExt(): boolean;
  clearExt(): void;
  getExt(): string | undefined;
  setExt(value: string): void;

  hasMeterRef(): boolean;
  clearMeterRef(): void;
  getMeterRef(): string | undefined;
  setMeterRef(value: string): void;

  hasLat(): boolean;
  clearLat(): void;
  getLat(): number | undefined;
  setLat(value: number): void;

  hasLng(): boolean;
  clearLng(): void;
  getLng(): number | undefined;
  setLng(value: number): void;

  hasIsFormGallery(): boolean;
  clearIsFormGallery(): void;
  getIsFormGallery(): boolean | undefined;
  setIsFormGallery(value: boolean): void;

  hasCompressionAlgorithm(): boolean;
  clearCompressionAlgorithm(): void;
  getCompressionAlgorithm(): string | undefined;
  setCompressionAlgorithm(value: string): void;

  hasIsCompressed(): boolean;
  clearIsCompressed(): void;
  getIsCompressed(): boolean | undefined;
  setIsCompressed(value: boolean): void;

  hasWidth(): boolean;
  clearWidth(): void;
  getWidth(): number | undefined;
  setWidth(value: number): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): number | undefined;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BadConnImages.AsObject;
  static toObject(includeInstance: boolean, msg: BadConnImages): BadConnImages.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BadConnImages, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BadConnImages;
  static deserializeBinaryFromReader(message: BadConnImages, reader: jspb.BinaryReader): BadConnImages;
}

export namespace BadConnImages {
  export type AsObject = {
    image: Uint8Array | string,
    captureDate?: string,
    empid?: number,
    ext?: string,
    meterRef?: string,
    lat?: number,
    lng?: number,
    isFormGallery?: boolean,
    compressionAlgorithm?: string,
    isCompressed?: boolean,
    width?: number,
    height?: number,
  }
}

export class BadConnRequest extends jspb.Message {
  clearBadconnsList(): void;
  getBadconnsList(): Array<BadConn>;
  setBadconnsList(value: Array<BadConn>): void;
  addBadconns(value?: BadConn, index?: number): BadConn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BadConnRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BadConnRequest): BadConnRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BadConnRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BadConnRequest;
  static deserializeBinaryFromReader(message: BadConnRequest, reader: jspb.BinaryReader): BadConnRequest;
}

export namespace BadConnRequest {
  export type AsObject = {
    badconnsList: Array<BadConn.AsObject>,
  }
}

export class Result extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string | undefined;
  setId(value: string): void;

  hasIsok(): boolean;
  clearIsok(): void;
  getIsok(): boolean | undefined;
  setIsok(value: boolean): void;

  hasError(): boolean;
  clearError(): void;
  getError(): string | undefined;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Result.AsObject;
  static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Result;
  static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
  export type AsObject = {
    id?: string,
    isok?: boolean,
    error?: string,
  }
}

export class ResultSet extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<Result>;
  setResultsList(value: Array<Result>): void;
  addResults(value?: Result, index?: number): Result;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultSet.AsObject;
  static toObject(includeInstance: boolean, msg: ResultSet): ResultSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResultSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultSet;
  static deserializeBinaryFromReader(message: ResultSet, reader: jspb.BinaryReader): ResultSet;
}

export namespace ResultSet {
  export type AsObject = {
    resultsList: Array<Result.AsObject>,
  }
}

export class WsMessage extends jspb.Message {
  hasMessagetype(): boolean;
  clearMessagetype(): void;
  getMessagetype(): WsMessageTypeMap[keyof WsMessageTypeMap] | undefined;
  setMessagetype(value: WsMessageTypeMap[keyof WsMessageTypeMap]): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): string | undefined;
  setMessage(value: string): void;

  hasContenttype(): boolean;
  clearContenttype(): void;
  getContenttype(): WSContentTypeMap[keyof WSContentTypeMap] | undefined;
  setContenttype(value: WSContentTypeMap[keyof WSContentTypeMap]): void;

  hasError(): boolean;
  clearError(): void;
  getError(): string | undefined;
  setError(value: string): void;

  hasRaw(): boolean;
  clearRaw(): void;
  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WsMessage.AsObject;
  static toObject(includeInstance: boolean, msg: WsMessage): WsMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WsMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WsMessage;
  static deserializeBinaryFromReader(message: WsMessage, reader: jspb.BinaryReader): WsMessage;
}

export namespace WsMessage {
  export type AsObject = {
    messagetype?: WsMessageTypeMap[keyof WsMessageTypeMap],
    message?: string,
    contenttype?: WSContentTypeMap[keyof WSContentTypeMap],
    error?: string,
    raw: Uint8Array | string,
  }
}

export class WsCommand extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): WSServerCommandMap[keyof WSServerCommandMap] | undefined;
  setType(value: WSServerCommandMap[keyof WSServerCommandMap]): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): string | undefined;
  setPayload(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WsCommand.AsObject;
  static toObject(includeInstance: boolean, msg: WsCommand): WsCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WsCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WsCommand;
  static deserializeBinaryFromReader(message: WsCommand, reader: jspb.BinaryReader): WsCommand;
}

export namespace WsCommand {
  export type AsObject = {
    type?: WSServerCommandMap[keyof WSServerCommandMap],
    payload?: string,
  }
}

export class WsCommandResult extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): WSServerCommandMap[keyof WSServerCommandMap] | undefined;
  setType(value: WSServerCommandMap[keyof WSServerCommandMap]): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): string | undefined;
  setPayload(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WsCommandResult.AsObject;
  static toObject(includeInstance: boolean, msg: WsCommandResult): WsCommandResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WsCommandResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WsCommandResult;
  static deserializeBinaryFromReader(message: WsCommandResult, reader: jspb.BinaryReader): WsCommandResult;
}

export namespace WsCommandResult {
  export type AsObject = {
    type?: WSServerCommandMap[keyof WSServerCommandMap],
    payload?: string,
  }
}

export class WsChangeRoomEvent extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): string | undefined;
  setRoom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WsChangeRoomEvent.AsObject;
  static toObject(includeInstance: boolean, msg: WsChangeRoomEvent): WsChangeRoomEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WsChangeRoomEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WsChangeRoomEvent;
  static deserializeBinaryFromReader(message: WsChangeRoomEvent, reader: jspb.BinaryReader): WsChangeRoomEvent;
}

export namespace WsChangeRoomEvent {
  export type AsObject = {
    room?: string,
  }
}

export class WsEvent extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): WsEventTypeMap[keyof WsEventTypeMap] | undefined;
  setType(value: WsEventTypeMap[keyof WsEventTypeMap]): void;

  hasRequestid(): boolean;
  clearRequestid(): void;
  getRequestid(): string | undefined;
  setRequestid(value: string): void;

  hasCommand(): boolean;
  clearCommand(): void;
  getCommand(): WsCommand | undefined;
  setCommand(value?: WsCommand): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): WsMessage | undefined;
  setMessage(value?: WsMessage): void;

  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): WsChangeRoomEvent | undefined;
  setRoom(value?: WsChangeRoomEvent): void;

  clearReceiptantsList(): void;
  getReceiptantsList(): Array<string>;
  setReceiptantsList(value: Array<string>): void;
  addReceiptants(value: string, index?: number): string;

  hasBroadcast(): boolean;
  clearBroadcast(): void;
  getBroadcast(): boolean | undefined;
  setBroadcast(value: boolean): void;

  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): string | undefined;
  setFrom(value: string): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): string | undefined;
  setTime(value: string): void;

  getPayloadCase(): WsEvent.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WsEvent.AsObject;
  static toObject(includeInstance: boolean, msg: WsEvent): WsEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WsEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WsEvent;
  static deserializeBinaryFromReader(message: WsEvent, reader: jspb.BinaryReader): WsEvent;
}

export namespace WsEvent {
  export type AsObject = {
    type?: WsEventTypeMap[keyof WsEventTypeMap],
    requestid?: string,
    command?: WsCommand.AsObject,
    message?: WsMessage.AsObject,
    room?: WsChangeRoomEvent.AsObject,
    receiptantsList: Array<string>,
    broadcast?: boolean,
    from?: string,
    time?: string,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    COMMAND = 3,
    MESSAGE = 4,
    ROOM = 5,
  }
}

export class WsEventResult extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): WsEventTypeMap[keyof WsEventTypeMap] | undefined;
  setType(value: WsEventTypeMap[keyof WsEventTypeMap]): void;

  hasRequestid(): boolean;
  clearRequestid(): void;
  getRequestid(): string | undefined;
  setRequestid(value: string): void;

  hasCommandresult(): boolean;
  clearCommandresult(): void;
  getCommandresult(): WsCommandResult | undefined;
  setCommandresult(value?: WsCommandResult): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): WsMessage | undefined;
  setMessage(value?: WsMessage): void;

  hasEmpty(): boolean;
  clearEmpty(): void;
  getEmpty(): Empty | undefined;
  setEmpty(value?: Empty): void;

  clearErrorsList(): void;
  getErrorsList(): Array<string>;
  setErrorsList(value: Array<string>): void;
  addErrors(value: string, index?: number): string;

  getPayloadCase(): WsEventResult.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WsEventResult.AsObject;
  static toObject(includeInstance: boolean, msg: WsEventResult): WsEventResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WsEventResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WsEventResult;
  static deserializeBinaryFromReader(message: WsEventResult, reader: jspb.BinaryReader): WsEventResult;
}

export namespace WsEventResult {
  export type AsObject = {
    type?: WsEventTypeMap[keyof WsEventTypeMap],
    requestid?: string,
    commandresult?: WsCommandResult.AsObject,
    message?: WsMessage.AsObject,
    empty?: Empty.AsObject,
    errorsList: Array<string>,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    COMMANDRESULT = 3,
    MESSAGE = 4,
    EMPTY = 5,
  }
}

export class BuildingInfo extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasNo(): boolean;
  clearNo(): void;
  getNo(): number | undefined;
  setNo(value: number): void;

  hasAreaCode(): boolean;
  clearAreaCode(): void;
  getAreaCode(): string | undefined;
  setAreaCode(value: string): void;

  hasStreetCode(): boolean;
  clearStreetCode(): void;
  getStreetCode(): string | undefined;
  setStreetCode(value: string): void;

  hasLandmark(): boolean;
  clearLandmark(): void;
  getLandmark(): string | undefined;
  setLandmark(value: string): void;

  hasLat(): boolean;
  clearLat(): void;
  getLat(): number | undefined;
  setLat(value: number): void;

  hasLng(): boolean;
  clearLng(): void;
  getLng(): number | undefined;
  setLng(value: number): void;

  hasAccuracy(): boolean;
  clearAccuracy(): void;
  getAccuracy(): number | undefined;
  setAccuracy(value: number): void;

  hasNoFloors(): boolean;
  clearNoFloors(): void;
  getNoFloors(): number | undefined;
  setNoFloors(value: number): void;

  hasNoUnits(): boolean;
  clearNoUnits(): void;
  getNoUnits(): number | undefined;
  setNoUnits(value: number): void;

  hasContactName(): boolean;
  clearContactName(): void;
  getContactName(): string | undefined;
  setContactName(value: string): void;

  hasContactPhone(): boolean;
  clearContactPhone(): void;
  getContactPhone(): string | undefined;
  setContactPhone(value: string): void;

  hasArea(): boolean;
  clearArea(): void;
  getArea(): number | undefined;
  setArea(value: number): void;

  hasHasKhelsa(): boolean;
  clearHasKhelsa(): void;
  getHasKhelsa(): boolean | undefined;
  setHasKhelsa(value: boolean): void;

  hasIsGov(): boolean;
  clearIsGov(): void;
  getIsGov(): boolean | undefined;
  setIsGov(value: boolean): void;

  hasIsConstruction(): boolean;
  clearIsConstruction(): void;
  getIsConstruction(): boolean | undefined;
  setIsConstruction(value: boolean): void;

  hasIsEmpty(): boolean;
  clearIsEmpty(): void;
  getIsEmpty(): boolean | undefined;
  setIsEmpty(value: boolean): void;

  hasSewer(): boolean;
  clearSewer(): void;
  getSewer(): boolean | undefined;
  setSewer(value: boolean): void;

  hasCaptureDate(): boolean;
  clearCaptureDate(): void;
  getCaptureDate(): string | undefined;
  setCaptureDate(value: string): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): string | undefined;
  setAddress(value: string): void;

  hasPlotNo(): boolean;
  clearPlotNo(): void;
  getPlotNo(): string | undefined;
  setPlotNo(value: string): void;

  hasMixedCtype(): boolean;
  clearMixedCtype(): void;
  getMixedCtype(): boolean | undefined;
  setMixedCtype(value: boolean): void;

  hasSwimmPole(): boolean;
  clearSwimmPole(): void;
  getSwimmPole(): boolean | undefined;
  setSwimmPole(value: boolean): void;

  hasUsedNoUnits(): boolean;
  clearUsedNoUnits(): void;
  getUsedNoUnits(): number | undefined;
  setUsedNoUnits(value: number): void;

  clearImagesList(): void;
  getImagesList(): Array<Uint8Array | string>;
  getImagesList_asU8(): Array<Uint8Array>;
  getImagesList_asB64(): Array<string>;
  setImagesList(value: Array<Uint8Array | string>): void;
  addImages(value: Uint8Array | string, index?: number): Uint8Array | string;

  hasImageExt(): boolean;
  clearImageExt(): void;
  getImageExt(): string | undefined;
  setImageExt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildingInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BuildingInfo): BuildingInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildingInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildingInfo;
  static deserializeBinaryFromReader(message: BuildingInfo, reader: jspb.BinaryReader): BuildingInfo;
}

export namespace BuildingInfo {
  export type AsObject = {
    code?: string,
    name?: string,
    no?: number,
    areaCode?: string,
    streetCode?: string,
    landmark?: string,
    lat?: number,
    lng?: number,
    accuracy?: number,
    noFloors?: number,
    noUnits?: number,
    contactName?: string,
    contactPhone?: string,
    area?: number,
    hasKhelsa?: boolean,
    isGov?: boolean,
    isConstruction?: boolean,
    isEmpty?: boolean,
    sewer?: boolean,
    captureDate?: string,
    address?: string,
    plotNo?: string,
    mixedCtype?: boolean,
    swimmPole?: boolean,
    usedNoUnits?: number,
    imagesList: Array<Uint8Array | string>,
    imageExt?: string,
  }
}

export class SurveyInfo extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasCaptureDate(): boolean;
  clearCaptureDate(): void;
  getCaptureDate(): string | undefined;
  setCaptureDate(value: string): void;

  hasLat(): boolean;
  clearLat(): void;
  getLat(): number | undefined;
  setLat(value: number): void;

  hasLng(): boolean;
  clearLng(): void;
  getLng(): number | undefined;
  setLng(value: number): void;

  hasAccurecy(): boolean;
  clearAccurecy(): void;
  getAccurecy(): number | undefined;
  setAccurecy(value: number): void;

  hasNoUnits(): boolean;
  clearNoUnits(): void;
  getNoUnits(): number | undefined;
  setNoUnits(value: number): void;

  hasCType(): boolean;
  clearCType(): void;
  getCType(): string | undefined;
  setCType(value: string): void;

  hasFloorNo(): boolean;
  clearFloorNo(): void;
  getFloorNo(): number | undefined;
  setFloorNo(value: number): void;

  hasFlatNo(): boolean;
  clearFlatNo(): void;
  getFlatNo(): number | undefined;
  setFlatNo(value: number): void;

  hasTelephone(): boolean;
  clearTelephone(): void;
  getTelephone(): string | undefined;
  setTelephone(value: string): void;

  hasNationalId(): boolean;
  clearNationalId(): void;
  getNationalId(): string | undefined;
  setNationalId(value: string): void;

  hasSewer(): boolean;
  clearSewer(): void;
  getSewer(): boolean | undefined;
  setSewer(value: boolean): void;

  hasTaxRef(): boolean;
  clearTaxRef(): void;
  getTaxRef(): string | undefined;
  setTaxRef(value: string): void;

  hasCommercialRef(): boolean;
  clearCommercialRef(): void;
  getCommercialRef(): string | undefined;
  setCommercialRef(value: string): void;

  hasBuildingCode(): boolean;
  clearBuildingCode(): void;
  getBuildingCode(): string | undefined;
  setBuildingCode(value: string): void;

  hasHasMeter(): boolean;
  clearHasMeter(): void;
  getHasMeter(): boolean | undefined;
  setHasMeter(value: boolean): void;

  hasIsPrepaid(): boolean;
  clearIsPrepaid(): void;
  getIsPrepaid(): boolean | undefined;
  setIsPrepaid(value: boolean): void;

  hasNoDials(): boolean;
  clearNoDials(): void;
  getNoDials(): number | undefined;
  setNoDials(value: number): void;

  hasMeterStatus(): boolean;
  clearMeterStatus(): void;
  getMeterStatus(): string | undefined;
  setMeterStatus(value: string): void;

  hasMeterDiam(): boolean;
  clearMeterDiam(): void;
  getMeterDiam(): string | undefined;
  setMeterDiam(value: string): void;

  hasMeterNotOk(): boolean;
  clearMeterNotOk(): void;
  getMeterNotOk(): boolean | undefined;
  setMeterNotOk(value: boolean): void;

  hasMeterReading(): boolean;
  clearMeterReading(): void;
  getMeterReading(): number | undefined;
  setMeterReading(value: number): void;

  hasMeterNote(): boolean;
  clearMeterNote(): void;
  getMeterNote(): string | undefined;
  setMeterNote(value: string): void;

  hasStampUser(): boolean;
  clearStampUser(): void;
  getStampUser(): string | undefined;
  setStampUser(value: string): void;

  clearImagesList(): void;
  getImagesList(): Array<Uint8Array | string>;
  getImagesList_asU8(): Array<Uint8Array>;
  getImagesList_asB64(): Array<string>;
  setImagesList(value: Array<Uint8Array | string>): void;
  addImages(value: Uint8Array | string, index?: number): Uint8Array | string;

  clearMeterImagesList(): void;
  getMeterImagesList(): Array<Uint8Array | string>;
  getMeterImagesList_asU8(): Array<Uint8Array>;
  getMeterImagesList_asB64(): Array<string>;
  setMeterImagesList(value: Array<Uint8Array | string>): void;
  addMeterImages(value: Uint8Array | string, index?: number): Uint8Array | string;

  hasImageExt(): boolean;
  clearImageExt(): void;
  getImageExt(): string | undefined;
  setImageExt(value: string): void;

  hasMasterConnection(): boolean;
  clearMasterConnection(): void;
  getMasterConnection(): boolean | undefined;
  setMasterConnection(value: boolean): void;

  hasSubConnectionsCount(): boolean;
  clearSubConnectionsCount(): void;
  getSubConnectionsCount(): number | undefined;
  setSubConnectionsCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyInfo): SurveyInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SurveyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyInfo;
  static deserializeBinaryFromReader(message: SurveyInfo, reader: jspb.BinaryReader): SurveyInfo;
}

export namespace SurveyInfo {
  export type AsObject = {
    id?: number,
    custkey?: string,
    captureDate?: string,
    lat?: number,
    lng?: number,
    accurecy?: number,
    noUnits?: number,
    cType?: string,
    floorNo?: number,
    flatNo?: number,
    telephone?: string,
    nationalId?: string,
    sewer?: boolean,
    taxRef?: string,
    commercialRef?: string,
    buildingCode?: string,
    hasMeter?: boolean,
    isPrepaid?: boolean,
    noDials?: number,
    meterStatus?: string,
    meterDiam?: string,
    meterNotOk?: boolean,
    meterReading?: number,
    meterNote?: string,
    stampUser?: string,
    imagesList: Array<Uint8Array | string>,
    meterImagesList: Array<Uint8Array | string>,
    imageExt?: string,
    masterConnection?: boolean,
    subConnectionsCount?: number,
  }
}

export class ProcessReponse extends jspb.Message {
  hasError(): boolean;
  clearError(): void;
  getError(): boolean | undefined;
  setError(value: boolean): void;

  hasErrormessage(): boolean;
  clearErrormessage(): void;
  getErrormessage(): boolean | undefined;
  setErrormessage(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessReponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessReponse): ProcessReponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessReponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessReponse;
  static deserializeBinaryFromReader(message: ProcessReponse, reader: jspb.BinaryReader): ProcessReponse;
}

export namespace ProcessReponse {
  export type AsObject = {
    error?: boolean,
    errormessage?: boolean,
  }
}

export class Area extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasDistrictcode(): boolean;
  clearDistrictcode(): void;
  getDistrictcode(): string | undefined;
  setDistrictcode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Area.AsObject;
  static toObject(includeInstance: boolean, msg: Area): Area.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Area, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Area;
  static deserializeBinaryFromReader(message: Area, reader: jspb.BinaryReader): Area;
}

export namespace Area {
  export type AsObject = {
    code?: string,
    description?: string,
    districtcode?: string,
  }
}

export class District extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasCitycode(): boolean;
  clearCitycode(): void;
  getCitycode(): string | undefined;
  setCitycode(value: string): void;

  hasStationno(): boolean;
  clearStationno(): void;
  getStationno(): number | undefined;
  setStationno(value: number): void;

  clearAreasList(): void;
  getAreasList(): Array<Area>;
  setAreasList(value: Array<Area>): void;
  addAreas(value?: Area, index?: number): Area;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): District.AsObject;
  static toObject(includeInstance: boolean, msg: District): District.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: District, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): District;
  static deserializeBinaryFromReader(message: District, reader: jspb.BinaryReader): District;
}

export namespace District {
  export type AsObject = {
    code?: string,
    description?: string,
    citycode?: string,
    stationno?: number,
    areasList: Array<Area.AsObject>,
  }
}

export class City extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): string | undefined;
  setCode(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasGovcode(): boolean;
  clearGovcode(): void;
  getGovcode(): string | undefined;
  setGovcode(value: string): void;

  clearDistrictsList(): void;
  getDistrictsList(): Array<District>;
  setDistrictsList(value: Array<District>): void;
  addDistricts(value?: District, index?: number): District;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): City.AsObject;
  static toObject(includeInstance: boolean, msg: City): City.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: City, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): City;
  static deserializeBinaryFromReader(message: City, reader: jspb.BinaryReader): City;
}

export namespace City {
  export type AsObject = {
    code?: string,
    description?: string,
    govcode?: string,
    districtsList: Array<District.AsObject>,
  }
}

export class CityReponse extends jspb.Message {
  clearCitiesList(): void;
  getCitiesList(): Array<City>;
  setCitiesList(value: Array<City>): void;
  addCities(value?: City, index?: number): City;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CityReponse.AsObject;
  static toObject(includeInstance: boolean, msg: CityReponse): CityReponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CityReponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CityReponse;
  static deserializeBinaryFromReader(message: CityReponse, reader: jspb.BinaryReader): CityReponse;
}

export namespace CityReponse {
  export type AsObject = {
    citiesList: Array<City.AsObject>,
  }
}

export class NewSeq extends jspb.Message {
  hasBillCustkey(): boolean;
  clearBillCustkey(): void;
  getBillCustkey(): string | undefined;
  setBillCustkey(value: string): void;

  hasPropRef(): boolean;
  clearPropRef(): void;
  getPropRef(): string | undefined;
  setPropRef(value: string): void;

  hasDeviceId(): boolean;
  clearDeviceId(): void;
  getDeviceId(): string | undefined;
  setDeviceId(value: string): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookNoC(): boolean;
  clearBookNoC(): void;
  getBookNoC(): string | undefined;
  setBookNoC(value: string): void;

  hasWalkNoC(): boolean;
  clearWalkNoC(): void;
  getWalkNoC(): string | undefined;
  setWalkNoC(value: string): void;

  hasSeqNoC(): boolean;
  clearSeqNoC(): void;
  getSeqNoC(): number | undefined;
  setSeqNoC(value: number): void;

  hasBookNoR(): boolean;
  clearBookNoR(): void;
  getBookNoR(): string | undefined;
  setBookNoR(value: string): void;

  hasWalkNoR(): boolean;
  clearWalkNoR(): void;
  getWalkNoR(): string | undefined;
  setWalkNoR(value: string): void;

  hasSeqNoR(): boolean;
  clearSeqNoR(): void;
  getSeqNoR(): number | undefined;
  setSeqNoR(value: number): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewSeq.AsObject;
  static toObject(includeInstance: boolean, msg: NewSeq): NewSeq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewSeq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewSeq;
  static deserializeBinaryFromReader(message: NewSeq, reader: jspb.BinaryReader): NewSeq;
}

export namespace NewSeq {
  export type AsObject = {
    billCustkey?: string,
    propRef?: string,
    deviceId?: string,
    billgroup?: string,
    bookNoC?: string,
    walkNoC?: string,
    seqNoC?: number,
    bookNoR?: string,
    walkNoR?: string,
    seqNoR?: number,
    cycleId?: number,
  }
}

export class ArrNewSeq extends jspb.Message {
  clearNewseqsList(): void;
  getNewseqsList(): Array<NewSeq>;
  setNewseqsList(value: Array<NewSeq>): void;
  addNewseqs(value?: NewSeq, index?: number): NewSeq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrNewSeq.AsObject;
  static toObject(includeInstance: boolean, msg: ArrNewSeq): ArrNewSeq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArrNewSeq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrNewSeq;
  static deserializeBinaryFromReader(message: ArrNewSeq, reader: jspb.BinaryReader): ArrNewSeq;
}

export namespace ArrNewSeq {
  export type AsObject = {
    newseqsList: Array<NewSeq.AsObject>,
  }
}

export class SearchByCustkeyRequest extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasEmpid(): boolean;
  clearEmpid(): void;
  getEmpid(): number | undefined;
  setEmpid(value: number): void;

  hasDeviceId(): boolean;
  clearDeviceId(): void;
  getDeviceId(): string | undefined;
  setDeviceId(value: string): void;

  hasIsEmpPrivate(): boolean;
  clearIsEmpPrivate(): void;
  getIsEmpPrivate(): boolean | undefined;
  setIsEmpPrivate(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchByCustkeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchByCustkeyRequest): SearchByCustkeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchByCustkeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchByCustkeyRequest;
  static deserializeBinaryFromReader(message: SearchByCustkeyRequest, reader: jspb.BinaryReader): SearchByCustkeyRequest;
}

export namespace SearchByCustkeyRequest {
  export type AsObject = {
    custkey?: string,
    empid?: number,
    deviceId?: string,
    isEmpPrivate?: boolean,
  }
}

export class FAWRY_CARD_TRANS extends jspb.Message {
  hasFawryReference(): boolean;
  clearFawryReference(): void;
  getFawryReference(): string | undefined;
  setFawryReference(value: string): void;

  hasBillCustkey(): boolean;
  clearBillCustkey(): void;
  getBillCustkey(): string | undefined;
  setBillCustkey(value: string): void;

  hasPaymentNo(): boolean;
  clearPaymentNo(): void;
  getPaymentNo(): string | undefined;
  setPaymentNo(value: string): void;

  hasAcquirerBankId(): boolean;
  clearAcquirerBankId(): void;
  getAcquirerBankId(): string | undefined;
  setAcquirerBankId(value: string): void;

  hasAuthId(): boolean;
  clearAuthId(): void;
  getAuthId(): string | undefined;
  setAuthId(value: string): void;

  hasAppId(): boolean;
  clearAppId(): void;
  getAppId(): string | undefined;
  setAppId(value: string): void;

  hasAppName(): boolean;
  clearAppName(): void;
  getAppName(): string | undefined;
  setAppName(value: string): void;

  hasCardAcctId(): boolean;
  clearCardAcctId(): void;
  getCardAcctId(): string | undefined;
  setCardAcctId(value: string): void;

  hasCardholderName(): boolean;
  clearCardholderName(): void;
  getCardholderName(): string | undefined;
  setCardholderName(value: string): void;

  hasIssueRbankId(): boolean;
  clearIssueRbankId(): void;
  getIssueRbankId(): string | undefined;
  setIssueRbankId(value: string): void;

  hasEffdt(): boolean;
  clearEffdt(): void;
  getEffdt(): string | undefined;
  setEffdt(value: string): void;

  hasMerchantId(): boolean;
  clearMerchantId(): void;
  getMerchantId(): string | undefined;
  setMerchantId(value: string): void;

  hasReceiptNumber(): boolean;
  clearReceiptNumber(): void;
  getReceiptNumber(): string | undefined;
  setReceiptNumber(value: string): void;

  hasRrn(): boolean;
  clearRrn(): void;
  getRrn(): string | undefined;
  setRrn(value: string): void;

  hasTerminalId(): boolean;
  clearTerminalId(): void;
  getTerminalId(): string | undefined;
  setTerminalId(value: string): void;

  hasFees(): boolean;
  clearFees(): void;
  getFees(): number | undefined;
  setFees(value: number): void;

  hasOperationModel(): boolean;
  clearOperationModel(): void;
  getOperationModel(): string | undefined;
  setOperationModel(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): number | undefined;
  setAmount(value: number): void;

  hasBalance(): boolean;
  clearBalance(): void;
  getBalance(): number | undefined;
  setBalance(value: number): void;

  hasBtc(): boolean;
  clearBtc(): void;
  getBtc(): number | undefined;
  setBtc(value: number): void;

  hasClientTerminalSequenceId(): boolean;
  clearClientTerminalSequenceId(): void;
  getClientTerminalSequenceId(): string | undefined;
  setClientTerminalSequenceId(value: string): void;

  hasCurrency(): boolean;
  clearCurrency(): void;
  getCurrency(): string | undefined;
  setCurrency(value: string): void;

  hasPaymentOption(): boolean;
  clearPaymentOption(): void;
  getPaymentOption(): string | undefined;
  setPaymentOption(value: string): void;

  hasPrintReceipt(): boolean;
  clearPrintReceipt(): void;
  getPrintReceipt(): boolean | undefined;
  setPrintReceipt(value: boolean): void;

  hasTransactionType(): boolean;
  clearTransactionType(): void;
  getTransactionType(): string | undefined;
  setTransactionType(value: string): void;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): string | undefined;
  setSignature(value: string): void;

  hasMessageCode(): boolean;
  clearMessageCode(): void;
  getMessageCode(): string | undefined;
  setMessageCode(value: string): void;

  hasPassword(): boolean;
  clearPassword(): void;
  getPassword(): string | undefined;
  setPassword(value: string): void;

  hasRequestUuid(): boolean;
  clearRequestUuid(): void;
  getRequestUuid(): string | undefined;
  setRequestUuid(value: string): void;

  hasServerTimestamp(): boolean;
  clearServerTimestamp(): void;
  getServerTimestamp(): string | undefined;
  setServerTimestamp(value: string): void;

  hasHostStatusCode(): boolean;
  clearHostStatusCode(): void;
  getHostStatusCode(): number | undefined;
  setHostStatusCode(value: number): void;

  hasHostStatusDesc(): boolean;
  clearHostStatusDesc(): void;
  getHostStatusDesc(): string | undefined;
  setHostStatusDesc(value: string): void;

  hasStatusCode(): boolean;
  clearStatusCode(): void;
  getStatusCode(): number | undefined;
  setStatusCode(value: number): void;

  hasStatusDesc(): boolean;
  clearStatusDesc(): void;
  getStatusDesc(): string | undefined;
  setStatusDesc(value: string): void;

  hasUsername(): boolean;
  clearUsername(): void;
  getUsername(): string | undefined;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FAWRY_CARD_TRANS.AsObject;
  static toObject(includeInstance: boolean, msg: FAWRY_CARD_TRANS): FAWRY_CARD_TRANS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FAWRY_CARD_TRANS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FAWRY_CARD_TRANS;
  static deserializeBinaryFromReader(message: FAWRY_CARD_TRANS, reader: jspb.BinaryReader): FAWRY_CARD_TRANS;
}

export namespace FAWRY_CARD_TRANS {
  export type AsObject = {
    fawryReference?: string,
    billCustkey?: string,
    paymentNo?: string,
    acquirerBankId?: string,
    authId?: string,
    appId?: string,
    appName?: string,
    cardAcctId?: string,
    cardholderName?: string,
    issueRbankId?: string,
    effdt?: string,
    merchantId?: string,
    receiptNumber?: string,
    rrn?: string,
    terminalId?: string,
    fees?: number,
    operationModel?: string,
    amount?: number,
    balance?: number,
    btc?: number,
    clientTerminalSequenceId?: string,
    currency?: string,
    paymentOption?: string,
    printReceipt?: boolean,
    transactionType?: string,
    signature?: string,
    messageCode?: string,
    password?: string,
    requestUuid?: string,
    serverTimestamp?: string,
    hostStatusCode?: number,
    hostStatusDesc?: string,
    statusCode?: number,
    statusDesc?: string,
    username?: string,
  }
}

export class ArrFAWRY_CARD_TRANS extends jspb.Message {
  clearFawryCardTransList(): void;
  getFawryCardTransList(): Array<FAWRY_CARD_TRANS>;
  setFawryCardTransList(value: Array<FAWRY_CARD_TRANS>): void;
  addFawryCardTrans(value?: FAWRY_CARD_TRANS, index?: number): FAWRY_CARD_TRANS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrFAWRY_CARD_TRANS.AsObject;
  static toObject(includeInstance: boolean, msg: ArrFAWRY_CARD_TRANS): ArrFAWRY_CARD_TRANS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArrFAWRY_CARD_TRANS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrFAWRY_CARD_TRANS;
  static deserializeBinaryFromReader(message: ArrFAWRY_CARD_TRANS, reader: jspb.BinaryReader): ArrFAWRY_CARD_TRANS;
}

export namespace ArrFAWRY_CARD_TRANS {
  export type AsObject = {
    fawryCardTransList: Array<FAWRY_CARD_TRANS.AsObject>,
  }
}

export class LU_PARTIAL_COLLECTION_STATE extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasDescripe(): boolean;
  clearDescripe(): void;
  getDescripe(): string | undefined;
  setDescripe(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LU_PARTIAL_COLLECTION_STATE.AsObject;
  static toObject(includeInstance: boolean, msg: LU_PARTIAL_COLLECTION_STATE): LU_PARTIAL_COLLECTION_STATE.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LU_PARTIAL_COLLECTION_STATE, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LU_PARTIAL_COLLECTION_STATE;
  static deserializeBinaryFromReader(message: LU_PARTIAL_COLLECTION_STATE, reader: jspb.BinaryReader): LU_PARTIAL_COLLECTION_STATE;
}

export namespace LU_PARTIAL_COLLECTION_STATE {
  export type AsObject = {
    id?: number,
    descripe?: string,
  }
}

export class CUSTOMER_METERS extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasMeterId(): boolean;
  clearMeterId(): void;
  getMeterId(): number | undefined;
  setMeterId(value: number): void;

  hasMeterRef(): boolean;
  clearMeterRef(): void;
  getMeterRef(): string | undefined;
  setMeterRef(value: string): void;

  hasLat(): boolean;
  clearLat(): void;
  getLat(): number | undefined;
  setLat(value: number): void;

  hasLng(): boolean;
  clearLng(): void;
  getLng(): number | undefined;
  setLng(value: number): void;

  hasMetarNote(): boolean;
  clearMetarNote(): void;
  getMetarNote(): string | undefined;
  setMetarNote(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CUSTOMER_METERS.AsObject;
  static toObject(includeInstance: boolean, msg: CUSTOMER_METERS): CUSTOMER_METERS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CUSTOMER_METERS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CUSTOMER_METERS;
  static deserializeBinaryFromReader(message: CUSTOMER_METERS, reader: jspb.BinaryReader): CUSTOMER_METERS;
}

export namespace CUSTOMER_METERS {
  export type AsObject = {
    custkey?: string,
    meterId?: number,
    meterRef?: string,
    lat?: number,
    lng?: number,
    metarNote?: string,
  }
}

export class HAND_READINGS extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasCycleId(): boolean;
  clearCycleId(): void;
  getCycleId(): number | undefined;
  setCycleId(value: number): void;

  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasBookNo(): boolean;
  clearBookNo(): void;
  getBookNo(): string | undefined;
  setBookNo(value: string): void;

  hasWalkNo(): boolean;
  clearWalkNo(): void;
  getWalkNo(): string | undefined;
  setWalkNo(value: string): void;

  hasSeqNo(): boolean;
  clearSeqNo(): void;
  getSeqNo(): number | undefined;
  setSeqNo(value: number): void;

  hasMeterId(): boolean;
  clearMeterId(): void;
  getMeterId(): number | undefined;
  setMeterId(value: number): void;

  hasMeterRef(): boolean;
  clearMeterRef(): void;
  getMeterRef(): string | undefined;
  setMeterRef(value: string): void;

  hasMeterType(): boolean;
  clearMeterType(): void;
  getMeterType(): string | undefined;
  setMeterType(value: string): void;

  hasLat(): boolean;
  clearLat(): void;
  getLat(): number | undefined;
  setLat(value: number): void;

  hasLng(): boolean;
  clearLng(): void;
  getLng(): number | undefined;
  setLng(value: number): void;

  hasAccurecy(): boolean;
  clearAccurecy(): void;
  getAccurecy(): number | undefined;
  setAccurecy(value: number): void;

  hasGpsSource(): boolean;
  clearGpsSource(): void;
  getGpsSource(): string | undefined;
  setGpsSource(value: string): void;

  hasReadingDesc(): boolean;
  clearReadingDesc(): void;
  getReadingDesc(): string | undefined;
  setReadingDesc(value: string): void;

  hasReadingNote(): boolean;
  clearReadingNote(): void;
  getReadingNote(): number | undefined;
  setReadingNote(value: number): void;

  hasEmpId(): boolean;
  clearEmpId(): void;
  getEmpId(): number | undefined;
  setEmpId(value: number): void;

  hasCrReading(): boolean;
  clearCrReading(): void;
  getCrReading(): number | undefined;
  setCrReading(value: number): void;

  hasPrRead(): boolean;
  clearPrRead(): void;
  getPrRead(): number | undefined;
  setPrRead(value: number): void;

  hasConsump(): boolean;
  clearConsump(): void;
  getConsump(): number | undefined;
  setConsump(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HAND_READINGS.AsObject;
  static toObject(includeInstance: boolean, msg: HAND_READINGS): HAND_READINGS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HAND_READINGS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HAND_READINGS;
  static deserializeBinaryFromReader(message: HAND_READINGS, reader: jspb.BinaryReader): HAND_READINGS;
}

export namespace HAND_READINGS {
  export type AsObject = {
    custkey?: string,
    cycleId?: number,
    stationNo?: number,
    bookNo?: string,
    walkNo?: string,
    seqNo?: number,
    meterId?: number,
    meterRef?: string,
    meterType?: string,
    lat?: number,
    lng?: number,
    accurecy?: number,
    gpsSource?: string,
    readingDesc?: string,
    readingNote?: number,
    empId?: number,
    crReading?: number,
    prRead?: number,
    consump?: number,
  }
}

export class GetEmpWalksReq extends jspb.Message {
  hasEmpId(): boolean;
  clearEmpId(): void;
  getEmpId(): number | undefined;
  setEmpId(value: number): void;

  hasDeviceId(): boolean;
  clearDeviceId(): void;
  getDeviceId(): string | undefined;
  setDeviceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmpWalksReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmpWalksReq): GetEmpWalksReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmpWalksReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmpWalksReq;
  static deserializeBinaryFromReader(message: GetEmpWalksReq, reader: jspb.BinaryReader): GetEmpWalksReq;
}

export namespace GetEmpWalksReq {
  export type AsObject = {
    empId?: number,
    deviceId?: string,
  }
}

export class EmpWalks extends jspb.Message {
  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookNo(): boolean;
  clearBookNo(): void;
  getBookNo(): string | undefined;
  setBookNo(value: string): void;

  hasWalkNo(): boolean;
  clearWalkNo(): void;
  getWalkNo(): string | undefined;
  setWalkNo(value: string): void;

  hasBranchid(): boolean;
  clearBranchid(): void;
  getBranchid(): number | undefined;
  setBranchid(value: number): void;

  hasBranchname(): boolean;
  clearBranchname(): void;
  getBranchname(): string | undefined;
  setBranchname(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasBilinggroupdescription(): boolean;
  clearBilinggroupdescription(): void;
  getBilinggroupdescription(): string | undefined;
  setBilinggroupdescription(value: string): void;

  hasBookdescription(): boolean;
  clearBookdescription(): void;
  getBookdescription(): string | undefined;
  setBookdescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmpWalks.AsObject;
  static toObject(includeInstance: boolean, msg: EmpWalks): EmpWalks.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmpWalks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmpWalks;
  static deserializeBinaryFromReader(message: EmpWalks, reader: jspb.BinaryReader): EmpWalks;
}

export namespace EmpWalks {
  export type AsObject = {
    billgroup?: string,
    bookNo?: string,
    walkNo?: string,
    branchid?: number,
    branchname?: string,
    description?: string,
    bilinggroupdescription?: string,
    bookdescription?: string,
  }
}

export class GetEmpWalksRes extends jspb.Message {
  clearEmpwalksList(): void;
  getEmpwalksList(): Array<EmpWalks>;
  setEmpwalksList(value: Array<EmpWalks>): void;
  addEmpwalks(value?: EmpWalks, index?: number): EmpWalks;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmpWalksRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmpWalksRes): GetEmpWalksRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmpWalksRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmpWalksRes;
  static deserializeBinaryFromReader(message: GetEmpWalksRes, reader: jspb.BinaryReader): GetEmpWalksRes;
}

export namespace GetEmpWalksRes {
  export type AsObject = {
    empwalksList: Array<EmpWalks.AsObject>,
  }
}

export class CustDtls extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasOldKey(): boolean;
  clearOldKey(): void;
  getOldKey(): string | undefined;
  setOldKey(value: string): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): string | undefined;
  setAddress(value: string): void;

  hasSurname(): boolean;
  clearSurname(): void;
  getSurname(): string | undefined;
  setSurname(value: string): void;

  hasStationNo(): boolean;
  clearStationNo(): void;
  getStationNo(): number | undefined;
  setStationNo(value: number): void;

  hasStationName(): boolean;
  clearStationName(): void;
  getStationName(): string | undefined;
  setStationName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustDtls.AsObject;
  static toObject(includeInstance: boolean, msg: CustDtls): CustDtls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustDtls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustDtls;
  static deserializeBinaryFromReader(message: CustDtls, reader: jspb.BinaryReader): CustDtls;
}

export namespace CustDtls {
  export type AsObject = {
    custkey?: string,
    oldKey?: string,
    address?: string,
    surname?: string,
    stationNo?: number,
    stationName?: string,
  }
}

export class GetPaymentSearchedByReq extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): string | undefined;
  setKey(value: string): void;

  hasSearchby(): boolean;
  clearSearchby(): void;
  getSearchby(): SearchByMap[keyof SearchByMap] | undefined;
  setSearchby(value: SearchByMap[keyof SearchByMap]): void;

  hasAlldata(): boolean;
  clearAlldata(): void;
  getAlldata(): boolean | undefined;
  setAlldata(value: boolean): void;

  hasOldone(): boolean;
  clearOldone(): void;
  getOldone(): boolean | undefined;
  setOldone(value: boolean): void;

  hasForquery(): boolean;
  clearForquery(): void;
  getForquery(): boolean | undefined;
  setForquery(value: boolean): void;

  hasOctober(): boolean;
  clearOctober(): void;
  getOctober(): boolean | undefined;
  setOctober(value: boolean): void;

  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentSearchedByReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentSearchedByReq): GetPaymentSearchedByReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPaymentSearchedByReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentSearchedByReq;
  static deserializeBinaryFromReader(message: GetPaymentSearchedByReq, reader: jspb.BinaryReader): GetPaymentSearchedByReq;
}

export namespace GetPaymentSearchedByReq {
  export type AsObject = {
    key?: string,
    searchby?: SearchByMap[keyof SearchByMap],
    alldata?: boolean,
    oldone?: boolean,
    forquery?: boolean,
    october?: boolean,
    deviceid?: string,
  }
}

export class GetPaymentSearchedByRes extends jspb.Message {
  clearCustdtlsList(): void;
  getCustdtlsList(): Array<CustDtls>;
  setCustdtlsList(value: Array<CustDtls>): void;
  addCustdtls(value?: CustDtls, index?: number): CustDtls;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentSearchedByRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentSearchedByRes): GetPaymentSearchedByRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPaymentSearchedByRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentSearchedByRes;
  static deserializeBinaryFromReader(message: GetPaymentSearchedByRes, reader: jspb.BinaryReader): GetPaymentSearchedByRes;
}

export namespace GetPaymentSearchedByRes {
  export type AsObject = {
    custdtlsList: Array<CustDtls.AsObject>,
  }
}

export class ArrHHEvents extends jspb.Message {
  clearHhEventsList(): void;
  getHhEventsList(): Array<HH_EVENTS>;
  setHhEventsList(value: Array<HH_EVENTS>): void;
  addHhEvents(value?: HH_EVENTS, index?: number): HH_EVENTS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrHHEvents.AsObject;
  static toObject(includeInstance: boolean, msg: ArrHHEvents): ArrHHEvents.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArrHHEvents, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrHHEvents;
  static deserializeBinaryFromReader(message: ArrHHEvents, reader: jspb.BinaryReader): ArrHHEvents;
}

export namespace ArrHHEvents {
  export type AsObject = {
    hhEventsList: Array<HH_EVENTS.AsObject>,
  }
}

export class UpdateHhEventDoneReq extends jspb.Message {
  hasEventId(): boolean;
  clearEventId(): void;
  getEventId(): number | undefined;
  setEventId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateHhEventDoneReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateHhEventDoneReq): UpdateHhEventDoneReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateHhEventDoneReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateHhEventDoneReq;
  static deserializeBinaryFromReader(message: UpdateHhEventDoneReq, reader: jspb.BinaryReader): UpdateHhEventDoneReq;
}

export namespace UpdateHhEventDoneReq {
  export type AsObject = {
    eventId?: number,
  }
}

export class HH_EVENTS extends jspb.Message {
  hasEventId(): boolean;
  clearEventId(): void;
  getEventId(): number | undefined;
  setEventId(value: number): void;

  hasEventCode(): boolean;
  clearEventCode(): void;
  getEventCode(): EVENTS_LOCKUPMap[keyof EVENTS_LOCKUPMap] | undefined;
  setEventCode(value: EVENTS_LOCKUPMap[keyof EVENTS_LOCKUPMap]): void;

  hasEventDesc(): boolean;
  clearEventDesc(): void;
  getEventDesc(): string | undefined;
  setEventDesc(value: string): void;

  hasEventDate(): boolean;
  clearEventDate(): void;
  getEventDate(): string | undefined;
  setEventDate(value: string): void;

  hasDeviceId(): boolean;
  clearDeviceId(): void;
  getDeviceId(): string | undefined;
  setDeviceId(value: string): void;

  hasEmpId(): boolean;
  clearEmpId(): void;
  getEmpId(): number | undefined;
  setEmpId(value: number): void;

  hasIsDone(): boolean;
  clearIsDone(): void;
  getIsDone(): boolean | undefined;
  setIsDone(value: boolean): void;

  hasSettingName(): boolean;
  clearSettingName(): void;
  getSettingName(): string | undefined;
  setSettingName(value: string): void;

  hasCloseColl(): boolean;
  clearCloseColl(): void;
  getCloseColl(): boolean | undefined;
  setCloseColl(value: boolean): void;

  hasCloseRead(): boolean;
  clearCloseRead(): void;
  getCloseRead(): boolean | undefined;
  setCloseRead(value: boolean): void;

  hasBillgroup(): boolean;
  clearBillgroup(): void;
  getBillgroup(): string | undefined;
  setBillgroup(value: string): void;

  hasBookNo(): boolean;
  clearBookNo(): void;
  getBookNo(): string | undefined;
  setBookNo(value: string): void;

  hasWalkNo(): boolean;
  clearWalkNo(): void;
  getWalkNo(): string | undefined;
  setWalkNo(value: string): void;

  hasBilngDate(): boolean;
  clearBilngDate(): void;
  getBilngDate(): string | undefined;
  setBilngDate(value: string): void;

  hasRequired(): boolean;
  clearRequired(): void;
  getRequired(): boolean | undefined;
  setRequired(value: boolean): void;

  hasFunctionBody(): boolean;
  clearFunctionBody(): void;
  getFunctionBody(): string | undefined;
  setFunctionBody(value: string): void;

  hasFunctionName(): boolean;
  clearFunctionName(): void;
  getFunctionName(): string | undefined;
  setFunctionName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HH_EVENTS.AsObject;
  static toObject(includeInstance: boolean, msg: HH_EVENTS): HH_EVENTS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HH_EVENTS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HH_EVENTS;
  static deserializeBinaryFromReader(message: HH_EVENTS, reader: jspb.BinaryReader): HH_EVENTS;
}

export namespace HH_EVENTS {
  export type AsObject = {
    eventId?: number,
    eventCode?: EVENTS_LOCKUPMap[keyof EVENTS_LOCKUPMap],
    eventDesc?: string,
    eventDate?: string,
    deviceId?: string,
    empId?: number,
    isDone?: boolean,
    settingName?: string,
    closeColl?: boolean,
    closeRead?: boolean,
    billgroup?: string,
    bookNo?: string,
    walkNo?: string,
    bilngDate?: string,
    required?: boolean,
    functionBody?: string,
    functionName?: string,
  }
}

export class GetHHEventsReq extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHHEventsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetHHEventsReq): GetHHEventsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHHEventsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHHEventsReq;
  static deserializeBinaryFromReader(message: GetHHEventsReq, reader: jspb.BinaryReader): GetHHEventsReq;
}

export namespace GetHHEventsReq {
  export type AsObject = {
    deviceid?: string,
  }
}

export class GetEmpTotalCollMinChargeRes extends jspb.Message {
  hasTotalissueamt(): boolean;
  clearTotalissueamt(): void;
  getTotalissueamt(): number | undefined;
  setTotalissueamt(value: number): void;

  hasTotalrabtamt(): boolean;
  clearTotalrabtamt(): void;
  getTotalrabtamt(): number | undefined;
  setTotalrabtamt(value: number): void;

  hasTotalissuecollamt(): boolean;
  clearTotalissuecollamt(): void;
  getTotalissuecollamt(): number | undefined;
  setTotalissuecollamt(value: number): void;

  hasTotalrabtcollamt(): boolean;
  clearTotalrabtcollamt(): void;
  getTotalrabtcollamt(): number | undefined;
  setTotalrabtcollamt(value: number): void;

  hasEmpid(): boolean;
  clearEmpid(): void;
  getEmpid(): number | undefined;
  setEmpid(value: number): void;

  hasOhdatype(): boolean;
  clearOhdatype(): void;
  getOhdatype(): OHDA_TYPEMap[keyof OHDA_TYPEMap] | undefined;
  setOhdatype(value: OHDA_TYPEMap[keyof OHDA_TYPEMap]): void;

  hasIssuecycleid(): boolean;
  clearIssuecycleid(): void;
  getIssuecycleid(): number | undefined;
  setIssuecycleid(value: number): void;

  hasRabtcycleid(): boolean;
  clearRabtcycleid(): void;
  getRabtcycleid(): number | undefined;
  setRabtcycleid(value: number): void;

  hasOthercycleids(): boolean;
  clearOthercycleids(): void;
  getOthercycleids(): string | undefined;
  setOthercycleids(value: string): void;

  hasTotalothersissueamt(): boolean;
  clearTotalothersissueamt(): void;
  getTotalothersissueamt(): number | undefined;
  setTotalothersissueamt(value: number): void;

  hasTotalotherscollamt(): boolean;
  clearTotalotherscollamt(): void;
  getTotalotherscollamt(): number | undefined;
  setTotalotherscollamt(value: number): void;

  hasTotalohdaamt(): boolean;
  clearTotalohdaamt(): void;
  getTotalohdaamt(): number | undefined;
  setTotalohdaamt(value: number): void;

  hasTotalohdacollamt(): boolean;
  clearTotalohdacollamt(): void;
  getTotalohdacollamt(): number | undefined;
  setTotalohdacollamt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmpTotalCollMinChargeRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmpTotalCollMinChargeRes): GetEmpTotalCollMinChargeRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmpTotalCollMinChargeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmpTotalCollMinChargeRes;
  static deserializeBinaryFromReader(message: GetEmpTotalCollMinChargeRes, reader: jspb.BinaryReader): GetEmpTotalCollMinChargeRes;
}

export namespace GetEmpTotalCollMinChargeRes {
  export type AsObject = {
    totalissueamt?: number,
    totalrabtamt?: number,
    totalissuecollamt?: number,
    totalrabtcollamt?: number,
    empid?: number,
    ohdatype?: OHDA_TYPEMap[keyof OHDA_TYPEMap],
    issuecycleid?: number,
    rabtcycleid?: number,
    othercycleids?: string,
    totalothersissueamt?: number,
    totalotherscollamt?: number,
    totalohdaamt?: number,
    totalohdacollamt?: number,
  }
}

export class GetEmpTotalCollMinChargeReq extends jspb.Message {
  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmpTotalCollMinChargeReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmpTotalCollMinChargeReq): GetEmpTotalCollMinChargeReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmpTotalCollMinChargeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmpTotalCollMinChargeReq;
  static deserializeBinaryFromReader(message: GetEmpTotalCollMinChargeReq, reader: jspb.BinaryReader): GetEmpTotalCollMinChargeReq;
}

export namespace GetEmpTotalCollMinChargeReq {
  export type AsObject = {
    deviceid?: string,
  }
}

export class RABT_DETAILS extends jspb.Message {
  hasCustkey(): boolean;
  clearCustkey(): void;
  getCustkey(): string | undefined;
  setCustkey(value: string): void;

  hasIssueCycleId(): boolean;
  clearIssueCycleId(): void;
  getIssueCycleId(): number | undefined;
  setIssueCycleId(value: number): void;

  hasEmpId(): boolean;
  clearEmpId(): void;
  getEmpId(): number | undefined;
  setEmpId(value: number): void;

  hasOhdaType(): boolean;
  clearOhdaType(): void;
  getOhdaType(): OHDA_TYPEMap[keyof OHDA_TYPEMap] | undefined;
  setOhdaType(value: OHDA_TYPEMap[keyof OHDA_TYPEMap]): void;

  hasRabtCycleId(): boolean;
  clearRabtCycleId(): void;
  getRabtCycleId(): number | undefined;
  setRabtCycleId(value: number): void;

  hasOtherCycleIds(): boolean;
  clearOtherCycleIds(): void;
  getOtherCycleIds(): string | undefined;
  setOtherCycleIds(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RABT_DETAILS.AsObject;
  static toObject(includeInstance: boolean, msg: RABT_DETAILS): RABT_DETAILS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RABT_DETAILS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RABT_DETAILS;
  static deserializeBinaryFromReader(message: RABT_DETAILS, reader: jspb.BinaryReader): RABT_DETAILS;
}

export namespace RABT_DETAILS {
  export type AsObject = {
    custkey?: string,
    issueCycleId?: number,
    empId?: number,
    ohdaType?: OHDA_TYPEMap[keyof OHDA_TYPEMap],
    rabtCycleId?: number,
    otherCycleIds?: string,
  }
}

export class DateTimeNow extends jspb.Message {
  hasDatetime(): boolean;
  clearDatetime(): void;
  getDatetime(): string | undefined;
  setDatetime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateTimeNow.AsObject;
  static toObject(includeInstance: boolean, msg: DateTimeNow): DateTimeNow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DateTimeNow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateTimeNow;
  static deserializeBinaryFromReader(message: DateTimeNow, reader: jspb.BinaryReader): DateTimeNow;
}

export namespace DateTimeNow {
  export type AsObject = {
    datetime?: string,
  }
}

export class DisabledUserReq extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasBranchId(): boolean;
  clearBranchId(): void;
  getBranchId(): number | undefined;
  setBranchId(value: number): void;

  hasDeviceid(): boolean;
  clearDeviceid(): void;
  getDeviceid(): string | undefined;
  setDeviceid(value: string): void;

  hasIsdisabled(): boolean;
  clearIsdisabled(): void;
  getIsdisabled(): boolean | undefined;
  setIsdisabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisabledUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: DisabledUserReq): DisabledUserReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisabledUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisabledUserReq;
  static deserializeBinaryFromReader(message: DisabledUserReq, reader: jspb.BinaryReader): DisabledUserReq;
}

export namespace DisabledUserReq {
  export type AsObject = {
    id?: number,
    branchId?: number,
    deviceid?: string,
    isdisabled?: boolean,
  }
}

export interface CollectionMethodMap {
  HH: 0;
  BACK_OFFICE: 1;
  CASHIER: 2;
  COLLECTED_FROM_BILNG: 3;
  FAWRY: 4;
  OTHER: 5;
}

export const CollectionMethod: CollectionMethodMap;

export interface CollectionTypeMap {
  TOTAL: 0;
  PARTIAL: 1;
  FARDY: 2;
}

export const CollectionType: CollectionTypeMap;

export interface IssueTypeMap {
  ACCUMLATED_BILNG: 0;
  SINGLE_BILNG: 1;
  UNDEFINED: -1;
}

export const IssueType: IssueTypeMap;

export interface ReadingAcceptanceStatusMap {
  NOT_PROCESSED: 0;
  ACCEPTED: 1;
  REFUSED: 2;
  SKIPPED: 3;
}

export const ReadingAcceptanceStatus: ReadingAcceptanceStatusMap;

export interface UpgradeModeMap {
  MANUAL_INSTALL: 0;
  NOTIFY: 1;
  AUTO: 2;
}

export const UpgradeMode: UpgradeModeMap;

export interface COLLECTION_STATUSMap {
  SUCCSSED: 1;
  ERROR: 2;
  SKIPED: 3;
}

export const COLLECTION_STATUS: COLLECTION_STATUSMap;

export interface MIN_CHARGE_OPMap {
  AND_OP: 1;
  OR_OP: 2;
}

export const MIN_CHARGE_OP: MIN_CHARGE_OPMap;

export interface WSContentTypeMap {
  JSON: 1;
  PROTOBUF: 2;
  TEXT: 3;
  IMAGE: 4;
  VIDEO: 5;
}

export const WSContentType: WSContentTypeMap;

export interface WsMessageTypeMap {
  ALERT_MESSAGE: 1;
  TOAST_MESSAGE: 2;
  ERROR_MESSAGE: 3;
  INBOX_MESSAGE: 4;
  SYNC_MESSAGE: 5;
}

export const WsMessageType: WsMessageTypeMap;

export interface WSServerCommandMap {
  CLEANUP_UNIT_DB_COMMAND: 1;
  UPDATE_USER_COMMAND: 2;
  UPDATE_WALK_COMMAND: 3;
  UPDATE_CUSTOMER_COMMAND: 4;
  NEW_COLLECTION_COMMAND: 5;
  SIGN_OUT_COMMAND: 6;
  DEVICE_STATUS: 7;
}

export const WSServerCommand: WSServerCommandMap;

export interface WsEventTypeMap {
  EVENT_MESSAGE: 1;
  EVENT_COMMAND: 2;
  EVENT_CHANGE_ROOM: 3;
  EVENT_CLIWNT_ID: 4;
  EVENT_ERROR: 5;
  EVENT_PROGRESS: 6;
  EVENT_COMMAND_RESULT: 7;
  JOIN_EVENT: 8;
  LEAVE_EVENT: 9;
}

export const WsEventType: WsEventTypeMap;

export interface SearchByMap {
  CUSTKEY: 0;
  PAYMENT_NO: 1;
  OLD_KEY: 2;
  METER_REF: 3;
  PROP_REF: 4;
  SURNAME: 5;
  ADDRESS: 6;
}

export const SearchBy: SearchByMap;

export interface EVENTS_LOCKUPMap {
  MUST_LOGOUT: 0;
  MUST_UPDATE_STATMENT: 1;
  REGISTER_HELPER: 2;
}

export const EVENTS_LOCKUP: EVENTS_LOCKUPMap;

export interface OHDA_TYPEMap {
  OHDA: 0;
  RABT: 1;
}

export const OHDA_TYPE: OHDA_TYPEMap;

