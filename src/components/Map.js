import React from "react"
import { Map, Marker } from "pigeon-maps"

export default function MyMap(props) {
    return (
        <Map
        dprs={[1, 2]}
        height={300}
        defaultCenter={[props.lat, props.lng]}
        defaultZoom={8}>
        <Marker width={50} anchor={[props.lat, props.lng]} />
      </Map>
    );
};
