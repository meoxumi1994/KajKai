import React from 'react';
import allString from '~/config/allString'
import { browserHistory } from 'react-router';

import RowInfoProfileContainer from '~/containers/profile-container/middle-container/RowInfoProfileContainer'
import RowPrivacyProfile from './RowPrivacyProfile'
import RowSecurityProfileContainer from '~/containers/profile-container/middle-container/RowSecurityProfileContainer'
import PhoneInfoContainer from '~/containers/profile-container/middle-container/PhoneInfoContainer'

class Middle extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        let { imageUrl, username, g, changeLanguage } = this.props
        return(
            <div>
                <div className="panel panel-default"
                    style={{ minWidth: 540, minheight: 700,  margin: 7}}>
                    <img src="./images/cover.png" alt="Cinque Terre" width="100%" height="180px"
                        style={{
                            borderTopRightRadius: 3,
                            borderTopLeftRadius: 3
                        }}/>
                    <div style={{
                        position: 'relative',
                        float: 'left',
                        marginLeft: 13,
                        marginTop: -100,
                        height: 140,
                    }}>
                        <div className="panel panel-default"
                            style={{ padding: 4, width: 140, height: 140,float: 'left' }}>
                            <img src={ imageUrl } alt="Cinque Terre" width="100%" height="100%"/>
                        </div>
                        <h3 style={{
                            position: 'static',
                            marginTop: 110,
                            marginLeft: 145,
                        }}>{ username }</h3>
                    </div>
                    <hr style={{ marginTop: 45, marginBottom: 0}}></hr>
                    <RowInfoProfileContainer
                        title={'USER_NAME'}
                        itemType={'username'}
                        itemId={0}
                    />
                    <RowInfoProfileContainer
                        title={'PHONE'}
                        itemType={'phone'}
                        itemId={1}
                    />
                    <RowInfoProfileContainer
                        title={'ADDRESS'}
                        itemType={'address'}
                        itemId={2}
                    />
                    <RowInfoProfileContainer
                        title={'AGE'}
                        itemType={'yearOfBirth'}
                        itemId={3}
                    />
                    <PhoneInfoContainer/>
                    <h5 style={{ padding: 8, paddingLeft: 13, margin: 0, backgroundColor: '#EEEEEE'}}><strong>Detail</strong></h5>
                    <hr style={{ margin: 0}}></hr>
                    {/* <RowInfoProfile
                        language={user.language}
                        title={g('AGE')}
                        value={user.age}
                        open={this.state.openAll[3]}
                        onSaveChange={(value) => this.onSaveChange('age',value)}
                        onCancel = {() => onCancel()}
                        onEdit = {() => onEdit(3)}
                        noteContent={g('NOTE_AGE')}
                    /> */}
                </div>
                <div className="panel panel-default"
                    style={{ minWidth: 540, margin: 7}}>
                    <div className="panel-heading">Privacy</div>
                    {/* <RowPrivacyProfile/> */}
                </div>
                <div className="panel panel-default"
                    style={{ minWidth: 540, margin: 7}}>
                    <div className="panel-heading">Security</div>
                    <RowSecurityProfileContainer
                        title={'PASSWORD'}
                        itemType={'password'}
                        itemID={4}
                    />
                </div>
                <div className="panel panel-default"
                    style={{ minWidth: 540, height: 120, margin: 7}}
                    >
                    <div style={{ marginLeft: 20}} className="btn"
                        onClick={()=> changeLanguage('VIETNAMESE')}>
                        <a>Tiếng Việt</a>
                    </div>
                    <div className="btn"
                        onClick={()=> changeLanguage('ENGLISH')}>
                        <a>English</a>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        let { username } = this.props;
        if( username == undefined){
            browserHistory.push('/register');
        }
    }
    componentDidUpdate(){
        let { username } = this.props;
        if( username == undefined){
            browserHistory.push('/register');
        }
    }
}

export default Middle
