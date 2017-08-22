import React from 'react'

import { Modal } from 'react-bootstrap'
import ContentEditable from '~/components/entity/ContentEditable'
import ChoosePostRow from '~/components/entity/post/ChoosePostRow'
import EditPostRow from '~/containers/entity/post/EditPostRow'

class EditSellPost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showModal: false
        }
    }
    render(){
        const {
            title, showModal, close, height, id,
            avatarUrl, ship, storename, category,
            description, time, onRemove,
            postrows_order, onChange,
            addPostRow, onChangePostRow,
            onCreateSellPost, onEditSellPost, isCreate,
            TIME, ADD_NEW_CONTENT, EDIT_SELL_POST, CREATE_SELL_POST, CLOSE, REMOVE,
        } = this.props
        return (
            <Modal show={showModal} bsSize="sm" onHide={() => close()}>
                <div className="modal-content" style={{
                    width: 520,
                    marginLeft: -125,
                    marginTop: -1,
                    minHeight: height - 70
                }}>
                    <div style={{ padding: 10, backgroundColor: '#BD081C', borderRadius: '4px 4px 0px 0px', color: 'white',
                        fontWeight: 'bold'}}>
                        {isCreate ? CREATE_SELL_POST : EDIT_SELL_POST}
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
                            <input style={{ height: 18, outline: 'none'}}
                                value={category}
                                onChange={(e) => onChange('category',e.target.value)}
                            />
                        </div>
                        <div style={{ marginLeft: 70, marginTop: -3, }}>
                            <span style={{ color: '#516EA7', fontWeight: 'bold'}}>Ship</span>
                            <span>{": "}</span>
                            <input style={{ height: 18, width: 350, outline: 'none'}}
                                value={ship}
                                onChange={(e) => onChange('ship',e.target.value)}
                            />
                        </div>
                        <div style={{
                            fontSize: 12,
                            marginLeft: 70,
                            color: '#A7ABB1',
                            }}>
                            {TIME}{" . "}
                            <input
                                value={description}
                                style={{ height: 18, width: 355, outline: 'none' }}
                                onChange={(e) => onChange('description',e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        {postrows_order.map((item, index) =>
                            <div key={index} style={{ paddingLeft: 10, paddingBottom: 10, paddingRight: 10 }}>
                                <div className="btn"
                                    onClick={() => this.props.removePostRow(item)}
                                    style={{ padding: 0, fontSize: 12.5, }}><a>{REMOVE}</a></div>
                                <EditPostRow
                                    id={item}
                                />
                            </div>
                        )}
                    </div>
                    <div className="btn btn-default btn-xs" style={{ marginLeft: 10, marginBottom: 10 }}
                        onClick={() => this.setState({ showModal : true })}>
                        {ADD_NEW_CONTENT}
                    </div>
                    <ChoosePostRow
                        showModal={this.state.showModal}
                        close={() => this.setState({ showModal: false })}
                        onChoose={(item) => {
                            this.setState({ showModal: false })
                            addPostRow(item, postrows_order.length )
                        }}
                    />
                    <div style={{ height: 50,}}>
                        <div style={{ position: 'absolute', width: '100%', bottom: 0, paddingBottom: 10 }}>
                            <hr style={{ margin: 0 }}/>
                            <div style={{ marginTop: 10, marginRight: 10 }}>
                                {!isCreate ?
                                    <div className="btn btn-default btn-sm"
                                        onClick={() => onEditSellPost()}
                                        style={{
                                        float: 'right', backgroundColor: '#BD081C', borderWidth: 0, color: 'white'}}>
                                        {EDIT_SELL_POST}
                                    </div>
                                :   <div className="btn btn-default btn-sm"
                                        onClick={() => onCreateSellPost()}
                                        style={{
                                        float: 'right', backgroundColor: '#BD081C', borderWidth: 0, color: 'white'}}>
                                        {CREATE_SELL_POST}
                                    </div>
                                }
                                <div className="btn btn-default btn-sm"
                                    onClick={() => close()}
                                    style={{ float: 'right', marginRight: 10 }}>
                                    {CLOSE}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default EditSellPost
