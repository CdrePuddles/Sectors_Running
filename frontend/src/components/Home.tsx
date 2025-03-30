// src/components/Dashboard.tsx
import React, { useState } from "react";
import { GoogleMap, LoadScript, Polygon } from "@react-google-maps/api";

import WebPImage from "../assets/img/Vancouver.webp";

const Dashboard: React.FC = () => {
  const [mapKey, setMapKey] = useState(0);

  const refreshMap = () => {
    setMapKey((prevKey) => prevKey + 1); // Increment the key to force re-render
  };
  
  const mapContainerStyle = {
    width: "80%",
    height: "500px",
    margin: "auto",
  };

  
  const center = {
    lat: 49.2827, // Latitude for Vancouver
    lng: -123.1207, // Longitude for Vancouver
  };
  
  const postalCodePolygons = [
    {
      postalCode: "V6B",
      paths: [
        { lat: 49.280, lng: -123.120 },
        { lat: 49.285, lng: -123.115 },
        { lat: 49.290, lng: -123.120 },
        { lat: 49.285, lng: -123.125 },
      ],
      color: "#FF0000", // Red for this postal code
    },
    {
      postalCode: "V6C",
      paths: [
        { lat: 49.290, lng: -123.115 },
        { lat: 49.295, lng: -123.110 },
        { lat: 49.300, lng: -123.115 },
        { lat: 49.295, lng: -123.120 },
      ],
      color: "#0000FF", // Blue for this postal code
    },
    {
      postalCode: "V3K",
      paths: [
        { lat: 49.270, lng: -123.120 },
        { lat: 49.275, lng: -123.115 },
        { lat: 49.280, lng: -123.120 },
        { lat: 49.285, lng: -123.125 },
      ],
      color: "#FF0000", // Red for this postal code
    },
    {
      postalCode: "V7H",
      paths: [
        { lat: 49.290, lng: -123.115 },
        { lat: 49.295, lng: -123.110 },
        { lat: 49.300, lng: -123.115 },
        { lat: 49.295, lng: -123.120 },
      ],
      color: "#0000FF", // Blue for this postal code
    },
  ];
  

    return (
      <LoadScript googleMapsApiKey="AIzaSyCZIW06LMeM9IsMGSLVuYDiYTkXvPKzxs0">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={13}
        >
          {postalCodePolygons.map((polygon, index) => (
            
            <Polygon
              key={index}
              paths={polygon.paths}
              options={{
                fillColor: polygon.color,
                fillOpacity: 0.4,
                strokeColor: polygon.color,
                strokeOpacity: 0.8,
                strokeWeight: 2,
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    );

  
  // return (
  //   <main style={dashboardStyle}>
  //       <h2>Home page!</h2>
  //       <img src={WebPImage} alt="Example WebP" style={{ width: "50%" }}></img>
  //   </main>
  // );
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