import { Link } from '@tanstack/react-router';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 px-4">
      <h1 className="text-4xl font-bold mb-4 text-indigo-800">🎓 LMS Platform</h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-md">
        Welcome to the Learning Management System. Register or login to access your personalized dashboard based on your role.
      </p>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;