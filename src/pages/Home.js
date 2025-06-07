import React from "react";

class Home extends React.Component {
  render() {
    return (
      <main>
        <div className="content">
          <div className="tag-box">
            <div className="tag">Making The Hiring Process Easier</div>
          </div>

          <h1>Access the Best</h1>

          <p className="description">
            APPLY WITHOUT APPLYING <br /> RECRUIT WITHOUT RECRUITING
          </p>

          <div className="buttons">
            <a href="ilogin.html" className="btn-get-started">Login</a>
            <a href="searchcandidate.html" className="btn-signing-main">Search Candidates</a>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
