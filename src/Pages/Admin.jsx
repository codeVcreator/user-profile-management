import React, { useState } from "react";
import AddProfileModal from "./AddProfileModal";
import EditProfileModal from "./EditProfileModal";

const Admin = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [profiles, setProfiles] = useState(
        JSON.parse(localStorage.getItem("profiles")) || []
    );
    const [profileToEdit, setProfileToEdit] = useState(null);

    const addProfile = (newProfile) => {
        const updatedProfiles = [...profiles, newProfile];
        localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
        setProfiles(updatedProfiles);
    };

    const deleteProfile = (id) => {
        const updatedProfiles = profiles.filter((profile) => profile.id !== id);
        localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
        setProfiles(updatedProfiles);
    };

    const handleEditClick = (profile) => {
        setProfileToEdit(profile);
        setShowEditModal(true);
    };

    return (
        <div className="admin-panel hero">
            <h2>Admin Panel</h2>
            <button
                onClick={() => setShowAddModal(true)}
                className="search-bar add-btn"
                style={{
                    fontSize: "large",
                    fontFamily: "sans-serif",
                    color: "white",
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    height: "fit-content",
                    width: "fit-content",
                }}
            >
                Add Profile
            </button>

            <div className="profile-cards">
                {profiles.map((profile) => (
                    <div key={profile.id} className="profile-card">
                        <img src={profile.image} alt={profile.name} />
                        <div className="profile-info">
                            <h3>{profile.name}</h3>
                            <p>Age: {profile.age}</p>
                            <p>Location: {profile.location}</p>
                            <div className="buttons">
                                <button
                                    onClick={() => deleteProfile(profile.id)}
                                    style={{
                                        marginRight: "15px",
                                        backgroundColor: "Red",
                                    }}
                                >
                                    Delete
                                </button>
                                <button onClick={() => handleEditClick(profile)}>
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showAddModal && (
                <AddProfileModal
                    addProfile={addProfile}
                    closeModal={() => setShowAddModal(false)}
                />
            )}

            {showEditModal && (
                <EditProfileModal
                    profile={profileToEdit}
                    editProfile={(updatedProfile) => {
                        const updatedProfiles = profiles.map((profile) =>
                            profile.id === updatedProfile.id ? updatedProfile : profile
                        );
                        localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
                        setProfiles(updatedProfiles);
                    }}
                    closeModal={() => setShowEditModal(false)}
                />
            )}
        </div>
    );
};

export default Admin;