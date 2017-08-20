import React from 'react'

class GuildUser extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { isOwner, GUILD_USER_1, GUILD_USER_2, GUILD_USER_3, GUILD_USER_4 } = this.props
        return(
            <div style={{ paddingTop: 10, width: 520, color: '#90949C'}}>
                {isOwner ?
                    <div>
                        <div style={{ padding: 5 }}>{GUILD_USER_1}</div>
                        <div style={{ padding: 5 }}><span>{GUILD_USER_2}</span>{" "}<span>{GUILD_USER_3}</span></div>
                        <div style={{ paddingTop: 5 }}>
                            <img src="/images/guild_user.png" width={530}/>
                        </div>
                    </div>
                :   <div>
                        <div style={{ padding: 5 }}>{GUILD_USER_4}</div>
                    </div>
                }
            </div>
        )
    }
}

export default GuildUser
