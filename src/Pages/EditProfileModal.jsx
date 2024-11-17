import React, { useState, useEffect } from "react";

const EditProfileModal = ({ profile, editProfile, closeModal }) => {
    const [profileData, setProfileData] = useState({
        id: "",
        name: "",
        age: "",
        image: "",
        location: "",
        contact: "",
        interests: [],
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (profile) {
            setProfileData(profile);
        }
    }, [profile]);

    const handleChange = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfileData((prevData) => ({
                    ...prevData,
                    image: reader.result, // Base64 string
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            editProfile(profileData);
            closeModal();
            setIsSubmitting(false);
        }, 1000); // Simulating API delay
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Edit Profile</h2>
                {isSubmitting && <div className="loader"></div>}
                <form onSubmit={handleSubmit} style={{ position: "relative", opacity: isSubmitting ? 0.6 : 1 }}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={profileData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={profileData.age}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={profileData.location}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleFileChange}
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
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            style={{
                                marginRight: "30px",
                                backgroundColor: isSubmitting ? "#aaa" : "#007bff",
                                cursor: isSubmitting ? "not-allowed" : "pointer",
                            }}
                        >
                            {isSubmitting ? "Saving..." : "Save"}
                        </button>
                        <button
                            type="button"
                            className="close-button"
                            onClick={closeModal}
                            disabled={isSubmitting}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfileModal;
