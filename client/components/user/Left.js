import React from 'react'

import CreateInterest from '~/containers/entity/modal/CreateInterest'
import GroupInterest from '~/containers/entity/GroupInterest'

const Left = ({ username, storeList, STORE, HOME, CREATE_STORE }) => {
    return(
        <div>
            <div style={{ paddingBottom: 10 }}>
                <div style={{ margin: 0, padding: 4, backgroundColor: 'white', borderRadius: 2, width: 150 }}>
                    {STORE}
                </div>
            </div>
            {storeList.map((item, index) =>
                <div key={index} style={{ paddingBottom: 10 }}>
                    <a href={"/"+item.urlname}>
                        <div className="btn"
                            style={{
                                textAlign: 'left',
                                display: 'inline-block',
                                margin: 0, padding: 4, backgroundColor: 'white', borderRadius: 2, width: 150 }}>
                            <img width={20} height={20} src={item.avatarUrl}/>
                            {" "}<span>{item.storename }</span>
                        </div>
                    </a>
                </div>
            )}
            <div style={{ paddingBottom: 10 }}>
                <div className="btn"
                    style={{
                        textAlign: 'left',
                        display: 'inline-block',
                        margin: 0, padding: 4, backgroundColor: 'white', borderRadius: 2, width: 150 }}>
                    <a href={"/"} style={{ fontSize: 13}}>{HOME}</a>
                </div>
            </div>
            {username &&
                <div>
                    <div style={{ paddingBottom: 10 }}>
                        <div className="btn"
                            style={{
                                textAlign: 'left',
                                display: 'inline-block',
                                margin: 0, padding: 4, backgroundColor: 'white', borderRadius: 2, width: 150 }}>
                            <a href={"/registerstore"} style={{ fontSize: 13}}>{CREATE_STORE}</a>
                        </div>
                    </div>
                    <CreateInterest/>
                    <GroupInterest/>
                </div>
            }
        </div>
    )
}

export default Left
