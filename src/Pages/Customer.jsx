import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileModal from "./ProfileModal";

const Customer = () => {
    const profiles = JSON.parse(localStorage.getItem("profiles")) || [];
    const [searchItem, setSearchItem] = useState("");
    const [selectedProfile, setSelectedProfile] = useState(null);

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

    return (
        <div className="customer-panel hero">
            <h2>Profile Dashboard</h2>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search by name, location, or interests..."
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                className="search-bar"
            />

            {/* Profile Cards */}
            <div className="profile-cards">
                {filteredProfiles.length > 0 ? (
                    filteredProfiles.map((profile) => (
                        <div
                            className="profile-card"
                            key={profile.id}
                            onClick={() => openModal(profile)} // Open modal on click
                        >
                            <img src={profile.image} alt={profile.name} />
                            <div className="profile-info">
                                <h3>{profile.name}</h3>
                                <p>Age: {profile.age}</p>
                                <p>Location: {profile.location}</p>
                                <button>
                                    <Link
                                        to={`/maps/${profile.latitude}/${profile.longitude}`}
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                    >
                                        View on Map
                                    </Link>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No profiles found. Please add some profiles.</p>
                )}
            </div>

            {/* Show Modal if Profile is Selected */}
            {selectedProfile && (
                <ProfileModal
                    profile={selectedProfile}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
};

export default Customer;
