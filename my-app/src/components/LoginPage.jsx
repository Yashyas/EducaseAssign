import React from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <div className="w-[375px] h-[812px] bg-[#F7F8F9] flex flex-col p-5 rounded-lg shadow-lg">
        <h1 className="text-[24px] font-bold text-[#1D2226] text-left leading-[32px] mb-2">
          Sign in to your <br /> PopX account
        </h1>
        <p className="text-[16px] text-[#1D2226] opacity-60 text-left leading-[22px] tracking-tight w-[250px] mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="relative w-full mb-4">
          <label className="absolute -top-3 left-3 text-xs font-semibold text-[#6C25FF] bg-[#F7F8F9] px-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-[46px] px-3 text-left border border-gray-300 rounded-md bg-[#F7F8F9] focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
          />
        </div>

        <div className="relative w-full mb-6">
          <label className="absolute -top-3 left-3 text-xs font-semibold text-[#6C25FF] bg-[#F7F8F9] px-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full h-[46px] px-3 text-left border border-gray-300 rounded-md bg-[#F7F8F9] focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
          />
        </div>

        <button
          className="w-full h-[46px] bg-gray-300 text-white text-lg rounded-md font-semibold"
          onClick={() => navigate("/account-settings")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
