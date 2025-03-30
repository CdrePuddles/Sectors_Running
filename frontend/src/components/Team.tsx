// src/components/Dashboard.tsx
import React, { useState } from "react";
import WebPImage from "../assets/img/Vancouver.webp";

const Team: React.FC = () => {
  const teamScore = 10250;

  const members: ProfileProps[] = [
    {
      name: "Alex",
      photoUrl: "https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg",
      username: "alex_runner",
      memberSince: "January 2020",
      distanceTravelled: 1700,
      team: "Blue",
    },
    {
      name: "Jamie",
      photoUrl: "https://www.humaneworld.org/sites/default/files/styles/responsive_3_4_500w/public/2021-06/hamster-540188.jpg.webp?itok=C1joOtzB",
      username: "jamie_tactician",
      memberSince: "March 2021",
      distanceTravelled: 1500,
      team: "Blue",
    },
    {
      name: "Taylor",
      photoUrl: "https://www.allaboutbirds.org/news/wp-content/uploads/2024/05/438159401-Prothonotary_Warbler-Ryan_Justice-FI.jpg",
      username: "taylor_speed",
      memberSince: "June 2022",
      distanceTravelled: 1200,
      team: "Blue",
    },
  ];
  
  
  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    width: "65%",
    margin: "auto",
  };

  const teamCardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px auto",
    backgroundColor: "#d3eaff",
    width: "400px",
    
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  };

  const memberCardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    backgroundColor: "#f9f9f9",
    textAlign: "left",

  };

  const photoStyle = {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "10px",
  };

  const user = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "5px",
  };

  return (
    <div style={containerStyle}>
      <h1>Blue Team Page</h1>
      <div style={teamCardStyle}>
        <h2 style={{ color: "blue" }}>👑 Blue Team</h2>
        <p>
          <strong>Score:</strong> {teamScore} points
        </p>
      </div>
      <h3>Team Members</h3>
      <div style={gridStyle}>
        {members.map((member, index) => (
          <div key={index} style={memberCardStyle}>
            <img src={member.photoUrl} alt={`${member.name}'s profile`} style={photoStyle} />
            <div style={user}>
              <h4>{member.name}</h4>
              <p>
                <strong>Username:</strong> {member.username}
              </p>
              <p>
                <strong>Member Since:</strong> {member.memberSince}
              </p>
              <p>
                <strong>Distance Travelled:</strong> {member.distanceTravelled} km
              </p>
              <p>
                <strong>Team:</strong> {member.team}
              </p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Team;