import React from 'react'

import { Modal } from 'react-bootstrap'
import CellLeft from '~/components/entity/row/CellLeft'
import { withGoogleMap, GoogleMap, Marker, GoogleMapLoader } from "react-google-maps";
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

class Cell extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const { name, onClick, style } = this.props
        return(
            <li style={{
                borderTop: this.state.hover?'1px solid #282828':'1px solid transparent',
                borderBottom: this.state.hover?'1px solid #282828':'1px solid transparent',
                backgroundColor: this.state.hover?'#3B5998':'transparent' }} >
                <div className="btn"
                    style={{ width: '100%', padding: '0px 10px 0px 10px', display: 'inline-block', textAlign: 'left' }}
                    onClick={() => onClick()}
                    onMouseOver={() => this.setState({ hover: true })}
                    onMouseLeave={() => this.setState({ hover: false })}>
                    <div style={{
                        color: this.state.hover?'white':'black',
                        ...style
                    }}>
                        {name}
                    </div>
                </div>
            </li>
        )
    }
}

class CreateInterest extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            centerModal: undefined,
        }
    }
    render(){
        const { CREATE_INTEREST, CLOSE, DONE, onChange, showModal, position, categories,
            CHOOSE_YOUR_INTEREST, CHOOSE_YOUR_LOCATION, GET_CURRENT_POSITION,
            firstCategory, secondCategory, onCreateInterest } = this.props

        const marker = (position && position.lat) ? { position: position } : undefined
        const currentPosition = (position && position.lat) ? position : { lat: 20.969133867372143, lng: 105.86288452148438 }
        return(
            <div>
                <CellLeft avatar="/images/interesticon.svg"
                    onClick={() => onChange('showModal', true)}
                    name={CREATE_INTEREST} disabledLink={true}/>
                <Modal show={showModal} onHide={() => onChange('showModal', false )}>
                    <div style={{ padding: 10, borderRadius: '4px 4px 0px 0px',
                        fontSize: 16, fontWeight: 600, backgroundColor: '#DC6E30', color: 'white'}}>
                        {CREATE_INTEREST}
                    </div>
                    <hr style={{ margin: 0 }}/>
                    <div style={{ padding: 10 }}>
                        {CHOOSE_YOUR_INTEREST}
                    </div>
                    {/* <div style={{ padding: 10 }}>
                        <div className="btn btn-default btn-xs" style={{ marginTop: 5, width: 300 , fontSize: 12.5 }}
                            onClick={() => {
                                setTimeout(() => {
                                    onChange('showDropDown', true)
                                },1)
                            }}>
                            {chooseCategory || 'choose your categories'}
                        </div>
                    </div> */}
                    <div className="input-group" style={{ marginLeft: 10 }}>
                      <div className="input-group-btn">
                        <div className="btn btn-default btn-sm dropdown-toggle"
                            style={{ borderRadius: '2px 0px 0px 2px', borderWidth: 1, backgroundColor: '#F6F7F9'}}
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {firstCategory ? firstCategory.name : 'Choose Your Original Category'}{" "}
                            <span className="caret"></span>
                        </div>
                        <ul className="dropdown-menu">
                            {categories.map((item) =>
                                <div key={item.id}>
                                    <Cell {...item} onClick={() => {
                                        onChange('firstCategory', item )
                                        onChange('secondCategory', undefined )
                                    }}/>
                                </div>
                            )}
                        </ul>
                      </div>
                    </div>
                    {firstCategory && <div className="input-group" style={{ marginLeft: 10, marginTop: 10 }}>
                      <div className="input-group-btn">
                        <div className="btn btn-default btn-sm dropdown-toggle"
                            style={{ borderRadius: '2px 0px 0px 2px', borderWidth: 1, backgroundColor: '#F6F7F9'}}
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {secondCategory ? secondCategory.name : 'Choose Your Detail Category'}{" "}
                            <span className="caret"></span>
                        </div>
                        <ul className="dropdown-menu">
                            {firstCategory.secondCategories.map((item) =>
                                <div key={item.id}>
                                    <Cell {...item} onClick={() => onChange('secondCategory', item )}/>
                                </div>
                            )}
                        </ul>
                      </div>
                    </div>}
                    <div style={{ padding: 10 }}>
                        {CHOOSE_YOUR_LOCATION}
                    </div>
                    <div style={{ padding: '0px 10px 10px 10px' }}>
                        {/* <ShowInMap position={position} width={576} height={400}
                            onChangePosition={(value) => {
                                onChange('position',value)
                            }}
                            canEdit={true}/> */}
                            <div style={{ width: 580 }}>
                                <GettingStartedGoogleMap
                                   containerElement={
                                       <div style={{ height: 400 }} />
                                   }
                                   mapElement={
                                       <div style={{ height: 400 }} />
                                   }
                                   centerPosition={this.state.centerModal}
                                   defaultCenter={currentPosition}
                                   onMapLoad={() => undefined}
                                   center={this.state.centerModal}
                                   onMapClick={(e) => {
                                       onChange('position',{
                                           lat: e.latLng.lat(),
                                           lng: e.latLng.lng(),
                                       })
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
                            </div>
                    </div>
                    <hr style={{ margin: 0 }}/>
                    <div style={{ padding: 10, height: 50 }}>
                        <div className="btn btn-default btn-sm" style={{ float: 'right'}}
                            onClick={() => onChange('showModal', false)}>
                            {CLOSE}
                        </div>
                        <div className="btn btn-default btn-sm" style={{
                            float: 'right', color: 'white', borderWidth: 0,
                            backgroundColor: '#BD081C', marginRight: 10, }}
                            disabled={!(secondCategory && position && position.lat)}
                            onClick={() => {
                                if(secondCategory && position && position.lat)
                                    onCreateInterest()
                            }}>
                            {DONE}
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default CreateInterest
