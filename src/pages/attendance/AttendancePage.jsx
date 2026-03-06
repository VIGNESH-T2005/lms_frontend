import { useQuery } from '@tanstack/react-query';
import { attendanceService } from '../../services/attendanceService';
import { AttendanceTable } from '../../components/AttendanceTable';
import { AnimatedChart } from '../../components/charts/AnimatedChart';

export function AttendancePage() {
  const { data = [] } = useQuery({ queryKey: ['attendance'], queryFn: attendanceService.getAttendance });
  const chartData = data.map((d) => ({ name: d.student.split(' ')[0], engagement: d.present, completion: d.absent }));
  return <div className="space-y-4"><div className="glass rounded-2xl p-4">Calendar View Placeholder + Mark Attendance Controls</div><AttendanceTable rows={data} /><AnimatedChart data={chartData} type="line" /></div>;
}
