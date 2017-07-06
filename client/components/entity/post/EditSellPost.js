import React from 'react'

import { Modal } from 'react-bootstrap'
import ContentEditable from '~/components/entity/ContentEditable'

class EditSellPost extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const {
            title, showModal, close, height,
            avatarUrl, ship, storename, category,
            description, time,
            postrows_order} = this.props
        return (
            <Modal show={showModal} onHide={() => close()}>
                <div className="modal-content" style={{
                    width: 600,
                    height: height - 70}}>
                    <div style={{ padding: 10 }}>
                        {title}
                    </div>
                    <hr style={{ margin: 0 }}/>
                    <div style={{ padding: 10 }}>
                        <div>
                            <img src={avatarUrl} width={60} height={60}/>
                        </div>
                        <div style={{
                            marginTop: -57,
                            marginLeft: 70,
                            color: '#A7ABB1',
                            fontWeight: 'bold'}}>
                            <div className="btn" style={{ padding: 0 }}>
                                <a style={{ color: '#BD081C', fontWeight: 'bold'}}>{storename}</a>
                            </div>
                            {" : "}
                            <div className="btn" style={{ padding: 0 }}>
                                <a style={{ color: '#BD081C' }}>{category}</a>
                            </div>
                        </div>
                        <div style={{ marginLeft: 70, marginTop: -3, }}>
                            <span style={{ color: '#516EA7', fontWeight: 'bold'}} >Ship</span>
                            <span>{": "}</span>
                            <span style={{ fontSize: 12.5 }}>{ship}</span>
                        </div>
                        <div style={{
                            fontSize: 12,
                            marginLeft: 70,
                            color: '#A7ABB1',
                            }}>
                            {time}{" . "}{description}
                        </div>
                    </div>

                    <div style={{ position: 'absolute', width: '100%', bottom: 0, paddingBottom: 10 }}>
                        <hr style={{ margin: 0 }}/>
                        <div style={{ marginTop: 10, marginRight: 10 }}>
                            <div className="btn btn-default btn-sm"
                                onClick={() => close()}
                                style={{ float: 'right'}}>
                                Close
                            </div>
                            <div className="btn btn-default btn-sm" style={{
                                float: 'right', backgroundColor: '#BD081C', marginRight: 10, borderWidth: 0, color: 'white'}}>
                                Create SellPost
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default EditSellPost
