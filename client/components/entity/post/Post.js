import React from 'react'

import SellPost from '~/containers/entity/post/SellPost'
import IntroduceStore from '~/containers/entity/post/IntroduceStore'

class Post extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { sellpostid, storeid } = this.props
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-xs-6">
                        <SellPost id={sellpostid}/>
                    </div>
                    <div className="col col-xs-6">
                        <IntroduceStore id={storeid}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post
