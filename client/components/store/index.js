import React from 'react';
import { Redirect  } from 'react-router-dom';

import Top from '~/containers/store/Top'
import Page from '~/containers/store/Page'
import Photo from '~/containers/store/Photo'
import Video from '~/containers/store/Video'
import Setting from '~/containers/store/Setting'
import Post from '~/containers/store/Post'
import Left from '~/containers/store/Left'
import Activity from '~/containers/store/Activity'

class Store extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { iswhoing, isusername, location } = this.props
        if(iswhoing)
            return <div></div>
        if(!isusername)
            return <Redirect to='/register'/>
        console.log(location.pathname.split('/')[2])
        return(
            <div style={{ width: 1100, margin: 'auto' }}>
                <div style={{ marginLeft: 160, float: 'left', width: 940 }}>
                    <Top/>
                </div>
                <Page/>
            </div>
        )
    }
    componentDidMount(){
        const { onGetStore } = this.props
        onGetStore()
    }
}

export default Store
