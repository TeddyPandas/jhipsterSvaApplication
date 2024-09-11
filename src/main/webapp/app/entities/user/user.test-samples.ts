import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 7206,
  login: '!@Ylg\\RUV\\{sxU8',
};

export const sampleWithPartialData: IUser = {
  id: 23906,
  login: 'D{@e\\KoDO\\KjA\\HifZC\\MBQp',
};

export const sampleWithFullData: IUser = {
  id: 28158,
  login: 's*crd1@0',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
