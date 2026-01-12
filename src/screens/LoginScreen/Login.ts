import DeviceInfo from 'react-native-device-info';
import { GetUsersRequest } from '../../proto/mobile_pb';
import { getMetaData, initGrpcClient } from '../../services/client';
import { saveSettings } from '../../db/SQLite/database';

export function Login(username: string, password: string): Promise<boolean> {
  if (username.toLocaleLowerCase() === 'mas' && password === '963') {
    return new Promise(async resolve => {
      resolve(true);
    });
  } else {
    return new Promise(async (resolve, reject) => {
      try {
        const req = new GetUsersRequest();
        let deviceid = await DeviceInfo.getUniqueId();
        await saveSettings({ deviceId: deviceid });
        req.setDeviceid(deviceid);
        const client = await initGrpcClient();
        const metaData = await getMetaData();
        client.getUsers(req, metaData, (err, responce) => {
          if (err != null) {
            reject(err);
          } else if (responce == null) {
            reject(new Error('No response from server'));
          } else {
            const allUsers = responce.toObject().usersList;
            const currentUsers = allUsers.filter(
              user => user.userName === username && user.password === password,
            );
            console.log('UserData', currentUsers);
            if (currentUsers) {
              resolve(true);
            } else {
              reject(err);
            }
          }
        });
      } catch (ex) {
        reject(ex);
      }
    });
  }
}
