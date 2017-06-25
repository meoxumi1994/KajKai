import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Modal } from 'react-bootstrap'

import Cropper from 'react-cropper';
import Cropperjs from 'cropperjs'

import App from '~/containers/App'
import Webcam from 'react-webcam';
import KeepImage from '~/containers/entity/thumnail/KeepImage'
import AddPhoto from '~/containers/entity/thumnail/AddPhoto'

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

const LikeShareComment = ({ onLike, onComment, onShare, beLike }) => {
    return(
        <div className="container-fluid" style={{
            width: 265,
        }}>
            <div className="row">
                <div className="col col-xs-4" style={{ padding: 0, margin: 0 }}>
                    <div className="btn" style={{ padding: 4 }}
                        onClick={() => {
                            this.like.className = "grow growing"
                            setTimeout(() => {
                                this.like.className = "grow"
                            }, 170)
                        }}>
                        <img
                            ref={img=> this.like = img}
                            style={{
                                float: 'left',
                                width: 14,
                                height: 14,
                                marginRight: 7,
                            }} src={beLike?"/images/likehas.svg":"/images/like.svg"}
                        />
                        <div style={{
                            marginLeft: 7,
                            marginTop: -3,
                        }}><a style={{
                            color: beLike?'#BD081C': '#3C3F45',
                            fontSize: 13,
                            fontWeight: 'bold',
                        }}>{'Like'}</a>
                        </div>
                    </div>
                </div>
                <div className="col col-xs-4" style={{ padding: 0, margin: 0 }}>
                    <div className="btn" style={{ marginLeft: -7, padding: 4, width: 100 }}
                        ref={img => this.cmt = img}
                        onClick={() => {
                            this.cmt.className = "btn decline declineing"
                            setTimeout(() => {
                                this.cmt.className = "btn decline"
                            }, 80)
                        }}>
                        <img
                            style={{

                                float: 'left',
                                width: 14,
                                height: 14,
                                marginRight: 7,
                            }} src="/images/comment.svg"
                        />
                        <div style={{
                            marginLeft: 7,
                            marginTop: -3,
                        }}><a style={{
                            color: '#3C3F45',
                            fontSize: 13,
                            fontWeight: 'bold',
                        }}>{'Comment'}</a>
                        </div>
                    </div>
                </div>
                <div className="col col-xs-4" style={{ padding: 0, margin: 0 }}>
                    <div className="btn" style={{ marginLeft: 14, padding: 4, width: 74}}
                        onClick={() => onShare()}
                        >
                        <img
                            style={{
                                float: 'left',
                                width: 14,
                                height: 14,
                                marginRight: 7,
                            }} src={"/images/share.svg"}
                        />
                        <div style={{
                            marginLeft: 7,
                            marginTop: -3,
                        }}><a style={{
                            color: '#3C3F45',
                            fontSize: 13,
                            fontWeight: 'bold',
                        }}>{'Share'}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

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
        <LikeShareComment beLike={true}/>
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

export default Compp
