// src/components/Dashboard.tsx
import React, { useState } from "react";
import WebPImage from "../assets/img/Vancouver.webp";
import { useAuth, AuthProvider, ProfileProps } from "./AuthContext";


const Profile: React.FC<ProfileProps> = () => {
  const { profile } = useAuth();

  return (
    <div style={containerStyle}>
      <img src={profile.photoUrl} alt={`${profile.name}'s profile`} style={photoStyle} />
      <h2>{profile.name}</h2>
      <p>@{profile.username}</p>
      <p><strong>Member Since:</strong> {profile.memberSince}</p>
      <p><strong>Distance Travelled:</strong> {profile.distanceTravelled} km</p>
      <p><strong>Team:</strong> {profile.team}</p>
    </div>
  );

};


// Inline styles
const containerStyle: React.CSSProperties = {
  border: "2px solid #007bff", // Adds a blue border to the container
  borderRadius: "10px", 
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // Aligns horizontally
  alignItems: "center",    // Aligns vertically
  height: "50vh",         // Takes up the full height of the viewport
  width: "25%",
  backgroundColor: "#f0f0f0",
  margin: "auto",
};

const photoStyle: React.CSSProperties = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "15px",
};



export default Profile;