import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/protectedRoute";
import Navbar from "./components/NavBar";

import AuthProvider from "./context/AuthContext";

import "./theme/theme.css";
import "./theme/animation.css";

function BackgroundEffects() {  //dynamic stars generation
  const stars = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className="star"
      style={{
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    />
  ));

  return (
    <div className="starry-bg">
      {stars}
      <div className="nebula" style={{ top: "20%", left: "30%" }} />
      <div className="nebula" style={{ top: "60%", left: "70%" }} />
      <div className="shooting-star" style={{ left: "10%", animationDelay: "3s" }} />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <BackgroundEffects />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
