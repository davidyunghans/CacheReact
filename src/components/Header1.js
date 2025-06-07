import React from "react";

class Header1 extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <h1 className="cacheai">CACHE.AI</h1>
          <nav className="navigation-bar">
            <a href="/home">
              Home
              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#e3e3e3">
                <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z" />
              </svg>
            </a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header1;
