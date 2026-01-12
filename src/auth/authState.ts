import { Emp } from "../db/realme/emp";

export interface IAuthContext {
  User?: Emp;
  Error?: string | null;
  isLoggedIn?: boolean;
  Owner?: Emp;
  isMock?: boolean;
}