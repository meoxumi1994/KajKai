import React from 'react';
import { Redirect  } from 'react-router-dom';

import Bundle from '../../common/Bundle'
import loadTop from 'bundle-loader?lazy!../../containers/user/Top'
import loadInterest from 'bundle-loader?lazy!../../containers/user/Interest'
import loadAbout from 'bundle-loader?lazy!../../containers/user/About'
import loadSetting from 'bundle-loader?lazy!../../containers/user/Setting'
import loadStore from 'bundle-loader?lazy!../../containers/user/Store'
import loadPost from 'bundle-loader?lazy!../../containers/user/Post'
import loadLeft from 'bundle-loader?lazy!../../containers/user/Left'
import loadContact from 'bundle-loader?lazy!../../containers/user/Contact'
import loadActivity from 'bundle-loader?lazy!../../containers/user/Activity'
import loadPhoto from 'bundle-loader?lazy!../../containers/user/Photo'

const Top = (props) => (
  <Bundle load={loadTop}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Interest = (props) => (
  <Bundle load={loadInterest}>
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
const Setting = (props) => (
  <Bundle load={loadSetting}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const Store = (props) => (
  <Bundle load={loadStore}>
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
const Photo = (props) => (
  <Bundle load={loadPhoto}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)

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
            <div style={{ width: 1040 }}>
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
    componentDidUpdate(){
        this.left_marginTop = 0
        if(this.left){
            this.left_marginTop = this.props.height - this.left.getBoundingClientRect().bottom > 0
        }
    }
    componentDidMount(){
        this.props.onGetUser(this.props.userid)
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.userid != this.props.userid){
            this.props.onGetUser(nextProps.userid)
        }
        return true
    }
}

export default User
