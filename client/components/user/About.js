import React from 'react'

import AboutCell from '~/containers/entity/row/AboutCell'

import { getTime } from '~/containers/support'

const getLongLanguage = (language) => {
    if(language == 'vi'){
        return 'Việt Nam'
    }
    if(language == 'en'){
        return 'English'
    }
    return ""
}

class About extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show : false,
        }
    }
    _onClick(){
        this.setState({ show: !this.state.show })
    }
    render(){
        const { username, email, language, address, phone, age , isOwner, position, interactive,
            USER_NAME, EMAIL, LANGUAGE, ADDRESS, PHONE, AGE, INFO_GENERAL, POSITION_IN_MAP, INTERACTION,
            TOTAL_LIKE, TOTAL_COMMENT, TOTAL_REPLY_COMMENT, TOTAL_FOLLOW, CREATE_TIME, LAST_TIME } = this.props
        return(
            <div>
                <div style={{
                    borderRadius: 4,
                    border: '1px solid #DFE0E4',
                    backgroundColor: 'white',
                    width: 788, marginTop: 10,
                    }}>
                    {this.state.show && 'hihihi'}
                    <div style={{ fontSize: 20, padding: 10, backgroundColor: '#F6F7F9', borderRadius: '5px 5px 0px 0px'}}>
                        <img src={"/images/inforicon.svg"} width={20} height={20}/>
                        <span style={{ marginLeft: 10 }}>{INFO_GENERAL}</span>
                    </div>
                    <hr style={{ margin: 0, padding: 0 }}/>
                    <AboutCell kind="username" title={USER_NAME} value={username}/>
                    <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>
                    <AboutCell kind="email" title={EMAIL} value={email}/>
                    <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>
                    <AboutCell kind="language" title={LANGUAGE} value={getLongLanguage(language)}/>
                    <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>
                    <AboutCell kind="address" title={ADDRESS} value={address}/>
                    <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>
                    <AboutCell kind="phone" title={PHONE} value={phone}/>
                    <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>
                    <AboutCell kind="age" title={AGE} value={age}/>
                    <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>
                    <AboutCell kind="position" title={POSITION_IN_MAP} value={position}/>
                </div>
                <div style={{
                    borderRadius: 4,
                    border: '1px solid #DFE0E4',
                    backgroundColor: 'white',
                    width: 788, marginTop: 10,
                    }}>
                    {this.state.show && 'hihihi'}
                    <div style={{ fontSize: 20, padding: 10, backgroundColor: '#F6F7F9', borderRadius: '5px 5px 0px 0px'}}>
                        <img src={"/images/interactiveicon.svg"} width={22} height={22}/>
                        <span style={{ marginLeft: 10 }}>{INTERACTION}</span>
                    </div>
                    <hr style={{ margin: 0, padding: 0 }}/>
                    {interactive &&
                        <div>
                            <AboutCell kind="leadercomment" title={TOTAL_COMMENT} value={interactive.numleadercomment}/>
                            <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>
                            <AboutCell kind="comment" title={TOTAL_REPLY_COMMENT} value={interactive.numcomment}/>
                            <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>
                            <AboutCell kind="like" title={TOTAL_LIKE} value={interactive.numlike}/>
                            <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>
                            <AboutCell kind="follow" title={TOTAL_FOLLOW} value={interactive.numfollow}/>
                            <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>
                            <AboutCell kind="create_time" title={CREATE_TIME} value={getTime(interactive.create_time)}/>
                            <hr style={{ margin: 0, padding: 0, borderColor: '#E9EbEE'}}/>
                            <AboutCell kind="last_time" title={LAST_TIME} value={getTime(interactive.last_time)}/>
                        </div>
                    }
                </div>
            </div>

        )
    }
}
export default About
