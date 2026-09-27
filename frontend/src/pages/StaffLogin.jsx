import React, { useState } from 'react';
import { UserCheck, PawPrint, Mail, Lock, Eye, EyeOff } from 'lucide-react';

function StaffLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    staffId: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Staff Login Data:", formData);
    // Yaluwagew backend API eka ready unama api meka connect karamu
  };

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

        {/* Form Inputs & Options */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Staff ID / Official Email Input */}
          <div className="relative flex items-center">
            <Mail className="absolute left-4 text-sky-600" size={20} />
            <input 
              type="text" 
              placeholder="Staff ID / Official Email"
              value={formData.staffId}
              onChange={(e) => setFormData({...formData, staffId: e.target.value})}
              className="w-full bg-white/80 border border-sky-200 focus:border-sky-500 rounded-full py-3 pl-12 pr-4 text-sm text-gray-800 placeholder-gray-400 outline-none transition shadow-sm"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative flex items-center">
            <Lock className="absolute left-4 text-sky-600" size={20} />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full bg-white/80 border border-sky-200 focus:border-sky-500 rounded-full py-3 pl-12 pr-12 text-sm text-gray-800 placeholder-gray-400 outline-none transition shadow-sm"
              required
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 text-gray-400 hover:text-sky-600 cursor-pointer"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center justify-start px-2 text-xs font-semibold text-gray-700">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={formData.rememberMe}
                onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                className="rounded border-gray-300 text-sky-600 focus:ring-sky-500 h-4 w-4 cursor-pointer"
              />
              <span>REMEMBER ME</span>
            </label>
          </div>

          {/* Log In Button */}
          <button 
            type="submit"
            className="w-full bg-[#274c77] hover:bg-[#1b365d] text-white font-bold py-3.5 rounded-full uppercase tracking-wider shadow-md transition duration-200 cursor-pointer mt-2"
          >
            LOG IN
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="mt-3">
          <a href="#" className="text-xs text-sky-600 hover:underline font-medium">
            Forgot password?
          </a>
        </div>

        {/* Create Staff Account Link */}
        <div className="mt-6 pt-4 border-t border-sky-200/60">
          <a href="#" className="text-sm font-bold text-gray-800 hover:text-sky-700 uppercase underline tracking-wide">
            CREATE STAFF ACCOUNT
          </a>
        </div>

      </div>

    </div>
  );
}

export default StaffLogin;