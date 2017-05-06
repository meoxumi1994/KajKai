import React from 'react';
import { browserHistory } from 'react-router';

import allString from '../../config/allString'
import MiddleContainer from '~/containers/profile-container/middle-container'


const ModalVerifyPhone = (props) => {
    return (
        <div>
        </div>
    )
}

const Profile = ({ auth }) => {
    if(auth == 'WHO_ING')
        return <div></div>
    return(
        <div className="container-fluid" style={{ overflow: 'scroll', height: window.innerHeight - 46 }}>
            <div className="row">
                <div className="col-xs-2 ">
                </div>
                <div className="col-xs-6 ">
                    <MiddleContainer/>
                </div>
            </div>
        </div>
    )
}

export default Profile
