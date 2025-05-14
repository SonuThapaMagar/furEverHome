import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login"
import Signup from "./pages/auth/signup"
import "./styles/global.css"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  )
}

export default App
