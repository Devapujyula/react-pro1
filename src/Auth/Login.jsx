import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <div className="container mt-5">
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        <h3 className="text-center mb-4">Login</h3>

        <form>
          {/* Name Field */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              onChange={(event) => handleNameChange(event)}
            />
          </div>
          {/* Password Field */}
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
          {/* Button */}
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
