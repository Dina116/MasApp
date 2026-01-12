import { getSettings } from '../db/SQLite/database';
// import { request } from './request';
// import { MobileService } from '../proto/mobile_pb_service';
import { GetUsersRequest } from '../proto/mobile_pb';
import { grpc } from '@improbable-eng/grpc-web';
import { initGrpcClient } from './client';

export const GetUsers = async () => {
  try {
    const id = await getSettings();
    if (!id) {
      throw new Error('No settings found');
    }
    const req = new GetUsersRequest();
    req.setDeviceid(id?.deviceId != null ? String(id.deviceId) : '');
    const metadata = new grpc.Metadata();
    const client = await initGrpcClient();
    client.getUsers(req, metadata, (err, res) => {
      console.log(err);
      console.log(
        res?.getUsersList().map(a => a.toObject()),
        'users list',
      );
    });
    // const res = await request(MobileService.GetUsers, req);
    // if (!res?.getUsersList || res?.getUsersList?.length === 0) {
    //   console.warn('No users returned from server');
    //   return null;
    // }
    // console.log('Users from server:', res?.getUsersList());
    // return res?.getUsersList;
  } catch (error) {
    console.error('Login request failed:', error);
    return null;
  }
};
