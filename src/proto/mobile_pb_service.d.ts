// package: mobile
// file: mobile.proto

import * as mobile_pb from "./mobile_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MobileServiceGetVersion = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.Empty;
  readonly responseType: typeof mobile_pb.Version;
};

type MobileServiceDownloadReadingMeters = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.DownloadReadingMetersRequest;
  readonly responseType: typeof mobile_pb.DownloadReadingMetersResponce;
};

type MobileServiceDownloadStatments = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.DownloadStatmentsRequest;
  readonly responseType: typeof mobile_pb.DownloadStatmentsResponce;
};

type MobileServiceDownloadModifiedStatments = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.DownloadStatmentsRequest;
  readonly responseType: typeof mobile_pb.DownloadModifiedStatmentsResponce;
};

type MobileServiceGetUsers = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.GetUsersRequest;
  readonly responseType: typeof mobile_pb.GetUsersResponce;
};

type MobileServiceGetAllUsers = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.GetUsersRequest;
  readonly responseType: typeof mobile_pb.GetUsersResponce;
};

type MobileServiceDisabledUser = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.DisabledUserReq;
  readonly responseType: typeof mobile_pb.ConfirmDownloadResponce;
};

type MobileServiceRegsiterDevice = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.RegsiterDeviceRequest;
  readonly responseType: typeof mobile_pb.RegsiterDeviceResponce;
};

type MobileServiceConfirmDownloadReadingMeters = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.ConfirmDownloadRequest;
  readonly responseType: typeof mobile_pb.ConfirmDownloadResponce;
};

type MobileServiceConfirmDownloadStatments = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.ConfirmDownloadRequest;
  readonly responseType: typeof mobile_pb.ConfirmDownloadResponce;
};

type MobileServiceUpdateReadings = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.UpdateReadingsRequest;
  readonly responseType: typeof mobile_pb.UpdateReadingsResponce;
};

type MobileServiceUpdateReading = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.CustReading;
  readonly responseType: typeof mobile_pb.ReadingResponce;
};

type MobileServiceGetWalkStatus = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.GetWalkStatusRequest;
  readonly responseType: typeof mobile_pb.GetWalkStatusResponce;
};

type MobileServiceGetPaymentMethods = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.Empty;
  readonly responseType: typeof mobile_pb.GetPaymentMethodsResponce;
};

type MobileServiceGetPayment = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.GetPaymentRequest;
  readonly responseType: typeof mobile_pb.HHStatm;
};

type MobileServiceGetAndCollectPayment = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.CollectRequest;
  readonly responseType: typeof mobile_pb.HHStatm;
};

type MobileServiceReSendFesses = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.ResendFessesRequest;
  readonly responseType: typeof mobile_pb.HHStatm;
};

type MobileServiceValidateReceipt = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.ValidateReceiptRequest;
  readonly responseType: typeof mobile_pb.ValidateReceiptResponce;
};

type MobileServiceValidateTransFee = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.ValidateTransFeeRequest;
  readonly responseType: typeof mobile_pb.ValidateTransFeeResponce;
};

type MobileServiceGetAccessCodes = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.Empty;
  readonly responseType: typeof mobile_pb.GetAccessCodesResponce;
};

type MobileServiceGetHafza = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.GetHafzaRequest;
  readonly responseType: typeof mobile_pb.GetHafzaReponce;
};

type MobileServiceGetCollectionReport = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.GetCollectionReportRequest;
  readonly responseType: typeof mobile_pb.GetCollectionReportResponce;
};

type MobileServiceGetCollectionReportSummary = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.GetCollectionReportRequest;
  readonly responseType: typeof mobile_pb.GetCollectionReportResponce;
};

type MobileServiceGetDeposits = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.GetDepositsRequest;
  readonly responseType: typeof mobile_pb.GetDepositsResponce;
};

type MobileServiceGetLastDepositDate = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.GetDepositsRequest;
  readonly responseType: typeof mobile_pb.LasDepositDate;
};

type MobileServiceGetDeviceSettings = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.DeviceSettingRequest;
  readonly responseType: typeof mobile_pb.DeviceSettingResponce;
};

