import { courses } from './mockData';
export const courseService = {
  getCourses: async () => Promise.resolve(courses),
  getCourseById: async (id) => Promise.resolve(courses.find((c) => c.id === id)),
};
