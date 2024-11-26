import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 

  const handleSignup = async () => {
    if (email === "" || password === "" || confirmPassword === "") {
      alert("Incomplete Information.");
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      // Create the user with email and password in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user data in Firestore (if needed)
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        uid: user.uid,
        createdAt: new Date(),
      });

      alert("Signup successful!");
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Error signing up: " + error.message);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="signup-btn" onClick={handleSignup}>Sign Up</button>

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

export default SignupPage;
