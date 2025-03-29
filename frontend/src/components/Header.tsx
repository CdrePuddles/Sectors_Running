// src/components/Header.tsx
import React from "react";
import RunningSVG from "./logo.svg"; 
import Dashboard from "./Dashboard";


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
        <h1 className="header-title">My React App</h1>
        <nav className="header-nav">
          <div className="nav-item" style={linkStyle} onClick={() => onPageChange("Home")}>
            Home
          </div>
          <div className="nav-item" style={linkStyle} onClick={() => onPageChange("Dashboard")}>
            Dashboard
          </div>
          <div className="nav-item" style={linkStyle} onClick={() => onPageChange("Contact")}>
            Contact
          </div>
        </nav>
      </header>
    );
  };
  
  //export default Header;

const headerStyle: React.CSSProperties = {
  backgroundColor: "#ff6f61",
  padding: "10px",
  textAlign: "center",
  color: "white",
};

const linkStyle: React.CSSProperties = {
  margin: "0 10px",
  color: "white",
  textDecoration: "none",
  display: "inline-block",
};

export default Header;