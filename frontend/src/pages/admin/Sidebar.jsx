import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl h-screen flex flex-col">
      {/* Logo/Header Section */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Admin Panel</h1>
            <p className="text-xs text-slate-400">Management System</p>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
        <div className="mb-4">
          <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            User Management
          </p>
        </div>

        <NavLink
          to="/admin/userlist"
          className={({ isActive }) =>
            `group flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-700 hover:text-white"
            }`
          }
        >
          <svg className={`w-5 h-5 mr-3 transition-transform group-hover:scale-110`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span className="font-medium">Users</span>
        </NavLink>

        <NavLink
          to="/admin/users/add"
          className={({ isActive }) =>
            `group flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-700 hover:text-white"
            }`
          }
        >
          <svg className={`w-5 h-5 mr-3 transition-transform group-hover:scale-110`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          <span className="font-medium">Add User</span>
        </NavLink>
      </nav>

      {/* Footer Section */}
      <div className="p-4 border-t border-slate-700 mt-auto">
        <div className="flex items-center space-x-3 px-4 py-3 bg-slate-700 rounded-lg">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
            A
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">Admin</p>
            <p className="text-xs text-slate-400">admin@system.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;