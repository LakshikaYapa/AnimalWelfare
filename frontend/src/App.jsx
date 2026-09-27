import React from 'react';

function App() {
  return (
    // Full screen background with blue-to-teal gradient
    <div className="min-h-screen bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 flex items-center justify-center p-4">
      {/* Main Container Card */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[450px]">
        
        {/* Left Side (Staff Section) Placeholder */}
        <div className="bg-white p-8 flex flex-col items-center justify-center text-center">
          <p className="text-gray-400 font-medium">Staff Section (Coming Next)</p>
        </div>

        {/* Right Side (Guest Section) Placeholder */}
        <div className="bg-emerald-50/60 p-8 flex flex-col items-center justify-center text-center">
          <p className="text-gray-400 font-medium">Guest Section (Coming Next)</p>
        </div>

      </div>
    </div>
  );
}

export default App;