import React from 'react'

import SettingCell from '~/containers/entity/row/SettingCell'

const Setting = (props) => {
    const { id, address, category, phone, username, position,
        USER_NAME, ENTER_STORE, STORE_NAME_FAILED,
        ENTER_CATEGORY, CREATE_STORE_DESCRIPTION_4, CATEGORY_FAILED,
        ENTER_YOUR_ADDRESS, ADDRESS_DESCRIPTION, ADDRESS_FAILED,
        PHONE, ENTER_YOUR_PHONE,
        NOTE_AGE, AGE, ENTER_AGE,
        POSITION_IN_MAP, POSITION_FAILED
        } = props
    console.log('Setting',props)
    return(
        <div>
            <SettingCell id={id} kind="username" type="user" title={USER_NAME} placeholder={ENTER_STORE}
                failed={STORE_NAME_FAILED}/>
            <SettingCell id={id} kind="address" type="user" title={ENTER_YOUR_ADDRESS} description={ADDRESS_DESCRIPTION}
                placeholder={ENTER_YOUR_ADDRESS} failed={ADDRESS_FAILED}/>
            <SettingCell id={id} kind="phone" type="user" title={PHONE} placeholder={ENTER_YOUR_PHONE}/>
            <SettingCell id={id} kind="age" type="user" title={AGE} description={NOTE_AGE}
                placeholder={ENTER_AGE}/>
            <SettingCell id={id} kind="position" type="user" title={POSITION_IN_MAP}
                placeholder={ENTER_YOUR_ADDRESS} failed={ADDRESS_FAILED}/>
            <div className="" style={{ }}>

            </div>
        </div>
    )
}

export default Setting
