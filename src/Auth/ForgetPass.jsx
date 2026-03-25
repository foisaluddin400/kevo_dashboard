import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgetPass = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    // Handle form submission here
  };

  return (
    <div className="flex font-nunito justify-center items-center min-h-screen px-4 lg:px-0 bg-white">
      <div className="w-full max-w-lg p-8 border border-borderColor rounded-lg bg-white">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-black mb-2 italic">
          Forget Password
        </h2>
        <p className="text-gray-400 mb-6 text-sm">
          Enter your registered email address and we’ll send you a verification
          code to reset your password.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-black block mb-1">
              Enter Email Address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="w-full px-3 py-2 bg-white border border-borderColor text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B7FFF]"
              required
            />
          </div>

          {/* Continue Button */}
          <Link to={"/verification"}>
            <button
              type="submit"
              className="w-full mt-3 bg-gradient-to-tr from-[#2B7FFF] to-[#69A5FF] py-3 text-white rounded-full shadow-md hover:opacity-90 transition"
            >
              Send Verification Code
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;
