import React from 'react'

import AddPhoto from '~/containers/entity/thumnail/AddPhoto'
import CreateInterest from '~/containers/entity/modal/CreateInterest'
import CellLeft from '~/components/entity/row/CellLeft'
import ChangeLanguage from '~/containers/entity/row/ChangeLanguage'

class Left extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { isOwner, location, avatarUrl, STORE_BOLD, storeList, CREATE_STORE, BASIC, HOME, SETTING_BOLD, changeLanguage,
            urlname, storename, id, STORE, FOLLOW, username, beFollow, onFollow,
            PAGE, ABOUT, PHOTOS, STATISTIC, SETTING,
            } = this.props
        const curPathname = location.pathname.split("/")[2]
        return(
            <div style={{ width: 190 }}>
                <div style={{ backgroundColor: 'white',
                    borderRadius: 4,
                    border: '1px solid #DFE0E4',
                    padding: 3  }}>
                    <AddPhoto
                        aspectRatio={1}
                        id={1}
                        action={{
                            type: 'UPDATE_STORE_AVATAR',
                            data: {
                                id: id,
                            }
                        }}
                        canEdit={isOwner}
                        style={{
                        src: avatarUrl,
                        width: 180,
                        height: 180,
                        isTop: false,
                    }}/>
                </div>
                <div style={{ marginLeft: 5 }}>
                    <h3 style={{
                        color: '#1D2129',
                        // textShadow: '1px 1px 4px #000000',
                    }}>{ storename }</h3>
                </div>
                <div style={{ marginTop: -2, marginLeft: 5 }}>
                    <h4 style={{
                        color: '#90949C',
                    }}>{"@" + urlname }</h4>
                </div>
                <CellLeft avatar="/images/page.svg" name={PAGE} hover={!curPathname} link={"/"+urlname}/>
                <CellLeft avatar="/images/about.svg" name={ABOUT} hover={curPathname=='about'} link={"/"+urlname+"/about"}/>
                <CellLeft avatar="/images/photo.svg" name={PHOTOS} hover={curPathname=='photo'} link={"/"+urlname+"/photo"}/>
                {isOwner &&
                    <CellLeft avatar="/images/statistic.svg" name={STATISTIC} hover={curPathname=='statistic'} link={"/"+urlname+"/statistic"}/>
                }
                {isOwner &&
                    <CellLeft avatar="/images/settingleft.svg" name={SETTING} hover={curPathname=='setting'} link={"/"+urlname+"/setting"}/>
                }
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
                <ChangeLanguage/>
            </div>
        )
    }
}

export default Left
