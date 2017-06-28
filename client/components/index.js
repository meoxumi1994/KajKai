import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Modal } from 'react-bootstrap'

import Cropper from 'react-cropper';
import Cropperjs from 'cropperjs'

import App from '~/containers/App'
import Webcam from 'react-webcam';
import KeepImage from '~/containers/entity/thumnail/KeepImage'
import AddPhoto from '~/containers/entity/thumnail/AddPhoto'
import LikeShareComment from '~/containers/entity/row/LikeShareComment'

class Comp extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const listpost = []
        return(
            <div style={{ height: '100%'}}>
                <div style={{ position: 'fixed', right: 0, top: 0, width: '100%', backgroundColor: 'blue', height: 48}}>
                </div>
                <div ref={ (scroll) => this.scroll = scroll }
                    onScroll={(e) => console.log('onScroll',
                    this.scroll.scrollTop,
                    this.sellpost.getBoundingClientRect().bottom - this.scroll.clientHeight - 48 )}
                    style={{ height: 'calc(100% - 48px)', backgroundColor: 'red'}}>
                    <div style={{ position: 'fixed',right: 0, top: 48, height: '100%', width: 280}}>

                    </div>
                    <div style={{ marginRight: 280}}>
                        <div style={{ width: 1100, margin: 'auto', backgroundColor: 'yellow'}}>
                            <div>
                                <div style={{ marginLeft: 170, float: 'left', width: 880}}>
                                    <div classNameName="panel panel-default" style={{ height: 300, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                </div>
                            </div>
                            <div classNameName="row">
                                <div classNameName="col col-xs-2">
                                    123123123
                                </div>
                                <div ref={ sellpost => this.sellpost = sellpost}
                                    classNameName="col col-xs-5">
                                    <div style={{ position: 'fixed' }}>
                                        <div classNameName="panel panel-default" style={{ height: 800,margin: '10px 0px 0px 0px'}}>
                                            123123123
                                        </div>
                                        <div
                                            classNameName="panel panel-default" style={{ height: 800 ,margin: '10px 0px 0px 0px'}}>
                                            123123123
                                        </div>
                                        <div classNameName="panel panel-default" style={{ height: 800,margin: '10px 0px 0px 0px'}}>
                                            123123123
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col col-xs-5">
                                    <div classNameName="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                    <div classNameName="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                    <div classNameName="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                    <div classNameName="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                    <div classNameName="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                    <div classNameName="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                    <div classNameName="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const Components = () => (
    <BrowserRouter>
        <div>
            <Route path="*" component={App}/>
        </div>
    </BrowserRouter>
)

const Compp = ({}) => (
    <div>
        {/* <Carousel key={'123'} style={{ width: 260, height: 260 }}
            images={["/images/flower001.jpg", "/images/flower002.jpg", "/images/flower004.jpg"]}
            onClick={() => console.log('onClick')}
            textChange="Add photo"
            onedit={true}/> */}

        {/* <Camera style={{ width: 500, height: 170 }}
            src="/images/garden.png"
            onClick={() => console.log('onClick')}
            textChange="Add photo"
            isTop={true}
        /> */}
        {/* <AddPhoto/> */}

        {/* <Croppie
            DESCRIPTION={'scroll to zoom in and zoom out'}
            TITLE="Upload Photo"
            src="/images/flower005.jpg"
            style={{ width: 780, height: 440 }}
            btnstyle={{
                width: 380,
                height: 110,
                fontSize: 17,
            }}
        /> */}
        {/* <KeepImage
            type={'GroupImage'} // GroupImage || Carousel
            images={["/images/flower001.jpg",
            "/images/garden.png",
            "/images/flower001.jpg", "/images/flower002.jpg",
            "/images/flower004.jpg",
            "/images/i love you.jpg"
            ]}
            imagesSuggest={[
                "/images/flower001.jpg", "/images/flower002.jpg", "/images/flower004.jpg",
                "/images/flower001.jpg", "/images/flower002.jpg", "/images/flower004.jpg",
                "/images/flower001.jpg", "/images/flower002.jpg", "/images/flower004.jpg",
                "/images/flower001.jpg", "/images/flower002.jpg", "/images/flower004.jpg",
                "/images/flower001.jpg", "/images/flower002.jpg",
                "/images/flower001.jpg", "/images/flower002.jpg", "/images/flower004.jpg",
            ]}
            canEdit={true}
        /> */}

        {/* <GroupImage
            EDIT={'Edit'}
            canEdit={true}
            width={520}
            height={360}
            images={[
                "/images/flower001.jpg",
                "/images/garden.png",
                "/images/i love you.jpg"
                ]}/> */}
    </div>
)

class LikeGroup extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { typeLikes, content, size } = this.props
        return(
            <div style={{ fontSize: 12.5, color: '#365899'}}>
                {typeLikes.map((item, index) =>
                    <div key={index}className="btn"
                        style={{
                            position: 'absolute',
                            zIndex: 6-index,
                            padding: 0}}>
                        <img src={"/images/"+item+".svg"}
                            style={{
                                marginLeft: index*size*3/4 - 2,
                                width: size, height: size }}
                        />
                    </div>
                )}
                <div className="btn" style={{ fontSize: 12.5,
                    marginTop: 3,
                    marginLeft: (typeLikes.length*size*3/4)+7, padding: 0}}>
                    <a style={{ color: '#365899'}}>{content}</a>
                </div>

                {/* <div style={{ marginLeft: 24, marginTop: -18 }}>
                    {names && names.map((item,index) => {
                        return(
                            <span key={index}>
                                {' '}
                                {item}
                                {(index == names.length - 1)?' ':''}
                                {(index == names.length - 1)?AND:','}
                            </span>
                        )
                    })}
                    {' '}
                    {other}{' '}
                    {(other && names) && OTHER}
                </div> */}
            </div>
        )
    }
}

