import React from 'react'

import CreateInterest from '~/containers/entity/modal/CreateInterest'
import CellLeft from '~/components/entity/row/CellLeft'

const Left = ({ storeList, avatarUrl, username, changeLanguage, id, STORE, HOME, BASIC, CREATE_STORE, STORE_BOLD,
    CREATE_INTEREST, SETTING_BOLD }) => {
    return(
        <div style={{ width: 200 }}>
            {username && <CellLeft avatar={avatarUrl} name={username} link={"/user/"+id}/>}
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
                {BASIC}
            </div>
            <div>
                <CellLeft avatar="/images/kajkai.svg" name={HOME} link={"/"}/>
                {username && <CreateInterest/> }
            </div>
            <div style={{ marginTop: 10, marginLeft: 5, borderRadius: 2, width: 150, fontSize: 12, color: '#4B4F56'}}>
                {SETTING_BOLD}
            </div>
            <div style={{ marginLeft: 5, padding: 0, fontSize: 12.5 }} className="btn"
                onClick={()=> changeLanguage('vi')}>
                <a>Tiếng Việt</a>
            </div>
            {" . "}
            <div className="btn" style={{ fontSize: 12.5, padding: 0,}}
                onClick={()=> changeLanguage('en')}>
                <a>English</a>
            </div>
        </div>
    )
}

export default Left
