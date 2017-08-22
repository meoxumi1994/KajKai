import React from 'react';

import RowInfo from '~/containers/profile/middle/RowInfo'
import RowPrivacy from '~/containers/profile/middle/RowPrivacy'
import RowSecurity from '~/containers/profile/middle/RowSecurity'
import PhoneInfo from '~/containers/profile/middle/PhoneInfo'
import ModalUploadAvatar from '~/containers/profile/middle/ModalUploadAvatar'
import ModalUploadCover from '~/containers/profile/middle/ModalUploadCover'

const Setting = ({ INFO, PRIVACY, SECURITY }) => {
    console.log('Setting Setting Setting Setting')
    return(
        <div style={{  width: '100%',  marginTop: 10, height: 786 }} >
            <div className="panel panel-default"
                style={{ width: 838 }}>
                <div className="panel-heading">{INFO}</div>
                <RowInfo
                    title={'USER_NAME'}
                    itemType={'username'}
                    itemId={0}
                />
                {/* <RowInfo
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
                /> */} 
                {/* <PhoneInfo/>
            </div>
            <div className="panel panel-default"
                style={{ width: 838, marginTop: 10 }}>
                <div className="panel-heading">{PRIVACY}</div>
                {/* <RowPrivacy/> */}
            </div>
            <div className="panel panel-default"
                style={{ width: 838, marginTop: 10}}>
                <div className="panel-heading">{SECURITY}</div>
                {/* <RowSecurity
                    title={'PASSWORD'}
                    itemType={'password'}
                    itemID={4}
                /> */}
            </div>
        </div>
    )
}

export default Setting
