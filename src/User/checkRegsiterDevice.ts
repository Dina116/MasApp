import { getSettings } from '../db/SQLite/database';
import { HHDevice, RegsiterDeviceRequest } from '../proto/mobile_pb';
import { getMetaData, initGrpcClient } from '../services/client';

export function checkRegsiterDevice(
  name: string,
  password: string,
  code: number,
): Promise<boolean> {
  return new Promise(async (resolve, reject) => {
    try {
      const client = await initGrpcClient();
      const metaData = await getMetaData();
      const id = await getSettings();
      console.log('deviceId', id);
      if (!id) {
        throw new Error('No settings found');
      }
      const hhdevice = new HHDevice();
      hhdevice.setDeviceId(
        id?.deviceId != null ? String(id.deviceId) : '5cc1fe9da5a32569',
      );
      hhdevice.setUsername(name);
      hhdevice.setAssignTo(code);
      hhdevice.setPassword(password);

      const req = new RegsiterDeviceRequest();
      client.regsiterDevice(req, metaData, (err, response) => {
        if (err != null) {
          reject(err);
        } else if (response == null) {
          reject(new Error('No response from server'));
        } else {
          const register = response.toObject().device;
          if (register) {
            console.log('Device registered successfully:', register);
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
