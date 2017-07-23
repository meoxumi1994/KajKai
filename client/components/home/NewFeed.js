import React from 'react'

import SellPost from '~/containers/entity/post/SellPost'

class NewFeed extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { sellposts } = this.props
        if(!sellposts)
            return <div></div>
        return(
            <div>
                {sellposts.map((item,index) =>
                    <div key={item.sellpostId}>
                        <div key={item} style={{ paddingTop: 10 }}>
                            <SellPost
                                needGetSellPost={true}
                                id={item.sellpostId}/>
                        </div>
                    </div>
                )}
            </div>
        )
    }
    componentDidMount(){
        this.props.onGetSellpost()
    }
}

export default NewFeed