type MobileServicePushDeviceBackup = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.DeviceDataBaseBackupRequest;
  readonly responseType: typeof mobile_pb.DeviceDataBaseBackupResponce;
};

type MobileServiceCancelReceipts = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.CancelReceiptRequest;
  readonly responseType: typeof mobile_pb.CancelReceiptResponce;
};

type MobileServiceGetApkInfo = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.GetApkInfoRequest;
  readonly responseType: typeof mobile_pb.GetApkInfoResponce;
};

type MobileServiceGetConsumptionTypes = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.Empty;
  readonly responseType: typeof mobile_pb.ConsumpTypesResponce;
};

type MobileServiceDownloadDeviceSettings = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.DeviceSettingRequest;
  readonly responseType: typeof mobile_pb.DeviceSettingResponce;
};

type MobileServiceUploadPrintLogs = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.PrintLogRequest;
  readonly responseType: typeof mobile_pb.PrintLogResponce;
};

type MobileServiceGetDashboard = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.DashboardRequest;
  readonly responseType: typeof mobile_pb.DashboardResponce;
};

type MobileServiceGetUnPostedSummary = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.DashboardRequest;
  readonly responseType: typeof mobile_pb.UnPostedSummaryResponce;
};

type MobileServiceSendDbBackup = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.BackupRequest;
  readonly responseType: typeof mobile_pb.BackupResponce;
};

type MobileServiceCloseCollection = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.CloseWalkRequest;
  readonly responseType: typeof mobile_pb.CloseWalkResponce;
};

type MobileServiceCloseReading = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.CloseWalkRequest;
  readonly responseType: typeof mobile_pb.CloseWalkResponce;
};

type MobileServiceUploadMetersImages = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.UploadMetersImagesReq;
  readonly responseType: typeof mobile_pb.UploadMetersImagesRes;
};

type MobileServiceGetComplaintTypes = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.Empty;
  readonly responseType: typeof mobile_pb.LookupsType;
};

type MobileServiceGetComplaintDegrees = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.Empty;
  readonly responseType: typeof mobile_pb.LookupsType;
};

type MobileServiceGetSurveyTypes = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.Empty;
  readonly responseType: typeof mobile_pb.LookupsType;
};

type MobileServiceGetKhelsaTypes = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.Empty;
  readonly responseType: typeof mobile_pb.LookupsType;
};

type MobileServiceSaveSurevies = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.SurveyRequest;
  readonly responseType: typeof mobile_pb.ResultSet;
};

type MobileServiceSaveComplaints = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.ComplaintsRequest;
  readonly responseType: typeof mobile_pb.ResultSet;
};

type MobileServiceSaveBadConns = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.BadConnRequest;
  readonly responseType: typeof mobile_pb.ResultSet;
};

type MobileServiceGetDepositsReport = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.GetCollectionReportRequest;
  readonly responseType: typeof mobile_pb.GetCollectionReportResponce;
};

type MobileServiceSendWS = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.WsEvent;
  readonly responseType: typeof mobile_pb.WsEventResult;
};

type MobileServiceGetMessagesStream = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof mobile_pb.Empty;
  readonly responseType: typeof mobile_pb.WsMessage;
};

type MobileServiceSaveCduBuilding = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.BuildingInfo;
  readonly responseType: typeof mobile_pb.ProcessReponse;
};

type MobileServiceSaveCduSurvey = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.SurveyInfo;
  readonly responseType: typeof mobile_pb.ProcessReponse;
};

type MobileServiceGetAreas = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.Empty;
  readonly responseType: typeof mobile_pb.CityReponse;
};

type MobileServiceSaveNewSeq = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.ArrNewSeq;
  readonly responseType: typeof mobile_pb.ProcessReponse;
};

type MobileServiceSearchByCustkey = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.SearchByCustkeyRequest;
  readonly responseType: typeof mobile_pb.DownloadModifiedStatmentsResponce;
};

type MobileServiceSaveFawryTrans = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.ArrFAWRY_CARD_TRANS;
  readonly responseType: typeof mobile_pb.ConfirmDownloadResponce;
};

type MobileServiceGetEmpWalks = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.GetEmpWalksReq;
  readonly responseType: typeof mobile_pb.GetEmpWalksRes;
};

