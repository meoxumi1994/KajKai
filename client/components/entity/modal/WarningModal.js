import React from 'react'

import { Modal } from 'react-bootstrap'

class WarningModal extends React.Component {
    constructor(props){
        super(props)
        this.state = { hoverclose: false }
    }
    render(){
        const { showModal, close, content, onDone, WARNING_MODAL, DONE, CLOSE, title } = this.props
        return(
            <Modal show={showModal} onHide={() => close()}>

                <div style={{ padding: 10, fontSize: 14.5, fontWeight: 'bold', color: 'white',
                    backgroundColor: '#3B5998', borderRadius: '4px 4px 0px 0px'}}>
                    <div className="btn" style={{ float: 'right', padding: 0 }}
                        onClick={() => close()}
                        onMouseOver={() => this.setState({ hoverclose: true })}
                        onMouseLeave={() => this.setState({ hoverclose: false })}>
                        <img src={!this.state.hoverclose ? "/images/closeicon.svg" : "/images/hovercloseicon.svg"}
                            width={14} height={14}/>
                    </div>
                    <div>{title ? title : WARNING_MODAL}</div>
                </div>
                <hr style={{ margin: 0 }}/>
                <div style={{ padding: 10, minHeight: 300, color: '#4B4F56'}}>
                    {content}
                    <div  style={{ textAlign: "center", padding: 20 }}>
                        <img src="/images/warning.svg" width={170}/>
                    </div>
                </div>
                <div>
                    <hr style={{ margin: 0 }}/>
                    <div style={{ padding: 10 }}>
                        {onDone &&
                            <div style={{ float: 'right', marginLeft: 10 }} onClick={() => onDone()}
                                className="btn btn-default btn-sm">
                                {DONE}
                            </div>
                        }
                        <div style={{ float: 'right'}} onClick={() => close()}
                            className="btn btn-default btn-sm">
                            {CLOSE}
                        </div>
                        <div style={{ height: 30}}>

                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default WarningModal
