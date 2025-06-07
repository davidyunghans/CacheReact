import React, { useState } from "react";

const Header2 = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => setSidebarVisible(true);
  const hideSidebar = () => setSidebarVisible(false);

  return (
    <header>
      <nav>
        {/* Sidebar Menu */}
        <ul
          className="sidebar"
          style={{
            display: sidebarVisible ? "flex" : "none",
            flexDirection: "column",
            position: "fixed",
            top: 0,
            right: 0,
            backgroundColor: "#111",
            width: "250px",
            height: "100vh",
            padding: "1rem",
            zIndex: 1000,
          }}
          role="menu"
        >
          <li>
            <button onClick={hideSidebar} aria-label="Close Sidebar" style={{ background: "none", border: "none" }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#e3e3e3">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          </li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/interviews">Interviews</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>

        {/* Top Nav */}
        <ul style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem" }}>
          <li><a href="/" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>CACHE.AI</a></li>
          <li>
            <button onClick={showSidebar} aria-label="Open Sidebar" style={{ background: "none", border: "none" }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#e3e3e3">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header2;