type MobileServiceGetPaymentSearchedBy = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.GetPaymentSearchedByReq;
  readonly responseType: typeof mobile_pb.GetPaymentSearchedByRes;
};

type MobileServiceGetHHEvents = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.GetHHEventsReq;
  readonly responseType: typeof mobile_pb.ArrHHEvents;
};

type MobileServiceSaveHHEvent = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.HH_EVENTS;
  readonly responseType: typeof mobile_pb.ConfirmDownloadResponce;
};

type MobileServiceUpdateHHEventDone = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.UpdateHhEventDoneReq;
  readonly responseType: typeof mobile_pb.ConfirmDownloadResponce;
};

type MobileServiceGetEmpTotalCollMinCharge = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.GetEmpTotalCollMinChargeReq;
  readonly responseType: typeof mobile_pb.GetEmpTotalCollMinChargeRes;
};

type MobileServiceRefreshCustomersWalksCache = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.Empty;
  readonly responseType: typeof mobile_pb.ConfirmDownloadResponce;
};

type MobileServiceRefreshMetersWalksCache = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.Empty;
  readonly responseType: typeof mobile_pb.ConfirmDownloadResponce;
};

type MobileServiceGetDateTimeNow = {
  readonly methodName: string;
  readonly service: typeof MobileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mobile_pb.Empty;
  readonly responseType: typeof mobile_pb.DateTimeNow;
};

