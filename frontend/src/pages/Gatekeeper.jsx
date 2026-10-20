import { useNavigate } from "react-router-dom";
import {
  HeartHandshake,
  PawPrint,
  Utensils,
} from "lucide-react";

function Gatekeeper() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 flex items-center justify-center p-4 overflow-hidden">
      {/* Background Watermarks */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      >
        {/* Top-Left Paw Prints */}
        <PawPrint
          className="absolute top-8 left-10 text-white/20 -rotate-12"
          size={90}
        />

        <PawPrint
          className="absolute top-36 left-48 text-white/15 rotate-12"
          size={70}
        />

        {/* Top-Right Paw Prints */}
        <PawPrint
          className="absolute top-12 right-20 text-white/20 rotate-45"
          size={100}
        />

        <PawPrint
          className="absolute top-44 right-60 text-white/15 -rotate-12"
          size={65}
        />

        {/* Bottom-Left Decorations */}
        <Utensils
          className="absolute bottom-10 left-12 text-white/20 -rotate-6"
          size={120}
        />

        <PawPrint
          className="absolute bottom-36 left-52 text-white/15 rotate-12"
          size={75}
        />

        {/* Bottom-Right Paw Prints */}
        <PawPrint
          className="absolute bottom-12 right-16 text-white/20 -rotate-45"
          size={110}
        />

        <PawPrint
          className="absolute bottom-40 right-48 text-white/15 rotate-12"
          size={70}
        />
      </div>

      {/* Main Container Card */}
      <div className="relative z-10 w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[450px]">
        {/* Left Side: Staff Section */}
        <div className="bg-white p-8 md:p-12 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase mb-4">
            WHO ARE YOU?
          </h1>

          <p className="text-sm md:text-base font-bold text-gray-800 uppercase max-w-xs leading-snug mb-8">
            ARE YOU A STAFF MEMBER OR A COMMUNITY GUEST?
          </p>

          <button
            type="button"
            onClick={() => navigate("/staff-login")}
            className="w-full max-w-xs bg-[#3a82b8] hover:bg-[#2b6a97] text-white font-bold tracking-wider py-3.5 px-6 rounded-full uppercase shadow-md transition duration-200 mb-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-800"
          >
            I AM STAFF
          </button>

          <p className="text-xs text-gray-500 font-medium">
            Login or register as staff to manage care.
          </p>
        </div>

        {/* Right Side: Guest Section */}
        <div className="bg-[#e2f3ec] p-8 md:p-12 flex flex-col items-center justify-center text-center border-t md:border-t-0 md:border-l border-emerald-100">
          <div className="mb-4 text-emerald-800 bg-emerald-100/60 p-4 rounded-full">
            <HeartHandshake size={56} strokeWidth={1.5} />
          </div>

          <p className="text-sm font-semibold text-gray-700 mb-8">
            Help dogs find care and loving homes.
          </p>

          <button
            type="button"
            onClick={() => navigate("/guest-login")}
            className="w-full max-w-xs bg-[#3a82b8] hover:bg-[#2b6a97] text-white font-bold tracking-wider py-3.5 px-6 rounded-full uppercase shadow-md transition duration-200 mb-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-800"
          >
            I AM GUEST
          </button>

          <p className="text-xs text-gray-500 font-medium">
            Join as a guest to adopt, volunteer, or support.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Gatekeeper;