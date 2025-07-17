const StudentDashboard = () => {
  const courses = [
    { id: 1, title: 'MERN Stack Development', instructor: 'prof.karne raju' },
    { id: 2, title: 'React Basics', instructor: 'Prof. Adithya' },
    { id: 3, title: 'Database Design', instructor: 'Dr. Kiran' },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">📘 My Courses</h3>
      {courses.length === 0 ? (
        <p>You are not enrolled in any courses yet.</p>
      ) : (
        <ul className="space-y-3">
          {courses.map((course) => (
            <li key={course.id} className="p-4 border rounded shadow-sm bg-white">
              <h4 className="font-bold text-lg">{course.title}</h4>
              <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentDashboard;