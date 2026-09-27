import React from 'react';
import { UserCheck, PawPrint } from 'lucide-react';

function StaffLogin() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 flex items-center justify-center p-4 overflow-hidden">
      
      {/* Background Watermarks */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <PawPrint className="absolute top-10 left-12 text-white/20 -rotate-12" size={80} />
        <PawPrint className="absolute top-1/4 right-16 text-white/20 rotate-45" size={100} />
        <PawPrint className="absolute bottom-16 right-10 text-white/20 -rotate-12" size={90} />
      </div>

      {/* Main Login Card */}
      <div className="relative z-10 w-full max-w-md bg-[#eef7f6] rounded-3xl shadow-2xl p-8 pt-14 text-center border border-white/50">
        
        {/* Top Avatar Icon / Badge */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg border-4 border-sky-100 text-sky-600">
          <UserCheck size={48} strokeWidth={2} />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-extrabold text-gray-900 uppercase tracking-wide mb-6">
          STAFF LOGIN
        </h2>

        {/* Form Inputs Placeholder */}
        <div className="p-4 bg-white/50 rounded-2xl border border-sky-100">
          <p className="text-xs text-gray-500 font-medium">
            
          </p>
        </div>

      </div>

    </div>
  );
}

export default StaffLogin;