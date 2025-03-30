// src/components/Dashboard.tsx
import React from "react";
import { GoogleMap, LoadScriptNext, Polygon } from "@react-google-maps/api";
import boundaries from './data/local-area-boundary.json'
import useTeamRuns from '../hooks/useTeamRuns';

const apiKey = import.meta.env.VITE_GMAPS_API_KEY


const Dashboard: React.FC = () => {
  const { loading, error, data } = useTeamRuns('/api/users/rundata');
  console.log(data)
  
  const mapContainerStyle = {
    width: "80%",
    height: "75vh ",
    margin: "auto",
  };
  
  const center = {
    lat: 49.25, // Latitude for Vancouver
    lng: -123.11, // Longitude for Vancouver
  };

    // const postalCodePolygons = boundaries.map((area, index) => ({
    //   placeName: area.name,
    //   paths: area.geom.geometry.coordinates[0].map(coord => ({ lat: coord[1], lng: coord[0] })), 
    // //   color: "#gray", // or set a fixed color if preferred
    //   color: data[area.name].color || 'gray'
    // }));

    const postalCodePolygons = !loading && data ? boundaries.map((area, index) => {
        const placeName = area.name;
        const placeTeams = data[placeName] || {};
        
        // Find the team with the most kilometers
        let maxKm = 0;
        let winningTeamColor = "#808080"; // Default gray color
        let winningTeamName = null;
        
        // Iterate through all teams in this area to find the one with most km
        Object.entries(placeTeams).forEach(([teamName, teamData]) => {
            console.log(teamData.color)
            console.log(placeName)
            console.log(teamData.km)
          if (teamData.km > maxKm) {
            console.log("setting color to ")
            console.log(teamData.color)
            maxKm = teamData.km;
            winningTeamColor = teamData.color;
            winningTeamName = teamName;
          }
        });
        
        return {
          placeName: placeName,
          paths: area.geom.geometry.coordinates[0].map(coord => ({ 
            lat: coord[1], 
            lng: coord[0] 
          })),
          color: winningTeamColor,
          leadingTeam: winningTeamName,
          leadingKm: maxKm
        };
      }) : [];

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