import React from 'react'

import ShowInMap from '~/containers/entity/map/ShowInMap.js'
import DisplayImage from '~/components/entity/thumnail/DisplayImage'
import { Link } from 'react-router-dom'

class IntroduceStore extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { ADDRESS, ADDRESSMAP, CATEGORY, PHONE, LIKE, ANOTHER_PEOPLE, PEOPLE, AND, THIS, BY, FOLLOW, STORE_NAME,
            PHOTOS, ABOUT, FOLLOW_US, FOLLOWED, avatarUrl, storename, coverUrl, isOwner, beFollow, onFollow, width,
            username, kind,
            address, addressMap, category, phone, likes, numlike, follows, numfollow, storeid, position, urlname } = this.props
        if(!phone || !follows)
            return <div></div>
        if(kind == 'small'){
            return(
                <div>
                    <Link to={"/"+urlname}>
                        <DisplayImage src={coverUrl} width={230} height={110}/>
                        <img style={{
                            position: 'absolute',
                            zIndex: 1,
                            marginLeft: -220,
                            marginTop: 10,
                            border: '1px solid white',}}
                            src={avatarUrl} width={60} height={60}/>
                        <div style={{
                            position: 'absolute',
                            zIndex: 1, marginTop: -40, marginLeft: 10, fontSize: 17,
                            color: 'white',
                            textShadow: '2px 2px 4px #000000',}}>
                            {storename}
                        </div>
                    </Link>
                </div>
            )
        }
        return(
            <div>
                <div className="panel panel-default"
                    style={{ margin: '0px 0px 0px 0px', padding: 10, fontSize: 13, color: '#4B4F56', width: width }}>
                    <Link to={"/"+urlname}>
                        <img style={{
                            position: 'absolute',
                            zIndex: 0,
                            marginLeft: -10,
                            marginTop: -10,
                            borderRadius: '3px 3px 0px 0px'
                        }} src={coverUrl} width={width-2} height={89}/>
                        <img style={{
                            position: 'absolute',
                            zIndex: 1,
                            border: '1px solid white',}}
                            src={avatarUrl} width={40} height={40}/>
                        <div style={{
                            position: 'absolute',
                            zIndex: 1, marginTop: 47, fontSize: 17,
                            color: 'white',
                            textShadow: '2px 2px 4px #000000',}}>
                                {storename}
                        </div>
                    </Link>
                    {(!isOwner && username ) &&
                        <div className="btn btn-default btn-sm"
                            onClick={() => onFollow()}
                            style={{
                                position: 'absolute', zIndex: 1,
                                marginLeft: width - 190, width: 170, padding: 5 }}>
                            <img src={ beFollow ? "/images/hasfollowstore.svg" : "/images/followstore.svg" } width={16} height={16}/>
                            <span style={{ marginLeft: 10,
                                color:  beFollow ? '#D0021B' : '#4B4F56',
                                fontWeight: 'bold'
                            }}>
                                { beFollow ? FOLLOWED : FOLLOW_US }
                            </span>
                        </div>
                    }
                    <div style={{ height: 85 }}>
                    </div>
                    <div><img src="/images/addressicon.svg" width={15} height={15}/>
                        <span style={{ marginLeft: 10, color: '#90949C'}}>{ADDRESS}{" : "}</span>{address}</div>
                    <div style={{ paddingTop: 5 }}><img src="/images/categoryicon.svg" width={15} height={15}/>
                        <span style={{ marginLeft: 10, color: '#90949C'}}>{CATEGORY}{" : "}</span>{category}</div>
                    <div style={{ paddingTop: 5 }}><img src="/images/phoneicon.svg" width={15} height={15}/>
                        <span style={{ marginLeft: 10, color: '#90949C'}}>{PHONE}{" : "}</span>{phone}</div>
                    <div style={{ paddingTop: 5 }}><img src="/images/kajkaiicon.svg" width={15} height={15}/>
                        <span style={{ marginLeft: 10, color: '#90949C'}}>{"https://www.kajkai.com/"}</span>{urlname}</div>
                    {/* <div style={{ paddingTop: 5 }}>
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
                    </div> */}
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
                                width={width-20} height={200}
                                position={position}
                            />
                        </div>
                    </div>
                </div>
                <div style={{ padding: 0, fontSize: 12.5 }} className="btn">
                    <Link to={"/"+urlname}>{urlname}</Link>
                </div>
                {" . "}
                <div style={{ padding: 0, fontSize: 12.5 }} className="btn">
                    <Link to={"/"+urlname+"/photo"}>{PHOTOS}</Link>
                </div>
                {" . "}
                <div style={{ padding: 0, fontSize: 12.5 }} className="btn">
                    <Link to={"/"+urlname+"/about"}>{ABOUT}</Link>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.onGetStore()
    }
}

export default IntroduceStore
