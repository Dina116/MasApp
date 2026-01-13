import { ReactNativeTransport } from '@improbable-eng/grpc-web-react-native-transport';
import { getSettings } from '../db/SQLite/database';
import { MobileServiceClient } from '../proto/mobile_pb_service';
import { grpc } from '@improbable-eng/grpc-web';
import DeviceInfo from 'react-native-device-info';
import * as pkg from '../../package.json';

export const initGrpcClient = async () => {
  let baseURL = 'http://10.0.2.2:25500';
  const settings = await getSettings();
  console.log(settings, 'settings');
  if (settings && Object.values(settings || {}).length > 0) {
    baseURL = `http://${settings.ip}:${settings.port}`;
  }
  const options = {
    transport: ReactNativeTransport({
      withCredentials: false,
    }),
    debug: true,
  };
  const mobileServiceClient = new MobileServiceClient(baseURL, options);
  return mobileServiceClient;
};

export async function getMetaData(timeout?: number): Promise<grpc.Metadata> {
  timeout = timeout || 30000;
  let hrd = new grpc.Metadata();
  let deviceid = await DeviceInfo.getUniqueId();

  hrd.append('device_id', deviceid);
  hrd.append('timeout', timeout?.toString());
  hrd.append('version', pkg.version);
  hrd.append('os', 'android');
  // if (GrpcMobileClient.StablePosition != null) {
  //   hrd.append("position", JSON.stringify(GrpcMobileClient.StablePosition));
  // }
  // if (GrpcMobileClient.User) {
  //   hrd.append("emp_id", GrpcMobileClient.User.id?.toString());
  // }
  return hrd;
}
