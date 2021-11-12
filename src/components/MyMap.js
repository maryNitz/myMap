import React, { useState } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";

export default function MyMap(props) {
  const [selectedMarker, setSelectedMarker] = useState(0);

  const markers = props.markers.map((e, i) => (
    <Marker
      color={i === selectedMarker ? "red" : "blue"}
      width={i === selectedMarker ? 50 : 40}
      anchor={[e.lat, e.lng]}
      onClick={() => setSelectedMarker(i)}
    />
  ));

  return (
    <div>
      <h1>{props.markers[selectedMarker].name}</h1>
      <Map
        dprs={[1, 2]}
        height={500}
        defaultCenter={[props.lat, props.lng]}
        defaultZoom={5}
      >
        <ZoomControl />
        {markers}
      </Map>
    </div>
  );
}
