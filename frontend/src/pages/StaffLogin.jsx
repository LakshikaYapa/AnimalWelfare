import { useState } from "react";
import { Link } from "react-router-dom";
import {
  UserCheck,
  PawPrint,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
} from "lucide-react";

function StaffLogin() {
  // Input fields වල values තබාගන්නවා.
  const [staffId, setStaffId] = useState("");
  const [password, setPassword] = useState("");

  // Password show / hide කිරීම.
  const [showPassword, setShowPassword] = useState(false);

  // Userට message එකක් පෙන්වන්න.
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    // Submit කරන විට page refresh වීම නවත්වනවා.
    event.preventDefault();

    setMessage("");

    if (!staffId.trim()) {
      setMessage("Please enter your Staff ID or official email.");
      return;
    }

    if (!password) {
      setMessage("Please enter your password.");
      return;
    }

    // Backend එක connect කළාම login request එක මෙතැනට දානවා.
    setMessage(
      "The login form is ready. Backend connection is required to sign in."
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 px-4 py-16 flex items-center justify-center">
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none"
      >
        <PawPrint
          size={90}
          className="absolute top-10 left-8 -rotate-12 text-white/20"
        />

        <PawPrint
          size={65}
          className="absolute top-40 left-1/4 rotate-12 text-white/15"
        />

        <PawPrint
          size={100}
          className="absolute top-16 right-12 rotate-45 text-white/20"
        />

        <PawPrint
          size={75}
          className="absolute bottom-16 left-12 rotate-12 text-white/20"
        />

        <PawPrint
          size={110}
          className="absolute bottom-10 right-12 -rotate-12 text-white/20"
        />
      </div>

      {/* Login card */}
      <section className="relative z-10 w-full max-w-md rounded-3xl border border-white/60 bg-[#eef7f6] px-6 pb-8 pt-14 shadow-2xl sm:px-9">
        {/* Staff icon */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-full border-4 border-sky-100 bg-white p-3 text-sky-600 shadow-lg">
          <UserCheck size={44} strokeWidth={1.8} />
        </div>

        {/* Back link */}
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 rounded text-sm font-medium text-sky-800 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
        >
          <ArrowLeft size={16} />
          Back
        </Link>

        <h1 className="text-center text-2xl font-extrabold uppercase tracking-wide text-gray-900">
          Staff Login
        </h1>

        <p className="mt-2 mb-7 text-center text-sm text-gray-600">
          Welcome back! Sign in to manage dog welfare and care.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Staff ID / email */}
          <div>
            <label
              htmlFor="staffId"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Staff ID / Official Email
            </label>

            <div className="relative">
              <Mail
                aria-hidden="true"
                size={20}
                className="absolute top-3.5 left-4 text-sky-600"
              />

              <input
                id="staffId"
                name="staffId"
                type="text"
                autoComplete="username"
                placeholder="Enter your Staff ID or email"
                value={staffId}
                onChange={(event) => {
                  setStaffId(event.target.value);
                  setMessage("");
                }}
                required
                className="w-full rounded-full border border-sky-200 bg-white py-3 pr-4 pl-12 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-200"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Password
            </label>

            <div className="relative">
              <Lock
                aria-hidden="true"
                size={20}
                className="absolute top-3.5 left-4 text-sky-600"
              />

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setMessage("");
                }}
                required
                className="w-full rounded-full border border-sky-200 bg-white py-3 pr-12 pl-12 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-200"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
                aria-pressed={showPassword}
                className="absolute top-3 right-4 rounded p-0.5 text-gray-500 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full cursor-pointer rounded-full bg-[#274c77] px-6 py-3.5 font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#1b365d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
          >
            Log In
          </button>

          {/* Form feedback */}
          <p
            role="status"
            aria-live="polite"
            className="text-center text-sm leading-relaxed text-sky-900"
          >
            {message}
          </p>
        </form>

        <div className="mt-6 border-t border-sky-200 pt-5 text-center">
  <p className="text-sm text-gray-600">
    Need a staff account?
  </p>

  <Link
    to="/staff-register"
    className="mt-2 inline-block rounded text-sm font-bold text-sky-800 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
  >
    Request Staff Account
  </Link>
</div>

<p className="mt-5 text-center text-xs text-gray-500">
  Authorised staff access only.
</p>
      </section>
    </main>
  );
}

export default StaffLogin;