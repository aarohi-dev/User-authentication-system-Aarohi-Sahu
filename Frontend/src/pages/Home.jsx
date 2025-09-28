import React from "react";

function Home() {
  return (
    <div className="home-page">
      <h1 className="title">Welcome to SpaceNet</h1>
      <p className="subtitle">
        Explore a futuristic authentication system with glowing buttons,
        galaxy backgrounds, and real-time profile sync.
      </p>

      <div className="actions">
        <a href="/login" className="btn-glow">Login</a>
        <a href="/signup" className="btn-glow">Sign Up</a>
      </div>
    </div>
  );
}

export default Home;
