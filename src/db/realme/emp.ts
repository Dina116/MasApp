const _ModelName = "Emp";
export interface Emp {
  id: number;

  station_no?: number;

  name?: string;

  password?: string;

  perm_d?: number;

  full_name?: string;

  device_id?: string;

  branche?: string;

  notes?: string;

  expire?: number;

  is_current?: number;

  see_all?: number;

  IS_DUMMY?: boolean;

  IS_DESGINER?: boolean;

  collection?: number;

  reading?: number;

  admin?: number;

  khelsa?: number;

  dashboard?: number;

  quota?: number;

  data_entry?: boolean;

  data_admin?: boolean;

  deposits_quota?: number;

  close_reading_cycle?: boolean;

  close_collection_cycle?: boolean;

  cashier?: boolean;

  reading_percent?: number;

  day_reading_percent?: number;

  disabled?: boolean;
}

export const EmpSchema = {
  name: _ModelName,
  primaryKey: "id",
  properties: {
    id: "int?",

    name: "string?",

    password: "string?",

    perm_d: "int?",

    full_name: "string?",

    device_id: "string?",

    branche: "string?",

    notes: "string?",

    expire: "int?",

    is_current: "int?",

    see_all: "int?",

    IS_DUMMY: "bool?",

    collection: "int?",

    reading: "int?",

    admin: "int?",

    khelsa: "int?",

    station_no: "int?",

    dashboard: "int?",

    quota: "double?",

    data_entry: "bool?",

    data_admin: "bool?",

    deposits_quota: "double?",

    close_reading_cycle: "bool?",

    close_collection_cycle: "bool?",

    cashier: "bool?",

    reading_percent: "int?",

    day_reading_percent: "int?",

    disabled: "bool?",
  },
};
