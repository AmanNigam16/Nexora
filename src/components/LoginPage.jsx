import { useState } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase"; // Import Firebase auth instance

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Error state for showing login errors
  const [resetEmailSent, setResetEmailSent] = useState(false); // State for tracking password reset email

  const handleLogin = async () => {
    if (email === "" || password === "") {
      alert("Please enter both email and password.");
      return;
    }

    try {
      // Firebase Authentication for logging in the user
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful");
      // Optionally, redirect the user after successful login
      // window.location.href = "/homepage"; // Example redirect to homepage
    } 
    catch (error) {
      setError(error.message); // Show error message to the user
    }
  };

  const handleForgotPassword = async () => {
    if (email === "") {
      alert("Please enter your email to reset your password.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setResetEmailSent(true);
      alert("Password reset email sent! Please check your inbox.");
    } catch (error) {
      console.error("Error sending password reset email: ", error);
      setError("Error sending password reset email: " + error.message);
    }
  };

  return (
    <div className="full-page">
      <div className="form-container">
        <h1>Welcome to Nexora</h1>
        <input
          type="email"
          placeholder="Email"
          value={email} // Email is a state variable & 'value' gives react its current situation
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Show the variation with or without {} for single line functions
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        />
        <button className="signin-btn" onClick={handleLogin}>
          Login
        </button>

        {/* Display error message if login fails */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Add the Forgot Password as a hyperlink */}
        <p className="forgot-pass" onClick={handleForgotPassword}>
          Forgot Password?
        </p>

        {/* Display success message for reset email sent */}
        {resetEmailSent && (
          <p style={{ color: "green" }}>
            Please check your email to reset your password.
          </p>
        )}

        <p id="js_ride_methods_title" className="zm-login-methods__title">
          <span>Or sign up with </span>
        </p>

        <div className="social-buttons">
          <button className="social-button google-button">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
              alt="Google Logo"
              className="google-logo"
            />
            Continue with Google
          </button>
          <button className="social-button apple-button">
            <img
              src="https://www.svgrepo.com/show/69341/apple-logo.svg"
              alt="Apple Logo"
              className="apple-logo"
            />
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
