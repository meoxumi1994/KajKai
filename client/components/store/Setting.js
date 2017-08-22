import React from 'react'

import SettingCell from '~/containers/entity/row/SettingCell'

const Setting = (props) => {
    const { id, address, category, phone, storename, position,
        STORE_NAME, ENTER_STORE, STORE_NAME_FAILED,
        ENTER_CATEGORY, CREATE_STORE_DESCRIPTION_4, CATEGORY_FAILED,
        ENTER_YOUR_ADDRESS, ADDRESS_DESCRIPTION, ADDRESS_FAILED,
        ENTER_YOUR_PASSWORD, PASSWORD, PASSWORD_FAILED,
        PHONE,
        AGE,
        POSITION_IN_MAP, POSITION_FAILED
        } = props
    return(
        <div>
            <SettingCell id={id} kind="storename" type="store" title={STORE_NAME} placeholder={ENTER_STORE}
                failed={STORE_NAME_FAILED}/>
            <SettingCell id={id} kind="category" type="store" title={ENTER_CATEGORY} description={CREATE_STORE_DESCRIPTION_4}
                placeholder={ENTER_CATEGORY} failed={ENTER_STORE}/>
            <SettingCell id={id} kind="address" type="store" title={ENTER_YOUR_ADDRESS} description={ADDRESS_DESCRIPTION}
                placeholder={ENTER_YOUR_ADDRESS} failed={ADDRESS_FAILED}/>
            <SettingCell id={id} kind="phone" type="store" title={PHONE}/>
            <SettingCell id={id} kind="position" type="store" title={POSITION_IN_MAP} width={840}
                placeholder={ENTER_YOUR_ADDRESS} failed={ADDRESS_FAILED}/>
        </div>
    )
}

export default Setting
