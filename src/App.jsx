import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";

export default function APP() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
