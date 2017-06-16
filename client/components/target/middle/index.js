import React from 'react';

import User from '~/containers/target/middle/user'
import Store from '~/containers/target/middle/store'

class Middle extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        let { avatarUrl, coverUrl, type } = this.props
        if(type == 'user')
            return <User location = {this.props.location}/>
        else if(type == 'store')
            return <Store location = {this.props.location}/>
        else return <div></div>
    }
}

export default Middle
