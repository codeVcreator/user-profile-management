import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin";
import Customer from "./Pages/Customer";
import Error from "./Pages/Error";
import person_1 from "./Components/person_1.png"
import person_2 from "./Components/person_2.png"
import person_3 from "./Components/person_3.png"
import person_4 from "./Components/person_4.png"
import person_5 from "./Components/person_5.png"
import person_6 from "./Components/person_6.jpg"


const App = () => {

    useEffect(() => {
        const initialProfiles = [
            {
                id: 1,
                name: "Sahil Mehta",
                age: 22,
                image: person_5,
                location: "Jaipur, India",
                latitude: 26.9124,
                longitude: -75.7873,
                contact: "sahil@gmail.com",
                interests: ["Music", "Traveling", "Coding"],
            },
            {
                id: 2,
                name: "Priyanjal Singh",
                age: 36,
                image: person_1,
                location: "London, UK",
                latitude: 51.5074,
                longitude: -0.1278,
                contact: "jane.smith@example.com",
                interests: ["Art", "Photography"],
            },
            {
                id: 3,
                name: "Sunny Singh",
                age: 41,
                image: person_2,
                location: "Dubai, UAE",
                latitude: 25.2048,
                longitude: -55.2708,
                contact: "david@gmail.com",
                interests: ["Singing", "Gardening"],
            },
            {
                id: 4,
                name: "Jenny Arora",
                age: 24,
                image: person_3,
                location: "Kerala, India",
                latitude: 10.1632,
                longitude: -76.6413,
                contact: "jenny@gmail.com",
                interests: ["Cooking", "Driving"],
            },
            {
                id: 5,
                name: "Aarav Mehta",
                age: 29,
                image: person_4,
                location: "Mumbai, India",
                latitude: 19.0760,
                longitude: 72.8777,
                contact: "aarav.mehta@gmail.com",
                interests: ["Cricket", "Bollywood Movies", "Traveling"],
            },
            {
                id: 6,
                name: "Priya Sharma",
                age: 27,
                image: person_6,
                location: "Delhi, India",
                latitude: 28.7041,
                longitude: 77.1025,
                contact: "priya.sharma@gmail.com",
                interests: ["Reading", "Yoga", "Cooking"],
            }
        ];


        localStorage.setItem("profiles", JSON.stringify(initialProfiles));
    }, []);
    

    return (
        <div className="my-app">
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;