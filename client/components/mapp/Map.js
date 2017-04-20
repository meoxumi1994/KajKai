import React from 'react';
import { withGoogleMap,GoogleMap } from "react-google-maps";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import List from './List';
import StoreInMap from './StoreInMap';

const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 21.0135539, lng: 105.5258113 }}>
    </GoogleMap>
));

class Map extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isList : true
        }
    }
    changeScreenLeft(){
        this.setState({
            isList : !this.state.isList
        })
    }
    render() {
        return (
            <div>
                <div style={{ width: 400, float: 'left', backgroundColor: 'white' , height: window.innerHeight - 46, overflow: 'scroll'}}>
                    { this.state.isList ? <List changeScreenLeft = {this.changeScreenLeft.bind(this)}/>
                    : <StoreInMap changeScreenLeft = {this.changeScreenLeft.bind(this)}/> }
                </div>
                <div style={{ marginLeft : 380 }}>
                    <GettingStartedGoogleMap
                        containerElement={ <div style={{ height: window.innerHeight - 46 }} /> }
                        mapElement={ <div style={{ height: window.innerHeight - 46 }} /> }
                    />
                </div>
            </div>
        )
    }
}

export default Map
