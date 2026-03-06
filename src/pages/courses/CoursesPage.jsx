import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { courseService } from '../../services/courseService';
import { CourseCard } from '../../components/CourseCard';
import { SearchBar } from '../../components/forms/SearchBar';
import { FilterDropdown } from '../../components/forms/FilterDropdown';
import { Modal } from '../../components/ui/Modal';
import { useAppStore } from '../../store/useAppStore';

export function CoursesPage() {
  const { data = [] } = useQuery({ queryKey: ['courses'], queryFn: courseService.getCourses });
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const addToast = useAppStore((s) => s.addToast);

  const filtered = data.filter((c) => c.title.toLowerCase().includes(search.toLowerCase()) && (filter === 'All' || c.category === filter));

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row"><SearchBar value={search} onChange={(e) => setSearch(e.target.value)} /><FilterDropdown value={filter} onChange={(e) => setFilter(e.target.value)} options={['All', 'Frontend', 'Analytics', 'Security']} /></div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filtered.map((course) => <CourseCard key={course.id} course={course} onOpen={() => setSelected(course)} onEnroll={() => addToast(`Enrolled in ${course.title}`)} />)}</div>
      <Modal open={!!selected} onClose={() => setSelected(null)}>
        <h3 className="text-xl font-semibold">{selected?.title}</h3><p className="text-sm text-slate-500">Instructor: {selected?.instructor}</p><p className="mt-3">Curriculum includes lessons, assignments, and hands-on labs with progress tracking.</p>
      </Modal>
    </div>
  );
}
