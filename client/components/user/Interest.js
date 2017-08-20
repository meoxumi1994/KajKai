import React from 'react'

import Post from '~/containers/entity/post/Post'
import GuildUser from '~/containers/entity/guild/GuildUser'

class Interest extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const { data } = this.props
        return(
            <div>
                {data && data.map((item) =>
                    <div key={item.sellpostid} style={{ marginTop: 10 }}>
                        <Post sellpostid={item.sellpostid} storeid={item.storeid}/>
                    </div>
                )}
                {(data || (data && data.length == 0)) &&
                    <GuildUser/>
                }
            </div>
        )
    }
    componentDidUpdate(){
        // if(this.props.sellposts.length>=2 && this.sellpost.getBoundingClientRect().bottom - this.props.height < 780){
        //     this.props.onNeedSellPost()
        // }
    }
}

export default Interest
