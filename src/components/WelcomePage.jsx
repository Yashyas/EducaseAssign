import React from 'react'
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <div className="w-[375px] h-[812px] bg-[#F7F8F9] flex flex-col justify-end p-5 rounded-lg shadow-lg">
        <h1 className="text-[28px] font-medium text-[#1D2226] text-left leading-[33px] mb-2">Welcome to PopX</h1>
        <p className="text-[18px] text-[#1D2226] opacity-60 text-left leading-[24px] tracking-tight mb-4 w-[232px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <button className="w-full h-[46px] bg-[#6C25FF] text-white text-lg rounded-md mb-3 font-semibold" onClick={() => navigate("/signup")}>
          Create Account
        </button>
        
        <button className="w-full h-[46px] bg-[#6C25FF4B] text-[#6C25FF] text-lg rounded-md font-semibold" onClick={() => navigate("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  )
}

export default App
