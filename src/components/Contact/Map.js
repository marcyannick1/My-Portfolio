import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../styles/Map.scss"

class Map extends Component {
    state = {
        lat : 48.92384338378906,
        long : 2.2841646671295166,
    };
    render() {
        return (
            <div className="leaflet">
                <MapContainer
                    center={[this.state.lat, this.state.long]}
                    zoom={5}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                    />
                    <Marker position={[this.state.lat, this.state.long]}>
                        <Popup>
                            👨🏽‍💻Marc Yannick COULIBALY <br/>3 Rue du Capitaine Bossard🏠
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        );
    }
}

export default Map;
