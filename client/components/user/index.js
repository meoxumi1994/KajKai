import React from 'react';
import { Redirect  } from 'react-router-dom';

import Top from '~/containers/user/Top'
import Interest from '~/containers/user/Interest'
import About from '~/containers/user/About'
import Setting from '~/containers/user/Setting'
import Store from '~/containers/user/Store'
import Post from '~/containers/user/Post'
import Left from '~/containers/user/Left'
import Contact from '~/containers/user/Contact'
import Activity from '~/containers/user/Activity'

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
        const Middle = () => {
            switch (location.pathname.split('/')[2]) {
                case undefined:
                    return <Interest/>
                case 'about':
                    return <About/>
                case 'store':
                    return <Store/>
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
