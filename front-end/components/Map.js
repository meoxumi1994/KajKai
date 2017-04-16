import React from 'react';
import { withGoogleMap,GoogleMap } from "react-google-maps";

const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 21.0135539, lng: 105.5258113 }}>
    </GoogleMap>
));

const Map = () => (
    <div>
        <div style={{ width: 400, float: 'right', backgroundColor: 'white', height: window.innerHeight - 50 }}>
        </div>
        <div style={{ marginRight : 400 }}>
            <GettingStartedGoogleMap
                containerElement={ <div style={{ height: window.innerHeight - 50 }} /> }
                mapElement={ <div style={{ height: window.innerHeight - 50 }} /> }
            />
        </div>
    </div>
)

export default Map
