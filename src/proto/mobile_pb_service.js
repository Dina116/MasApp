// package: mobile
// file: mobile.proto

var mobile_pb = require("./mobile_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MobileService = (function () {
  function MobileService() {}
  MobileService.serviceName = "mobile.MobileService";
  return MobileService;
}());

MobileService.GetVersion = {
  methodName: "GetVersion",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.Empty,
  responseType: mobile_pb.Version
};

MobileService.DownloadReadingMeters = {
  methodName: "DownloadReadingMeters",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.DownloadReadingMetersRequest,
  responseType: mobile_pb.DownloadReadingMetersResponce
};

MobileService.DownloadStatments = {
  methodName: "DownloadStatments",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.DownloadStatmentsRequest,
  responseType: mobile_pb.DownloadStatmentsResponce
};

MobileService.DownloadModifiedStatments = {
  methodName: "DownloadModifiedStatments",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.DownloadStatmentsRequest,
  responseType: mobile_pb.DownloadModifiedStatmentsResponce
};

MobileService.GetUsers = {
  methodName: "GetUsers",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.GetUsersRequest,
  responseType: mobile_pb.GetUsersResponce
};

MobileService.GetAllUsers = {
  methodName: "GetAllUsers",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.GetUsersRequest,
  responseType: mobile_pb.GetUsersResponce
};

MobileService.DisabledUser = {
  methodName: "DisabledUser",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.DisabledUserReq,
  responseType: mobile_pb.ConfirmDownloadResponce
};

MobileService.RegsiterDevice = {
  methodName: "RegsiterDevice",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.RegsiterDeviceRequest,
  responseType: mobile_pb.RegsiterDeviceResponce
};

MobileService.ConfirmDownloadReadingMeters = {
  methodName: "ConfirmDownloadReadingMeters",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.ConfirmDownloadRequest,
  responseType: mobile_pb.ConfirmDownloadResponce
};

MobileService.ConfirmDownloadStatments = {
  methodName: "ConfirmDownloadStatments",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.ConfirmDownloadRequest,
  responseType: mobile_pb.ConfirmDownloadResponce
};

MobileService.UpdateReadings = {
  methodName: "UpdateReadings",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.UpdateReadingsRequest,
  responseType: mobile_pb.UpdateReadingsResponce
};

MobileService.UpdateReading = {
  methodName: "UpdateReading",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.CustReading,
  responseType: mobile_pb.ReadingResponce
};

MobileService.GetWalkStatus = {
  methodName: "GetWalkStatus",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.GetWalkStatusRequest,
  responseType: mobile_pb.GetWalkStatusResponce
};

MobileService.GetPaymentMethods = {
  methodName: "GetPaymentMethods",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.Empty,
  responseType: mobile_pb.GetPaymentMethodsResponce
};

MobileService.GetPayment = {
  methodName: "GetPayment",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.GetPaymentRequest,
  responseType: mobile_pb.HHStatm
};

MobileService.GetAndCollectPayment = {
  methodName: "GetAndCollectPayment",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.CollectRequest,
  responseType: mobile_pb.HHStatm
};

MobileService.ReSendFesses = {
  methodName: "ReSendFesses",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.ResendFessesRequest,
  responseType: mobile_pb.HHStatm
};

MobileService.ValidateReceipt = {
  methodName: "ValidateReceipt",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.ValidateReceiptRequest,
  responseType: mobile_pb.ValidateReceiptResponce
};

MobileService.ValidateTransFee = {
  methodName: "ValidateTransFee",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.ValidateTransFeeRequest,
  responseType: mobile_pb.ValidateTransFeeResponce
};

MobileService.GetAccessCodes = {
  methodName: "GetAccessCodes",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.Empty,
  responseType: mobile_pb.GetAccessCodesResponce
};

MobileService.GetHafza = {
  methodName: "GetHafza",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.GetHafzaRequest,
  responseType: mobile_pb.GetHafzaReponce
};

MobileService.GetCollectionReport = {
  methodName: "GetCollectionReport",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.GetCollectionReportRequest,
  responseType: mobile_pb.GetCollectionReportResponce
};

