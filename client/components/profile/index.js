import React from 'react';
import { Redirect } from 'react-router-dom';

import Bundle from '../../common/Bundle'
import loadLeft from 'bundle-loader?lazy!../../containers/profile/left'
import loadMiddle from 'bundle-loader?lazy!../../containers/profile/middle'
import loadRight from 'bundle-loader?lazy!../../containers/profile/right'

const Left = (props) => (
  <Bundle load={loadLeft}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Middle = (props) => (
  <Bundle load={loadMiddle}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Right = (props) => (
  <Bundle load={loadRight}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)

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
