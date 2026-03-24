import React, { useState } from "react";
import { validateEmail } from "../utils/utils";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // error handling
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleChange() {
    console.log(email, password);

    if (validateEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("enter valid email");
    }

    if (password.length >= 5) {
      setPasswordError("");
    } else {
      setPasswordError("Please enter your 5 digits Password");
    }
  }

  return (
    <div className="container mt-5">
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        <h3 className="text-center mb-4">Login</h3>

        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your Email"
              onChange={(event) => handleEmailChange(event)}
            />
          </div>
          <div className="text-danger">{emailError}</div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={(event) => handlePasswordChange(event)}
            />
          </div>
          <div className="text-danger">{passwordError}</div>
          <button
            type="submit"
            className="btn btn-warning w-100"
            onClick={(e) => handleChange(e)}
          >
            Login
          </button>
          {name} {password}
        </form>
      </div>
    </div>
  );
}

export default Login;
