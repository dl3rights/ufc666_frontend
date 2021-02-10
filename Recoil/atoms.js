import { atom } from 'recoil';

export const IsLoginState = atom({
  key: 'IsLoginState',
  default: false
});

export const IsAdminState = atom({
  key: 'IsAdminState',
  default: false
});

export const OpenAdminState = atom({
  key: 'OpenAdminState',
  default: false
});