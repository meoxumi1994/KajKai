import React from 'react';

import User from '~/containers/target/middle/User'
import Store from '~/containers/target/middle/Store'

class Middle extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log('components/Middle')
        let { avatarUrl, coverUrl, type } = this.props
        if(type == 'user')
            return <User/>
        else if(type == 'store')
            return <Store/>
        else return <div></div>
    }
}

export default Middle
