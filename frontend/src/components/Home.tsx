// Dashboard.tsx
import React, { useState } from "react";
import { GoogleMap, LoadScriptNext, Polygon, InfoWindow } from "@react-google-maps/api";
import boundaries from './data/local-area-boundary.json';
import useTeamRuns from '../hooks/useTeamRuns';

const apiKey = import.meta.env.VITE_GMAPS_API_KEY;

const Dashboard: React.FC = () => {
  const { loading, data } = useTeamRuns('/api/users/rundata');
  const [hoveredPolygon, setHoveredPolygon] = useState<{
    lat: number;
    lng: number;
    placeName: string;
    teamData: any;
  } | null>(null);

  const mapContainerStyle = {
    width: "80%",
    height: "75vh",
    margin: "auto",
  };

  const center = {
    lat: 49.25,
    lng: -123.11,
  };

  // Logic for rendering polygons
  const postalCodePolygons = !loading && data ? boundaries.map((area) => {
    const placeName = area.name;
    const placeTeams = data[placeName] || {};
    
    let maxKm = 0;
    let winningTeamColor = "#808080";
    let winningTeamName = null;

    Object.entries(placeTeams).forEach(([teamName, teamData]: [string, any]) => {
      if (teamData.km > maxKm) {
        maxKm = teamData.km;
        winningTeamColor = teamData.color;
        winningTeamName = teamName;
      }
    });

    return {
      placeName: placeName,
      paths: area.geom.geometry.coordinates[0].map(coord => ({ lat: coord[1], lng: coord[0] })),
      color: winningTeamColor,
      leadingTeam: winningTeamName,
      leadingKm: maxKm,
      teamData: placeTeams
    };
  }) : [];

  // Calculate the center of a polygon (for placing InfoWindow)
  const getPolygonCenter = (paths: {lat: number, lng: number}[]) => {
    const latSum = paths.reduce((acc, {lat}) => acc + lat, 0);
    const lngSum = paths.reduce((acc, {lng}) => acc + lng, 0);
    return {
      lat: latSum / paths.length,
      lng: lngSum / paths.length,
    };
  };

  const handleMouseOver = (polygon) => {
    const centerCoords = getPolygonCenter(polygon.paths);
    setHoveredPolygon({ 
      lat: centerCoords.lat, 
      lng: centerCoords.lng, 
      placeName: polygon.placeName,
      teamData: polygon.teamData
    });
  };

  const handleMouseOut = () => {
    setHoveredPolygon(null);
  };

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
                onMouseOver={() => handleMouseOver(polygon)}
                onMouseOut={() => handleMouseOut()}
              />
            ))}

            {hoveredPolygon && (
              <InfoWindow
                position={{ lat: hoveredPolygon.lat, lng: hoveredPolygon.lng }}
                onCloseClick={() => setHoveredPolygon(null)}
              >
                <div style={{ fontSize: '14px' }}>
                  <h4>{hoveredPolygon.placeName}</h4>
                  {Object.entries(hoveredPolygon.teamData).map(([teamName, teamInfo]: [string, any]) => (
                    <p key={teamName}>
                      <strong>{teamName}:</strong> {teamInfo.km} km
                    </p>
                  ))}
                </div>
              </InfoWindow>
            )}

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

export default Dashboard;