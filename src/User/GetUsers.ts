import { getSettings } from '../db/SQLite/database';
import { GetUsersRequest } from '../proto/mobile_pb';
import { grpc } from '@improbable-eng/grpc-web';
import { initGrpcClient } from '../services/client';

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
  } catch (error) {
    console.error('Login request failed:', error);
    return null;
  }
};
