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
            <div className="container-fluid" style={{ margin: 0, padding: 0 }}>
                <div className="row" style={{ margin: 0, padding: 0, marginLeft: -23 }}>
                    <div className="col col-xs-6" style={{ margin: 0, padding: 0 }}>
                        <SellPost id={sellpostid}  needGetSellPost={true}/>
                    </div>
                    <div className="col col-xs-6" style={{ margin: 0, padding: 0, paddingLeft: 60 }}>
                            <IntroduceStore storeid={storeid}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post
