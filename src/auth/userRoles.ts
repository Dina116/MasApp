import { Emp } from '../db/realme/emp';

export enum UserRoles {
  COLLECTOR = 1,
  READER = 2,
  DUMMY = 3,
  ADMIN = 4,
  KHELSA = 5,
  DESIGHNER = 6,
  MOCK = 7,
  REGISTER = 8,
}

export const getUserRoles = (user: Emp): UserRoles[] => {
  const roles: Array<UserRoles> = [];
  if (user) {
    if (user?.IS_DUMMY) {
      roles.push(UserRoles.DUMMY);
    }
    if (user?.IS_DESGINER) {
      roles.push(UserRoles.DESIGHNER);
    }
    if (user?.collection) {
      roles.push(UserRoles.COLLECTOR);
    }
    if (user?.reading) {
      roles.push(UserRoles.READER);
    }
    if (user?.admin) {
      roles.push(UserRoles.ADMIN);
    }
    if (user?.khelsa) {
      roles.push(UserRoles.KHELSA);
    }
    if (user?.name === 'mock' && user.password === '321') {
      roles.push(UserRoles.MOCK);
    }
    if (user?.name === 'reg' && user.password === 'reg') {
      roles.push(UserRoles.REGISTER);
    }
  } else {
    roles.push(UserRoles.DUMMY);
  }
  return roles;
};
