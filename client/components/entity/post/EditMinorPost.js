import React from 'react'

import { Modal } from 'react-bootstrap'
import ContentEditable from '~/components/entity/ContentEditable'
import ChoosePostRow from '~/components/entity/post/ChoosePostRow'
import EditPostRow from '~/containers/entity/post/EditPostRow'
import KeepImage from '~/containers/entity/thumnail/KeepImage'

class EditMinorPost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showModal: false
        }
    }
    render(){
        const {
            title, showModal, close, height,
            avatarUrl, storename, content, images,
            description, time, onChange,
            onCreateMinorPost,
        } = this.props
        return (
            <Modal show={showModal} bsSize="sm" onHide={() => close()}>
                <div className="modal-content" style={{
                    width: 520,
                    marginLeft: -125,
                    marginTop: -1,
                    minHeight: height - 70
                }}>
                    <div style={{ padding: 10 }}>
                        {title}
                    </div>
                    <hr style={{ margin: 0 }}/>
                    <div style={{ padding: 10 }}>
                        <div>
                            <img src={avatarUrl} width={40} height={40}/>
                        </div>
                        <div style={{
                            marginTop: -40,
                            marginLeft: 50,
                            color: '#A7ABB1',
                            fontWeight: 'bold'}}>
                            <div className="btn" style={{ padding: 0 }}>
                                <a style={{ color: '#BD081C', fontWeight: 'bold'}}>{storename}</a>
                            </div>
                        </div>
                        <div style={{
                            fontSize: 12,
                            marginLeft: 50,
                            color: '#A7ABB1',
                            }}>
                            time{" . "}
                            <input
                                value={description}
                                style={{ height: 18, width: 355, outline: 'none' }}
                                onChange={(e) => onChange('description',e.target.value)}
                            />
                        </div>
                    </div>
                    <div style={{ padding: 10 }}>
                        <ContentEditable
                            minRows={12}
                            placehoder={" "}
                            content={content}
                            handleChange={(e) => onChange('content', e.target.value)}
                            getLine={(line) => onChange('numline', line)}
                        />
                    </div>
                    <div style={{ padding: '0px 10px 10px 10px'}}>
                        <KeepImage
                            action={{
                                type: 'UPDATE_MINOR_POST',
                                images: images,
                            }}
                            canEdit={true}
                            type="GroupImage"
                            width={500}
                            images={images}
                            imagesSuggest={images}/>
                    </div>
                    <div style={{ height: 50,}}>
                        <div style={{ position: 'absolute', width: '100%', bottom: 0, paddingBottom: 10 }}>
                            <hr style={{ margin: 0 }}/>
                            <div style={{ marginTop: 10, marginRight: 10 }}>
                                <div className="btn btn-default btn-sm"
                                    onClick={() => close()}
                                    style={{ float: 'right'}}>
                                    Close
                                </div>
                                <div className="btn btn-default btn-sm"
                                    onClick={() => onCreateMinorPost()}
                                    style={{
                                    float: 'right', backgroundColor: '#BD081C', marginRight: 10, borderWidth: 0, color: 'white'}}>
                                    Create MinorPost
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default EditMinorPost
