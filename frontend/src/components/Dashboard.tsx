// src/components/Dashboard.tsx
import React, { useState } from "react";

const Dashboard: React.FC = () => {
  const [distance, setDistance] = useState<number>(0);

  const handleRun = () => {
    setDistance((prev) => prev + Math.floor(Math.random() * 5 + 1)); // Randomly increases distance.
  };

  return (
    <div style={dashboardStyle}>
      <h2>Welcome to RunTracker!</h2>
      <p>Distance covered: {distance} km</p>
      <button onClick={handleRun} style={buttonStyle}>
        Add Distance 🏃‍♂️
      </button>
    </div>
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

export default Dashboard;