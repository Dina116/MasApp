import { open } from '@op-engineering/op-sqlite';
const db = open({ name: 'myAppDB.sqlite' });
export const Database = () => {
  db.execute(`
    CREATE TABLE IF NOT EXISTS settings (
      id INTEGER PRIMARY KEY ,
      ip TEXT,
      port TEXT,
      deviceId TEXT,
      name TEXT,
      password TEXT,
      code INTEGER
    )`);
  console.log('Setting table are ready!');
};
export const saveSettings = async (settings: {
  ip?: string;
  port?: string;
  deviceId?: string;
  name?: string;
  password?: string;
  code?: number;
}) => {
  try {
    const result = await db.execute(`SELECT * FROM settings WHERE id = ?`, [1]);
    const current = result?.rows?.[0] ?? {};

    const ip = settings.ip ?? current?.ip ?? '';
    const port = settings.port ?? current?.port ?? '';
    const deviceId = settings.deviceId ?? current?.deviceId ?? '';
    const name = settings.name ?? current?.name ?? '';
    const password = settings.password ?? current?.password ?? '';
    const code = settings.code ?? current?.code ?? '';
    await db.execute(
      `INSERT OR REPLACE INTO settings (id, ip, port, deviceId, name, password, code) VALUES (?, ?, ?, ?,?,?,?)`,
      [1, ip, port, deviceId, name, password, code],
    );
    console.log('Settings saved successfully:', {
      ip,
      port,
      deviceId,
      name,
      password,
      code,
    });
  } catch (error) {
    console.error('Failed to save settings:', error);
  }
};
export const getSettings = async () => {
  const result = await db.execute('SELECT * FROM settings WHERE id = 1');
  if (result.rows && result.rows.length > 0) {
    return result.rows[0];
  }
  return null;
};