class Tooltip extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { contents } = this.props
        return(
            <div style={{
                borderRadius: 2.5,
                padding: '5px 10px 5px 10px',
                backgroundColor: '#282828',
                color: 'white',
                position: 'absolute',
                marginLeft: -10,
                marginTop: -(16.8*contents.length+35),
                fontSize: 12.5,
            }}>
                {contents.map((item,index) =>
                    <div key={index}>{item}</div>
                )}
                <img style={{
                        position: 'absolute',
                        left: 7,
                        bot: 0,
                    }}
                    width={18}
                    height={9}
                    src="/images/arrowdown.svg"
                />
            </div>
        )
    }
}

class RowDropDown extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hover: false
        }
    }
    render(){
        const { item } = this.props
        if(item == 'hr')
            return <hr style={{ margin: 5 }}/>
        return(
            <div
                onMouseOver={() => this.setState({ hover: true})}
                onMouseLeave={() => this.setState({ hover: false })}
                style={{
                    borderTop: this.state.hover?'1px solid #282828':'1px solid white',
                    borderBottom: this.state.hover?'1px solid #282828':'1px solid white',
                    backgroundColor: this.state.hover?'#3B5998':'white',
                    color: this.state.hover?'white':'black',
                    padding: '5px 10px 5px 10px',
                }}>
                {item}
            </div>
        )
    }
}

class DropDown extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hover: {}
        }
    }
    render(){
        const { contents, width, onClick } = this.props
        return(
            <div style={{
                borderRadius: 2.5,
                border: '1px solid #B2B2B2',
                boxShadow: '0px 0px 4px #B2B2B2',
                padding: '5px 0px 5px 0px',
                backgroundColor: 'white',
                position: 'absolute',
                width: width,
                marginLeft: -width + 16,
                marginTop: 9,
                fontSize: 12.5,
            }}>
                {contents.map((item,index) =>
                    <div key={index} onClick={() => onClick(index)}>
                        <RowDropDown item={item}/>
                    </div>
                )}
                <img style={{
                        position: 'absolute',
                        right: 0,
                        top: -6.8,
                    }}
                    width={18}
                    height={9}
                    src="/images/arrowupdropdown.svg"
                />
            </div>
        )
    }
}

