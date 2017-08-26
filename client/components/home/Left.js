import React from 'react'

import CreateInterest from '~/containers/entity/modal/CreateInterest'
import GroupInterest from '~/containers/entity/GroupInterest'
import CellLeft from '~/components/entity/row/CellLeft'
import ChangeLanguage from '~/containers/entity/row/ChangeLanguage'

const Left = ({ storeList, avatarUrl, username, changeLanguage, id, language,  STORE, HOME, BASIC, CREATE_STORE, STORE_BOLD,
    CREATE_INTEREST, SETTING_BOLD, INTEREST }) => {
    return(
        <div style={{ width: 200 }}>
            {username && <CellLeft avatar={avatarUrl} name={username} link={"/user/"+id}/>}
            <div style={{ marginTop: 10, marginLeft: 5, borderRadius: 2, width: 150, fontSize: 12, color: '#4B4F56'}}>
                {BASIC}
            </div>
            <div>
                <CellLeft avatar="/images/kajkai.svg" name={HOME} link={"/"} hover={true} disabledLink={true}/>
            </div>
            {username && <div style={{ marginTop: 10 }}>
                <div style={{ marginLeft: 5, marginBottom: 2, borderRadius: 2, width: 150, fontSize: 12, color: '#4B4F56'}}>
                    {STORE_BOLD}
                </div>
            </div>}
            {storeList && storeList.map((item, index) =>
                <div key={index}>
                    <CellLeft avatar={item.avatarUrl} name={item.storename} link={"/"+item.urlname}/>
                </div>
            )}
            {username && <CellLeft avatar="/images/createstoreicon.svg" name={CREATE_STORE} link={"/registerstore"}/>}
            <div style={{ marginTop: 10, marginLeft: 5, borderRadius: 2, width: 150, fontSize: 12, color: '#4B4F56'}}>
                {SETTING_BOLD}
            </div>
            <div style={{
                marginTop: 10,
                border: '1px solid #DFE0E4',
                width: 200,
                backgroundColor: 'white',
                borderRadius: 3,
                color: '#1D2129'
            }}>
                <div style={{ padding: 10 }}>
                    <img src="/images/interesticon.svg" width={25} height={25}/>
                    <span style={{ marginLeft: 10, fontSize: 16 }}>{INTEREST}</span>
                </div>
                <hr style={{ margin: 0}}/>
                <div>
                    <GroupInterest width={195}/>
                </div>
                <hr style={{ margin: 0}}/>
                <div style={{ padding: 5 }}>
                    <CreateInterest/>
                </div>
            </div>
            <div style={{ height: 10 }}></div>
            <ChangeLanguage/>
            <div style={{ height: 10 }}></div>
        </div>
    )
}

export default Left
