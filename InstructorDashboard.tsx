const InstructorDashboard = () => {
  const managedCourses = [
    { id: 101, title: 'Advanced React', enrolled: 22 },
    { id: 102, title: 'Node.js Essentials', enrolled: 17 },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">🛠 Manage Courses</h3>
      <ul className="space-y-3">
        {managedCourses.map((course) => (
          <li key={course.id} className="p-4 border rounded shadow-sm bg-white">
            <h4 className="font-bold text-lg">{course.title}</h4>
            <p className="text-sm text-gray-600">Enrolled Students: {course.enrolled}</p>
            <div className="mt-2 flex gap-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstructorDashboard;