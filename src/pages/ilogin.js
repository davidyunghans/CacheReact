import React from "react";

class iLogin extends React.Component {
  render() {
    return (
      <main>
        <h1>Login Form</h1>

        <div className="question-header">
          Please enter your email
          <svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="28px" fill="#e3e3e3">
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </div>

        <div className="email-wrapper">
          <div className="wrapper">
            <input
              required
              type="email"
              name="email"
              id="email-input"
              placeholder="email@example.com"
              style={{ fontSize: "25px" }}
            />
          </div>
        </div>

        <div className="question-type">
          Please enter your password
          <svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="28px" fill="#e3e3e3">
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </div>

        <div className="email-wrapper">
          <div className="wrapper">
            <input
              required
              type="password"
              name="password"
              id="password-input"
              placeholder="Password2025!"
              style={{ fontSize: "25px" }}
            />
          </div>
        </div>

        <div>
          <a href="profilefrontpage.html" className="btn-login">Login</a>
        </div>
      </main>
    );
  }
}

export default iLogin;
