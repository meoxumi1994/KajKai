import React from 'react'

import AboutCell from '~/containers/entity/row/AboutCell'

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
        const { username, email, language, address, phone, age , isOwner, position,
            USER_NAME, EMAIL, LANGUAGE, ADDRESS, PHONE, AGE, INFO_GENERAL, POSITION_IN_MAP, INTERACTION } = this.props
        console.log(this.props)
        return(
            <div>
                <div style={{
                    borderRadius: 4,
                    border: '1px solid #CCCCCC',
                    boxShadow: '0px 0px 4px #CCCCCC',
                    backgroundColor: 'white',
                    width: 938, marginTop: 10, marginLeft: -23,
                    }}>
                    {this.state.show && 'hihihi'}
                    <div style={{ fontSize: 20, padding: 10, backgroundColor: '#F6F7F9', borderRadius: '5px 5px 0px 0px'}}>
                        <img src={"/images/infoicon.svg"} width={20} height={20}/>
                        <span style={{ marginLeft: 10 }}>{INFO_GENERAL}</span>
                    </div>
                    <hr style={{ margin: 0, padding: 0 }}/>
                    <AboutCell kind="username" title={USER_NAME} value={username}/>
                    <AboutCell kind="email" title={EMAIL} value={email}/>
                    <AboutCell kind="language" title={LANGUAGE} value={language}/>
                    <AboutCell kind="address" title={ADDRESS} value={address}/>
                    <AboutCell kind="phone" title={PHONE} value={phone}/>
                    <AboutCell kind="age" title={AGE} value={age}/>
                    <AboutCell kind="position" title={POSITION_IN_MAP} value={position}/>
                    <hr style={{ margin: 0, padding: 0 }}/>
                </div>
                <div style={{
                    borderRadius: 4,
                    border: '1px solid #CCCCCC',
                    boxShadow: '0px 0px 4px #CCCCCC',
                    backgroundColor: 'white',
                    width: 938, marginTop: 10, marginLeft: -23,
                    }}>
                    {this.state.show && 'hihihi'}
                    <div style={{ fontSize: 20, padding: 10, backgroundColor: '#F6F7F9', borderRadius: '5px 5px 0px 0px'}}>
                        <img src={"/images/interactiveicon.svg"} width={22} height={22}/>
                        <span style={{ marginLeft: 10 }}>{INTERACTION}</span>
                    </div>
                    <hr style={{ margin: 0, padding: 0 }}/>
                    <AboutCell kind="username" title={USER_NAME} value={username}/>
                    <AboutCell kind="email" title={EMAIL} value={email}/>
                    <AboutCell kind="language" title={LANGUAGE} value={language}/>
                    <AboutCell kind="address" title={ADDRESS} value={address}/>
                    <AboutCell kind="phone" title={PHONE} value={phone}/>
                    <AboutCell kind="age" title={AGE} value={age}/>
                    <AboutCell kind="position" title={POSITION_IN_MAP} value={position}/>
                    <hr style={{ margin: 0, padding: 0 }}/>
                </div>
            </div>

        )
    }
}
export default About
