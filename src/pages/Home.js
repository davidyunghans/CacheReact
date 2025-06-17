import React from "react";
import { Link } from "react-router-dom";
import Orb from "../components/Orb";
import "../components/Orb.css";

class Home extends React.Component {
  render() {
    return (
      <main>
        <div
          className="home-flex-container"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "40px",
          }}
        >
          {/* Left side - text */}
          <div style={{ flex: "1", paddingRight: "40px" }}>
            <div className="content">
              <div className="tag-box">
                <div className="tag">Making The Hiring Process Easier</div>
              </div>

              <h1>Access the Best</h1>

              <p className="description">
                APPLY WITHOUT APPLYING <br /> RECRUIT WITHOUT RECRUITING
              </p>

            <div className="buttons">
              <Link to="/ilogin" className="btn-get-started">Login</Link>
              <Link to="/search" className="btn-signing-main">Search Candidates</Link>
            </div>
            </div>
          </div>

          {/* Right side - Orb with clickable links */}
          <div
            style={{
              flex: "1",
              maxWidth: "600px",
              height: "600px",
              position: "relative",
            }}
            className="orb-wrapper"
          >
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
            <div
              className="overlay-text"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "28px",
                fontWeight: "bold",
                textAlign: "center",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                zIndex: 3, 
                pointerEvents: "auto", 
              }}
            >
              <p className="description" style={{ cursor: "pointer" }}>
                <Link to="/recruiter" style={{ color: 'white', textDecoration: 'none' }}>
                  Reshape Hiring.
                </Link>
                <br />
                <Link to="/candidate" style={{ color: 'white', textDecoration: 'none' }}>
                  Reshape Applying.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
