import React, { useState } from "react";
import "./Login.css"; // Ensure you have styles for your forms

const Login: React.FC = () => {
  const [isSignup, setIsSignup] = useState<boolean>(false); // Toggle between login and signup
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    if (isSignup) {
      console.log("Signing up with:", { email, password });
      // Add signup logic here (e.g., API call)
    } else {
      console.log("Logging in with:", { email, password });
      // Add login logic here (e.g., API call)
    }
  };

  return (
    <div className="login-container">
      <h1>{isSignup ? "Sign Up" : "Login"}</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
      </form>
      <p>
        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <span
          className="signup-toggle"
          onClick={() => setIsSignup(!isSignup)}
          style={{ cursor: "pointer", color: "blue" }}
        >
          {isSignup ? "Login" : "Sign Up"}
        </span>
      </p>
    </div>
  );
};

export default Login;