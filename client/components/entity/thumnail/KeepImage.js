import React from 'react'
import { Modal } from 'react-bootstrap'

import WebcamCapture from '~/containers/entity/thumnail/WebcamCapture'
import UploadCroppie from '~/containers/entity/thumnail/UploadCroppie'
import Carousel from '~/containers/entity/thumnail/Carousel'
import GroupImage from '~/containers/entity/thumnail/GroupImage'
import ChooseCroppie from '~/containers/entity/thumnail/ChooseCroppie'
import DisplayImage from '~/components/entity/thumnail/DisplayImage'
import SuggestPhoto from '~/containers/entity/show/SuggestPhoto'

class SmallImage extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const { src, onRemove } = this.props
        return(
            <div style={{ display: 'inline-block' }}>
                <img src={src} style={{ margin: 5, width: 200, height: 200 }}/>
                <div className="btn" style={{ marginTop: -170, marginLeft: -45}}
                    onMouseOver={() => this.setState({ hoverImageClose : true })}
                    onMouseLeave={() => this.setState({ hoverImageClose: false })}
                    onClick={() => onRemove()}
                    >
                    <img src={ this.state.hoverImageClose ?
                        "/images/hoverimagecloseicon.svg" : "/images/imagecloseicon.svg" }
                    width={20} height={20}/>
                </div>
            </div>
        )
    }
}

class KeepImage extends React.Component {
    constructor(props){
        super(props)
        this.state = ({
            showModal: false,
            showView: false,
            maxSuggest: 7,
            indexView: 0,
        })
    }
    moreSuggest(){
        this.setState({ maxSuggest: this.state.maxSuggest + 14 })
    }
    open(){
        this.setState({
            maxSuggest: 7,
            showModal: true,
        })
    }
    close(){
        this.setState({ showModal: false })
    }
    openView(){
        this.setState({ showView: true })
    }
    closeView(){
        this.setState({ showView: false })
    }
    render(){
        const { type, width, heightModal, sellposts, images, canEdit, disableClickImage, id, storeList,
            imagesSuggest, action, ADD_PHOTO, SUGGEST_PHOTO, SEE_MORE, DONE} = this.props
        return(
            <div>
                {type=='Carousel' ?
                    <Carousel
                        disableClickImage={disableClickImage}
                        sellposts={sellposts}
                        style={{ width: width, height: width }}
                        onEdit={() => this.open()}
                        images={images.length ? images : ['/images/postrow/default.svg']}
                        canEdit={canEdit}
                        textChange="Add photo"
                    />
                :   <GroupImage
                        disableClickImage={disableClickImage}
                        sellposts={sellposts}
                        canEdit={canEdit}
                        onEdit={() => this.open()}
                        images={images.length ? images : ['/images/postrow/default.svg']}
                        width={width}
                    />
                }
                <Modal bsSize="large" show={this.state.showModal} style={{ borderRadius: 0  }}>
                    <div>
                        <Modal.Header style={{
                            borderRadius: '4px 4px 0px 0px',
                            backgroundColor: '#3B5998',
                            padding: '10px'}}>
                            <div onClick={() => this.close()}
                                onMouseOver={() => this.setState({ hoverClose: true })}
                                onMouseLeave={() => this.setState({ hoverClose: false })}
                                style={{ padding: 0, float: 'right'}}
                                className="btn btn-transperant">
                                <img src={this.state.hoverClose ? "/images/closesmallhover.svg" : "/images/closesmall.svg"}
                                    width={10} height={10}/>
                            </div>
                            <div style={{ fontSize: 16, color: 'white'}}>
                                {ADD_PHOTO}
                            </div>
                        </Modal.Header>
                        <div style={{ maxHeight: ((heightModal - 190) * 0.55), overflowY: 'scroll', padding: 5 }}>
                            <div style={{
                                    backgroundColor: '#F6F7F9',
                                    margin: 5,
                                    border: '1px solid #B6B6B6',
                                    width: 200, height: 200, float: 'left', padding: 4 }}>
                                <div style={{ width: '100%', marginBottom: 4 }}>
                                    <UploadCroppie
                                        style={{ width: 780, height: 440 }}
                                        upNow={true}
                                        action={action}
                                        btnstyle={{
                                            width: '100%',
                                            height: 67,
                                            fontSize: 14,
                                        }}
                                    />
                                </div>
                                <div style={{ width: '100%', marginBottom: 4 }}>
                                    <WebcamCapture
                                        style={{ width: 590 }}
                                        action={action}
                                        upNow={true}
                                        btnstyle={{
                                            width: '100%',
                                            height: 67,
                                            fontSize: 14,
                                        }}/>
                                </div>
                            </div>
                            {images.map((item,index) => <SmallImage src={item}
                                onRemove={() => this.props.onRemove(index)} key={item+index} />)}
                        </div>
                        <hr style={{ margin: 0, padding: 0 }}/>
                        <div style={{ backgroundColor: '#F6F7F9', padding: '2px 0px 2px 15px' }}>
                            <strong className="text-muted">{SUGGEST_PHOTO}</strong>
                        </div>
                        <hr style={{ margin: 0, padding: 0 }}/>
                        <div style={{ maxHeight: ((heightModal - 190) * 0.45), overflowY: 'scroll'}}>
                            <div style={{ padding: '4px 4px 0px 10px'}}>
                                <SuggestPhoto width={840} type="user" kind="small" id={id}
                                    onChooseImage={(src) => this.props.onAddImage(src)}/>
                            </div>
                            {storeList && storeList.map((item,index) => {
                                return(
                                    <div key={index+item} style={{ padding: '0px 0px 0px 10px'}}>
                                        <div style={{ fontSize: 16, paddingLeft: 10, marginTop: 10,
                                            fontWeight: 'bold', color: '#90949C' }}>{"@" + item.urlname}</div>
                                        <SuggestPhoto width={840} type="store" kind="small"
                                            onChooseImage={(src) => this.props.onAddImage(src)} id={item.id}/>
                                        <SuggestPhoto width={840} type="postrow" kind="small"
                                            onChooseImage={(src) => this.props.onAddImage(src)} id={item.id}/>
                                        <SuggestPhoto width={840} type="product" kind="small"
                                            onChooseImage={(src) => this.props.onAddImage(src)} id={item.id}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <hr style={{ margin: 0 }}/>
                    <div style={{ padding: 10, height: 50 }}>
                        <div className="btn btn-default btn-sm"
                            onClick={() => this.close()}
                            style={{ color: 'white', borderWidth: 0,
                            float: 'right', backgroundColor: '#BD081C'}}>
                            {DONE}
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default KeepImage
