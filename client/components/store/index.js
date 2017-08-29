import React from 'react';
import { Redirect  } from 'react-router-dom';

import Bundle from '../../common/Bundle'
import loadTop from 'bundle-loader?lazy!../../containers/store/Top'
import loadAbout from 'bundle-loader?lazy!../../containers/store/About'
import loadPage from 'bundle-loader?lazy!../../containers/store/Page'
import loadPhoto from 'bundle-loader?lazy!../../containers/store/Photo'
import loadVideo from 'bundle-loader?lazy!../../containers/store/Video'
import loadSetting from 'bundle-loader?lazy!../../containers/store/Setting'
import loadPost from 'bundle-loader?lazy!../../containers/store/Post'
import loadLeft from 'bundle-loader?lazy!../../containers/store/Left'
import loadContact from 'bundle-loader?lazy!../../containers/store/Contact'
import loadActivity from 'bundle-loader?lazy!../../containers/store/Activity'
import loadStatistic from 'bundle-loader?lazy!../../containers/store/Statistic'

const Top = (props) => (
  <Bundle load={loadTop}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const About = (props) => (
  <Bundle load={loadAbout}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Page = (props) => (
  <Bundle load={loadPage}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Photo = (props) => (
  <Bundle load={loadPhoto}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Video = (props) => (
  <Bundle load={loadVideo}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Setting = (props) => (
  <Bundle load={loadSetting}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Post = (props) => (
  <Bundle load={loadPost}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Left = (props) => (
  <Bundle load={loadLeft}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Contact = (props) => (
  <Bundle load={loadContact}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Activity = (props) => (
  <Bundle load={loadActivity}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Statistic = (props) => (
  <Bundle load={loadStatistic}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)

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
                                paddingTop: 20,
                                }}>
                                <Left location={location}/>
                            </div>
                        </div>
                        <div className="col col-xs-9" style={{ padding: 0, margin: 0 }}>
                            <div style={{ marginLeft: -50 }}>
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
