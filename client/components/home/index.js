import React from 'react'

import Left from '~/containers/home/Left'
import NewFeed from '~/containers/home/NewFeed'

class Home extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { scrollTop, scrollLeft, height } = this.props
        return(
            <div style={{ width: 1100, margin: 'auto' }}>
                <div className="container-fluid">
                    <div className="row">
                        <div ref={ left => this.left = left }
                            style={{
                            height: this.left_inside_height?this.left_inside_height.offsetHeight: undefined,
                            padding: 0,
                            margin: 0 }}
                            className="col col-xs-2">
                            <div ref= { left_inside => { this.left_inside_height = left_inside } }
                                style={{
                                position: this.left_marginTop?'fixed':'static',
                                marginLeft: this.left_marginTop?(-scrollLeft):0,
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
                            className="col col-xs-10">
                            <div ref= { newfeed_inside => { this.newfeed_inside_height = newfeed_inside } }
                                style={{
                                position: this.newfeed_marginTop?'fixed':'static',
                                marginLeft: this.newfeed_marginTop?(-scrollLeft):0,
                                minHeight: height - 48,
                                paddingTop: 10,
                                }}>
                                <NewFeed/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidUpdate(){
        this.left_marginTop = 0
        this.newfeed_marginTop = 0
        if(this.left){
            this.left_marginTop = this.props.height - this.left.getBoundingClientRect().bottom > 0
        }
        if(this.newfeed){
            this.newfeed_marginTop = this.props.height - this.newfeed.getBoundingClientRect().bottom > 0
            if(this.newfeed.getBoundingClientRect().bottom - this.props.height < 780){
                this.props.onNeedPost()
            }
        }
    }
}

export default Home
