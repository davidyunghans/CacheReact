import React from "react";

class rLogin extends React.Component {
  render() {
    return (
      <main>
        <div className="question-header">
          Please enter your work email
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

        <div className="question-header">
          Please upload your LinkedIn URL to create a profile
          <svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="28px" fill="#e3e3e3">
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </div>

        <div className="email-wrapper">
          <div className="wrapper">
            <input
              required
              type="url"
              name="url"
              id="url-input"
              placeholder="www.linkedin.com/in/example"
              style={{ fontSize: "25px" }}
            />
          </div>
        </div>

        <div className="buttons">
          <a href="searchcandidatelinkedin.html" className="btn-get-started">Enter</a>
        </div>
      </main>
    );
  }
}

export default rLogin;
