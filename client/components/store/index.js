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
import Statistic from '~/containers/store/Statistic'

const Middle = ({id}) => {
    switch (location.pathname.split('/')[2]) {
        case undefined:
            return <Page id={id}/>
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
        case 'statistic':
            return <Statistic id={id}/>
        case 'activity':
            return <Activity/>
        case 'setting':
            return <Setting/>
        default:
            return <div></div>
    }
}

class Store extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { iswhoing, isusername, location, store, scrollTop, scrollLeft, height } = this.props
        if(iswhoing || (location.pathname.split('/')[1] != store.id && location.pathname.split('/')[1] != store.urlname ))
            return <div></div>
        const id = store.id
        return(
            <div style={{ width: 1040 }}>
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
                                marginTop: this.left_marginTop?(-this.left_inside_height.offsetHeight + height - 48):0,
                                minHeight: height - 48,
                                paddingTop: 10,
                                }}>
                                <Left location={location}/>
                            </div>
                        </div>
                        <div className="col col-xs-9" style={{ padding: 0, margin: 0 }}>
                            <div style={{ marginLeft: -60 }}>
                                <Top location={location}/>
                                <Middle id={id}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidUpdate(){
        this.left_marginTop = 0
        if(this.left){
            this.left_marginTop = this.props.height - this.left.getBoundingClientRect().bottom > 0
        }
    }
    componentDidMount(){
        const { onGetStore } = this.props
        onGetStore(this.props.storeid)
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.storeid != this.props.storeid){
            this.props.onGetStore(nextProps.storeid)
        }
        return true
    }
}

export default Store
