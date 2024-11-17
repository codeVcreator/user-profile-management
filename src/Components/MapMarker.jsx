import GoogleMap from "google-maps-react-markers"; // Import the default export
import { useRef, useState } from "react";

const MapMarker = () => {
    const mapRef = useRef(null);
    const [mapReady, setMapReady] = useState(false);

    const coordinates = [{ lat: 40.7128, lng: -74.0060, name: "Jaipur" }];

    /**
     * @description This function is called when the map is ready
     * @param {Object} map - reference to the map instance
     * @param {Object} maps - reference to the maps library
     */
    const onGoogleApiLoaded = ({ map, maps }) => {
        mapRef.current = map;
        setMapReady(true);
    };

    const onMarkerClick = (props, marker, e) => {
        const { markerId, position } = marker;
        console.log("This is ->", markerId);

        // Set map center to the clicked marker position
        mapRef.current.setCenter(position);
    };

    return (
        <>
            {mapReady && (
                <div>Map is ready. See for logs in developer console.</div>
            )}
            <GoogleMap
                apiKey="YOUR_GOOGLE_MAPS_API_KEY" // Make sure to replace this with your actual API key
                defaultCenter={{ lat: 45.4046987, lng: 12.2472504 }}
                defaultZoom={5}
                style={{ height: "100vh", width: "100%" }} // CSS for full-screen map
                onGoogleApiLoaded={onGoogleApiLoaded}
                onChange={(map) => console.log("Map moved", map)}
            >
                {coordinates.map(({ lat, lng, name }, index) => (
                    <GoogleMap.Marker // Use the Marker from the default export
                        key={index}
                        lat={lat}
                        lng={lng}
                        markerId={name}
                        onClick={onMarkerClick} // Handle marker click
                    />
                ))}
            </GoogleMap>
        </>
    );
};

export default MapMarker;
