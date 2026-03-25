import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "", remember: false });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Values:", formValues);
    // Here you can handle API login
  };

  return (
    <div className="flex font-nunito justify-center items-center min-h-screen px-4 lg:px-0 bg-white">
      <div className="w-full max-w-lg lg:p-8 p-4 border border-borderColor rounded-lg bg-white">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-black mb-2 italic">Welcome Back</h2>
        <p className="text-black mb-6 text-sm">
          Sign in to continue exploring and managing your Venue.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-textColor block mb-1">Enter Email Address</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              className="w-full px-3 py-2 bg-white border border-borderColor text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B7FFF] "
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-textColor block mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-3 py-2 bg-white border border-borderColor text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B7FFF] "
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center gap-2 text-gray-400">
              <input
                type="checkbox"
                name="remember"
                checked={formValues.remember}
                onChange={handleChange}
                className="accent-[#2B7FFF]"
              />
              Remember me
            </label>
            <Link
              to={"/forgot-password"}
              className="text-sm text-[#2B7FFF] hover:underline focus:outline-none"
            >
              Forget password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-tr from-[#2B7FFF] to-[#69A5FF] text-white shadow-md px-3 py-2 rounded-full"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;