export class MobileService {
  static readonly serviceName: string;
  static readonly GetVersion: MobileServiceGetVersion;
  static readonly DownloadReadingMeters: MobileServiceDownloadReadingMeters;
  static readonly DownloadStatments: MobileServiceDownloadStatments;
  static readonly DownloadModifiedStatments: MobileServiceDownloadModifiedStatments;
  static readonly GetUsers: MobileServiceGetUsers;
  static readonly GetAllUsers: MobileServiceGetAllUsers;
  static readonly DisabledUser: MobileServiceDisabledUser;
  static readonly RegsiterDevice: MobileServiceRegsiterDevice;
  static readonly ConfirmDownloadReadingMeters: MobileServiceConfirmDownloadReadingMeters;
  static readonly ConfirmDownloadStatments: MobileServiceConfirmDownloadStatments;
  static readonly UpdateReadings: MobileServiceUpdateReadings;
  static readonly UpdateReading: MobileServiceUpdateReading;
  static readonly GetWalkStatus: MobileServiceGetWalkStatus;
  static readonly GetPaymentMethods: MobileServiceGetPaymentMethods;
  static readonly GetPayment: MobileServiceGetPayment;
  static readonly GetAndCollectPayment: MobileServiceGetAndCollectPayment;
  static readonly ReSendFesses: MobileServiceReSendFesses;
  static readonly ValidateReceipt: MobileServiceValidateReceipt;
  static readonly ValidateTransFee: MobileServiceValidateTransFee;
  static readonly GetAccessCodes: MobileServiceGetAccessCodes;
  static readonly GetHafza: MobileServiceGetHafza;
  static readonly GetCollectionReport: MobileServiceGetCollectionReport;
  static readonly GetCollectionReportSummary: MobileServiceGetCollectionReportSummary;
  static readonly GetDeposits: MobileServiceGetDeposits;
  static readonly GetLastDepositDate: MobileServiceGetLastDepositDate;
  static readonly GetDeviceSettings: MobileServiceGetDeviceSettings;
  static readonly PushDeviceBackup: MobileServicePushDeviceBackup;
  static readonly CancelReceipts: MobileServiceCancelReceipts;
  static readonly GetApkInfo: MobileServiceGetApkInfo;
  static readonly GetConsumptionTypes: MobileServiceGetConsumptionTypes;
  static readonly DownloadDeviceSettings: MobileServiceDownloadDeviceSettings;
  static readonly UploadPrintLogs: MobileServiceUploadPrintLogs;
  static readonly GetDashboard: MobileServiceGetDashboard;
  static readonly GetUnPostedSummary: MobileServiceGetUnPostedSummary;
  static readonly SendDbBackup: MobileServiceSendDbBackup;
  static readonly CloseCollection: MobileServiceCloseCollection;
  static readonly CloseReading: MobileServiceCloseReading;
  static readonly UploadMetersImages: MobileServiceUploadMetersImages;
  static readonly GetComplaintTypes: MobileServiceGetComplaintTypes;
  static readonly GetComplaintDegrees: MobileServiceGetComplaintDegrees;
  static readonly GetSurveyTypes: MobileServiceGetSurveyTypes;
  static readonly GetKhelsaTypes: MobileServiceGetKhelsaTypes;
  static readonly SaveSurevies: MobileServiceSaveSurevies;
  static readonly SaveComplaints: MobileServiceSaveComplaints;
  static readonly SaveBadConns: MobileServiceSaveBadConns;
  static readonly GetDepositsReport: MobileServiceGetDepositsReport;
  static readonly SendWS: MobileServiceSendWS;
  static readonly GetMessagesStream: MobileServiceGetMessagesStream;
  static readonly SaveCduBuilding: MobileServiceSaveCduBuilding;
  static readonly SaveCduSurvey: MobileServiceSaveCduSurvey;
  static readonly GetAreas: MobileServiceGetAreas;
  static readonly SaveNewSeq: MobileServiceSaveNewSeq;
  static readonly SearchByCustkey: MobileServiceSearchByCustkey;
  static readonly SaveFawryTrans: MobileServiceSaveFawryTrans;
  static readonly GetEmpWalks: MobileServiceGetEmpWalks;
  static readonly GetPaymentSearchedBy: MobileServiceGetPaymentSearchedBy;
  static readonly GetHHEvents: MobileServiceGetHHEvents;
  static readonly SaveHHEvent: MobileServiceSaveHHEvent;
  static readonly UpdateHHEventDone: MobileServiceUpdateHHEventDone;
  static readonly GetEmpTotalCollMinCharge: MobileServiceGetEmpTotalCollMinCharge;
  static readonly RefreshCustomersWalksCache: MobileServiceRefreshCustomersWalksCache;
  static readonly RefreshMetersWalksCache: MobileServiceRefreshMetersWalksCache;
  static readonly GetDateTimeNow: MobileServiceGetDateTimeNow;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class MobileServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getVersion(
    requestMessage: mobile_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.Version|null) => void
  ): UnaryResponse;
  getVersion(
    requestMessage: mobile_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.Version|null) => void
  ): UnaryResponse;
  downloadReadingMeters(
    requestMessage: mobile_pb.DownloadReadingMetersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.DownloadReadingMetersResponce|null) => void
  ): UnaryResponse;
  downloadReadingMeters(
    requestMessage: mobile_pb.DownloadReadingMetersRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.DownloadReadingMetersResponce|null) => void
  ): UnaryResponse;
  downloadStatments(
    requestMessage: mobile_pb.DownloadStatmentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.DownloadStatmentsResponce|null) => void
  ): UnaryResponse;
  downloadStatments(
    requestMessage: mobile_pb.DownloadStatmentsRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.DownloadStatmentsResponce|null) => void
  ): UnaryResponse;
  downloadModifiedStatments(
    requestMessage: mobile_pb.DownloadStatmentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.DownloadModifiedStatmentsResponce|null) => void
  ): UnaryResponse;
  downloadModifiedStatments(
    requestMessage: mobile_pb.DownloadStatmentsRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.DownloadModifiedStatmentsResponce|null) => void
  ): UnaryResponse;
  getUsers(
    requestMessage: mobile_pb.GetUsersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetUsersResponce|null) => void
  ): UnaryResponse;
  getUsers(
    requestMessage: mobile_pb.GetUsersRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetUsersResponce|null) => void
  ): UnaryResponse;
  getAllUsers(
    requestMessage: mobile_pb.GetUsersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetUsersResponce|null) => void
  ): UnaryResponse;
  getAllUsers(
    requestMessage: mobile_pb.GetUsersRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetUsersResponce|null) => void
  ): UnaryResponse;
  disabledUser(
    requestMessage: mobile_pb.DisabledUserReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ConfirmDownloadResponce|null) => void
  ): UnaryResponse;
  disabledUser(
    requestMessage: mobile_pb.DisabledUserReq,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ConfirmDownloadResponce|null) => void
  ): UnaryResponse;
  regsiterDevice(
    requestMessage: mobile_pb.RegsiterDeviceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.RegsiterDeviceResponce|null) => void
  ): UnaryResponse;
  regsiterDevice(
    requestMessage: mobile_pb.RegsiterDeviceRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.RegsiterDeviceResponce|null) => void
  ): UnaryResponse;
  confirmDownloadReadingMeters(
    requestMessage: mobile_pb.ConfirmDownloadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ConfirmDownloadResponce|null) => void
  ): UnaryResponse;
  confirmDownloadReadingMeters(
    requestMessage: mobile_pb.ConfirmDownloadRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ConfirmDownloadResponce|null) => void
  ): UnaryResponse;
  confirmDownloadStatments(
    requestMessage: mobile_pb.ConfirmDownloadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ConfirmDownloadResponce|null) => void
  ): UnaryResponse;
  confirmDownloadStatments(
    requestMessage: mobile_pb.ConfirmDownloadRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ConfirmDownloadResponce|null) => void
  ): UnaryResponse;
  updateReadings(
    requestMessage: mobile_pb.UpdateReadingsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.UpdateReadingsResponce|null) => void
  ): UnaryResponse;
  updateReadings(
    requestMessage: mobile_pb.UpdateReadingsRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.UpdateReadingsResponce|null) => void
  ): UnaryResponse;
  updateReading(
    requestMessage: mobile_pb.CustReading,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ReadingResponce|null) => void
  ): UnaryResponse;
  updateReading(
    requestMessage: mobile_pb.CustReading,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ReadingResponce|null) => void
  ): UnaryResponse;
  getWalkStatus(
    requestMessage: mobile_pb.GetWalkStatusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetWalkStatusResponce|null) => void
  ): UnaryResponse;
  getWalkStatus(
    requestMessage: mobile_pb.GetWalkStatusRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetWalkStatusResponce|null) => void
  ): UnaryResponse;
  getPaymentMethods(
    requestMessage: mobile_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetPaymentMethodsResponce|null) => void
  ): UnaryResponse;
  getPaymentMethods(
    requestMessage: mobile_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetPaymentMethodsResponce|null) => void
  ): UnaryResponse;
  getPayment(
    requestMessage: mobile_pb.GetPaymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.HHStatm|null) => void
  ): UnaryResponse;
  getPayment(
    requestMessage: mobile_pb.GetPaymentRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.HHStatm|null) => void
  ): UnaryResponse;
  getAndCollectPayment(
    requestMessage: mobile_pb.CollectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.HHStatm|null) => void
  ): UnaryResponse;
  getAndCollectPayment(
    requestMessage: mobile_pb.CollectRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.HHStatm|null) => void
  ): UnaryResponse;
  reSendFesses(
    requestMessage: mobile_pb.ResendFessesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.HHStatm|null) => void
  ): UnaryResponse;
  reSendFesses(
    requestMessage: mobile_pb.ResendFessesRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.HHStatm|null) => void
  ): UnaryResponse;
  validateReceipt(
    requestMessage: mobile_pb.ValidateReceiptRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ValidateReceiptResponce|null) => void
  ): UnaryResponse;
  validateReceipt(
    requestMessage: mobile_pb.ValidateReceiptRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ValidateReceiptResponce|null) => void
  ): UnaryResponse;
  validateTransFee(
    requestMessage: mobile_pb.ValidateTransFeeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ValidateTransFeeResponce|null) => void
  ): UnaryResponse;
  validateTransFee(
    requestMessage: mobile_pb.ValidateTransFeeRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ValidateTransFeeResponce|null) => void
  ): UnaryResponse;
  getAccessCodes(
    requestMessage: mobile_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetAccessCodesResponce|null) => void
  ): UnaryResponse;
  getAccessCodes(
    requestMessage: mobile_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetAccessCodesResponce|null) => void
  ): UnaryResponse;
  getHafza(
    requestMessage: mobile_pb.GetHafzaRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetHafzaReponce|null) => void
  ): UnaryResponse;
  getHafza(
    requestMessage: mobile_pb.GetHafzaRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetHafzaReponce|null) => void
  ): UnaryResponse;
  getCollectionReport(
    requestMessage: mobile_pb.GetCollectionReportRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetCollectionReportResponce|null) => void
  ): UnaryResponse;
  getCollectionReport(
    requestMessage: mobile_pb.GetCollectionReportRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetCollectionReportResponce|null) => void
  ): UnaryResponse;
  getCollectionReportSummary(
    requestMessage: mobile_pb.GetCollectionReportRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetCollectionReportResponce|null) => void
  ): UnaryResponse;
  getCollectionReportSummary(
    requestMessage: mobile_pb.GetCollectionReportRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetCollectionReportResponce|null) => void
  ): UnaryResponse;
  getDeposits(
    requestMessage: mobile_pb.GetDepositsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetDepositsResponce|null) => void
  ): UnaryResponse;
  getDeposits(
    requestMessage: mobile_pb.GetDepositsRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetDepositsResponce|null) => void
  ): UnaryResponse;
  getLastDepositDate(
    requestMessage: mobile_pb.GetDepositsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.LasDepositDate|null) => void
  ): UnaryResponse;
  getLastDepositDate(
    requestMessage: mobile_pb.GetDepositsRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.LasDepositDate|null) => void
  ): UnaryResponse;
  getDeviceSettings(
    requestMessage: mobile_pb.DeviceSettingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.DeviceSettingResponce|null) => void
  ): UnaryResponse;
  getDeviceSettings(
    requestMessage: mobile_pb.DeviceSettingRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.DeviceSettingResponce|null) => void
  ): UnaryResponse;
  pushDeviceBackup(
    requestMessage: mobile_pb.DeviceDataBaseBackupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.DeviceDataBaseBackupResponce|null) => void
  ): UnaryResponse;
  pushDeviceBackup(
    requestMessage: mobile_pb.DeviceDataBaseBackupRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.DeviceDataBaseBackupResponce|null) => void
  ): UnaryResponse;
  cancelReceipts(
    requestMessage: mobile_pb.CancelReceiptRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.CancelReceiptResponce|null) => void
  ): UnaryResponse;
  cancelReceipts(
    requestMessage: mobile_pb.CancelReceiptRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.CancelReceiptResponce|null) => void
  ): UnaryResponse;
  getApkInfo(
    requestMessage: mobile_pb.GetApkInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetApkInfoResponce|null) => void
  ): UnaryResponse;
  getApkInfo(
    requestMessage: mobile_pb.GetApkInfoRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetApkInfoResponce|null) => void
  ): UnaryResponse;
  getConsumptionTypes(
    requestMessage: mobile_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ConsumpTypesResponce|null) => void
  ): UnaryResponse;
  getConsumptionTypes(
    requestMessage: mobile_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ConsumpTypesResponce|null) => void
  ): UnaryResponse;
  downloadDeviceSettings(
    requestMessage: mobile_pb.DeviceSettingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.DeviceSettingResponce|null) => void
  ): UnaryResponse;
  downloadDeviceSettings(
    requestMessage: mobile_pb.DeviceSettingRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.DeviceSettingResponce|null) => void
  ): UnaryResponse;
  uploadPrintLogs(
    requestMessage: mobile_pb.PrintLogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.PrintLogResponce|null) => void
  ): UnaryResponse;
  uploadPrintLogs(
    requestMessage: mobile_pb.PrintLogRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.PrintLogResponce|null) => void
  ): UnaryResponse;
  getDashboard(
    requestMessage: mobile_pb.DashboardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.DashboardResponce|null) => void
  ): UnaryResponse;
  getDashboard(
    requestMessage: mobile_pb.DashboardRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.DashboardResponce|null) => void
  ): UnaryResponse;
  getUnPostedSummary(
    requestMessage: mobile_pb.DashboardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.UnPostedSummaryResponce|null) => void
  ): UnaryResponse;
  getUnPostedSummary(
    requestMessage: mobile_pb.DashboardRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.UnPostedSummaryResponce|null) => void
  ): UnaryResponse;
  sendDbBackup(
    requestMessage: mobile_pb.BackupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.BackupResponce|null) => void
  ): UnaryResponse;
  sendDbBackup(
    requestMessage: mobile_pb.BackupRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.BackupResponce|null) => void
  ): UnaryResponse;
  closeCollection(
    requestMessage: mobile_pb.CloseWalkRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.CloseWalkResponce|null) => void
  ): UnaryResponse;
  closeCollection(
    requestMessage: mobile_pb.CloseWalkRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.CloseWalkResponce|null) => void
  ): UnaryResponse;
  closeReading(
    requestMessage: mobile_pb.CloseWalkRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.CloseWalkResponce|null) => void
  ): UnaryResponse;
  closeReading(
    requestMessage: mobile_pb.CloseWalkRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.CloseWalkResponce|null) => void
  ): UnaryResponse;
  uploadMetersImages(
    requestMessage: mobile_pb.UploadMetersImagesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.UploadMetersImagesRes|null) => void
  ): UnaryResponse;
  uploadMetersImages(
    requestMessage: mobile_pb.UploadMetersImagesReq,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.UploadMetersImagesRes|null) => void
  ): UnaryResponse;
  getComplaintTypes(
    requestMessage: mobile_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.LookupsType|null) => void
  ): UnaryResponse;
  getComplaintTypes(
    requestMessage: mobile_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.LookupsType|null) => void
  ): UnaryResponse;
  getComplaintDegrees(
    requestMessage: mobile_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.LookupsType|null) => void
  ): UnaryResponse;
  getComplaintDegrees(
    requestMessage: mobile_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.LookupsType|null) => void
  ): UnaryResponse;
  getSurveyTypes(
    requestMessage: mobile_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.LookupsType|null) => void
  ): UnaryResponse;
  getSurveyTypes(
    requestMessage: mobile_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.LookupsType|null) => void
  ): UnaryResponse;
  getKhelsaTypes(
    requestMessage: mobile_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.LookupsType|null) => void
  ): UnaryResponse;
  getKhelsaTypes(
    requestMessage: mobile_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.LookupsType|null) => void
  ): UnaryResponse;
  saveSurevies(
    requestMessage: mobile_pb.SurveyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ResultSet|null) => void
  ): UnaryResponse;
  saveSurevies(
    requestMessage: mobile_pb.SurveyRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ResultSet|null) => void
  ): UnaryResponse;
  saveComplaints(
    requestMessage: mobile_pb.ComplaintsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ResultSet|null) => void
  ): UnaryResponse;
  saveComplaints(
    requestMessage: mobile_pb.ComplaintsRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ResultSet|null) => void
  ): UnaryResponse;
  saveBadConns(
    requestMessage: mobile_pb.BadConnRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ResultSet|null) => void
  ): UnaryResponse;
  saveBadConns(
    requestMessage: mobile_pb.BadConnRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ResultSet|null) => void
  ): UnaryResponse;
  getDepositsReport(
    requestMessage: mobile_pb.GetCollectionReportRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetCollectionReportResponce|null) => void
  ): UnaryResponse;
  getDepositsReport(
    requestMessage: mobile_pb.GetCollectionReportRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetCollectionReportResponce|null) => void
  ): UnaryResponse;
  sendWS(
    requestMessage: mobile_pb.WsEvent,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.WsEventResult|null) => void
  ): UnaryResponse;
  sendWS(
    requestMessage: mobile_pb.WsEvent,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.WsEventResult|null) => void
  ): UnaryResponse;
  getMessagesStream(requestMessage: mobile_pb.Empty, metadata?: grpc.Metadata): ResponseStream<mobile_pb.WsMessage>;
  saveCduBuilding(
    requestMessage: mobile_pb.BuildingInfo,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ProcessReponse|null) => void
  ): UnaryResponse;
  saveCduBuilding(
    requestMessage: mobile_pb.BuildingInfo,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ProcessReponse|null) => void
  ): UnaryResponse;
  saveCduSurvey(
    requestMessage: mobile_pb.SurveyInfo,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ProcessReponse|null) => void
  ): UnaryResponse;
  saveCduSurvey(
    requestMessage: mobile_pb.SurveyInfo,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ProcessReponse|null) => void
  ): UnaryResponse;
  getAreas(
    requestMessage: mobile_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.CityReponse|null) => void
  ): UnaryResponse;
  getAreas(
    requestMessage: mobile_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.CityReponse|null) => void
  ): UnaryResponse;
  saveNewSeq(
    requestMessage: mobile_pb.ArrNewSeq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ProcessReponse|null) => void
  ): UnaryResponse;
  saveNewSeq(
    requestMessage: mobile_pb.ArrNewSeq,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ProcessReponse|null) => void
  ): UnaryResponse;
  searchByCustkey(
    requestMessage: mobile_pb.SearchByCustkeyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.DownloadModifiedStatmentsResponce|null) => void
  ): UnaryResponse;
  searchByCustkey(
    requestMessage: mobile_pb.SearchByCustkeyRequest,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.DownloadModifiedStatmentsResponce|null) => void
  ): UnaryResponse;
  saveFawryTrans(
    requestMessage: mobile_pb.ArrFAWRY_CARD_TRANS,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ConfirmDownloadResponce|null) => void
  ): UnaryResponse;
  saveFawryTrans(
    requestMessage: mobile_pb.ArrFAWRY_CARD_TRANS,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ConfirmDownloadResponce|null) => void
  ): UnaryResponse;
  getEmpWalks(
    requestMessage: mobile_pb.GetEmpWalksReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetEmpWalksRes|null) => void
  ): UnaryResponse;
  getEmpWalks(
    requestMessage: mobile_pb.GetEmpWalksReq,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetEmpWalksRes|null) => void
  ): UnaryResponse;
  getPaymentSearchedBy(
    requestMessage: mobile_pb.GetPaymentSearchedByReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetPaymentSearchedByRes|null) => void
  ): UnaryResponse;
  getPaymentSearchedBy(
    requestMessage: mobile_pb.GetPaymentSearchedByReq,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetPaymentSearchedByRes|null) => void
  ): UnaryResponse;
  getHHEvents(
    requestMessage: mobile_pb.GetHHEventsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ArrHHEvents|null) => void
  ): UnaryResponse;
  getHHEvents(
    requestMessage: mobile_pb.GetHHEventsReq,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ArrHHEvents|null) => void
  ): UnaryResponse;
  saveHHEvent(
    requestMessage: mobile_pb.HH_EVENTS,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ConfirmDownloadResponce|null) => void
  ): UnaryResponse;
  saveHHEvent(
    requestMessage: mobile_pb.HH_EVENTS,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ConfirmDownloadResponce|null) => void
  ): UnaryResponse;
  updateHHEventDone(
    requestMessage: mobile_pb.UpdateHhEventDoneReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ConfirmDownloadResponce|null) => void
  ): UnaryResponse;
  updateHHEventDone(
    requestMessage: mobile_pb.UpdateHhEventDoneReq,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ConfirmDownloadResponce|null) => void
  ): UnaryResponse;
  getEmpTotalCollMinCharge(
    requestMessage: mobile_pb.GetEmpTotalCollMinChargeReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetEmpTotalCollMinChargeRes|null) => void
  ): UnaryResponse;
  getEmpTotalCollMinCharge(
    requestMessage: mobile_pb.GetEmpTotalCollMinChargeReq,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.GetEmpTotalCollMinChargeRes|null) => void
  ): UnaryResponse;
  refreshCustomersWalksCache(
    requestMessage: mobile_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ConfirmDownloadResponce|null) => void
  ): UnaryResponse;
  refreshCustomersWalksCache(
    requestMessage: mobile_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ConfirmDownloadResponce|null) => void
  ): UnaryResponse;
  refreshMetersWalksCache(
    requestMessage: mobile_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ConfirmDownloadResponce|null) => void
  ): UnaryResponse;
  refreshMetersWalksCache(
    requestMessage: mobile_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.ConfirmDownloadResponce|null) => void
  ): UnaryResponse;
  getDateTimeNow(
    requestMessage: mobile_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.DateTimeNow|null) => void
  ): UnaryResponse;
  getDateTimeNow(
    requestMessage: mobile_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: mobile_pb.DateTimeNow|null) => void
  ): UnaryResponse;
}

