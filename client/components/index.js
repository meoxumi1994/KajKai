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

import DisplayImage from '~/components/entity/thumnail/DisplayImage'

import MinorPost from '~/containers/entity/post/MinorPost'
import SellPost from '~/containers/entity/post/SellPost'
import GroupImage from '~/components/entity/thumnail/GroupImage'
import Carousel from '~/components/entity/thumnail/Carousel'

import ContentEditable from '~/components/entity/ContentEditable'

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
        {/* <Carousel
            EDIT='Edit'
            onEdit={() => console.log('onEdit')}
            images={[
                '/images/garden.png',
                '/images/flower005.jpg',
                '/images/flower001.jpg',
                '/images/garden.png',]}
            canEdit={false}
            style={{
                width: 500,
                height: 500,
            }}
            canEdit={true}
            />
        <GroupImage
            EDIT='Edit'
            onEdit={() => console.log('onEdit')}
            images={[
                '/images/garden.png',
                '/images/flower005.jpg',
                '/images/flower001.jpg',
                '/images/garden.png',]}
            canEdit={false}
            width={500}
            height={500}
            canEdit={true}
        /> */}
        {/* <KeepImage
            type = 'Carousel'
            height = {500}
            canEdit = {true}
            images={[
                '/images/garden.png',
                '/images/flower005.jpg',
                '/images/flower001.jpg',
                '/images/garden.png',]}
            imagesSuggest
            /> */}
            {/* <KeepImage
                type={'GroupImage'} // GroupImage || Carousel
                images={["/images/flower001.jpg",
                "/images/garden.png",
                "/images/flower001.jpg", "/images/flower002.jpg",
                "/images/flower004.jpg",
                "/images/i love you.jpg"
                ]}
                height={500}
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
        {/* <span ref={me => {
            setTimeout(() => {
                console.log(me.getBoundingClientRect().width)
            },200)
        }} style={{ fontSize: 14 }}>{':D'}</span>
        <input style={{ resize: 'horizontal' }} /> */}
        {/* <MinorPost
            name='Foody.vn‎'
            avatarUrl='/images/storeavatar.jpg'
            time='11 mins'
            content='[Ăn như 1 vị thần với ”PIZZA KHỔNG LỒ” để giựt giải thưởng 33 triệu] :D
Đăng kí: https://goo.gl/3XtzMk
Chi tiết: https://goo.gl/zn4mMT
Hình thức thi: 2 team (6 người/team) thách đấu cùng chiến 1 pizza dài 1m5. Trong đó 1 team gồm 6 bạn đã thắng giải Foody Challenge các kì trước.
Số lượng đăng kí: 2 người/team. Sau đó sẽ ghép thành đội 6 người.
Giải thưởng: 3 triệu tiền mặt, 6 điện thoại Pháp Wiko và 6 triệu Voucher. Tài trợ Pizza: 4Gs Texas <3'/>
        <SellPost
            /> */}
        <div style={{ width: 150, backgroundColor: 'red', wordWrap: 'normal'}}>
            3l1231 fsd123
            <span>{" "}</span>
            <span style={{  wordWrap: 'break-word' }}>
                :D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D
            </span>
            <span>{" "}</span>123123
        </div>
            {/* <ContentEditable
                width={100}
                canEdit={true}
                placehoder={"fdsaiojfkdsajfklsdajflksajdlkfjaskldjfklsajdlfk"}
                handleChange={(e) => {
                    const newlist = [...list]
                    newlist[index] = e.target.value
                    onChange('list', newlist)
                }}
                content={'dfsdaf osda flkdjas klfaskld fjklsdjfk lsdjafkls ajfkls ajfkldsjf'}
                padding={0}
            /> */}
    </div>
)

export default Components
