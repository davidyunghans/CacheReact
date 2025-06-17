import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="cacheai">CACHE.AI</h1>

        <nav >
          <ul  style={{ listStyle: "none", display: "flex", gap: "50px", padding: 0, margin: 0, cursor: "pointer", }}>
            <li className="homepagenav">COMPANY</li>
            <li className="homepagenav">FEATURES</li>
            <li className="homepagenav">CONTACT US</li>
          </ul>
        </nav>
  
      <Link to="/signup" className="btn-get-started">Create An Account</Link>
      </header>
    );
  }
}

export default Header;
