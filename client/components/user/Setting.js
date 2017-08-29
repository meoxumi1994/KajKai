import React from 'react'

import SettingCell from '~/containers/entity/row/SettingCell'
import { Link } from 'react-router-dom'

const Setting = (props) => {
    const { id, address, category, phone, username, position, blocks, unBlock, checkUserName,
        USER_NAME, ENTER_STORE, STORE_NAME_FAILED,
        ENTER_CATEGORY, CREATE_STORE_DESCRIPTION_4, CATEGORY_FAILED,
        ENTER_YOUR_ADDRESS, ADDRESS_DESCRIPTION, ADDRESS_FAILED,
        PHONE, ENTER_YOUR_PHONE,
        NOTE_AGE, AGE, ENTER_AGE, VERIFY_AGE,
        POSITION_IN_MAP, POSITION_FAILED,
        BLOCK, UNBLOCK,
        GENERAL,
        SECURITY,
        PASSWORD, NOTE_VERIFY_PASSWORD, NOTE_PASSWORD,
        BLOCK_DESCRIPTION, BLOCK_USER,
        SEARCH_BY_NAME,
        USER_NAME_WARNING,
        } = props
    const currentSettingType = props.location.pathname.split('/')[4]
    return(
        <div>
            <div className="container-fruid">
                <div className="row">
                    <div className="col-xs-3" style={{ padding: 10 }}>
                        <Link to={"/user/"+ id +"/setting/general"}>
                            <div className="btn"
                                style={{ borderRadius: 2, padding: 5, marginLeft: 5, width: 180, fontSize: 14,
                                    backgroundColor: (currentSettingType != 'security') ? '#C4D2E7': '#F6F7F9',
                                }}>
                                <img src={"/images/generalicon.svg"} width={20} height={20}/>
                                <span style={{ marginLeft: 10, color: '#393939' }}>{GENERAL}</span>
                            </div>
                        </Link>
                        <Link to={"/user/"+ id +"/setting/security"}>
                            <div className="btn" style={{ borderRadius: 2,  marginLeft: 5, padding: 5, width: 180, fontSize: 14,
                                    backgroundColor: (currentSettingType == 'security') ? '#C4D2E7': '#F6F7F9'
                                }}>
                                <img src={"/images/securityicon.svg"} width={20} height={20}/>
                                <span style={{ marginLeft: 10, color: '#393939' }}>{SECURITY}</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xs-9" style={{ padding: 0 }}>
                        <div style={{ width: 604, marginLeft: -5 }}>
                            {currentSettingType != 'security'?
                                <div>
                                    <SettingCell id={id} kind="username" type="user" description={USER_NAME_WARNING}
                                        onVerify={checkUserName} title={USER_NAME} placeholder={ENTER_STORE}
                                        failed={STORE_NAME_FAILED}/>
                                    <SettingCell id={id} kind="address" type="user" title={ENTER_YOUR_ADDRESS} description={ADDRESS_DESCRIPTION}
                                        placeholder={ENTER_YOUR_ADDRESS} failed={ADDRESS_FAILED}/>
                                    <SettingCell id={id} kind="phone" type="user" title={PHONE} placeholder={ENTER_YOUR_PHONE}/>
                                    <SettingCell id={id} kind="yearOfBirth" type="user" title={AGE} description={NOTE_AGE}
                                        onVerify={(age) => {
                                            return age != "" && age != undefined && (age < 1 || age > 100)
                                        }} description={VERIFY_AGE}
                                        placeholder={ENTER_AGE}/>
                                    <SettingCell id={id} kind="position" type="user" title={POSITION_IN_MAP} width={604}
                                        placeholder={ENTER_YOUR_ADDRESS} failed={ADDRESS_FAILED}/>
                                </div>
                            :
                                <div>
                                    <SettingCell id={id} kind="password" type="user" title={PASSWORD} width={740}
                                        placeholder={ENTER_YOUR_ADDRESS} failed={ADDRESS_FAILED}
                                        description={NOTE_VERIFY_PASSWORD + '. ' + NOTE_PASSWORD}/>
                                    <div className="panel panel-default" style={{ margin: 0, marginTop: 10, }}>
                                        <div style={{
                                            padding: 10,
                                            borderRadius: '3px 3px 0px 0px',
                                            fontSize: 18,
                                            backgroundColor: '#F6F7F9'
                                        }}>
                                            <img src={"/images/blockicon.svg"} width={20} height={20}/>
                                            <span style={{ marginLeft: 10 }}>{BLOCK}</span>
                                        </div>
                                        <hr style={{ margin : 0 }}/>
                                        <div style={{ padding: 10, color: '#9B9B9B'}}>
                                            {BLOCK_DESCRIPTION}
                                        </div>
                                        <hr style={{ margin: 0, borderColor: '#E9EBEE'}}/>
                                        <div style={{ padding: 10, backgroundColor: '#F6F7F9', color: '#666666'}}>
                                            <span>{BLOCK_USER}</span>
                                            <input className="form-control input-sm"
                                                placeholder={SEARCH_BY_NAME}
                                                style={{ width: '45%', fontSize: 13.5, margin: '1px 0px 0px 10px',
                                                borderRadius: 0, display: 'inline-block'}}
                                                // value={this.state.value1}
                                                // onChange={(e) => this.setState({ value: e.target.value1 })}
                                            />
                                            <div className="btn btn-default btn-sm" style={{ marginLeft: 10 }} >
                                                {BLOCK}
                                            </div>
                                        </div>
                                        <div style={{ padding: '4px 10px 10px 130px', borderRadius: '0px 0px 3.5px 3.5px',
                                            backgroundColor: '#F6F7F9' }}>
                                            {blocks && blocks.map((item) =>
                                                <div key={item.id}>
                                                    {item.username}
                                                    <div className="btn" style={{ padding: '0px 0px 0px 5px'}}
                                                        onClick={() => unBlock(item.id)}>
                                                        <a>{UNBLOCK}</a>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting
