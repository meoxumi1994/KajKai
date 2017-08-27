import React from 'react'

import CreateInterest from '~/containers/entity/modal/CreateInterest'
import GroupInterest from '~/containers/entity/GroupInterest'
import KeepImage from '~/containers/entity/thumnail/KeepImage'
import IntroduceStore from '~/containers/entity/post/IntroduceStore'
import CellLeft from '~/components/entity/row/CellLeft'
import ChangeLanguage from '~/containers/entity/row/ChangeLanguage'

class Left extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { username, userPhotos, storeList, address, phone, followstores, changeLanguage, language, isOwner,
            STORE, HOME, CREATE_STORE, SETTING_BOLD, ABOUT, PHOTOS, INTEREST, STORE_BOLD,
            HAVE_NO_PHOTO, HAVE_NO_FOLLOW_STORE, FOLLOW_STORE } = this.props
        return(
            <div style={{ paddingBottom: 10 }}>
                <div style={{
                    border: '1px solid #DFE0E4',
                    padding: 10,
                    width: 240,
                    backgroundColor: 'white',
                    borderRadius: 3,
                    color: '#1D2129'
                }}>
                    <div>
                        <img src="/images/usericon.svg" width={25} height={25}/>
                        <span style={{ marginLeft: 10, fontSize: 16 }}>{ABOUT}</span>
                    </div>
                    <hr style={{ margin: 0, marginTop: 10, borderColor: '#E9EBEE'}}/>
                    <div style={{ marginTop: 10, fontSize: 12.5 }}>
                        {username}
                        {address && <span>{" . "}{address}</span>}
                        {phone && <span>{" . "}{phone}</span>}
                    </div>
                </div>
                <div style={{ padding: '10px 10px 0px 10px'}}>
                    {isOwner && <CellLeft avatar="/images/kajkai.svg" name={HOME} link={"/"}/>}
                    {(storeList && isOwner) &&
                    <div style={{ marginLeft: 5, marginTop: 10, marginBottom: 2, borderRadius: 2, width: 150, fontSize: 12, color: '#4B4F56'}}>
                        {STORE_BOLD}
                    </div>}
                    {isOwner && <CellLeft avatar="/images/createstoreicon.svg" name={CREATE_STORE} link={"/registerstore"}/>}
                    {(storeList && isOwner) && storeList.map((item, index) =>
                        <div key={index}>
                            <CellLeft avatar={item.avatarUrl} name={item.storename} link={"/"+item.urlname}/>
                        </div>
                    )}
                </div>
                <div style={{
                    marginTop: 10,
                    border: '1px solid #DFE0E4',
                    width: 240,
                    backgroundColor: 'white',
                    borderRadius: 3,
                    color: '#1D2129'
                }}>
                    <div style={{ padding: 10 }}>
                        <img src="/images/photoicon.svg" width={25} height={25}/>
                        <span style={{ marginLeft: 10, fontSize: 16 }}>{PHOTOS}</span>
                    </div>
                    <hr style={{ margin: 0}}/>
                    <div>
                        {(userPhotos && userPhotos.length > 0 )  ?
                            <div style={{ paddingBottom: 5, paddingLeft: 1 }}>
                                {userPhotos.map((item,index) => {
                                return(
                                    <div key={index} style={{
                                        display: 'inline-block', paddingTop: 4, paddingLeft: 3 }}>
                                        <KeepImage
                                            canEdit={false}
                                            type="Carousel"
                                            width={113.4}
                                            images={[item.url]}
                                            imagesSuggest={[item.url]}/>
                                    </div>
                                )})}
                            </div>
                        :  <div style={{ padding: 10, fontSize: 12.5, color: '#90949C' }}>
                                {HAVE_NO_PHOTO}
                           </div>
                        }
                    </div>
                </div>
                <div style={{
                    marginTop: 10,
                    border: '1px solid #DFE0E4',
                    width: 240,
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
                        <GroupInterest/>
                    </div>
                    <hr style={{ margin: 0}}/>
                    <div style={{ marginLeft: 15, padding: 5 }}>
                        <CreateInterest/>
                    </div>
                </div>
                <div style={{
                    marginTop: 10,
                    border: '1px solid #DFE0E4',
                    width: 240,
                    backgroundColor: 'white',
                    borderRadius: 3,
                    color: '#1D2129'
                }}>
                    <div style={{ padding: 10 }}>
                        <img src="/images/storeicon.svg" width={25} height={25}/>
                        <span style={{ marginLeft: 10, fontSize: 16 }}>{FOLLOW_STORE}</span>
                    </div>
                    <hr style={{ margin: 0 }}/>
                    <div>
                        {(followstores && followstores.length > 0) ?
                            <div style={{ paddingTop: 5 }}>
                                {followstores.map((item,index) => {
                                    return(
                                        <div key={item+index} style={{ paddingLeft: 4 }}>
                                            <IntroduceStore storeid={item} kind='small'/>
                                        </div>
                                    )
                                })}
                            </div>
                        :  <div style={{ padding: 10, fontSize: 12.5, color: '#90949C' }}>
                                {HAVE_NO_FOLLOW_STORE}
                           </div>
                       }
                    </div>
                </div>
                <div style={{ marginTop: 10, }}>
                    <ChangeLanguage/>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.onGetPhoto()
    }
}

export default Left
