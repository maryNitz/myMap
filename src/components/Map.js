import React, { useState } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";

export default function MyMap(props) {
  const [selectedMarker, setSelectedMarker] = useState(0);

  const marker = props.marker.map((e, i) => (
    <Marker
      color={i === selectedMarker ? "red" : "blue"}
      width={i === selectedMarker ? 50 : 40}
      anchor={[e.lat, e.lng]}
      onClick={() => setSelectedMarker(i)}
    />
  ));

  return (
    <div>
      <h1>{props.marker[selectedMarker].name}</h1>
      <Map
        metaWheelZoom={true}
        dprs={[1, 2]}
        height={500}
        defaultCenter={[props.lat, props.lng]}
        defaultZoom={5}
      >
        <ZoomControl />
        {marker}
      </Map>
    </div>
  );
}
