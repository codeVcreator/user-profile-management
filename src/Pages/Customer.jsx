import React, { useState } from "react";
import ProfileModal from "./ProfileModal";
import GoogleMapModal from "../Components/GoogleMapModal";

const Customer = () => {
    const profiles = JSON.parse(localStorage.getItem("profiles")) || [];
    const [searchItem, setSearchItem] = useState("");
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [mapProfile, setMapProfile] = useState(null); // For map modal

    // Filtering profiles based on search input
    const filteredProfiles = profiles.filter(
        (profile) =>
            profile.name.toLowerCase().includes(searchItem.toLowerCase()) ||
            profile.location.toLowerCase().includes(searchItem.toLowerCase()) ||
            profile.interests.some((interest) =>
                interest.toLowerCase().includes(searchItem.toLowerCase())
            )
    );

    const openModal = (profile) => {
        setSelectedProfile(profile);
    };

    const closeModal = () => {
        setSelectedProfile(null);
    };

    const openMapModal = (profile) => {
        setMapProfile(profile);
    };

    const closeMapModal = () => {
        setMapProfile(null);
    };

    return (
        <div className="customer-panel hero">
            <h2>Profile Dashboard</h2>

            {/* Search bar */}
            <input
                type="text"
                placeholder="Search by name, location, or interests..."
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                className="search-bar"
            />

            {/* Displaying profile cards */}
            {filteredProfiles.length > 0 ? (
                <div className="profile-cards">
                    {filteredProfiles.map((profile) => (
                        <div
                            className="profile-card"
                            key={profile.id}
                            onClick={() => openModal(profile)}
                        >
                            <img src={profile.image} alt={profile.name} />
                            <div className="profile-info">
                                <h3>{profile.name}</h3>
                                <p>Age: {profile.age}</p>
                                <p>Location: {profile.location}</p>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent triggering the profile modal
                                        openMapModal(profile);
                                    }}
                                >
                                    View on Map
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        height: "50vh", // Ensures vertical centering
                        flexDirection: "column",
                    }}
                >
                    <p
                        style={{
                            fontSize: "large",
                            color: "black",
                            textAlign: "center",
                        }}
                    >
                        No profiles found.
                    </p>
                </div>
            )}

            {/* Profile Modal */}
            {selectedProfile && (
                <ProfileModal
                    profile={selectedProfile}
                    closeModal={closeModal}
                />
            )}

            {/* Google Map Modal */}
            {mapProfile && (
                <GoogleMapModal
                    latitude={parseFloat(mapProfile.latitude)}
                    longitude={parseFloat(mapProfile.longitude)}
                    name={mapProfile.name}
                    closeModal={closeMapModal}
                />
            )}
        </div>
    );
};

export default Customer;
