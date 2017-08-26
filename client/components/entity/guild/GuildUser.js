import React from 'react'

class GuildUser extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { GUILD_USER_1, GUILD_USER_2, GUILD_USER_3, GUILD_USER_4, WELCOME_TO_KAJKAI } = this.props
        return(
            <div style={{ paddingTop: 10 }}>
                <div className="panel panel-default" style={{width: 520, color: '#4B4F56'}}>
                    <div>
                        <div style={{ padding:10 , borderRadius: '4px 4px 0px 0px',
                            fontSize: 16, color: 'white', backgroundColor: '#BD081C'}}>
                            {WELCOME_TO_KAJKAI}
                        </div>
                        <div style={{ padding: 10 }}>
                            <div style={{ padding: 5 }}>{GUILD_USER_1}</div>
                            <div style={{ padding: 5 }}><span>{GUILD_USER_2}</span>
                            {" "}<img style={{ marginLeft: 5, marginRight: 5, }} src="/images/follow.svg" width={20} />{" "}
                            <span>{GUILD_USER_3}</span></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default GuildUser
