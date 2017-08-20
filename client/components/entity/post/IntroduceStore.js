import React from 'react'

import ShowInMap from '~/containers/entity/map/ShowInMap.js'

class IntroduceStore extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { ADDRESS, ADDRESSMAP, CATEGORY, PHONE, LIKE, ANOTHER_PEOPLE, PEOPLE, AND, THIS, BY, FOLLOW,
            address, addressMap, category, phone, likes, numlike, follows, numfollow, storeid, position } = this.props
        if(!phone)
            return <div></div>
        return(
            <div className="panel panel-default"
                style={{ margin: '0px 0px 0px 0px', padding: 10, fontSize: 13, color: '#4B4F56'}}>
                <div><img src="/images/addressicon.svg" width={15} height={15}/>
                    <span style={{ marginLeft: 10, color: '#90949C'}}>{ADDRESS}{" : "}</span>{address}</div>
                <div style={{ paddingTop: 5 }}><img src="/images/categoryicon.svg" width={15} height={15}/>
                    <span style={{ marginLeft: 10, color: '#90949C'}}>{CATEGORY}{" : "}</span>{category}</div>
                <div style={{ paddingTop: 5 }}><img src="/images/phoneicon.svg" width={15} height={15}/>
                    <span style={{ marginLeft: 10, color: '#90949C'}}>{PHONE}{" : "}</span>{phone}</div>
                <div style={{ paddingTop: 5 }}>
                    <img src="/images/likeicon.svg" width={15} height={15}/>
                    <span style={{ marginLeft: 10, color: '#90949C'}}>{LIKE}{" "}{BY}{" : "}</span>
                    {likes.map((item,index) =>
                        <div key={index} className="btn" style={{ padding: 0, fontSize: 13 }}>
                            <a>{index?", ":""}{item.username}</a>
                        </div>
                    )}
                    {(likes.length == 0 || (likes.length>0 && numlike - likes.length>0)) &&
                        <span>
                            {likes.length? " "+AND+" ": ""}
                            {numlike - likes.length}
                            {" "}{likes.length?ANOTHER_PEOPLE:PEOPLE}
                        </span>
                    }
                    <div>
                        {likes.map((item,index) =>
                            <img key={index} width={15} height={15} style={{ margin: '4px 0px 4px 4px'}} src={item.avatarUrl}/>)}
                    </div>
                </div>
                <div style={{ paddingTop: 5 }}>
                    <img src="/images/followicon.svg" width={15} height={15}/>
                    <span style={{ marginLeft: 10, color: '#90949C'}}>{FOLLOW}{" "}{BY}{" : "}</span>
                    {follows.map((item,index) =>
                        <div key={index} className="btn" style={{ padding: 0, fontSize: 13 }}>
                            <a>{index?", ":""}{item.username}</a>
                        </div>
                    )}
                    {(follows.length == 0 || (follows.length>0 && numfollow - follows.length>0)) &&
                        <span>
                            {follows.length? " "+AND+" ": ""}
                            {numfollow - follows.length}
                            {" "}{follows.length?ANOTHER_PEOPLE:PEOPLE}
                        </span>
                    }
                    <div style={{ marginLeft: 27}}>
                        {follows.map((item,index) =>
                            <img key={index} width={15} height={15} style={{ margin: '4px 4px 4px 0px'}} src={item.avatarUrl}/>)}
                    </div>
                    <div style={{ paddingTop: 5 }}><img src="/images/positionicon.svg" width={15} height={15}/>
                        <span style={{ marginLeft: 10, color: '#90949C'}}>{ADDRESSMAP}{" : "}</span>{addressMap.map((item) => item+" ")}</div>
                    <div style={{ marginTop: 2, marginLeft: -2, paddingTop: 5 }}>
                        <ShowInMap
                            width={390} height={200}
                            position={position}
                        />
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.onGetStore()
    }
}

export default IntroduceStore
