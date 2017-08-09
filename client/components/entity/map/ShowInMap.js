import React from 'react'
import { Modal } from 'react-bootstrap'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { places } from "react-google-maps"

const GettingStartedGoogleMap = withGoogleMap(props => {
    const center = props.centerPosition ? {
        center : props.centerPosition
    }: undefined
    return(
        <GoogleMap
            defaultOptions={props.defaultOptions}
            ref={props.onMapLoad}
            defaultZoom={14}
            {...center}
            defaultCenter={props.defaultCenter}
            onClick={props.onMapClick}>
            {/* <SearchBox
              inputPlaceholder="Customized your placeholder"
            /> */}
            {props.marker &&
                <Marker
                    {...props.marker}
                    onRightClick={() => props.onMarkerRightClick(index)}
                />
            }
        </GoogleMap>
    )
})

class ShowInMap extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showModal: false,
            centerModal: undefined,
        }
    }
    render(){
        const { CLOSE, GET_CURRENT_POSITION, position, width, height, onChangePosition, canEdit } = this.props
        const marker = (position && position.lat) ? { position: position } : undefined
        const currentPosition = (position && position.lat) ? position : { lat: 20.969133867372143, lng: 105.86288452148438 }
        return(
            <div>
                <div className="btn" style={{ padding: 0 }}
                    onClick={() => this.setState({ showModal: true })}>
                    <div style={{ width: width }}>
                        <GettingStartedGoogleMap
                            defaultOptions={{
                                scrollwheel: false,
                                zoomControl: false,
                                crossOnDrag: false,
                                clickable: false,
                            }}
                           containerElement={
                               <div style={{ height: height }} />
                           }
                           centerPosition={currentPosition}
                           mapElement={
                               <div style={{ height: height }} />
                           }
                           onMapLoad={() => undefined}
                           onMapClick={() => undefined}
                           marker={marker}
                         />
                    </div>
                </div>
                <Modal show={this.state.showModal}>
                    <div className="modal-content" style={{ width: 600, padding: 10 }}>
                        <div style={{ width: 580 }}>
                            <GettingStartedGoogleMap
                               containerElement={
                                   <div style={{ height: 580 }} />
                               }
                               mapElement={
                                   <div style={{ height: 580 }} />
                               }
                               centerPosition={this.state.centerModal}
                               defaultCenter={currentPosition}
                               onMapLoad={() => undefined}
                               center={this.state.centerModal}
                               onMapClick={(e) => {
                                   if(canEdit){
                                       onChangePosition({
                                           lat: e.latLng.lat(),
                                           lng: e.latLng.lng(),
                                       })
                                   }
                               }}
                               marker={marker}
                             />
                        </div>
                        <div style={{ height: 40 }}>
                            <div className="btn btn-default btn-sm"
                                style={{ marginTop: 10 }}
                                onClick={() => {
                                    const that = this
                                    navigator.geolocation.getCurrentPosition((pos) => {
                                        const coords = pos.coords;
                                        that.setState({
                                            centerModal: {
                                                lat: pos.coords.latitude,
                                                lng: pos.coords.longitude,
                                            }
                                        })
                                        // console.log('that', pos.coords.latitude, pos.coords.longitude )
                                    })
                                }}>
                                {GET_CURRENT_POSITION}
                            </div>
                            <div className="btn btn-default btn-sm"
                                style={{ float: 'right', marginTop: 10 }}
                                onClick={() => this.setState({ showModal: false })}>
                                {CLOSE}
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default ShowInMap
