import React from 'react'
import { Modal } from 'react-bootstrap'

import WebcamCapture from '~/containers/entity/thumnail/WebcamCapture'
import UploadCroppie from '~/containers/entity/thumnail/UploadCroppie'
import OneImage from '~/containers/entity/thumnail/OneImage'
import ChooseCroppie from '~/containers/entity/thumnail/ChooseCroppie'
import Enlarge from '~/containers/entity/thumnail/Enlarge'

class AddPhoto extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const { TITLE, SUGGEST_PHOTO, UPDATE_PHOTO, style, action, onChange, id, aspectRatio, canEdit } = this.props
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
                                style={{ width: 780, height: 440 }}
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
                        <div style={{ padding: 10, fontSize: 14,  color: '#90949C'}}>
                            {SUGGEST_PHOTO}
                        </div>
                        <div style={{ maxHeight: 500, overflowY: 'scroll'}}>
                            <div style={{ padding: '4px 4px 28px 10px'}}>
                                {imagesSuggest.map((item, index) => {
                                    if(index >= this.state.maxSuggest) return
                                    return(
                                        <div key={index} style={{ float: 'left', padding: 4 }}>
                                            <ChooseCroppie key={index}
                                                src={item}
                                                SAVE={'save'}
                                                style={{ width: 780, height: 440 }}
                                                imgstyle={{ width: 100, height: 100 }}
                                            />
                                        </div>
                                    )
                                })}
                                {imagesSuggest.length > this.state.maxSuggest &&
                                    <div className="btn btn-transperant btn-xs"
                                        onClick={() => this.moreSuggest()}
                                        style={{ color: '#3B5998', fontSize: 14, float: 'right', marginRight: 10 }}>
                                        {SEE_MORE}
                                    </div>
                                }
                            </div>
                        </div>
                        <Modal.Footer>
                            <div className="btn btn-default btn-sm" onClick={() => onChange('showModal'+id, false)}>Close</div>
                        </Modal.Footer>
                    </div>
                </Modal>
            </div>
        )
    }
    componentDidMount(){

    }
}

export default AddPhoto
