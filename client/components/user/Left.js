import React from 'react'

import CreateInterest from '~/containers/entity/modal/CreateInterest'
import GroupInterest from '~/containers/entity/GroupInterest'
import KeepImage from '~/containers/entity/thumnail/KeepImage'

class Left extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { username, userPhotos, storeList, address, phone,
            STORE, HOME, CREATE_STORE, SETTING_BOLD, ABOUT, PHOTOS } = this.props
        return(
            <div>
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
                    <div style={{ paddingBottom: 5 }}>
                        {userPhotos.map((item,index) => {
                            return(
                                <div key={index} style={{
                                    display: 'inline-block', padding: '4px 0px 0px 4px' }}>
                                    <KeepImage
                                        canEdit={false}
                                        type="Carousel"
                                        width={113}
                                        images={[item.url]}
                                        imagesSuggest={[item.url]}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.onGetPhoto()
    }
}

export default Left
