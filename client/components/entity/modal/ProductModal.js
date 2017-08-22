import React from 'react'

import { Modal } from 'react-bootstrap'
import ContentEditable from '~/components/entity/ContentEditable'
import AddPhoto from '~/containers/entity/thumnail/AddPhoto'

class ProductModal extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { id, showModal, close, content, imageUrl, list, onChange } = this.props
        return(
            <Modal bsSize="small" show={showModal} onHide={() => close()}>
                <div style={{ padding: 10 }}>
                    {list && list[0]}
                </div>
                <hr style={{ margin: 0 }}/>
                <div style={{ padding: 10 }}>
                    <ContentEditable
                        minRows={2}
                        placehoder={" "}
                        content={content}
                        handleChange={(e) => onChange('content', e.target.value)}
                    />
                </div>
                <hr style={{ margin: 0 }}/>
                <div style={{ padding: 10, marginTop: -1, marginLeft: -2 }}>
                    <AddPhoto
                        canEdit={true}
                        aspectRatio={1/1}
                        id={13123123}
                        action={{
                            type: 'UPDATE_PRODUCR_IMAGE',
                            data: {
                                id: id,
                            }
                        }}
                        style={{
                            src: imageUrl,
                            width: 280,
                            height: 280,
                            isTop: false,
                    }}/>
                </div>
                <hr style={{ margin: 0 }}/>
                <div style={{ padding: 10, height: 50 }}>
                    <div className="btn btn-sm btn-default" style={{ float: 'right' }}
                        onClick={() => close()}
                        >
                        Done
                    </div>
                </div>
            </Modal>
        )
    }
}

export default ProductModal
