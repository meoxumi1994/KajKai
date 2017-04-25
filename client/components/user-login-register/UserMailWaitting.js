import React from 'react';

import allString from '../../config/allString'

class UserMailWatting extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h3>{allString.get('CHECK')}</h3>
                {allString.get('PLEASE_GO_EMAIL_TO_CHECK')}
            </div>
        )
    }
}

export default UserMailWatting;
