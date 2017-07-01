import React from 'react';
import { Redirect  } from 'react-router-dom';

import Top from '~/containers/store/Top'
import About from '~/containers/store/About'
import Page from '~/containers/store/Page'
import Photo from '~/containers/store/Photo'
import Video from '~/containers/store/Video'
import Setting from '~/containers/store/Setting'
import Post from '~/containers/store/Post'
import Left from '~/containers/store/Left'
import Contact from '~/containers/store/Contact'
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
        const Middle = () => {
            switch (location.pathname.split('/')[2]) {
                case undefined:
                    return <Page/>
                case 'about':
                    return <About/>
                case 'photo':
                    return <Photo/>
                case 'video':
                    return <Video/>
                case 'post':
                    return <Post/>
                case 'contact':
                    return <Contact/>
                case 'activity':
                    return <Activity/>
                case 'setting':
                    return <Setting/>
                default:
                    return <div></div>
            }
        }
        return(
            <div style={{ width: 1100, margin: 'auto' }}>
                <div style={{ marginLeft: 160, float: 'left', width: 940 }}>
                    <Top location={location}/>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-xs-2" style={{ padding: 0, margin: 0}}>
                            <Left/>
                        </div>
                        <div className="col col-xs-10" style={{ padding: 0, margin: 0}}>
                            <Middle/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        const { onGetStore } = this.props
        onGetStore()
    }
}

export default Store
