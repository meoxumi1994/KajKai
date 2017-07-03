import React from 'react'

import TimeLine from '~/components/entity/draw/TimeLine'
import Link from 'react-router-dom'

const Page = ({ id, height, scrollTop, scrollLeft, sellposts, minorposts, onNeedSellPost, onNeedMinorPost,
    numlike, likes, numfollow, follows, address, addressMap, category, latitute, longitute, phone,
    LIKE, FOLLOW, ADDRESSMAP, ADDRESS, CATEGORY, PHONE, BY, ANOTHER_PEOPLE, AND, THIS, PEOPLE,
    }) => {
    let sellpost_marginTop = 0
    let minorpost_marginTop = 0
    if(this.sellpost){
        sellpost_marginTop = height - this.sellpost.getBoundingClientRect().bottom > 0
        if(this.sellpost.getBoundingClientRect().bottom - height < 780)
            onNeedSellPost()
    }
    if(this.minorpost){
        minorpost_marginTop = height - this.minorpost.getBoundingClientRect().bottom > 0
        if(this.minorpost.getBoundingClientRect().bottom - height < 780)
            onNeedMinorPost()
    }
    console.log(this.sellpost, this.minorpost)
    return (
        <div className="container-fluid">
            <div className="row">
                <div ref={ sellpost => this.sellpost = sellpost }
                    className="col col-xs-7"
                    style={{
                        height: this.sellpost_inside_height?this.sellpost_inside_height.offsetHeight: undefined,
                        margin: 0,
                        padding: 0,
                    }}
                    >
                    <div ref= { sellpost_inside => { this.sellpost_inside_height = sellpost_inside } }
                        style={{
                        position: sellpost_marginTop?'fixed':'static',
                        marginLeft: sellpost_marginTop?(-scrollLeft-24):-24,
                        marginTop: sellpost_marginTop?(-this.sellpost_inside_height.offsetHeight + height - 343):0,
                        width: 520 }}>
                        {sellposts.map((item, index) =>
                            // <div key={index} className="panel panel-default"
                            //     style={{ height: 600,margin: '10px 0px 0px 0px'}}>
                            //     123123123
                            // </div>
                            <TimeLine style={{ height: 600, margin: '10px 0px 0px 0px'}} key={index}/>
                        )}
                        <span style={{ marginTop: 10 }} id="loaderr"></span>
                    </div>
                </div>
                <div ref={ minorpost => { this.minorpost = minorpost }}
                    className="col col-xs-5"
                    style={{
                        height: this.minorpost_inside_height?this.minorpost_inside_height.offsetHeight: undefined,
                        margin: 0,
                        padding: 0,
                    }}>
                    <div ref= { minorpost_inside => { this.minorpost_inside_height = minorpost_inside } }
                        style={{
                        position: minorpost_marginTop?'fixed':'static',
                        marginLeft: minorpost_marginTop?(-scrollLeft-28):-28,
                        marginTop: minorpost_marginTop?(-this.minorpost_inside_height.offsetHeight + height - 343):0,
                        width: 410 }}>
                        <div className="panel panel-default"
                            style={{ margin: '10px 0px 0px 0px', padding: 10, fontSize: 13 }}>
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
                            </div>
                        </div>
                        {minorposts.map((intem,index) =>
                            // <div key={index} className="panel panel-default"
                            //     style={{ height: 400,margin: '10px 0px 0px 0px'}}>
                            //     123123123
                            // </div>
                            <TimeLine key={index} style={{ height: 400, width: 410, margin: '10px 0px 0px 0px'}}/>
                        )}
                        <div style={{ marginTop: 10 }} id="loaderr"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
