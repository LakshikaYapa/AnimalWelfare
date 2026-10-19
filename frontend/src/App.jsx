import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Gatekeeper from "./pages/Gatekeeper";
import StaffLogin from "./pages/StaffLogin";
import StaffRegister from "./pages/StaffRegister";
import GuestLogin from "./pages/GuestLogin";
import GuestRegister from "./pages/GuestRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Role Selection */}
        <Route
          path="/"
          element={<Gatekeeper />}
        />

        {/* Staff Pages */}
        <Route
          path="/staff-login"
          element={<StaffLogin />}
        />

        <Route
          path="/staff-register"
          element={<StaffRegister />}
        />

        {/* Guest Pages */}
        <Route
          path="/guest-login"
          element={<GuestLogin />}
        />

        <Route
          path="/guest-register"
          element={<GuestRegister />}
        />

        {/* Unknown URL */}
        <Route
          path="*"
          element={
            <main className="min-h-screen flex flex-col items-center justify-center bg-[#eef7f6] p-6 text-center">
              <h1 className="text-4xl font-extrabold text-gray-900">
                404
              </h1>

              <p className="mt-3 text-gray-600">
                The page you are looking for could not be found.
              </p>

              <Link
                to="/"
                className="mt-6 rounded-full bg-[#274c77] px-6 py-3 font-semibold text-white hover:bg-[#1b365d]"
              >
                Back to Home
              </Link>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;