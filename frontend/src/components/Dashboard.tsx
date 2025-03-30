// src/components/Dashboard.tsx
import React, { useState } from "react";

const Dashboard: React.FC = () => {
  const teamData = [
    {
      name: "Blue",
      distanceRan: 1700, // in kilometers
      territories: ["V6C", "V6E"],
    },
    {
      name: "Red",
      distanceRan: 1200,
      territories: ["V6A", "V6B"],
    },
    {
      name: "Green",
      distanceRan: 950,
      territories: ["V5K"],
    },
    {
      name: "Yellow",
      distanceRan: 1100,
      territories: ["V5Y", "V5Z"],
    },
  ];
  
  
  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1>Scoreboard</h1>
        <h2>March 2025</h2>
      </div>
      {/* Special Blue Team */}
      <div style={blueTeamStyle}>
        <div style={{ ...teamCardStyle, ...specialCardStyle, width: "300px" }}>
          <h2 style={{ color: "blue" }}>👑 Blue Team</h2>
          <p>
            <strong>Distance Ran:</strong> 1700 km
          </p>
          <p>
            <strong>Territories Crowned:</strong> V6C, V6E
          </p>
        </div>
      </div>

      {/* Line of Remaining Teams */}
      <div style={lineStyle}>
        {teamData.slice(1).map((team, index) => (
          <div key={index} style={teamCardStyle}>
            <h2 style={{ color: team.name.toLowerCase() }}>{team.name} Team</h2>
            <p>
              <strong>Distance Ran:</strong> {team.distanceRan} km
            </p>
            <p>
              <strong>Territories Crowned:</strong> {team.territories.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


  
// Inline styling for simplicity
const containerStyle: React.CSSProperties = {
  padding: "20px",
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
  backgroundColor: "#FFFFFF",
  border: "1px solid #ccc",
  borderRadius: "8px",
};

const headerStyle: React.CSSProperties = {
};

const blueTeamStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center", // Centers Blue Team horizontally
  alignItems: "center", // Centers Blue Team vertically
  height: "200px", // Adjust as needed for spacing
  marginBottom: "20px", // Adds spacing between the Blue Team and the rest
};

const lineStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around", // Distributes the remaining teams horizontally
  gap: "20px", // Adds spacing between the team cards
};

const teamCardStyle: React.CSSProperties = {
  boxSizing: "border-box",
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "15px",
  backgroundColor: "#f9f9f9",
  textAlign: "center",
  width: "250px", // Ensures consistent card size
};

const specialCardStyle: React.CSSProperties = {
  border: "2px solid gold", // Gold border to highlight the leading team
  backgroundColor: "#e0f7fa", // Unique background color (light blue)
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adds a shadow for emphasis
};






export default Dashboard;