class Comment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hover : false,
            hoversetting: false,
            clicksetting: false,
        }
    }
    componentDidMount(){
        $(window).click((event) => {
            this.setState({ clicksetting: false })
        });
    }
    onHoverSetting(){
        setTimeout(() => {

        }, 1000)
    }
    onCLickSetting(event){
        this.setState({
            clicksetting: true,
            hoversetting: false,
        })
        setTimeout(() => {
            this.setState({
                clicksetting: true,
                hoversetting: false,
            })
        }, 1)
    }
    render(){
        const { isleader, avatar, name, time, numlikes, numreplys,
            content, onReceive, onLike, onReply} = this.props
        return(
            <div
                onMouseOver={() => this.setState({ hover: true })}
                onMouseLeave={() => this.setState({ hover: false })}
                style={{
                marginLeft: isleader?0:38,
                paddingLeft: isleader?0:10,
                fontSize: 12.5,
                borderLeft: isleader?undefined:'2px solid #4080FF'}}>
                { (this.state.hover || this.state.clicksetting) &&
                    <div
                        style={{ float: 'right', padding: 2}}>
                        <span width={14} height={14}
                            onMouseOver={() => this.setState({ hoversetting: true })}
                            onMouseLeave={() => this.setState({ hoversetting: false })}
                            onClick={(event) => this.onCLickSetting(event)}
                            style={{ color:'#BEC2C8'}}
                            className="glyphicon glyphicon-menu-down"/>
                        {(this.state.hoversetting && !this.state.clicksetting)&&
                            <Tooltip contents={['Block, Report']}/>
                        }
                        {this.state.clicksetting &&
                            <DropDown
                                width={130}
                                onClick={(index) => console.log(index)}
                                contents={['Block','hr','Report']}
                            />
                        }
                    </div>
                }

                {this.state.hover &&
                    <div>

                    </div>
                }
                <img src={avatar} style={{
                    width: isleader?40:20,
                    height: isleader?40:20,
                }}/>
                <div style={{
                    marginLeft: isleader?50:30,
                    marginTop: isleader?-40:-20,
                    paddingRight: 18 }}>
                    <strong style={{ color: '#365899'}}>{name}</strong>{" "}
                    <span>{content}</span>
                    <div style={{ marginLeft: -2 }}>
                        {onReceive &&
                            <div className="btn" onClick={() => onReceive()}
                                style={{  padding: '0px 1px 0px 1px' }}>
                                <a style={{ fontSize: 12, color: '#365899' }}>Receive</a>
                            </div>
                        }
                        {onReceive && "."}
                        <div className="btn" onClick={() => onLike()}
                            style={{ padding: '0px 1px 0px 1px'}}>
                            <a style={{ fontSize: 12, color: '#365899' }}>Like</a>
                        </div>
                        {"."}
                        <div className="btn" onClick={() => onReceive()}
                            style={{ padding: '0px 1px 0px 1px'}}>
                            <a style={{ fontSize: 12, color: '#365899' }}>Reply</a>
                        </div>
                        {"."}
                        <div className="btn" onClick={() => onReceive()}
                            style={{ padding: '0px 1px 0px 1px'}}>
                            <a style={{ fontSize: 12, color: '#A7ABB1' }}>{time}</a>
                        </div>
                    </div>
                </div>
                <div style={{ height: 10 }}></div>
            </div>
        )
    }
}

