import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { login } from "../../api/authService";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login: loginUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login({ email, password });
    loginUser(res.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="input-future"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="input-future"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="btn-glow">Login</button>
    </form>
  );
}
