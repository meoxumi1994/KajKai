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
import Textarea from 'react-textarea-autosize'

import MinorPost from '~/containers/entity/post/MinorPost'
import SellPost from '~/containers/entity/post/SellPost'
import GroupImage from '~/components/entity/thumnail/GroupImage'
import Carousel from '~/components/entity/thumnail/Carousel'

import ContentEditable from '~/components/entity/ContentEditable'

import Notification from '~/containers/entity/Notification'

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

const Compp = ({}) => (
    <div>
        <KeepImage
            type="Carousel"
            width={499}
            images={[]}
            imagesSuggest={[]}/>
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

const Components = () => (
    <BrowserRouter>
        <div>
            <Route path="*" component={App}/>
        </div>
    </BrowserRouter>
)

const newComp = () => (
    <div>
        {/* <div style={{ margin: 0, padding: 0, }}
            dangerouslySetInnerHTML={{ __html: ""}}>
        </div> */}
        <pre>1231 23 1231 312 31 3123</pre>
        {/* <span className="barcode" style={{ wordWrap: 'break-word' }}>212312312312 </span>
        <span className="barcode" style={{ wordWrap: 'break-word' }}>212312312312 </span>
        <span className="barcode" style={{ wordWrap: 'break-word' }}>212312312312 </span> */}
        {/* <span className="barcode" style={{ whiteSpace: 'pre', wordWrap: 'break-word' }}>3</span>
        <span className="barcode" style={{ whiteSpace: 'pre', wordWrap: 'break-word' }}>4</span>
        <span className="barcode" style={{ whiteSpace: 'pre', wordWrap: 'break-word' }}>1</span>
        <span className="barcode" style={{ whiteSpace: 'pre', wordWrap: 'break-word' }}>2</span>
        <span className="barcode" style={{ whiteSpace: 'pre', wordWrap: 'break-word' }}>3</span>
        <span className="barcode" style={{ whiteSpace: 'pre', wordWrap: 'break-word' }}>4</span>
        <span className="barcode" style={{ whiteSpace: 'pre', wordWrap: 'break-word' }}>1</span>
        <span className="barcode" style={{ whiteSpace: 'pre', wordWrap: 'break-word' }}>2</span>
        <span className="barcode" style={{ whiteSpace: 'pre', wordWrap: 'break-word' }}>3</span>
        <span className="barcode" style={{ whiteSpace: 'pre', wordWrap: 'break-word' }}>4</span>
        <span className="barcode" style={{ whiteSpace: 'pre', wordWrap: 'break-word' }}>1</span>
        <span className="barcode" style={{ whiteSpace: 'pre', wordWrap: 'break-word' }}>2</span>
        <span className="barcode" style={{ whiteSpace: 'pre', wordWrap: 'break-word' }}>3</span>
        <span className="barcode" style={{ whiteSpace: 'pre', wordWrap: 'break-word' }}>4</span>
        <span className="barcode" style={{ whiteSpace: 'pre', wordWrap: 'break-word' }}>1</span>
        <span className="barcode" style={{ whiteSpace: 'pre', wordWrap: 'break-word' }}>2</span>
        <span className="barcode" style={{ whiteSpace: 'pre', wordWrap: 'break-word' }}>3</span>
        <span className="barcode" style={{ whiteSpace: 'pre', wordWrap: 'break-word' }}>4</span> */}
        {/* <div style={{ width: 500 }}>
            <Notification
                notification={{
                    src: "/images/avatar.png" ,
                    content: 'Single "Cơn Mưa Ngang Qua" tổng hợp 3 part của chính bài hit này cùng bản Instrumental tặng kèm.'
                }}/>
        </div> */}
    </div>
)

export default Components
