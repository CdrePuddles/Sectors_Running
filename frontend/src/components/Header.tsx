// src/components/Header.tsx
import React from "react";
import RunningSVG from "./logo.svg"; 
import Dashboard from "./Dashboard";
import "./Header.css";
import logo from "../assets/img/logo.png";

// const Header: React.FC = () => {
//   return (
//     <header style={headerStyle}>
//       <h1>Sectors Running <img src={RunningSVG} alt="Running icon" style={{ width: "100px", backgroundColor: "transparent" }} />

//       </h1>
//       <nav>
//         <a href="#home" className="nav-item" style={linkStyle} onClick={() => onPageChange("Home")}>Home</a>
//         <a href="#about" className="nav-item" style={linkStyle}>About</a>
//         <a href="#contact" className="nav-item" style={linkStyle}>Contact</a>
//       </nav>
//     </header>
//   );
// };

// src/components/Header.tsx
interface HeaderProps {
    onPageChange: (page: string) => void;
  }
  
  const Header: React.FC<HeaderProps> = ({ onPageChange }) => {
    return (
      <header className="header" style={headerStyle}>
        <img src={logo} alt="Sector" style={{ width: "40%" }}></img>
        <nav className="header-nav">
          <button className="nav-item" style={linkStyle} onClick={() => onPageChange("Home")}>
            Home
          </button>
          <button className="nav-item" style={linkStyle} onClick={() => onPageChange("Dashboard")}>
            Dashboard
          </button>
          <button className="nav-item" style={linkStyle} onClick={() => onPageChange("Login")}>
            Login
          </button>
          <button className="nav-item" style={linkStyle} onClick={() => onPageChange("Contact")}>
            Contact
          </button>
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

export default Header;