import React from "react";

function AccountSettings() {
  return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
        <div className="w-[375px] h-[812px] bg-[#F7F8F9] rounded-lg shadow-lg">
          <div className="p-5 bg-white border-b border-gray-300">
            <h1 className="text-[20px] font-semibold text-[#1D2226] text-left">
              Account Settings
            </h1>
          </div>

          <div className="p-5 flex flex-col gap-4">
            <div className="flex items-center gap-4 p-4 bg-[#F7F8F9] rounded-lg">
              <img
                src="/img.png"
                alt="Profile"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-[16px] font-semibold text-[#1D2226]">
                  Marry Doe
                </h2>
                <p className="text-[14px] text-[#1D2226] opacity-60">
                  Marry@gmail.com
                </p>
              </div>
            </div>

            <p className="text-[14px] text-[#1D2226] opacity-60">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>
          <div className="flex-1 border-t-2 border-b-2 border-dashed border-[#CBCBCB]. p-4 h-[60%]">
            <p className="text-[14px] text-[#1D2226] opacity-60"></p>
          </div>
        </div>
      </div>
  );
}

export default AccountSettings;
