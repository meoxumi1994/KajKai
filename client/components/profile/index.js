import React from 'react';
import { Redirect } from 'react-router-dom';

import Left from '~/containers/profile/left'
import Middle from '~/containers/profile/middle'
import Right from '~/containers/profile/right'

const Profile = ({ iswhoing, isusername}) => {
    if(iswhoing)
        return <div></div>
    if(!isusername)
        return <Redirect to='/register'/>
    return(
        <div className="container-fluid" style={{ overflow: 'scroll', height: window.innerHeight - 46 }}>
            <div className="row">
                <div className="col-xs-2 " style={{ padding: 0, margin: 0}}>
                    <Left/>
                </div>
                <div className="col-xs-6 " style={{ padding: 0, margin: 0}}>
                    <Middle/>
                </div>
                <div className="col-xs-4" style={{ padding: 0, margin: 0}}>
                    <Right/>
                </div>
            </div>
        </div>
    )
}

export default Profile
