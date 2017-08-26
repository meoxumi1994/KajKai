import React from 'react'

import Post from '~/containers/entity/post/Post'
import GuildUser from '~/containers/entity/guild/GuildUser'
import WelcomeToKajKai from '~/containers/entity/guild/WelcomeToKajKai'

class Interest extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const { data, stateUser, stateInterest } = this.props
        return(
            <div>
                {data && data.map((item) =>
                    <div key={item.sellpostid} style={{ marginTop: 10 }}>
                        <Post sellpostid={item.sellpostid} storeid={item.storeid} introduceWidth={260}/>
                    </div>
                )}
                {((!data || (data && data.length == 0)) && stateUser == 'USER_GET_SUCCESS' && stateInterest == 'GET_INTEREST_SUCCESS') &&
                    <WelcomeToKajKai/>
                }
            </div>
        )
    }
}

export default Interest
