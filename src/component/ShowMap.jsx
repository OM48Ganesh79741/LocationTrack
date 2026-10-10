import { useEffect, useState } from "react";
import axios from "axios";

import {

    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline

} from "react-leaflet";

import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({

    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"

});

export default function ShowMap() {

    const [locations, setLocations] = useState([]);

    useEffect(() => {

        loadLocation();

    }, []);

    const loadLocation = () => {

        axios

            .get("http://localhost:8080/location/employee/1")

            .then((res) => {

                setLocations(res.data);

            })

            .catch((err) => {

                console.log(err);

            });

    };

    if (locations.length === 0) {

        return <h2>No Location Found</h2>;

    }

    const center = [

        locations[0].latitude,

        locations[0].longitude

    ];

    const path = locations.map((item) => [

        item.latitude,

        item.longitude

    ]);

    return (

        <MapContainer

            center={center}

            zoom={16}

            style={{

                height: "100vh",

                width: "100%"

            }}

        >

            <TileLayer

                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

            />

            {

                locations.map((loc) => (

                    <Marker

                        key={loc.id}

                        position={[loc.latitude, loc.longitude]}

                    >

                        <Popup>

                            Employee ID : {loc.employeeId}

                            <br />

                            Latitude : {loc.latitude}

                            <br />

                            Longitude : {loc.longitude}

                            <br />

                            Time : {loc.createdAt}

                        </Popup>

                    </Marker>

                ))

            }

            <Polyline positions={path} />

        </MapContainer>

    );

}