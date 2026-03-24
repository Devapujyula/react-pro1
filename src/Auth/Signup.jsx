import { useState } from "react";

function Signup() {
  // useState variables
  var [name, SetName] = useState("");

  var [email, setEmail] = useState("");

  var [password, setPassword] = useState("");

  var [mobile, setMobile] = useState("");

  function handleNameChange(event) {
    console.log(event.target.value);
    SetName(event.target.value);
  }
  function handleEmailChange(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    console.log(event.target.value);
    setPassword(event.target.value);
  }
  function handleMobileChange(event) {
    console.log(event.target.value);
    setMobile(event.target.value);
  }
  function handleCreateAccount() {
    console.log(name, email, mobile, password);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h3>Create Account</h3>
          <div className="mb-3 mt-3">
            <label>Name</label>
            <input
              type="text"
              onChange={(event) => handleNameChange(event)}
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="text"
              onChange={(event) => handleEmailChange(event)}
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              onChange={(event) => handlePasswordChange(event)}
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <label>Mobile</label>
            <input
              type="mobile"
              onChange={(event) => handleMobileChange(event)}
              className="form-control"
              placeholder="Mobile Number"
            />
          </div>
          <div>
            <button
              className="btn btn-warning"
              onClick={(e) => handleCreateAccount(e)}
            >
              Create Account
            </button>
          </div>
          {name} {email} {password} {mobile}
        </div>
      </div>
    </div>
  );
}

export default Signup;
