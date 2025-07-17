const AdminDashboard = () => {
  const users = [
    { id: 1, name: 'Tarun Adithya', role: 'student', email: 'tarunadithya@gmail.com' },
    { id: 2, name: 'Prof.karne Raju', role: 'instructor', email: 'karneraju@gmail.com' },
    { id: 3, name: 'vignesh', role: 'student', email: 'vignesh@gmail.com' },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">🧑‍💼 User Management</h3>
      <table className="w-full border rounded bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Role</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.email}</td>
              <td className="p-2 capitalize">{u.role}</td>
              <td className="p-2">
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;