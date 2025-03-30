// src/components/Header.tsx
import React, { useState, createContext, useContext } from "react";
import { useAuth } from "./AuthContext";

import "./Header.css";

interface HeaderProps {
    onPageChange: (page: string) => void;
  }
  
  const Header: React.FC<HeaderProps> = ({ onPageChange }) => {
  const { isLoggedIn, login, logout } = useAuth();

  const signout = () => {
    onPageChange("Home");
    logout();
  };


    return (
      <header className="header">
        <h1 className="header-title">Sectors Running</h1>
        <nav className="header-nav">
          <button className="nav-item" style={linkStyle} onClick={() => onPageChange("Home")}>
            Home
          </button>
          <button className="nav-item" style={linkStyle} onClick={() => onPageChange("Dashboard")}>
            Dashboard
          </button>
          {isLoggedIn && <button className="nav-item" style={linkStyle} onClick={() => onPageChange("Profile")}>
            Profile
          </button>}
          <button className="nav-item" style={linkStyle} onClick={() => onPageChange("Contact")}>
            Contact
          </button>
          {!isLoggedIn && <button className="nav-item" style={linkStyle} onClick={() => onPageChange("Login")}>
            Login
          </button>}
          {isLoggedIn && <button className="nav-item" style={linkStyle} onClick={signout}>
            Sign out
          </button>}
        </nav>
      </header>
    );
  };
  
  //export default Header;

// const headerStyle: React.CSSProperties = {
//   backgroundColor: "#ff6f61",
//   padding: "10px",
//   textAlign: "center",
//   color: "white",
// };

const linkStyle: React.CSSProperties = {
  margin: "0 10px",
  color: "white",
  textDecoration: "none",
  display: "inline-block",
  backgroundColor: "transparent",
};

export default Header;