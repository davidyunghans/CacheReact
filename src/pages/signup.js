import React from "react";

class Signup extends React.Component {
  render() {
    return (
      <main>
        <h1>Signup Form</h1>

        {/* First Name */}
        <div className="question-header">
          Please enter your firstname
          <svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="28px" fill="#e3e3e3">
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </div>
        <div className="email-wrapper">
          <div className="wrapper">
            <input required type="text" name="firstname" id="firstname-input" placeholder="John_____________" style={{ fontSize: "25px" }} />
          </div>
        </div>

        {/* Last Name */}
        <div className="question-type">
          Please enter your lastname
          <svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="28px" fill="#e3e3e3">
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </div>
        <div className="email-wrapper">
          <div className="wrapper">
            <input required type="text" name="lastname" id="lastname-input" placeholder="Doe______________" style={{ fontSize: "25px" }} />
          </div>
        </div>

        {/* Email */}
        <div className="question-type">
          Please enter your email
          <svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="28px" fill="#e3e3e3">
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </div>
        <div className="email-wrapper">
          <div className="wrapper">
            <input required type="email" name="email" id="email-input" placeholder="email@example.com" style={{ fontSize: "25px" }} />
          </div>
        </div>

        {/* Password */}
        <div className="question-type">
          Please enter your password
          <svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="28px" fill="#e3e3e3">
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </div>
        <div className="email-wrapper">
          <div className="wrapper">
            <input required type="password" name="password" id="password-input" placeholder="JohnDoe1!________" style={{ fontSize: "25px" }} />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="question-type">
          Please confirm your password
          <svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="28px" fill="#e3e3e3">
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </div>
        <div className="email-wrapper">
          <div className="wrapper">
            <input required type="password" name="confirm-password" id="confirm-password-input" placeholder="JohnDoe1!________" style={{ fontSize: "25px" }} />
          </div>
        </div>

        {/* LinkedIn URL */}
        <div className="question-type">
          Please upload your LinkedIn URL
          <svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="28px" fill="#e3e3e3">
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </div>
        <div className="email-wrapper">
          <div className="wrapper">
            <input required type="url" name="url" id="url-input" placeholder="www.linkedin.com/in/example" style={{ fontSize: "25px" }} />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <a href="profilefrontpage.html" className="btn-signup">Signup</a>
        </div>
      </main>
    );
  }
}

export default Signup;
