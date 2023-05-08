import React from "react";
import '../App.css';
import {
    MapContainer,
    TileLayer,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Plots from "./Plots";
import Coordinate from "./Coordinate";
import LayerManagement from "./LayerManagement";

// import "./RContext.css";
// import"../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import RightContext from "./RightContext";

const center = [-1.31366, 120.897961];

function Map() {
  return (
          
    <MapContainer
        center={center}
        zoom = {5}
        style = {{width: '100', height: '100vh'}}
    >
    
      
        {/* <LeftClick /> */}
        {/* <RightClick /> */}

        <TileLayer
        url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <LayerManagement />
        <Plots />
        <Coordinate />
    </MapContainer>
    
  );
}
export default Map;