class CommentSuggest extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hover: false
        }
    }
    render(){
        const { isleader, src, imgsrc, numreplys, content, onClick, time, end} = this.props
        return(
            <div>
                <div style={{ marginTop: 3, marginRight: 10, color: '#A7ABB1',
                    fontSize: 12.5, float: 'right'}}>
                    {end}
                </div>
                <div onClick={() => onClick()}
                    style={{
                    marginLeft: isleader?0:38,
                    marginBottom: 10,
                    borderLeft: isleader?undefined:'2px solid #4080FF'}}>
                    {!isleader &&
                        <div className="btn" style={{
                            marginLeft: 10,
                            padding: 0,
                            width: 30,
                            fontSize: 12.5 }}>
                            {src && <img src={src} width={10} height={10}/>}
                        </div>
                    }
                    {imgsrc && <img src={imgsrc} width={20} height={20}
                        style={{ marginRight: 8 }}/>}
                    <div className="btn" style={{
                        marginLeft: isleader?-1:-1,
                        padding: 0,
                        fontSize: 12.5 }}>
                        <a style={{ marginLeft: 0 }}>
                            {content && <span style={{ color: '#365899' }}>{content}</span>}
                        </a>
                        {time && " . "}
                        {time && <span style={{ color: '#A7ABB1' }}>{time}</span>}
                    </div>
                </div>
            </div>
        )
    }
}

class GroupComment extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{ padding: '10px 0px 10px 0px'}}>
                <CommentSuggest
                    isleader={true}
                    content={'View more previous comments'}
                    end={'3 of 18'}
                    />
                <Comment
                    isleader={true}
                    onReceive={true}
                    isStoreRepresent={true}
                    avatar='/images/avatar.jpg'
                    avatarsize={40}
                    name='Phương Nguyễn‎'
                    content='Tất cả các đơn síp đi rồi các bạn ạ ..'
                    time='39 mins'
                    />
                <Comment
                    isStoreRepresent={true}
                    avatar='/images/avatar.jpg'
                    avatarsize={40}
                    name='Phương Nguyễn‎'
                    content='Suất của b 40k nhé. 11h hơn mới đi đơn đầu tiên. Lúc đó b có nhận được k'
                    time='39 mins'
                    />
                <Comment
                    isStoreRepresent={true}
                    avatar='/images/avatar.jpg'
                    avatarsize={40}
                    name='Phương Nguyễn‎'
                    content='Suất của b 40k nhé. 11h hơn mới đi đơn đầu tiên. Lúc đó b có nhận được k'
                    time='39 mins'
                    />
                <CommentSuggest
                    src='/images/reply.svg'
                    isleader={false}
                    imgsrc='/images/avatar.jpg'
                    content={' Phương Nguyễn Replied . 2 Replies'}
                    time={'1 hrs'}
                    />
                <Comment
                    isleader={true}
                    onReceive={true}
                    isStoreRepresent={true}
                    avatar='/images/avatar.jpg'
                    avatarsize={40}
                    name='Phương Nguyễn‎'
                    content='Tất cả các đơn síp đi rồi các bạn ạ ..'
                    time='39 mins'
                    />
                <Comment
                    isStoreRepresent={true}
                    avatar='/images/avatar.jpg'
                    avatarsize={40}
                    name='Phương Nguyễn‎'
                    content='Suất của b 40k nhé. 11h hơn mới đi đơn đầu tiên. Lúc đó b có nhận được k'
                    time='39 mins'
                    />
                <Comment
                    isStoreRepresent={true}
                    avatar='/images/avatar.jpg'
                    avatarsize={40}
                    name='Phương Nguyễn‎'
                    content='Suất của b 40k nhé. 11h hơn mới đi đơn đầu tiên. Lúc đó b có nhận được k'
                    time='39 mins'
                    />
                <Comment
                    isleader={true}
                    onReceive={true}
                    isStoreRepresent={true}
                    avatar='/images/avatar.jpg'
                    avatarsize={40}
                    name='Phương Nguyễn‎'
                    content='Tất cả các đơn síp đi rồi các bạn ạ ..'
                    time='39 mins'
                    />
                <CommentSuggest
                    isleader={false}
                    src='/images/reply.svg'
                    content={'8 Replies'}
                    />
                <CommentSuggest
                    isleader={true}
                    content={'View more comments'}
                    />
            </div>
        )
    }
}

