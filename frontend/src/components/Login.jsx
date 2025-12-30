import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log(form);
      setIsLoading(false);
      alert("Connect this to your backend API");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

        {/* LEFT SIDE - LOTTIE */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-12 text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to CMS</h1>
          <p className="text-white/80 mb-8 text-center max-w-md">
            Manage your content securely with our modern CMS platform
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            <iframe
              src="https://lottie.host/embed/42262329-34a5-4d89-86af-4ed6d329484f/TZGvJxtwid.lottie"
              className="w-[320px] h-[320px] border-0"
              title="CMS Animation"
            />
          </div>
        </div>

        {/* RIGHT SIDE - LOGIN */}
        <div className="p-10 sm:p-14 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Sign In
          </h2>
          <p className="text-gray-500 mb-8">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
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
              <button className="text-indigo-600 hover:underline">
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

          <p className="text-center text-sm text-gray-500 mt-8">
            Don’t have an account?{" "}
            <span className="text-indigo-600 font-medium cursor-pointer hover:underline">
              Sign up
            </span>
          </p>

          <p className="text-xs text-gray-400 text-center mt-4">
            © {new Date().getFullYear()} CMS Software
          </p>
        </div>
      </div>
    </div>
  );
}
