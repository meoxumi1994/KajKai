import React from 'react'

import SellPost from '~/containers/entity/post/SellPost'

class NewFeed extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { sellposts } = this.props
        console.log(sellposts)
        if(!sellposts)
            return <div></div>
        return(
            <div>
                {sellposts.map((item,index) => {
                    return(
                        <div key={item.sellPostId} style={{ paddingBottom: 10 }}>
                            <SellPost
                                needGetSellPost={true}
                                id={item.sellPostId}/>
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
