import React from 'react';

const ProfileModal = ({ profile, closeModal }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Profile Details</h2>
                <div className="modal-content">
                    <img src={profile.image} alt={profile.name} />
                    <h3>{profile.name}</h3>
                    <p>Age: {profile.age}</p>
                    <p>Location: {profile.location}</p>
                    <p>Contact: {profile.contact}</p>
                    <p>Interests: {profile.interests.join(", ")}</p>
                </div>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default ProfileModal;
