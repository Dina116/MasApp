import { ReactNativeTransport } from '@improbable-eng/grpc-web-react-native-transport';
import { getSettings } from '../db/SQLite/database';
import { MobileServiceClient } from '../proto/mobile_pb_service';
import { grpc } from '@improbable-eng/grpc-web';
import DeviceInfo from 'react-native-device-info';
import * as pkg from '../../package.json';
// import { grpc } from '@improbable-eng/grpc-web';

// const initialConnection = {
//   host: '10.0.2.2',
//   port: 25500,
// };

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

// export const transport = async () => {
//   const settings = await getSettings();
//   const baseUrl = settings
//     ? `http://${settings.ip}:${settings.port}`
//     : 'http://10.0.2.2:25500';

//   return new GrpcWebFetchTransport({
//     baseUrl: baseUrl,
//     timeout: 10000,
//     interceptors: [authAndErrorInterceptor],
//   } );
// };

// export const transport = new GrpcWebFetchTransport({
//   baseUrl: 'http://10.0.2.2:25500',
//   timeout: 10000,
//   interceptors: [authAndErrorInterceptor],
// });
// export const client = new MobileServiceClient(transport);
// import { getSettings } from '../db/SQLite/database';
// export const api = axios.create({
//   baseURL: 'http://10.0.2.2:25500',
//   timeout: 10000,
// });

// api.interceptors.request.use(config => {
//   const token = storage.getString('token');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   console.log(token);
//   return config;
// });

// api.interceptors.response.use(
//   res => res,
//   async error => {
//     if (error.response?.status === 401) {
//       storage.remove('token');
//       navigationRef.reset({
//         index: 0,
//         routes: [{ name: 'LoginScreen' }],
//       });
//     }
//     return Promise.reject(error);
//   },
// );
// const authAndErrorInterceptor = {
//   interceptUnary(
//     next: any,
//     method: MethodInfo,
//     input: any,
//     options: RpcOptions,
//   ): UnaryCall {
//     const token = storage.getString('token');
//     if (token) {
//       options.meta = {
//         ...options.meta,
//         Authorization: `Bearer ${token}`,
//       };
//     }
//     return next(method, input, options)
//       .then((response: any) => {
//         const newToken =
//           response.headers['authorization'] || response.headers['x-auth-token'];
//         if (newToken) {
//           const cleanToken = newToken.replace('Bearer ', '');
//           storage.set('token', cleanToken);
//           console.log('تم تحديث التوكن من الـ Headers بنجاح');
//         }
//         return response;
//       })
//       .catch((error: any) => {
//         if (error.code === 'UNAUTHENTICATED') {
//           storage.remove('token');
//           navigationRef.reset({
//             index: 0,
//             routes: [{ name: 'LoginScreen' }],
//           });
//         }
//         throw error;
//       });
//   },
// };
// let transport: GrpcWebFetchTransport;

// transport = new GrpcWebFetchTransport({
//   baseUrl,
//   timeout: 10000,
//   interceptors: [authAndErrorInterceptor],
// });
