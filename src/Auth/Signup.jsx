import { useState } from "react";
import { validateEmail } from "../utils/utils";
import axios from "axios";

function Signup() {
  // useState variables
  var [name, SetName] = useState("");

  var [email, setEmail] = useState("");

  var [password, setPassword] = useState("");

  var [mobile, setMobile] = useState("");

  // Error variables
  var [nameError, setNameError] = useState("");

  var [emailError, setEmailError] = useState("");

  var [mobileError, setMobileError] = useState("");

  var [passwordError, setPasswordError] = useState("");

  var [apiErrorMsg, setApiErrorMsg] = useState("");
  var [apiSuccessMsg, setApiSuccessMsg] = useState("");

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
  async function handleCreateAccount() {
    var noOfErrors = 0;
    console.log(name, email, mobile, password);
    console.log(name.length);
    if (name.length < 3) {
      setNameError("Min 3 characters");
      noOfErrors++;
    } else {
      setNameError("");
    }

    if (validateEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Email is not valid");
      noOfErrors++;
    }

    if (mobile.length == 10) {
      setMobileError("");
    } else {
      setMobileError("Mobile number is not valid");
      noOfErrors++;
    }

    if (password.length >= 5) {
      setPasswordError("");
    } else {
      setPasswordError("Password must contain 5 letters");
      noOfErrors++;
    }
    if (noOfErrors == 0) {
      console.log("calling api", noOfErrors);
      var apiInputData = {
        email: email,
        name: name,
        password: password,
        mobile: mobile,
      };
      console.log(apiInputData);
      var apiResponse = await axios.post(
        "https://api.softwareschool.co/auth/signup",
        apiInputData,
      );
      console.log(apiResponse);
      console.log(apiResponse.data.result);
      if (apiResponse.data.result == "SUCCESS") {
        setApiSuccessMsg(apiResponse.data.message);
        setApiErrorMsg("");
      } else {
        setApiErrorMsg(apiResponse.data.message);
        setApiSuccessMsg("");
      }
    }
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
            <div className="text-danger">{nameError}</div>
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="text"
              onChange={(event) => handleEmailChange(event)}
              className="form-control"
              placeholder="Email"
            />
            <div className="text-danger">{emailError}</div>
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
          <div className="text-danger">{passwordError}</div>
          <div className="mb-3">
            <label>Mobile</label>
            <input
              type="mobile"
              onChange={(event) => handleMobileChange(event)}
              className="form-control"
              placeholder="Mobile Number"
            />
            <div className="text-danger">{mobileError}</div>
          </div>
          <div>
            <button
              className="btn btn-warning"
              onClick={(e) => handleCreateAccount(e)}
            >
              Create Account
            </button>
          </div>
          <div className="mt-3">
            <div className="alert alert-danger">{apiErrorMsg}</div>
            <div className="alert alert-success">{apiSuccessMsg}</div>
          </div>
          {name} {email} {password} {mobile} {apiErrorMsg} {apiSuccessMsg}
        </div>
      </div>
    </div>
  );
}

export default Signup;
