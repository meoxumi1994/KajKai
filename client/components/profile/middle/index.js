import React from 'react';

import RowInfo from '~/containers/profile/middle/RowInfo'
import RowPrivacy from '~/containers/profile/middle/RowPrivacy'
import RowSecurity from '~/containers/profile/middle/RowSecurity'
import PhoneInfo from '~/containers/profile/middle/PhoneInfo'
import ModalUploadAvatar from '~/containers/profile/middle/ModalUploadAvatar'
import ModalUploadCover from '~/containers/profile/middle/ModalUploadCover'

class Middle extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        let { avatarUrl, coverUrl, username, changeLanguage,
            onUpdateAvatar, onUpdateCover, INFO, PRIVACY, SECURITY, } = this.props
        return(
            <div>
                <div className="panel panel-default"
                    style={{ minWidth: 540, minheight: 700,  margin: 7}}>
                    <img src={ coverUrl } alt="Cinque Terre" width="100%" height="180px"
                        style={{
                            borderTopRightRadius: 3,
                            borderTopLeftRadius: 3
                        }}/>
                        <div className="btn btn-default btn-xs"
                            style={{ position: 'absolute', marginLeft: -37, marginTop: 5 }}
                            onClick={ () => onUpdateCover() } >
                            <span className="glyphicon glyphicon-camera" style={{ fontSize: 20 }}></span>
                        </div>
                    <div style={{
                        position: 'relative',
                        float: 'left',
                        marginLeft: 13,
                        marginTop: -100,
                        height: 140,
                    }}>
                        <div className="panel panel-default"
                            style={{ padding: 4, width: 140, height: 140,float: 'left' }}>
                            <img src={ avatarUrl } alt="Cinque Terre" width="100%" height="100%"/>
                        </div>
                        <div className="btn btn-default btn-xs"
                            style={{ position: 'absolute', marginLeft: -30, marginTop: 5 }}
                            onClick={() => onUpdateAvatar() }
                            >
                            <span className="glyphicon glyphicon-camera" style={{ fontSize: 15 }}></span>
                        </div>
                        <h3 style={{
                            position: 'static',
                            marginTop: 110,
                            marginLeft: 145,
                        }}>{ username }</h3>
                    </div>
                    <hr style={{ marginTop: 45, marginBottom: 0}}></hr>
                </div>
                <div className="panel panel-default"
                    style={{ minWidth: 540, margin: 7}}>
                    <div className="panel-heading">{INFO}</div>
                    <RowInfo
                        title={'USER_NAME'}
                        itemType={'username'}
                        itemId={0}
                    />
                    <RowInfo
                        title={'PHONE'}
                        itemType={'phone'}
                        itemId={1}
                    />
                    <RowInfo
                        title={'ADDRESS'}
                        itemType={'address'}
                        itemId={2}
                    />
                    <RowInfo
                        title={'AGE'}
                        itemType={'yearOfBirth'}
                        itemId={3}
                    />
                    <PhoneInfo/>
                </div>
                <div className="panel panel-default"
                    style={{ minWidth: 540, margin: 7}}>
                    <div className="panel-heading">{PRIVACY}</div>
                    {/* <RowPrivacyProfile/> */}
                </div>
                <div className="panel panel-default"
                    style={{ minWidth: 540, margin: 7}}>
                    <div className="panel-heading">{SECURITY}</div>
                    <RowSecurity
                        title={'PASSWORD'}
                        itemType={'password'}
                        itemID={4}
                    />
                </div>
                <div className="panel panel-default"
                    style={{ minWidth: 540, height: 120, margin: 7}}
                    >
                    <div style={{ marginLeft: 20}} className="btn"
                        onClick={()=> changeLanguage('vi')}>
                        <a>Tiếng Việt</a>
                    </div>
                    <div className="btn"
                        onClick={()=> changeLanguage('en')}>
                        <a>English</a>
                    </div>
                </div>
                <ModalUploadAvatar/>
                <ModalUploadCover/>
            </div>
        )
    }
}

export default Middle
