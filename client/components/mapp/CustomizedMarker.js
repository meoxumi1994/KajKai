import React from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import RiseUp from '~/components/entity/draw/RiseUp'

const CustomizedMarker = ({marker}) => {
  return (
    <InfoWindow position={marker.position}>
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
  )
}

export default CustomizedMarker
