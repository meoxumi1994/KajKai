import React from 'react'

import SellPost from '~/containers/entity/post/SellPost'
import MinorPost from '~/containers/entity/post/MinorPost'
import TimeLine from '~/components/entity/draw/TimeLine'
import EditSellPost from '~/containers/entity/post/EditSellPost'
import EditMinorPost from '~/containers/entity/post/EditMinorPost'
import ShowInMap from '~/containers/entity/map/ShowInMap.js'
import Link from 'react-router-dom'

class Page extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentSellposts: false,
        }
    }
    render(){
        const { isOwner, id, height, scrollTop, scrollLeft, sellposts, minorposts,  onNeedSellPost, onNeedMinorPost,
            offsetSellPost, offsetMinorPost, showEditSellPost, showEditMinorPost, onChange, stateSellPost,
            numlike, likes, numfollow, follows, address, addressMap, category, position , phone,
            LIKE, FOLLOW, ADDRESSMAP, ADDRESS, CATEGORY, PHONE, BY, ANOTHER_PEOPLE, AND, THIS, PEOPLE,
            CREATE_SELLPOST, CREATE_MINORPOST,
        } = this.props
        return(
            <div className="container-fluid">
                <div className="row">
                    <div ref={ sellpost => this.sellpost = sellpost }
                        className="col col-xs-7"
                        style={{
                            height: this.sellpost_inside_height?this.sellpost_inside_height.offsetHeight: undefined,
                            margin: 0,
                            padding: 0,
                        }}>
                        <div ref= { sellpost_inside => { this.sellpost_inside_height = sellpost_inside } }
                            style={{
                            position: this.sellpost_marginTop?'fixed':'static',
                            marginLeft: this.sellpost_marginTop?(-scrollLeft-24):-24,
                            marginTop: this.sellpost_marginTop?(-this.sellpost_inside_height.offsetHeight + height - 343):0,
                            minHeight: height - 48,
                            paddingTop: 0,
                            width: 520 }}>
                            {isOwner &&
                                <div style={{ paddingTop: 10 }}>
                                    <div style={{
                                        borderRadius: 4,
                                        border: '1px solid #CCCCCC',
                                        boxShadow: '0px 0px 4px #CCCCCC',
                                        backgroundColor: 'white',
                                        width: 520, padding: 10,}}>
                                        <div className="btn btn-default" style={{
                                            backgroundColor: '#BD081C',
                                            color: 'white', borderWidth: 0 }}
                                            onClick={() => onChange('showEditSellPost', true)}
                                            >
                                            {CREATE_SELLPOST}
                                        </div>
                                        <EditSellPost
                                            showModal={showEditSellPost}
                                            close={() => onChange('showEditSellPost', false)}/>
                                    </div>
                                </div>
                            }
                            {sellposts.map((item, index) =>
                                <div key={item} style={{ paddingTop: 10 }}>
                                    <SellPost id={item}/>
                                </div>
                            )}
                            {offsetSellPost != -2 && <span style={{ marginTop: 10 }} id="loaderr"></span>}
                        </div>
                    </div>
                    <div ref={ minorpost => this.minorpost = minorpost }
                        className="col col-xs-5"
                        style={{
                            height: this.minorpost_inside_height?this.minorpost_inside_height.offsetHeight: undefined,
                            margin: 0,
                            padding: 0,
                        }}>
                        <div ref= { minorpost_inside => { this.minorpost_inside_height = minorpost_inside } }
                            style={{
                            position: this.minorpost_marginTop?'fixed':'static',
                            marginLeft: this.minorpost_marginTop?(-scrollLeft-28):-28,
                            marginTop: this.minorpost_marginTop?(-this.minorpost_inside_height.offsetHeight + height - 343):0,
                            minHeight: height - 48,
                            paddingTop: 10,
                            width: 410 }}>
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
                                        {/* <ShowInMap
                                            width={390} height={200}
                                            position={position}
                                        /> */}
                                    </div>
                                </div>
                            </div>
                            {/* {isOwner &&
                                <div style={{
                                    marginTop: 10,
                                    borderRadius: 4,
                                    border: '1px solid #CCCCCC',
                                    boxShadow: '0px 0px 4px #CCCCCC',
                                    backgroundColor: 'white',
                                    width: 410, padding: 10,}}>
                                    <div className="btn btn-default" style={{
                                        backgroundColor: '#BD081C',
                                        color: 'white', borderWidth: 0 }}
                                        onClick={() => onChange('showEditMinorPost', true)}>
                                        {CREATE_MINORPOST}
                                    </div>
                                    <EditMinorPost
                                        title={CREATE_MINORPOST}
                                        showModal={showEditMinorPost}
                                        close={() => onChange('showEditMinorPost', false)}/>
                                </div>
                            } */}
                            {minorposts.map((intem,index) =>
                                <TimeLine key={item} style={{ height: 400, width: 410, margin: '10px 0px 0px 0px'}}/>
                            )}
                            {offsetMinorPost != -2 && <div style={{ marginTop: 10 }} id="loaderr"></div>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidUpdate(){
        this.sellpost_marginTop = 0
        this.minorpost_marginTop = 0
        if(this.sellpost){
            this.sellpost_marginTop = this.props.height - this.sellpost.getBoundingClientRect().bottom > 0
            if(this.props.sellposts.length>=2 && this.sellpost.getBoundingClientRect().bottom - this.props.height < 780){
                this.props.onNeedSellPost()
            }
        }
        if(this.minorpost){
            this.minorpost_marginTop = this.props.height - this.minorpost.getBoundingClientRect().bottom > 0
            if(this.props.sellposts.length>=2 && this.minorpost.getBoundingClientRect().bottom - this.props.height < 780){
                this.props.onNeedMinorPost()
            }
        }
    }
    componentDidMount(){
        this.setState({ currentSellposts: this.props.sellposts })
        this.props.onNeedSellPost();
        this.props.onNeedMinorPost();
    }
}

export default Page
