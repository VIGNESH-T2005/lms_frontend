import { certificates } from './mockData';
export const certificateService = {
  getCertificates: async () => Promise.resolve(certificates),
};
