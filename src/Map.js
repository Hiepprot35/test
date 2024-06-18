import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps"
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
const Map = () => {
  return (
    <div>
      <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
      </GoogleMap>
    </div>
  );
}

export default withScriptjs(withGoogleMap(Map));


