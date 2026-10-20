import { useState } from "react";
import { Link } from "react-router-dom";
import {
  UserPlus,
  PawPrint,
  Eye,
  EyeOff,
  ArrowLeft,
} from "lucide-react";

function StaffRegister() {
  const [formData, setFormData] = useState({
    fullName: "",
    staffId: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    if (
      !formData.fullName.trim() ||
      !formData.staffId.trim() ||
      !formData.email.trim()
    ) {
      setMessage("Please complete all required fields.");
      return;
    }

    if (formData.password.length < 8) {
      setMessage("Your password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Backend request එක පසුව මෙතැනට එකතු කරනවා.
    setMessage(
      "Your form is valid. No request has been sent yet because the backend is not connected."
    );
  }

  const inputClass =
    "w-full rounded-2xl border border-sky-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-200";

  const labelClass =
    "mb-2 block text-sm font-semibold text-gray-700";

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

      {/* Registration card */}
      <section className="relative z-10 w-full max-w-lg rounded-3xl border border-white/60 bg-[#eef7f6] px-6 pt-14 pb-8 shadow-2xl sm:px-9">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-full border-4 border-sky-100 bg-white p-3 text-sky-600 shadow-lg">
          <UserPlus size={44} strokeWidth={1.8} />
        </div>

        <Link
          to="/staff-login"
          className="mb-6 inline-flex items-center gap-2 rounded text-sm font-medium text-sky-800 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
        >
          <ArrowLeft size={16} />
          Back to login
        </Link>

        <h1 className="text-center text-2xl font-extrabold uppercase tracking-wide text-gray-900">
          Request Staff Account
        </h1>

        <p className="mt-2 mb-7 text-center text-sm text-gray-600">
          Staff access requires approval from your organisation.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full name */}
          <div>
            <label htmlFor="fullName" className={labelClass}>
              Full Name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* Staff ID */}
          <div>
            <label htmlFor="staffId" className={labelClass}>
              Staff ID
            </label>

            <input
              id="staffId"
              name="staffId"
              type="text"
              placeholder="Enter your staff ID"
              value={formData.staffId}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* Official email */}
          <div>
            <label htmlFor="email" className={labelClass}>
              Official Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your official email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className={labelClass}>
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="At least 8 characters"
                value={formData.password}
                onChange={handleChange}
                minLength={8}
                className={`${inputClass} pr-12`}
                required
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

          {/* Confirm password */}
          <div>
            <label htmlFor="confirmPassword" className={labelClass}>
              Confirm Password
            </label>

            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                minLength={8}
                className={`${inputClass} pr-12`}
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
                aria-pressed={showConfirmPassword}
                className="absolute top-3 right-4 rounded p-0.5 text-gray-500 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 w-full cursor-pointer rounded-full bg-[#274c77] px-6 py-3.5 font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#1b365d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
          >
            Request Account
          </button>

          <p
            role="status"
            aria-live="polite"
            className="text-center text-sm leading-relaxed text-sky-900"
          >
            {message}
          </p>
        </form>

        <p className="mt-6 border-t border-sky-200 pt-5 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/staff-login"
            className="font-bold text-sky-800 hover:underline"
          >
            Log in
          </Link>
        </p>
      </section>
    </main>
  );
}

export default StaffRegister;