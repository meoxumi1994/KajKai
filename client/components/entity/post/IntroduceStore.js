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
            return <div>TimeLine </div>
        return(
            <div className="panel panel-default"
                style={{ margin: '0px 0px 0px 0px', padding: 10, fontSize: 13 }}>
                <div><span style={{ fontWeight: 'bold'}}>{ADDRESS}{" : "}</span>{address}</div>
                <div><span style={{ fontWeight: 'bold'}}>{ADDRESSMAP}{" : "}</span>{addressMap.map((item) => item+" ")}</div>
                <div><span style={{ fontWeight: 'bold'}}>{CATEGORY}{" : "}</span>{category}</div>
                <div><span style={{ fontWeight: 'bold'}}>{PHONE}{" : "}</span>{phone}</div>
                <div>
                    <span style={{ fontWeight: 'bold'}}>{LIKE}{" "}{BY}{" : "}</span>
                    {likes.map((item,index) =>
                        <div key={index} className="btn" style={{ padding: 0, fontSize: 13 }}>
                            <a>{index?", ":""}{item.username}</a>
                        </div>
                    )}
                    {likes.length? " "+AND+" ": ""}
                    {numlike - likes.length}
                    {" "}{likes.length?ANOTHER_PEOPLE:PEOPLE}
                    {" "}{LIKE}
                    {" "}{THIS}
                    <div>
                        {likes.map((item,index) =>
                            <img key={index} width={17} height={17} style={{ margin: '4px 0px 4px 4px'}} src={item.avatarUrl}/>)}
                    </div>
                </div>
                <div>
                    <span style={{ fontWeight: 'bold'}}>{LIKE}{" "}{BY}{" : "}</span>
                    {follows.map((item,index) =>
                        <div key={index} className="btn" style={{ padding: 0, fontSize: 13 }}>
                            <a>{index?", ":""}{item.username}</a>
                        </div>
                    )}
                    {follows.length? " "+AND+" ": ""}
                    {numfollow - follows.length}
                    {" "}{follows.length?ANOTHER_PEOPLE:PEOPLE}
                    {" "}{FOLLOW}
                    {" "}{THIS}
                    <div>
                        {follows.map((item,index) =>
                            <img key={index} width={17} height={17} style={{ margin: '4px 0px 4px 4px'}} src={item.avatarUrl}/>)}
                    </div>
                    <div style={{ marginLeft: -2, paddingTop: 2 }}>
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
