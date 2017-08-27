import React from 'react'
import { Modal } from 'react-bootstrap'

import WebcamCapture from '~/containers/entity/thumnail/WebcamCapture'
import UploadCroppie from '~/containers/entity/thumnail/UploadCroppie'
import OneImage from '~/containers/entity/thumnail/OneImage'
import ChooseCroppie from '~/containers/entity/thumnail/ChooseCroppie'
import Enlarge from '~/containers/entity/thumnail/Enlarge'
import SuggestPhoto from '~/containers/entity/show/SuggestPhoto'

class AddPhoto extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const { TITLE, SUGGEST_PHOTO, UPDATE_PHOTO, CLOSE, storePhotos, postPhotos, productPhotos, userPhotos, userid, storeList,
            style, action, onChange, id, aspectRatio, canEdit } = this.props
        const imagesSuggest = [
            'https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg',
            'http://www.jqueryscript.net/images/jQuery-Plugin-For-Fullscreen-Image-Viewer-Chroma-Gallery.jpg',
            'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg',
        ]
        return(
            <div>
                {canEdit ?
                    <OneImage style={{ width: style.width, height: style.height }}
                        src={style.src}
                        onClick={() => onChange('showModal'+id, true)}
                        textChange="Add photo"
                        isTop={style.isTop}
                    />
                :   <img src={style.src} style={{ width: style.width, height: style.height }}/>
                }
                <Modal show={this.props['showModal'+id]} onHide={() => onChange('showModal'+id, false)}>
                    <div className="modal-content"
                        style={{
                            borderRadius: 4,
                            marginTop: -4, position: 'fixed',
                            width: 790, marginLeft: -100 }} >
                        {/* <Modal.Header>
                            <div onClick={() => onChange('showModal'+id, false)} style={{ padding: 0, float: 'right'}}
                                className="btn btn-transperant">
                            </div>
                            <strong></strong>
                        </Modal.Header> */}
                        <div style={{ padding: 10, color: 'white', borderRadius: '3px 3px 0px 0px',
                            fontSize: 14, fontWeight: 'bold', backgroundColor: '#3B5998'}}>
                            {UPDATE_PHOTO}
                        </div>
                        <div style={{ marginLeft: 10, marginTop: 10 }}>
                            <UploadCroppie
                                aspectRatio={aspectRatio}
                                style={{ width: 600, height: 600 }}
                                btnstyle={{
                                    width: 380,
                                    height: 110,
                                    fontSize: 17,
                                }}
                                upNow={false}
                                action={action}
                            />
                        </div>
                        <div style={{ marginTop: -110, marginLeft: 400 }}>
                            <WebcamCapture
                                aspectRatio={aspectRatio}
                                style={{ width: 590 }}
                                action={action}
                                upNow={false}
                                btnstyle={{
                                    width: 380,
                                    height: 110,
                                    fontSize: 17,
                                }}/>
                        </div>
                        <hr style={{ margin: '10px 10px 0px 10px', borderColor: '#E9EBEE' }}/>
                        <div style={{ maxHeight: 500, overflowY: 'scroll'}}>
                            <div style={{ padding: '4px 4px 28px 10px'}}>
                                <div style={{ padding: '4px 4px 0px 10px'}}>
                                    <SuggestPhoto width={840} type="user" kind="small" id={userid}
                                        onChooseImage={(src) => {
                                            this.props.onAddImage(src)
                                            onChange('showModal'+id, false)
                                        }}/>
                                </div>
                                <hr style={{ margin: 0 }}/>
                                {storeList && storeList.map((item,index) => {
                                    return(
                                        <div  key={index+item}>
                                            <div style={{ padding: '0px 0px 0px 10px'}}>
                                                <div style={{ fontSize: 16, paddingLeft: 10, marginTop: 10,
                                                    fontWeight: 'bold', color: '#90949C' }}>{"@" + item.urlname}</div>
                                                <SuggestPhoto width={840} type="store" kind="small"
                                                    onChooseImage={(src) => {
                                                        this.props.onAddImage(src)
                                                        onChange('showModal'+id, false)
                                                    }} id={item.id}/>
                                                <SuggestPhoto width={840} type="postrow" kind="small"
                                                    onChooseImage={(src) => {
                                                        this.props.onAddImage(src)
                                                        onChange('showModal'+id, false)
                                                    }} id={item.id}/>
                                                <SuggestPhoto width={840} type="product" kind="small"
                                                    onChooseImage={(src) => {
                                                        this.props.onAddImage(src)
                                                        onChange('showModal'+id, false)
                                                    }} id={item.id}/>
                                            </div>
                                            <hr style={{ margin: 0 }}/>
                                        </div>

                                    )
                                })}
                            </div>
                        </div>
                        <Modal.Footer>
                            <div className="btn btn-default btn-sm" onClick={() => onChange('showModal'+id, false)}>{CLOSE}</div>
                        </Modal.Footer>
                    </div>
                </Modal>
            </div>
        )
    }
    componentDidMount(){
        this.props.onGetPhoto()
    }
}

export default AddPhoto
