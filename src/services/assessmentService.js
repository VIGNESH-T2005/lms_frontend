import { assessments } from './mockData';
export const assessmentService = {
  getAssessments: async () => Promise.resolve(assessments),
};
