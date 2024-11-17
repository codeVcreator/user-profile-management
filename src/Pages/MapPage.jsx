import React, { useEffect } from "react";
import MapMarker from "../Components/MapMarker";

const MapPage = ({ match }) => {

    return <MapMarker />
    const { lat, lon } = match.params;

    useEffect(() => {
        const map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: parseFloat(lat), lng: parseFloat(lon) },
            zoom: 10,
        });

        new window.google.maps.Marker({
            position: { lat: parseFloat(lat), lng: parseFloat(lon) },
            map: map,
        });
    }, [lat, lon]);

    return (
        <div>
            <h2>Location on Google Maps</h2>
            <div id="map" style={{ height: "500px", width: "100%" }}></div>
        </div>
    );
};

export default MapPage;
