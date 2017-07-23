import React from 'react'
import { Modal } from 'react-bootstrap'

import WebcamCapture from '~/containers/entity/thumnail/WebcamCapture'
import UploadCroppie from '~/containers/entity/thumnail/UploadCroppie'
import Carousel from '~/containers/entity/thumnail/Carousel'
import GroupImage from '~/containers/entity/thumnail/GroupImage'
import ChooseCroppie from '~/containers/entity/thumnail/ChooseCroppie'

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
        const { type, width, images, canEdit, imagesSuggest, action, ADD_PHOTO, SUGGEST_PHOTO, SEE_MORE } = this.props
        return(
            <div>
                {type=='Carousel' ?
                    <Carousel
                        style={{ width: width, height: width }}
                        onEdit={() => this.open()}
                        images={images.length ? images : ['/images/postrow/default.svg']}
                        canEdit={canEdit}
                        textChange="Add photo"
                    />
                :   <GroupImage
                        canEdit={canEdit}
                        onEdit={() => this.open()}
                        images={images.length ? images : ['/images/postrow/default.svg']}
                        width={width}
                    />
                }
                <Modal show={this.state.showModal}>
                    <div className="modal-content" style={{
                        marginTop: -4,
                        position: 'fixed',
                        marginLeft: -100, width: 808 }}>
                        <Modal.Header style={{
                            borderRadius: '3px 3px 0px 0px',
                            backgroundColor: '#F6F7F9',
                            padding: '8px 12px 8px 12px'}}>
                            <div onClick={() => this.close()} style={{ padding: 0, float: 'right'}}
                                className="btn btn-transperant">
                                <span className="glyphicon glyphicon-remove text-muted"></span>
                            </div>
                            <strong>{ADD_PHOTO}</strong>
                        </Modal.Header>
                        <Modal.Body style={{ padding: 4 }}>
                            <div style={{ maxHeight: 400, overflowY: 'scroll'}}>
                                <div style={{
                                        backgroundColor: '#F6F7F9',
                                        margin: 3,
                                        border: '1px solid #B6B6B6',
                                        width: 260, height: 260, float: 'left', padding: 4 }}>
                                    <div style={{ width: '100%', marginBottom: 4 }}>
                                        <UploadCroppie
                                            style={{ width: 780, height: 440 }}
                                            upNow={true}
                                            action={action}
                                            btnstyle={{
                                                width: '100%',
                                                height: 81,
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
                                                height: 81,
                                                fontSize: 14,
                                            }}/>
                                    </div>
                                </div>
                                {images.map((item,index) => (
                                    <img key={index} src={item} style={{ margin: 3, width: 260, height: 260 }}/>
                                ))}
                            </div>
                        </Modal.Body>
                        <hr style={{ margin: 0, padding: 0 }}/>
                        <div style={{ backgroundColor: '#F6F7F9', padding: '2px 0px 2px 15px' }}>
                            <strong className="text-muted">{SUGGEST_PHOTO}</strong>
                        </div>
                        <hr style={{ margin: 0, padding: 0 }}/>
                        <div style={{ maxHeight: 270, overflowY: 'scroll'}}>
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
                    </div>
                </Modal>
            </div>
        )
    }
}

export default KeepImage