MobileService.GetCollectionReportSummary = {
  methodName: "GetCollectionReportSummary",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.GetCollectionReportRequest,
  responseType: mobile_pb.GetCollectionReportResponce
};

MobileService.GetDeposits = {
  methodName: "GetDeposits",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.GetDepositsRequest,
  responseType: mobile_pb.GetDepositsResponce
};

MobileService.GetLastDepositDate = {
  methodName: "GetLastDepositDate",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.GetDepositsRequest,
  responseType: mobile_pb.LasDepositDate
};

MobileService.GetDeviceSettings = {
  methodName: "GetDeviceSettings",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.DeviceSettingRequest,
  responseType: mobile_pb.DeviceSettingResponce
};

MobileService.PushDeviceBackup = {
  methodName: "PushDeviceBackup",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.DeviceDataBaseBackupRequest,
  responseType: mobile_pb.DeviceDataBaseBackupResponce
};

MobileService.CancelReceipts = {
  methodName: "CancelReceipts",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.CancelReceiptRequest,
  responseType: mobile_pb.CancelReceiptResponce
};

MobileService.GetApkInfo = {
  methodName: "GetApkInfo",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.GetApkInfoRequest,
  responseType: mobile_pb.GetApkInfoResponce
};

MobileService.GetConsumptionTypes = {
  methodName: "GetConsumptionTypes",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.Empty,
  responseType: mobile_pb.ConsumpTypesResponce
};

MobileService.DownloadDeviceSettings = {
  methodName: "DownloadDeviceSettings",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.DeviceSettingRequest,
  responseType: mobile_pb.DeviceSettingResponce
};

MobileService.UploadPrintLogs = {
  methodName: "UploadPrintLogs",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.PrintLogRequest,
  responseType: mobile_pb.PrintLogResponce
};

MobileService.GetDashboard = {
  methodName: "GetDashboard",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.DashboardRequest,
  responseType: mobile_pb.DashboardResponce
};

MobileService.GetUnPostedSummary = {
  methodName: "GetUnPostedSummary",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.DashboardRequest,
  responseType: mobile_pb.UnPostedSummaryResponce
};

MobileService.SendDbBackup = {
  methodName: "SendDbBackup",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.BackupRequest,
  responseType: mobile_pb.BackupResponce
};

MobileService.CloseCollection = {
  methodName: "CloseCollection",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.CloseWalkRequest,
  responseType: mobile_pb.CloseWalkResponce
};

MobileService.CloseReading = {
  methodName: "CloseReading",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.CloseWalkRequest,
  responseType: mobile_pb.CloseWalkResponce
};

MobileService.UploadMetersImages = {
  methodName: "UploadMetersImages",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.UploadMetersImagesReq,
  responseType: mobile_pb.UploadMetersImagesRes
};

MobileService.GetComplaintTypes = {
  methodName: "GetComplaintTypes",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.Empty,
  responseType: mobile_pb.LookupsType
};

MobileService.GetComplaintDegrees = {
  methodName: "GetComplaintDegrees",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.Empty,
  responseType: mobile_pb.LookupsType
};

MobileService.GetSurveyTypes = {
  methodName: "GetSurveyTypes",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.Empty,
  responseType: mobile_pb.LookupsType
};

MobileService.GetKhelsaTypes = {
  methodName: "GetKhelsaTypes",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.Empty,
  responseType: mobile_pb.LookupsType
};

MobileService.SaveSurevies = {
  methodName: "SaveSurevies",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.SurveyRequest,
  responseType: mobile_pb.ResultSet
};

MobileService.SaveComplaints = {
  methodName: "SaveComplaints",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.ComplaintsRequest,
  responseType: mobile_pb.ResultSet
};

MobileService.SaveBadConns = {
  methodName: "SaveBadConns",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.BadConnRequest,
  responseType: mobile_pb.ResultSet
};

