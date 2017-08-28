import React from 'react'

import Bundle from '../../common/Bundle'
import loadLeft from 'bundle-loader?lazy!../../containers/home/Left'
import loadNewFeed from 'bundle-loader?lazy!../../containers/home/NewFeed'
import loadGuildUser from 'bundle-loader?lazy!../../containers/entity/guild/GuildUser'

const Left = (props) => (
  <Bundle load={loadLeft}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const NewFeed = (props) => (
  <Bundle load={loadNewFeed}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)
const GuildUser = (props) => (
  <Bundle load={loadGuildUser}>
    {(Comp) => (Comp
      ? <Comp {...props}/>
      : null
    )}
  </Bundle>
)

class Home extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { scrollTop, scrollLeft, height } = this.props

        return(
            <div style={{ width:  1040 }}>
                <div className="container-fluid" style={{ margin: 0, padding: 0 }}>
                    <div className="row" style={{ margin: 0, padding: 0 }}>
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
                                marginTop: this.left_marginTop?(-this.left_inside_height.offsetHeight + height - 48 ):0,
                                minHeight: height - 48,
                                paddingTop: 10,
                                }}>
                                <Left/>
                            </div>
                        </div>
                        <div ref={ newfeed => this.newfeed = newfeed }
                            style={{
                            height: this.newfeed_inside_height?this.newfeed_inside_height.offsetHeight: undefined,
                            padding: 0,
                            margin: 0 }}
                            className="col col-xs-9">
                            <div ref= { newfeed_inside => { this.newfeed_inside_height = newfeed_inside } }
                                style={{
                                // position: this.newfeed_marginTop?'fixed':'static',
                                marginLeft: this.newfeed_marginTop?(-scrollLeft):0,
                                marginTop: this.newfeed_marginTop?(-this.newfeed_inside_height.offsetHeight + height - 48):0,
                                minHeight: height - 48,
                                paddingTop: 10,
                                }}>
                                {(this.props.auth == 'WHO_SUCCESS'
                                &&
                                (this.props.location.pathname.split("/")[2] == 'getstart' ||
                                ( !this.props.data || this.props.data.length == 0 ))) &&
                                <div style={{ marginLeft: -50 }}>
                                    <GuildUser/>
                                </div> }
                                <NewFeed/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.left_marginTop = 0
        this.newfeed_marginTop = 0
        if(this.left){
            this.left_marginTop = this.props.height - this.left.getBoundingClientRect().bottom > 0
            // console.log(this.left_marginTop)
        }
        if(this.newfeed){
            this.newfeed_marginTop = this.props.height - this.newfeed.getBoundingClientRect().bottom > 0
            if(this.newfeed.getBoundingClientRect().bottom - this.props.height < 780){
                // this.props.onNeedPost()
            }
        }
    }
    componentDidUpdate(){
        this.left_marginTop = 0
        this.newfeed_marginTop = 0
        if(this.left){
            this.left_marginTop = this.props.height - this.left.getBoundingClientRect().bottom > 0
            // console.log(this.left_marginTop)
        }
        if(this.newfeed){
            this.newfeed_marginTop = this.props.height - this.newfeed.getBoundingClientRect().bottom > 0
            if(this.newfeed.getBoundingClientRect().bottom - this.props.height < 780){
                // this.props.onNeedPost()
            }
        }
    }
}

export default Home
