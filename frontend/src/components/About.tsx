import React, { useState, createContext, useContext } from "react";
import "./About.css"
import { useAuth } from "./AuthContext";


const Contact: React.FC = () => {
    
      return (
        <div className="about">
            <h2>Welcome to Sector Running!</h2>
            <p id="content">Turn your runs into a thrilling competition with Sector Running, the ultimate program to gamify your fitness journey. Gather your team and challenge others to claim dominance over your local postal code. Every mile you run brings your team closer to becoming the reigning Kings of the Sector.</p><br></br>
🏃‍♀️ <strong>How it Works:</strong> <br></br>
<ul>
  <li>Compete with other teams to log the most miles in your postal code.</li>
  <li>At the end of the month, the team with the highest mileage is crowned. 🥇🥈🥉</li>
  <li>Defend your title: Rival teams can aim to dethrone you in the following month!</li>
</ul>

<p>Ready to lace up, build your team, and run your way to victory? The crown is yours for the taking—if you can keep up!</p>
        </div>
      );
    };
    
  

export default Contact;