class MinorPost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            beLike: false
        }
    }
    onLike(){
        this.setState({ beLike: !this.state.beLike })
    }

    render(){
        const { name, avatarUrl, time, content } = this.props
        const Urlify = ({text}) => {
            var urlRegex = /(https?:\/\/[^\s]+)/g;
            return(
                <div>
                    {text.split(urlRegex).map((item,index) => {
                        if(urlRegex.test(item))
                            return <a key={index} style={{ color:'#365899'}}
                                      href={item} target="_blank">{item}</a>
                        return <span key={index}>{item}</span>
                    })}
                </div>
            )
        }
        return(
            <div style={{
                borderRadius: 4,
                border: '1px solid #B2B2B2',
                boxShadow: '0px 0px 4px #B2B2B2',
                backgroundColor: 'white',
                width: 410, padding: 10,}}>
                <div style={{ fontSize: 13 }}>
                    <div>
                        <img src={avatarUrl} width={40} height={40}/>
                    </div>
                    <div style={{ marginTop: -37,
                        marginLeft: 50,
                        color: '#365899',
                        fontWeight: 'bold'}}>{name}</div>
                    <div style={{
                        fontSize: 12,
                        marginLeft: 50,
                        color: '#A7ABB1',
                        }}>
                        {time}
                    </div>
                    <div style={{ marginTop: 10, fontSize: 13.5 }}>
                        {content.split('\n').map((item,index) => {
                            if(item)
                                return <Urlify key={index} text={item}/>
                            else return <br key={index}/>
                        })}
                    </div>
                </div>
                <div style={{ height: 40, padding: '10px 0px 10px 0px'}}>
                    <LikeShareComment
                        onLike={() => this.onLike()}
                        onComment={() => console.log('onComment')}
                        onShare={() => console.log('onShare')}
                        beLike={this.state.beLike}/>
                </div>
                <hr style={{ margin: 0}}/>
                <div style={{ height: 38, padding: '9px 0px 9px 0px'}}>
                    <LikeGroup
                        size={20}
                        content={'You, Nguyễn Ngọc Dưỡng and 3 others'}
                        names={['You','Nam Hà','Nguyễn Hữu Nhật']}
                        typeLikes={['likeicon','love','haha','wow']}
                        other={19}
                        />
                </div>
                <hr style={{ margin: 0}}/>
                <GroupComment/>
            </div>
        )
    }
}

const Reacting = (text) => {
    return text.replace(':D','😀','')
               .replace('^^','😄')
}

const newComp = () => (
    <div>
        <div style={{ fontSize: 12 }}>{Reacting(':D :C')}</div>
        <MinorPost
            name='Foody.vn‎'
            avatarUrl='/images/storeavatar.jpg'
            time='11 mins'
            content='[Nhân dịp "SINH NHẬT 5 NĂM" - Tặng ngay ƯU ĐÃI 20% khi đặt món tại APP Foody] Đặt món: http://www.deliverynow.vn/ Chỉ cần một cái chạm tay nhẹ tại APP Foody, cả một thế giới đồ ăn, thức uống mở ra ngay trước mắt bạn. Mà hồi trước chỉ xem món được thôi hà, còn bây giờ thì chỉ cần ngồi tại chỗ đồ ngon nào cũng tới tận tay :3 Để mừng tháng SINH NHẬT, tặng mã FOODY5NAM giảm 20% khi đặt món qua APP Foody cho các Foodie thân thương đã cùng đồng hành suốt 5 năm qua nghen <3'/>
    </div>
)

export default Components
