import React from 'react'

import SettingCell from '~/containers/entity/row/SettingCell'

const Setting = (props) => {
    const { id, address, category, phone, username, position, blocks, unBlock,
        USER_NAME, ENTER_STORE, STORE_NAME_FAILED,
        ENTER_CATEGORY, CREATE_STORE_DESCRIPTION_4, CATEGORY_FAILED,
        ENTER_YOUR_ADDRESS, ADDRESS_DESCRIPTION, ADDRESS_FAILED,
        PHONE, ENTER_YOUR_PHONE,
        NOTE_AGE, AGE, ENTER_AGE,
        POSITION_IN_MAP, POSITION_FAILED
        } = props
    console.log(props)
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
            <div className="panel panel-default" style={{ margin: 0, marginLeft: -23, marginTop: 10, }}>
                <div style={{ padding: 10, borderRadius: '3px 3px 0px 0px', fontSize: 18, backgroundColor: '#F6F7F9'}}>
                    Blocks
                </div>
                <hr style={{ margin : 0 }}/>
                <div>
                    {blocks && blocks.map((item) =>
                        <div key={item.id}>
                            {item.username}
                            <div className="btn" style={{ padding: '0px 0px 0px 5px'}}
                                onClick={() => unBlock(item.id)}>
                                <a>Unblock</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Setting
