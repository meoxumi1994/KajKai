import React from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import List from './List';
import StoreInMap from './StoreInMap';
import RiseUp from '~/components/entity/draw/RiseUp'

const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoaded}
        defaultZoom={props.defaultZoom}
        defaultCenter={props.defaultCenter}
        onIdle={props.onMapIdle}
        >
        {props.markers.map((marker, index) => (
            <Marker
               {...marker}
             >
               <InfoWindow position={marker.position} key={index}>
                   <div className="container-fluid" style={{width: 170, height: 10}}>
                       <div className="row">
                           <div className="col col-xs-4">
                             <RiseUp
                                 src={marker.avatarUrl}
                                 srcHas={marker.avatarUrl}
                                 width="27" height="27" number="12"/>
                           </div>
                           <div className="col col-xs-8">
                             <p>{marker.street}</p>
                             <small>{marker.lastUpdated} minutes ago</small>
                           </div>
                       </div>
                   </div>
               </InfoWindow>
             </Marker>
    ))}
    </GoogleMap>
));

class Map extends React.Component {
    constructor(props){

        super(props);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((pos) => {
            const coords = pos.coords;
            if (coords != null && coords != undefined) {
                this.props.updateCurrentLocation(coords.latitude, coords.longitude)
            }
        })
    }

    render() {
        const { markers, defaultCenter, clickMarker } = this.props.map
        let myMap
        return (
          <div>
            <GettingStartedGoogleMap
                containerElement={ <div style={{ height: window.innerHeight - 46 }} /> }
                mapElement={ <div style={{ height: window.innerHeight - 46 }} /> }
                markers={markers}
                defaultCenter={defaultCenter}
                defaultZoom={13}

                onMapLoaded={(map) => {
                    myMap = map
                }}

                onMapIdle={()=> {
                  console.log('---map is ready');
                  console.log('NorthEast ', myMap.getBounds().getNorthEast().toString());
                  console.log('SouthWest ', myMap.getBounds().getSouthWest().toString());
                  console.log('SouthWest ', myMap.getBounds().toString());
                }}
            />
          </div>
        )
    }
}

export default Map
