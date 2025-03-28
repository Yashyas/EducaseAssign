import React from "react";
import { useNavigate } from "react-router-dom";
function SignupPage() {
  const navigate = useNavigate();
  return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
        <div className="w-[375px] h-[812px] bg-[#F7F8F9] flex flex-col p-5 rounded-lg shadow-lg">
          <h1 className="text-[24px] font-bold text-[#1D2226] text-left leading-[32px] mb-5">
            Create your <br /> PopX account
          </h1>

          <form className="flex flex-col gap-4 flex-grow">
            {[
              "Full Name",
              "Phone number",
              "Email address",
              "Password",
              "Company name",
            ].map((label, index) => (
              <fieldset key={index} className="relative w-full">
                <legend className="text-xs font-semibold text-[#6C25FF] bg-[#F7F8F9] px-1 absolute -top-3 left-3">
                  {label} <span className="text-red-500">*</span>
                </legend>
                <input
                  type={label === "Password" ? "password" : "text"}
                  placeholder={label}
                  className="w-full h-[46px] px-3 text-left border border-gray-300 rounded-md bg-[#F7F8F9] focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
                />
              </fieldset>
            ))}

            <span className="text-[14px] text-[#1D2226] opacity-60 -mt-2">
              Are you an Agency? <span className="text-red-500">*</span>
            </span>
            <div className="flex gap-4 -mt-3">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  className="accent-[#6C25FF]"
                />{" "}
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  className="accent-[#6C25FF]"
                />{" "}
                No
              </label>
            </div>

            <button
              className="w-full h-[46px] bg-[#6C25FF] text-white text-lg rounded-md font-semibold mt-auto"
              onClick={() => navigate("/account-settings")}
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
  );
}

export default SignupPage;
