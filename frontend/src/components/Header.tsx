// src/components/Header.tsx
import React, { useState, createContext, useContext } from "react";
import { useAuth } from "./AuthContext";
import "./Header.css";import RunningSVG from "./logo.svg"; 
import Dashboard from "./Dashboard";
import "./Header.css";
import logo from "../assets/img/logo.png";


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
    <header className="header" style={headerStyle}>
      <img src={logo} alt="Sector" style={{ width: "10%" }}></img>
      <nav className="header-nav">
        <button className="nav-item" style={linkStyle} onClick={() => onPageChange("Home")}>
          Home
        </button>
        <button className="nav-item" style={linkStyle} onClick={() => onPageChange("Dashboard")}>
          Dashboard
        </button>
        <button className="nav-item" style={linkStyle} onClick={() => onPageChange("About")}>
          About
        </button>
          {isLoggedIn && 
          <div style={loggedinMenu}> <button className="nav-item" style={linkStyle} onClick={() => onPageChange("Profile")}> 
              Profile
            </button>
            <button className="nav-item" style={linkStyle} onClick={() => onPageChange("Team")}>
              Team
            </button>
          </div>
        }
            
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

const headerStyle: React.CSSProperties = {
  backgroundColor: "linear-gradient(rgb(17, 19, 40),rgb(17, 19, 40))",
  padding: "10px",
  textAlign: "center"
};

const linkStyle: React.CSSProperties = {
  margin: "0 10px",
  color: "white",
  textDecoration: "none",
  display: "inline-block",
  backgroundColor: "transparent",
};

const loggedinMenu: React.CSSProperties = {
  display: "inline-block",
  color: "blue",
  fontSize: "16px",
  borderRadius: "8px", // Adds rounded corners
  backgroundColor: "rgba(94, 250, 255, 0.5)", // Adds a semi-transparent background
};



export default Header;