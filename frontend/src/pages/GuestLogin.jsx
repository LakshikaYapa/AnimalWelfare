import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeartHandshake,
  PawPrint,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
} from "lucide-react";

function GuestLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

   
    setMessage(
      "The login form is ready. Backend connection is required to sign in."
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 px-4 py-16">
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
          size={100}
          className="absolute top-20 right-12 rotate-45 text-white/20"
        />

        <PawPrint
          size={75}
          className="absolute bottom-20 left-12 rotate-12 text-white/20"
        />

        <PawPrint
          size={110}
          className="absolute bottom-10 right-12 -rotate-12 text-white/20"
        />
      </div>

      {/* Login card */}
      <section className="relative z-10 w-full max-w-md rounded-3xl border border-white/60 bg-[#eef7f6] px-6 pt-14 pb-8 shadow-2xl sm:px-9">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-full border-4 border-emerald-100 bg-white p-3 text-emerald-700 shadow-lg">
          <HeartHandshake size={44} strokeWidth={1.8} />
        </div>

        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 rounded text-sm font-medium text-sky-800 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
        >
          <ArrowLeft size={16} />
          Back
        </Link>

        <h1 className="text-center text-2xl font-extrabold uppercase tracking-wide text-gray-900">
          Guest Login
        </h1>

        <p className="mt-2 mb-7 text-center text-sm text-gray-600">
          Welcome back! Sign in to support dog welfare.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="guestEmail"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Email Address
            </label>

            <div className="relative">
              <Mail
                aria-hidden="true"
                size={20}
                className="absolute top-3.5 left-4 text-sky-600"
              />

              <input
                id="guestEmail"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
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
              htmlFor="guestPassword"
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
                id="guestPassword"
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

          <button
            type="submit"
            className="w-full cursor-pointer rounded-full bg-[#274c77] px-6 py-3.5 font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#1b365d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
          >
            Log In
          </button>

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
            Don&apos;t have an account?
          </p>

          <Link
            to="/guest-register"
            className="mt-2 inline-block rounded text-sm font-bold text-sky-800 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
          >
            Create Guest Account
          </Link>
        </div>
      </section>
    </main>
  );
}

export default GuestLogin;