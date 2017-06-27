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

class GroupComment extends React.Component {

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
                backgroundColor: 'black',
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

class Dropdown extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { contents } = this.props
        return(
            <div style={{
                borderRadius: 2.5,
                padding: '5px 10px 5px 10px',
                backgroundColor: 'black',
                color: 'white',
                position: 'absolute',
                marginLeft: -10,
                marginTop: 10,
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
        // $(window).click((event) => {
        //     console.log(event)
        // });
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
                {this.state.hover &&
                    <div
                        onMouseOver={() => this.setState({ hoversetting: true })}
                        onMouseLeave={() => this.setState({ hoversetting: false })}
                        style={{ float: 'right', padding: 2}}>
                        <span width={14} height={14}
                            style={{ color:'#BEC2C8'}}
                            className="glyphicon glyphicon-menu-down"/>
                        {this.state.hoversetting &&
                            <Tooltip contents={[
                                'Block, Report','me','Block, Report','me',
                                'Block, Report','me','Block, Report','me']}/>
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

class newComp extends React.Component {
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
        return(
            <div style={{ backgroundColor: 'white', width: 500 }}>
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
            </div>
        )
    }
}

export default Components
