import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LocationTracker() {

    const navigate = useNavigate();

    const employeeId = 1;

    const sendLocation = () => {

        if (!navigator.geolocation) {

            alert("Geolocation is not supported.");

            return;

        }

        navigator.geolocation.getCurrentPosition(

            async (position) => {

                const data = {

                    employeeId: employeeId,

                    latitude: position.coords.latitude,

                    longitude: position.coords.longitude

                };

                console.log(data);

                try {

                    await axios.post(
                        "http://localhost:8080/location/save",
                        data
                    );

                    console.log("Location Saved");

                } catch (e) {

                    console.log(e);

                }

            },

            (error) => {

                if (error.code === 1) {

                    alert("Please Allow Location Permission");

                } else {

                    console.log(error);

                }

            },

            {

                enableHighAccuracy: true,

                timeout: 10000,

                maximumAge: 0

            }

        );

    };

    useEffect(() => {

        sendLocation();

        const interval = setInterval(() => {

            sendLocation();

        }, 1000); // 3 Minutes

        return () => clearInterval(interval);

    }, []);

    return (

        <div
            style={{
                textAlign: "center",
                marginTop: "50px"
            }}
        >

            <h2>Employee Location Tracker</h2>

            <button

                onClick={() => navigate("/map")}

                style={{
                    padding: 10,
                    fontSize: 18
                }}

            >

                Show Map

            </button>

        </div>

    );

}