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
import Photo from '~/containers/user/Photo'

const Middle = ({location}) => {
    switch (location.pathname.split('/')[3]) {
        case undefined:
            return <Interest/>
        case 'about':
            return <About/>
        case 'store':
            return <Store/>
        case 'photo':
            return <Photo/>
        case 'post':
            return <Post/>
        case 'contact':
            return <Contact/>
        case 'activity':
            return <Activity/>
        case 'setting':
            return <Setting location={location}/>
        default:
            return <div></div>
    }
}

class User extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { iswhoing, isusername, id, location, store, scrollTop, scrollLeft, height } = this.props
        if(iswhoing)
            return <div></div>
        return(
            <div style={{ width: 1040, margin: 'auto' }}>
                <div style={{ float: 'left', width: 1040 }}>
                    <Top location={location}/>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div ref={ left => this.left = left }
                            style={{
                            height: this.left_inside_height?this.left_inside_height.offsetHeight: undefined,
                            padding: 0,
                            margin: 0 }}
                            className="col col-xs-3">
                            <div ref= { left_inside => { this.left_inside_height = left_inside } }
                                style={{
                                position: this.left_marginTop?'fixed':'static',
                                marginLeft: this.left_marginTop?(-scrollLeft):0,
                                marginTop: this.left_marginTop?(-this.left_inside_height.offsetHeight + height - 343):0,
                                minHeight: height - 48,
                                paddingTop: 10,
                                }}>
                                {id && <Left/>}
                            </div>
                        </div>
                        <div className="col col-xs-9" style={{ padding: 0, margin: 0}}>
                            <div style={{ marginLeft: -10 }}>
                                <Middle location={location}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentWillUpdate(){
        this.left_marginTop = 0
        if(this.left){
            this.left_marginTop = this.props.height - this.left.getBoundingClientRect().bottom > 0
        }
        this.props.onGetUser()
    }
    componentDidMount(){
        this.props.onGetUser()
    }
}

export default User
