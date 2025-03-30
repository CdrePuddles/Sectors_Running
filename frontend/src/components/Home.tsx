// src/components/Dashboard.tsx
import React from "react";
import { GoogleMap, LoadScriptNext, Polygon } from "@react-google-maps/api";
import data from './data/local-area-boundary.json'
const apiKey = import.meta.env.VITE_GMAPS_API_KEY

const Dashboard: React.FC = () => {
  
  const mapContainerStyle = {
    width: "80%",
    height: "500px",
    margin: "auto",
  };
  
  const center = {
    lat: 49.25, // Latitude for Vancouver
    lng: -123.11, // Longitude for Vancouver
  };

    const postalCodePolygons = data.map((area, index) => ({
      postalCode: area.name,
      paths: area.geom.geometry.coordinates[0].map(coord => ({ lat: coord[1], lng: coord[0] })), 
      color: "#0000FF", // or set a fixed color if preferred
    }));

    return (
        <>
        {apiKey ? (
          <LoadScriptNext googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={12}
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
          </LoadScriptNext>
        ) : (
          <div className="error-message">
            Google Maps API key is missing. Please check your environment variables.
          </div>
        )}
      </>
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