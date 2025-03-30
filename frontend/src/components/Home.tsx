// src/components/Dashboard.tsx
import React, { useState } from "react";
import { GoogleMap, LoadScript, Polygon } from "@react-google-maps/api";
import data from './data/local-area-boundary.json'

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
 

    const postalCodePolygons = data.map((area, index) => ({
      postalCode: area.name,
      paths: area.geom.geometry.coordinates[0].map(coord => ({ lat: coord[1], lng: coord[0] })), 
      color: "#0000FF", // or set a fixed color if preferred
    }));

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