import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../styles/Map.scss";
import { motion } from "framer-motion";

class Map extends Component {
    state = {
        lat: 48.92384338378906,
        long: 2.2841646671295166,
    };

    render() {
        const api_key = process.env.REACT_APP_STADIA_MAPS_API_KEY;
        return (
            <motion.div
                className="leaflet"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <MapContainer
                    center={[this.state.lat, this.state.long]}
                    zoom={5}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url={
                            "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png?api_key=" +
                            api_key
                        }
                    />
                    <Marker position={[this.state.lat, this.state.long]}>
                        <Popup>
                            👨🏽‍💻Marc Yannick COULIBALY <br />3 Rue du Capitaine
                            Bossard🏠
                        </Popup>
                    </Marker>
                </MapContainer>
            </motion.div>
        );
    }
}

export default Map;
