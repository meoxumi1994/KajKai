import { Modal, Button } from 'react-bootstrap';
import { withGoogleMap,GoogleMap,Marker,SearchBox,Circle } from "react-google-maps";
import _ from "lodash";

import { default as React,Component } from "react";

import Helmet from "react-helmet";

const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={14}
        defaultCenter={{ lat: 21.0135539, lng: 105.5258113 }}
        onClick={props.onMapClick}>
        {props.markers.map(marker => (
            <Marker {...marker} onRightClick={() => props.onMarkerRightClick(marker)}/>))
        }
        {props.circles.map(circle => (
            <Circle {...circle} />))
        }
    </GoogleMap>
));

const EZGoogleMap = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={14}
        defaultCenter={{ lat: 21.0135539, lng: 105.5258113 }}>
    </GoogleMap>
));

export default class MapModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            markers: [],
            circles: []
        };
    }
    close() {
        this.props.CloseMap();
    }
    handleMapLoad(map) {
        this._mapComponent = map;
        if (map) {
            console.log(map.getZoom());
        }
    }
    handleMapClick(event) {
        const nextMarkers = [
            ...this.state.markers,
            {
                position: event.latLng,
                defaultAnimation: 2,
                key: Date.now(),
            }
        ];
        const nextCircles = [
            ...this.state.circles,
            {
                position: event.latLng,
                defaultAnimation: 2,
                key: Date.now()
            }
        ];
        this.setState({
            markers: nextMarkers,
            circles: nextCircles
        });
    }
    handleMarkerRightClick(targetMarker) {
         const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
         this.setState({ markers: nextMarkers });
    }
    render(){
        return(
            <div>
                <Modal show={this.props.showInMapModal} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{height: '400px'}}>
                            <Helmet title="Getting Started"/>
                            <GettingStartedGoogleMap
                                containerElement={ <div style={{ height: '100%' }} /> }
                                mapElement={ <div style={{ height: '100%' }} /> }
                                onMapLoad={ this.handleMapLoad.bind(this) }
                                onMapClick={ this.handleMapClick.bind(this) }
                                markers={ this.state.markers }
                                circles={ this.state.circles }
                                onMarkerRightClick={this.handleMarkerRightClick.bind(this)}/>
                        </div>
                    </Modal.Body>
                    <Modal.Body>
                        <div style={{height: '400px'}}>
                            <Helmet title="Getting Started"/>
                            <EZGoogleMap
                                containerElement={ <div style={{ height: '100%' }} /> }
                                mapElement={ <div style={{ height: '100%' }} /> }>
                            </EZGoogleMap>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
