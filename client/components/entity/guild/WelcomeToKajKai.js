import React from 'react'

import { Link } from 'react-router-dom'

class WelcomeToKajKai extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { isOwner, WELCOME_TO_KAJKAI, GET_START_BY_FOLLOW, GET_START, GUILD_USER_4 } = this.props
        return(
            <div>
                {isOwner ? <div style={{ width: 520, padding: 10, textAlign: 'center'}}>
                    <div>
                        <h3 style={{ color: '#333333'}}>{WELCOME_TO_KAJKAI}</h3>
                    </div>
                    <div>
                        <h3 style={{ color: '#90949C' }}>{GET_START_BY_FOLLOW}</h3>
                    </div>
                    <div style={{ marginTop: 35, }}>
                        <Link to="/home/getstart">
                            <div className="btn btn-default"
                                style={{ borderRadius: 2,
                                    padding: '10px 10px 10px 10px', backgroundColor: '#BD081C', color: 'white', borderWidth: 0 }}>
                                {GET_START}
                            </div>
                        </Link>
                    </div>
                </div> :
                <div>
                    <div style={{ padding: 10 }}>{GUILD_USER_4}</div>
                </div>
            }
            </div>

        )
    }
}

export default WelcomeToKajKai
