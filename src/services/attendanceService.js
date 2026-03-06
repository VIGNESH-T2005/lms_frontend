import { attendance } from './mockData';
export const attendanceService = {
  getAttendance: async () => Promise.resolve(attendance),
};
