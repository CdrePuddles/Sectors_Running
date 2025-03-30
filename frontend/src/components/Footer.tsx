// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 Sectors Running. Keep moving!</p>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  backgroundColor: "#333",
  color: "white",
  textAlign: "center",
  padding: "0",
  position: "fixed",
  bottom: "0",
  width: "100%",
  height: "50px",
};

export default Footer;