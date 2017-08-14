import React from 'react'

import Post from '~/containers/entity/post/Post'

class ShowDetail extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { location } = this.props
        const id = location.pathname.split('/')[2]
        return(
            <div style={{ width: 1100, margin: 'auto' }}>
                <div className="container-fluid">
                    <div className="row">
                        <div style={{ padding: 0, margin: 0 }} className="col col-xs-2">
                            {" "}
                        </div>
                        <div className="col col-xs-10" style={{ padding: 0, margin: 0}}>
                            <div style={{ paddingTop: 10 }}>
                                <Post sellpostid={id}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowDetail
