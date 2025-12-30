import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./pages/admin/Admin";
import Dashboard from "./pages/user/Dashboard";
import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
