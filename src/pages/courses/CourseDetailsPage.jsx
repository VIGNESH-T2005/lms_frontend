import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { courseService } from '../../services/courseService';

export function CourseDetailsPage() {
  const { id } = useParams();
  const { data: course } = useQuery({ queryKey: ['course', id], queryFn: () => courseService.getCourseById(id) });
  if (!course) return <div className="glass rounded-2xl p-6">Course not found.</div>;

  return (
    <div className="space-y-4">
      <div className="glass rounded-2xl p-6"><h1 className="text-2xl font-bold">{course.title}</h1><p className="text-sm text-slate-500">Instructor: {course.instructor}</p></div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="glass rounded-2xl p-4"><h3 className="mb-2 font-semibold">Modules & Lessons</h3><ul className="list-inside list-disc text-sm"><li>Module 1: Foundations</li><li>Module 2: Applied Scenarios</li><li>Module 3: Assignments & Capstone</li></ul></div>
        <div className="glass rounded-2xl p-4"><h3 className="mb-2 font-semibold">Progress Tracker</h3><div className="h-3 overflow-hidden rounded-full bg-slate-300/50"><div className="h-full bg-violet-500" style={{ width: `${course.progress}%` }} /></div><p className="mt-2 text-sm">{course.progress}% completed</p></div>
      </div>
    </div>
  );
}
