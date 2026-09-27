import React from 'react';
import { PawPrint } from 'lucide-react';

function StaffLogin() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 flex items-center justify-center p-4 overflow-hidden">
      
      {/* Background Watermarks */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <PawPrint className="absolute top-10 left-12 text-white/20 -rotate-12" size={80} />
        <PawPrint className="absolute top-1/4 right-16 text-white/20 rotate-45" size={100} />
        <PawPrint className="absolute bottom-16 right-10 text-white/20 -rotate-12" size={90} />
      </div>

      {/* Main Login Card (Placeholder) */}
      <div className="relative z-10 w-full max-w-md bg-[#eef7f6] rounded-3xl shadow-2xl p-8 pt-12 text-center border border-white/50 min-h-[400px] flex items-center justify-center">
        <p className="text-gray-400 font-medium">Staff Login Form</p>
      </div>

    </div>
  );
}

export default StaffLogin;