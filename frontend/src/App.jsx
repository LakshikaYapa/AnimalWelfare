import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 flex items-center justify-center p-4">
      {/* Main Container Card */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[450px]">
        
        {/* Left Side: Staff Section */}
        <div className="bg-white p-8 md:p-12 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase mb-4">
            WHO ARE YOU?
          </h1>
          
          <p className="text-sm md:text-base font-bold text-gray-800 uppercase max-w-xs leading-snug mb-8">
            ARE YOU A STAFF MEMBER OR A COMMUNITY GUEST?
          </p>

          <button className="w-full max-w-xs bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold tracking-wider py-3 px-6 rounded-full uppercase shadow-md transition duration-200 mb-4">
            I AM STAFF
          </button>

          <p className="text-xs text-gray-500 font-medium">
            Login or Register as Staff to manage care.
          </p>
        </div>

        {/* Right Side: Guest Section (Placeholder) */}
        <div className="bg-[#e8f5f1] p-8 md:p-12 flex flex-col items-center justify-center text-center border-t md:border-t-0 md:border-l border-gray-100">
          <p className="text-gray-400 font-medium">Guest Section (Coming Next)</p>
        </div>

      </div>
    </div>
  );
}

export default App;