import React, { useState, useEffect } from "react";

const AdminProfileModal = ({ profile, addProfile, editProfile, closeModal }) => {
    const [profileData, setProfileData] = useState({
        id: "",
        name: "",
        age: "",
        image: "",
        location: "",
        contact: "",
        interests: [],
    });

    useEffect(() => {
        if (profile) {
            setProfileData(profile); 
        } else {
            setProfileData({
                id: "",
                name: "",
                age: "",
                image: "",
                location: "",
                contact: "",
                interests: [],
            });
        }
    }, [profile]);

    const handleChange = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (profileData.id) {
            editProfile(profileData); 
        } else {
            addProfile(profileData);
        }
        closeModal();
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>{profileData.id ? "Edit Profile" : "Add Profile"}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={profileData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={profileData.age}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={profileData.location}
                        onChange={handleChange}
                    />
                    <input
                        type="file"
                        name="image"
                        placeholder="Image URL"
                        value={profileData.image}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="contact"
                        placeholder="Contact Info"
                        value={profileData.contact}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="interests"
                        placeholder="Interests (comma separated)"
                        value={profileData.interests.join(",")}
                        onChange={(e) =>
                            setProfileData({
                                ...profileData,
                                interests: e.target.value.split(","),
                            })
                        }
                    />
                    <div className="modal-buttons">
                        <button type="submit" style={{marginRight:"30px"}}>Save</button>
                        <button
                            type="button"
                            className="close-button"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminProfileModal;
