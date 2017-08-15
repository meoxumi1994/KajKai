import React from 'react'

import SellPost from '~/containers/entity/post/SellPost'
import Post from '~/containers/entity/post/Post'

class NewFeed extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { sellposts } = this.props
        console.log('NewFeed NewFeed', this.props)
        if(!sellposts)
            return <div></div>
        return(
            <div>
                {sellposts.map((item,index) => {
                    return(
                        <div key={item.sellPostId} style={{ paddingBottom: 10 }}>
                            {/* <SellPost
                                needGetSellPost={true}
                                id={item.sellPostId}/> */}
                            <Post sellpostid={item.sellPostId}
                                />
                        </div>
                    )
                })}
            </div>
        )
    }
    componentDidMount(){
        this.props.onGetSellpost()
    }
}

export default NewFeed
