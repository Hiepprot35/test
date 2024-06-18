import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Map,
  Popup,
  ImageOverlay,
} from "react-leaflet";
import { LatLng, LatLngBounds } from "leaflet";
import L from "leaflet";
import { CRS } from "leaflet";
import "leaflet/dist/leaflet.css";
const App = () => {
  const toado = [21.2497, 106.0311];
  const toado2 = [21.0239, 105.6267];
  const dotRef = useRef(null);
  const bounds = new LatLngBounds(toado, toado2);

  const [opacity, setOpacity] = useState(0);
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          right: "30px",
          top: "50px",
          zIndex: "1000",
          width: "300px",
        }}
      >
        <button onClick={() => setOpacity((pre) => pre - 0.1)}>Pre</button>
        <input
          type="range"
          id="volume"
          defaultValue={0}
          value={opacity}
          onChange={(e) => setOpacity(parseFloat(e.target.value))}
          name="volume"
          step={0.1}
          min="0"
          max="1"
        />{" "}
        <button onClick={() => setOpacity((pre) => pre + 0.1)}>Plus</button>
      </div>
      <MapContainer
        center={[21.1369, 105.786]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <ImageOverlay
          url="./gg.jpg"
          bounds={bounds}
          opacity={opacity}
          zIndex={10}
        />
      </MapContainer>
    </div>
  );
};

export default App;
