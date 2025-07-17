import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useAuth } from '../context/AuthContext';
import StudentDashboard from './dashboard/StudentDashboard';
import InstructorDashboard from './dashboard/InstructorDashboard';
import AdminDashboard from './dashboard/AdminDashboard';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if no user is found
  useEffect(() => {
    if (!user) {
      navigate({ to: '/login' });
    }
  }, [user, navigate]);

  if (!user) return null; // Prevent rendering before redirect

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h2>

      {user.role === 'student' && <StudentDashboard />}
      {user.role === 'instructor' && <InstructorDashboard />}
      {user.role === 'admin' && <AdminDashboard />}
    </div>
  );
};

export default Dashboard;