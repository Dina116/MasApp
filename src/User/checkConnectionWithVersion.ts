import { Empty } from '../proto/mobile_pb';
import { getMetaData, initGrpcClient } from '../services/client';

export function checkConnectionWithVersion(): Promise<boolean> {
  return new Promise(async (resolve, reject) => {
    try {
      const client = await initGrpcClient();
      const metaData = await getMetaData();
      const req = new Empty();
      client.getVersion(req, metaData, (err, response) => {
        if (err != null) {
          reject(err);
        } else if (response == null) {
          reject(new Error('No response from server'));
        } else {
          const version = response.toObject().version;
          console.log('version', version);
          if (version) {
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
