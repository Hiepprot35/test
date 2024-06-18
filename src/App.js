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
  const [center, setCenter] = useState(toado);
  const [zoom, setZoom] = useState(13);
  const mapRef = useRef(null);

  const toado2 = [21.0239, 105.6267];
  const dotRef = useRef(null);
  const bounds = new LatLngBounds(toado, toado2);
  const [Clicked, setClicked] = useState(true);
  const clickHandle = () => {
    setClicked(!Clicked);
  };
  const [dotPosition, setDotPosition] = useState(0);
  const [opacity,setOpacity]=useState(0)
  const pointRef = useRef();
  const scrollRef = useRef();
  const handleDrag = (event) => {
    const scrollRect = scrollRef.current.getBoundingClientRect();
    let newLeft = event.clientX - scrollRect.left;

    // Ensure the dot stays within the bounds of the scroll bar
    if (newLeft < 0) newLeft = 0;
    if (newLeft > scrollRect.width) newLeft = scrollRect.width;
    dotRef.current.style.left = `${newLeft}px`;
    console.log(newLeft);
    setDotPosition(newLeft);
    setOpacity(newLeft/300)

  };
  const handleDragStart = (event) => {
    event.dataTransfer.setDragImage(new Image(), 0, 0); // Hide the default drag image
  };
  const onDragEnd = (e) => {
    e.preventDefault();
    dotRef.current.style.left = `${dotPosition}px`;
    setOpacity(dotPosition/300)

  };
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
        <div
          ref={scrollRef}
          style={{
            position: "relative",
            width: "100%",
            height: "4px",
            backgroundColor: "red",
          }}
        >
          <span
            ref={dotRef}
            draggable
            onDragStart={handleDragStart}
            onDrag={(event) => handleDrag(event)}
            onDragEnd={(e) => onDragEnd(e)}
            style={{
              position: "absolute",
              top: "-2.5px",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "black",
            }}
          ></span>
        </div>
      </div>
      <MapContainer
        center={[21.1369,105.7860]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <ImageOverlay
          url="./gg.jpg" // Ensure correct file path and extension
          bounds={bounds}
          opacity={opacity}
          zIndex={10}
        />
      </MapContainer>
    </div>
   
  );
};

export default App;
