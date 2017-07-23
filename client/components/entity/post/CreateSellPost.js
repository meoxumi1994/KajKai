import React from 'react'

import { Modal } from 'react-bootstrap'


class CreateSellPost extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const {
            CREATE_SELLPOST,
            CREATE_SELLPOST_DESCRIPTTION,
            CREATE_SELLPOST_DESCRIPTTION_1,
            CREATE_SELLPOST_DESCRIPTTION_2,
            CREATE_SELLPOST_DESCRIPTTION_3,
            title, showModal, close, height,
            avatarUrl, ship, storename, category,
            description, time,
            postrows_order} = this.props
        return (
            <Modal show={showModal} onHide={() => close()}>
                <div className="modal-content" style={{
                    width: 600,
                    height: height - 70}}>
                    <div className="btn btn-default" style={{
                        backgroundColor: '#BD081C',
                        color: 'white', borderWidth: 0 }}
                        onClick={() => this.setState({ showEditSellPost: true })}
                        >
                        {CREATE_SELLPOST}
                    </div>
                    <EditSellPost
                        title={"Create Sell Post"}
                        showModal={this.state.showEditSellPost}
                        close={() => this.setState({ showEditSellPost: false })}/>
                    <div>{CREATE_SELLPOST_DESCRIPTTION}</div>
                    <div style={{ marginLeft: 10, color: '#4B4F56', fontSize: 13 }}>{". "}{CREATE_SELLPOST_DESCRIPTTION_1}</div>
                    <div style={{ marginLeft: 10, color: '#4B4F56', fontSize: 13 }}>{". "}{CREATE_SELLPOST_DESCRIPTTION_2}</div>
                    <div style={{ marginLeft: 10, color: '#4B4F56', fontSize: 13 }}>{". "}{CREATE_SELLPOST_DESCRIPTTION_3}</div>
                </div>
            </Modal>
        )
    }
}

export default CreateSellPost
