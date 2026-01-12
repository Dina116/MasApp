import { grpc } from '@improbable-eng/grpc-web';
// import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';
import storage from './storage';
import { navigationRef } from '../navigation/navigationRef ';
import { baseUrl } from './client';
import { ReactNativeTransport } from '@improbable-eng/grpc-web-react-native-transport';

export const request = <
  TReq extends grpc.ProtobufMessage,
  TRes extends grpc.ProtobufMessage,
>(
  methodDescriptor: grpc.UnaryMethodDefinition<TReq, TRes>,
  requestMessage: TReq,
): Promise<TRes> => {
  return new Promise((resolve, reject) => {
    const metadata = new grpc.Metadata();
    const token = storage.getString('token');
    if (token) {
      metadata.append('Authorization', `Bearer ${token}`);
    }
    grpc.unary(methodDescriptor, {
      request: requestMessage,
      host: baseUrl,
      metadata: metadata,
      transport: ReactNativeTransport({}),
      onEnd: response => {
        const { status, statusMessage, headers, message } = response;

        if (status === grpc.Code.OK && message) {
          const newToken =
            headers.get('authorization')?.[0] ||
            headers.get('x-auth-token')?.[0];
          if (newToken) {
            const cleanToken = newToken.replace('Bearer ', '');
            storage.set('token', cleanToken);
            resolve(message as TRes);
            console.log('تم تحديث التوكن بنجاح');
          }
          resolve(message as TRes);
        } else {
          if (status === grpc.Code.Unauthenticated) {
            console.log('الجلسة انتهت، جاري التوجيه لتسجيل الدخول');
            storage.remove('token');
            navigationRef.reset({
              index: 0,
              routes: [{ name: 'LoginScreen' }],
            });
          }

          const error = new Error(statusMessage || 'Unknown gRPC error');
          (error as any).code = status;
          reject(error);
        }
      },
    });
  });
};
