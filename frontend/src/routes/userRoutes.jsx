import { Routes, Route } from "react-router-dom";
import UserLogin from "../pages/auth/UserLogin";
import { LandingPage } from "../pages/LandingPage";

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<UserLogin />} />
    </Routes>
  );
}
