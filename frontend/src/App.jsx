import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./pages/user/Dashboard";

// Admin layout
import Admin from "./pages/admin/Admin";

// Admin pages
import AdminDashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import AddUser from "./pages/admin/AddUser";

// (Optional) Route protection
import AdminRoute from "./routes/AdminRoute";
import UserList from "./pages/admin/UserList";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Login />} />

        {/* User */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users/add" element={<AddUser />} />
          <Route path="userlist" element={<UserList />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
