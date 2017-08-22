import React from 'react'

import SellPost from '~/containers/entity/post/SellPost'
import IntroduceStore from '~/containers/entity/post/IntroduceStore'

class Post extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { sellpostid, storeid, sellpost, commentid, introduceWidth } = this.props
        const myStoreId = storeid ? storeid : (sellpost ? sellpost.storeid : undefined);
        return(
            <div className="container-fluid" style={{ margin: 0, padding: 0, width: 940 }}>
                <div className="row" style={{ margin: 0, padding: 0 }}>
                    <div className="col col-xs-7" style={{ margin: 0, padding: 0 }}>
                        <SellPost id={sellpostid}  needGetSellPost={true} commentid={commentid}/>
                    </div>
                    <div className="col col-xs-5" style={{ padding: 0 }}>
                        <div style={{ marginLeft: -18 }}>
                            { myStoreId && <IntroduceStore storeid={myStoreId} width={introduceWidth}/> }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post
