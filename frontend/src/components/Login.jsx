import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      {/* LEFT SIDE – BRAND */}
      <div
        className="flex flex-col justify-center items-center
                   bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500
                   p-8 sm:p-12 text-white"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
          NewtonSignage
        </h1>

        <iframe
          src="https://lottie.host/embed/42262329-34a5-4d89-86af-4ed6d329484f/TZGvJxtwid.lottie"
          className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] border-0"
          title="CMS Animation"
        />
      </div>

      {/* RIGHT SIDE – LOGIN */}
      {/* RIGHT SIDE – LOGIN (CENTERED) */}
<div className="flex flex-col justify-center items-center px-6 sm:px-12 py-10 bg-white">
  <div className="w-full max-w-md">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center sm:text-left">
      Admin Login
    </h2>

    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="admin@example.com"
            className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full pl-12 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff className="text-gray-400" />
            ) : (
              <Eye className="text-gray-400" />
            )}
          </button>
        </div>
      </div>

      {/* Remember & Forgot */}
      <div className="flex justify-between items-center text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-indigo-600" />
          Remember me
        </label>
        <button
          type="button"
          className="text-indigo-600 hover:underline"
        >
          Forgot password?
        </button>
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-50"
      >
        {isLoading ? "Signing in..." : (
          <>
            Sign In <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>

    <p className="text-xs text-gray-400 text-center mt-6">
      © {new Date().getFullYear()} NewtonSky5 Technology
    </p>
  </div>
</div>

    </div>
  );
}