MobileService.GetDepositsReport = {
  methodName: "GetDepositsReport",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.GetCollectionReportRequest,
  responseType: mobile_pb.GetCollectionReportResponce
};

MobileService.SendWS = {
  methodName: "SendWS",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.WsEvent,
  responseType: mobile_pb.WsEventResult
};

MobileService.GetMessagesStream = {
  methodName: "GetMessagesStream",
  service: MobileService,
  requestStream: false,
  responseStream: true,
  requestType: mobile_pb.Empty,
  responseType: mobile_pb.WsMessage
};

MobileService.SaveCduBuilding = {
  methodName: "SaveCduBuilding",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.BuildingInfo,
  responseType: mobile_pb.ProcessReponse
};

MobileService.SaveCduSurvey = {
  methodName: "SaveCduSurvey",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.SurveyInfo,
  responseType: mobile_pb.ProcessReponse
};

MobileService.GetAreas = {
  methodName: "GetAreas",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.Empty,
  responseType: mobile_pb.CityReponse
};

MobileService.SaveNewSeq = {
  methodName: "SaveNewSeq",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.ArrNewSeq,
  responseType: mobile_pb.ProcessReponse
};

MobileService.SearchByCustkey = {
  methodName: "SearchByCustkey",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.SearchByCustkeyRequest,
  responseType: mobile_pb.DownloadModifiedStatmentsResponce
};

MobileService.SaveFawryTrans = {
  methodName: "SaveFawryTrans",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.ArrFAWRY_CARD_TRANS,
  responseType: mobile_pb.ConfirmDownloadResponce
};

MobileService.GetEmpWalks = {
  methodName: "GetEmpWalks",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.GetEmpWalksReq,
  responseType: mobile_pb.GetEmpWalksRes
};

MobileService.GetPaymentSearchedBy = {
  methodName: "GetPaymentSearchedBy",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.GetPaymentSearchedByReq,
  responseType: mobile_pb.GetPaymentSearchedByRes
};

MobileService.GetHHEvents = {
  methodName: "GetHHEvents",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.GetHHEventsReq,
  responseType: mobile_pb.ArrHHEvents
};

MobileService.SaveHHEvent = {
  methodName: "SaveHHEvent",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.HH_EVENTS,
  responseType: mobile_pb.ConfirmDownloadResponce
};

MobileService.UpdateHHEventDone = {
  methodName: "UpdateHHEventDone",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.UpdateHhEventDoneReq,
  responseType: mobile_pb.ConfirmDownloadResponce
};

MobileService.GetEmpTotalCollMinCharge = {
  methodName: "GetEmpTotalCollMinCharge",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.GetEmpTotalCollMinChargeReq,
  responseType: mobile_pb.GetEmpTotalCollMinChargeRes
};

MobileService.RefreshCustomersWalksCache = {
  methodName: "RefreshCustomersWalksCache",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.Empty,
  responseType: mobile_pb.ConfirmDownloadResponce
};

MobileService.RefreshMetersWalksCache = {
  methodName: "RefreshMetersWalksCache",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.Empty,
  responseType: mobile_pb.ConfirmDownloadResponce
};

MobileService.GetDateTimeNow = {
  methodName: "GetDateTimeNow",
  service: MobileService,
  requestStream: false,
  responseStream: false,
  requestType: mobile_pb.Empty,
  responseType: mobile_pb.DateTimeNow
};

exports.MobileService = MobileService;

function MobileServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MobileServiceClient.prototype.getVersion = function getVersion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetVersion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.downloadReadingMeters = function downloadReadingMeters(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.DownloadReadingMeters, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.downloadStatments = function downloadStatments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.DownloadStatments, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.downloadModifiedStatments = function downloadModifiedStatments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.DownloadModifiedStatments, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getUsers = function getUsers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetUsers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getAllUsers = function getAllUsers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetAllUsers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.disabledUser = function disabledUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.DisabledUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.regsiterDevice = function regsiterDevice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.RegsiterDevice, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.confirmDownloadReadingMeters = function confirmDownloadReadingMeters(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.ConfirmDownloadReadingMeters, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.confirmDownloadStatments = function confirmDownloadStatments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.ConfirmDownloadStatments, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.updateReadings = function updateReadings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.UpdateReadings, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.updateReading = function updateReading(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.UpdateReading, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getWalkStatus = function getWalkStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetWalkStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getPaymentMethods = function getPaymentMethods(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetPaymentMethods, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getPayment = function getPayment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetPayment, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getAndCollectPayment = function getAndCollectPayment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetAndCollectPayment, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.reSendFesses = function reSendFesses(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.ReSendFesses, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.validateReceipt = function validateReceipt(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.ValidateReceipt, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.validateTransFee = function validateTransFee(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.ValidateTransFee, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getAccessCodes = function getAccessCodes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetAccessCodes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getHafza = function getHafza(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetHafza, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getCollectionReport = function getCollectionReport(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetCollectionReport, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getCollectionReportSummary = function getCollectionReportSummary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetCollectionReportSummary, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getDeposits = function getDeposits(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetDeposits, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getLastDepositDate = function getLastDepositDate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetLastDepositDate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getDeviceSettings = function getDeviceSettings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetDeviceSettings, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.pushDeviceBackup = function pushDeviceBackup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.PushDeviceBackup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.cancelReceipts = function cancelReceipts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.CancelReceipts, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getApkInfo = function getApkInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetApkInfo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getConsumptionTypes = function getConsumptionTypes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetConsumptionTypes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.downloadDeviceSettings = function downloadDeviceSettings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.DownloadDeviceSettings, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.uploadPrintLogs = function uploadPrintLogs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.UploadPrintLogs, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getDashboard = function getDashboard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetDashboard, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getUnPostedSummary = function getUnPostedSummary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetUnPostedSummary, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.sendDbBackup = function sendDbBackup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.SendDbBackup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.closeCollection = function closeCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.CloseCollection, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.closeReading = function closeReading(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.CloseReading, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.uploadMetersImages = function uploadMetersImages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.UploadMetersImages, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getComplaintTypes = function getComplaintTypes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetComplaintTypes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getComplaintDegrees = function getComplaintDegrees(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetComplaintDegrees, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getSurveyTypes = function getSurveyTypes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetSurveyTypes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getKhelsaTypes = function getKhelsaTypes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetKhelsaTypes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.saveSurevies = function saveSurevies(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.SaveSurevies, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.saveComplaints = function saveComplaints(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.SaveComplaints, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.saveBadConns = function saveBadConns(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.SaveBadConns, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getDepositsReport = function getDepositsReport(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetDepositsReport, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.sendWS = function sendWS(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.SendWS, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getMessagesStream = function getMessagesStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MobileService.GetMessagesStream, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.saveCduBuilding = function saveCduBuilding(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.SaveCduBuilding, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.saveCduSurvey = function saveCduSurvey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.SaveCduSurvey, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getAreas = function getAreas(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetAreas, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.saveNewSeq = function saveNewSeq(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.SaveNewSeq, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.searchByCustkey = function searchByCustkey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.SearchByCustkey, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.saveFawryTrans = function saveFawryTrans(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.SaveFawryTrans, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getEmpWalks = function getEmpWalks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetEmpWalks, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getPaymentSearchedBy = function getPaymentSearchedBy(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetPaymentSearchedBy, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getHHEvents = function getHHEvents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetHHEvents, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.saveHHEvent = function saveHHEvent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.SaveHHEvent, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.updateHHEventDone = function updateHHEventDone(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.UpdateHHEventDone, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getEmpTotalCollMinCharge = function getEmpTotalCollMinCharge(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetEmpTotalCollMinCharge, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.refreshCustomersWalksCache = function refreshCustomersWalksCache(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.RefreshCustomersWalksCache, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.refreshMetersWalksCache = function refreshMetersWalksCache(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.RefreshMetersWalksCache, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MobileServiceClient.prototype.getDateTimeNow = function getDateTimeNow(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MobileService.GetDateTimeNow, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.MobileServiceClient = MobileServiceClient;

