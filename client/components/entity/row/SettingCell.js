import React from 'react'

import VerifyPhone from '~/containers/entity/phone/VerifyPhone'
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

const checkPhone = (phone) => {
    if(!phone) return 'error'
    const isphone = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(phone)
    if( !isphone ) return 'error'
    return null
}

class SettingCell extends React.Component {
    constructor(props){
        super(props)
        this.state = { isEdit: false, value: '', value1: '', value2: '', value3: '', showModal: false,
        centerModal: undefined,}
    }
    componentDidMount(){
        this.setState({ value: this.props.value || ''})
    }
    render(){
        const { id, title, description, placeholder, onVerify, EDIT_PASSWORD,
            NEW_PASSWORD, OLD_PASSWORD, RE_PASSWORD, DONE,
            EDIT, SAVE, ADD, CONFIRM, kind, openModalPhone, width } = this.props

        let position = this.state.value
        let marker = (position && position.lat) ? { position: position } : undefined
        let currentPosition = (position && position.lat) ? position : { lat: 20.969133867372143, lng: 105.86288452148438 }
        return(
            <div className="panel panel-default" style={{ margin: 0, marginTop: 10, }}>
                <div style={{ padding: 10, borderRadius: '3px 3px 0px 0px', fontSize: 18, backgroundColor: '#F6F7F9'}}>
                    <img src={"/images/"+kind+"icon.svg"} width={20} height={20}/>
                    <span style={{ marginLeft: 10 }}>{title}</span>
                </div>
                <hr style={{ margin : 0 }}/>
                <div>
                    {description &&
                        <div style={{ padding: 10, color: '#9B9B9B'}}>
                            {description}
                        </div>
                    }
                    {kind == 'position' ?
                        <div style={{ padding: 10 }}>
                            {/* <ShowInMap position={this.state.value} width={width-22} height={500}
                                    onChangePosition={(value) => {
                                        this.setState({ value: value })
                                        this.props.onUpdate(value)
                                    }}
                                    canEdit={true}/> */}
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
                                               this.setState({
                                                   value: {
                                                       lat: e.latLng.lat(),
                                                       lng: e.latLng.lng(),
                                                   }
                                               })
                                               this.props.onUpdate({
                                                   lat: e.latLng.lat(),
                                                   lng: e.latLng.lng(),
                                               })
                                           }}
                                           marker={marker}
                                         />
                                    </div>
                                    {/* <div style={{ height: 40 }}>
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
                                    </div> */}
                        </div>
                    : kind == 'phone' ?
                        <div style={{ padding: 10 }}>
                            <div className="btn btn-default btn-sm"
                                disabled={this.state.isEdit && checkPhone(this.state.value)}
                                style={{ float: 'right', marginRight: 10 }}
                                onClick={() => {
                                        this.setState({ isEdit: !this.state.isEdit })
                                        if(this.state.isEdit){
                                            this.props.updatePhone(this.state.value)
                                            this.props.onChange('openModalPhone', true )
                                            // this.props.onUpdate(this.state.value)
                                        }
                                    }
                                }>
                                {this.state.isEdit ? CONFIRM : (this.state.value ? EDIT : ADD)}
                            </div>
                            {this.state.isEdit ?
                                <input className="form-control input-sm"
                                    placeholder={placeholder}
                                    style={{ width: '80%', fontSize: 13.5, marginTop: 1 }}
                                    value={this.state.value}
                                    onChange={(e) => this.setState({ value: e.target.value })}/>
                            :   <div style={{ padding: 6,  fontSize: 13.5 }}>
                                    { this.state.value ? this.state.value : placeholder }
                                </div>
                            }
                            <VerifyPhone
                                data={{ type: 'user', id: id }}
                                phone={this.state.value}
                                showModal={openModalPhone}
                                close={() => this.props.onChange('openModalPhone', false )}/>
                            {/* {this.state.isEdit ?
                                <input className="form-control input-sm"
                                    style={{ width: '80%', fontSize: 13.5, marginTop: 1 }}
                                    value={this.state.value}
                                    onChange={(e) => this.setState({ value: e.target.value })}/>
                            :   <div style={{ padding: 6,  fontSize: 13.5 }}>
                                    {this.state.value}
                                </div>
                            } */}
                        </div>
                    : kind=='password' ?
                        <div style={{ padding: 10 }}>
                            <div className="btn btn-default btn-sm" style={{ float: 'right', marginRight: 10 }}
                                onClick={() => {
                                        this.setState({ isEdit: !this.state.isEdit })
                                        if(this.state.isEdit)
                                            this.props.onUpdate(this.state.value)
                                    }
                                }>
                                {this.state.isEdit ? DONE : EDIT_PASSWORD }
                            </div>
                            {this.state.isEdit ?
                                <div>
                                    <input className="form-control input-sm"
                                        placeholder={OLD_PASSWORD}
                                        style={{ width: '80%', fontSize: 13.5, marginTop: 1 }}
                                        value={this.state.value1}
                                        onChange={(e) => this.setState({ value: e.target.value1 })}/>
                                    <input className="form-control input-sm"
                                        placeholder={NEW_PASSWORD}
                                        style={{ width: '80%', fontSize: 13.5, marginTop: 5 }}
                                        value={this.state.value2}
                                        onChange={(e) => this.setState({ value: e.target.value2 })}/>
                                    <input className="form-control input-sm"
                                        placeholder={RE_PASSWORD}
                                        style={{ width: '80%', fontSize: 13.5, marginTop: 5 }}
                                        value={this.state.value3}
                                        onChange={(e) => this.setState({ value: e.target.value3 })}/>
                                </div>
                            :   <div style={{ height: 40 }}>
                                </div>
                            }
                        </div>
                    :   <div style={{ padding: 10 }}>
                            <div className="btn btn-default btn-sm"
                                disabled={onVerify && onVerify(this.state.value)}
                                style={{ float: 'right', marginRight: 10,
                                }}
                                onClick={() => {
                                        if(onVerify && onVerify(this.state.value))
                                            return;
                                        this.setState({ isEdit: !this.state.isEdit })
                                        if(this.state.isEdit)
                                            this.props.onUpdate(this.state.value)
                                    }
                                }>
                                {this.state.isEdit ? SAVE : (this.state.value ? EDIT : ADD)}
                            </div>
                            {this.state.isEdit ?
                                <input className="form-control input-sm"
                                    placeholder={placeholder}
                                    style={{ width: '80%', fontSize: 13.5, marginTop: 1 }}
                                    value={this.state.value}
                                    onChange={(e) => {
                                        this.setState({ value: e.target.value })}
                                    }/>
                            :   <div style={{ padding: 6,  fontSize: 13.5 }}>
                                    { this.state.value ? (kind=='age' ? ( 1900 + (new Date()).getYear() - value ) : this.state.value) : placeholder }
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default SettingCell
