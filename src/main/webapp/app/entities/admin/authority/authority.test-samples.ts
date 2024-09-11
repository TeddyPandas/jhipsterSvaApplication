import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '3353a2ff-565b-4a68-8a7a-26c8af333c55',
};

export const sampleWithPartialData: IAuthority = {
  name: '9b20b0dc-406f-49e4-ad0e-04d2766003a4',
};

export const sampleWithFullData: IAuthority = {
  name: '3356a780-2fd1-4fa2-98e7-997400fe0627',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
