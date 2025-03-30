// src/components/Dashboard.tsx
import React, { useState } from "react";
import WebPImage from "../assets/img/Vancouver.webp";

const Team: React.FC = () => {
  return (
    <main style={dashboardStyle}>
        <h2>Home page!</h2>
        <img src={WebPImage} alt="Example WebP" style={{ width: "50%" }}></img>
    </main>
  );
};

const dashboardStyle: React.CSSProperties = {
  textAlign: "center",
  marginTop: "20px",
};

const buttonStyle: React.CSSProperties = {
  padding: "10px 20px",
  backgroundColor: "#ff6f61",
  border: "none",
  borderRadius: "5px",
  color: "white",
  cursor: "pointer",
};

export default Team;