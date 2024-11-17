import React, { useEffect, useRef } from "react";

// Include the CSS file for the modal
import "./modal.css";

const GoogleMapModal = ({ latitude, longitude, closeModal }) => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        // Initialize the map when the modal is opened
        const googleMaps = window.google.maps;
        const map = new googleMaps.Map(mapContainerRef.current, {
            center: { lat: latitude, lng: longitude },
            zoom: 15,
        });

        const marker = new googleMaps.Marker({
            position: { lat: latitude, lng: longitude },
            map: map,
        });
    }, [latitude, longitude]);

    return (
        <div className="map-modal-overlay">
            <div className="map-modal-container">
                <button
                    className="map-close-button"
                    onClick={closeModal}
                    aria-label="Close Map"
                >
                    &times;
                </button>
                <div id="map-modal" ref={mapContainerRef}></div>
            </div>
        </div>
    );
};

export default GoogleMapModal;
