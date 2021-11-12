import React from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";

export default function MyMap(props) {
  return (
    <Map
      metaWheelZoom={true}
      dprs={[1, 2]}
      height={300}
      defaultCenter={[props.lat, props.lng]}
      defaultZoom={8}
    >
      <ZoomControl />
      <Marker
        onClick={() => alert(`Map is showing ${props.locationName}`)}
        color="red"
        width={50}
        anchor={[props.lat, props.lng]}
        Í
      />
    </Map>
  );
}
