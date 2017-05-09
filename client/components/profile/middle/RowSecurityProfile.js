import React from 'react';
import { Modal, Button} from 'react-bootstrap'

const ModalPassword = ({open, close, isSuccess, g}) => {
    return (
        <Modal style={{ marginTop: 120 }} show={open} onHide={() => close()}>
            <Modal.Header closeButton>
                <Modal.Title>{g('CHECK')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {isSuccess?
                    <div>{g('PASSWORD_CHANGE_SUCCESS')}</div>
                :<div>{g('PASSWORD_CHANGE_FAILED')}</div>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => close()}>{g('CLOSE')}</Button>
            </Modal.Footer>
        </Modal>
    )
}

class RowSecurityProfileBig extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            oldpassword: '',
            newpassword: '',
            repassword: '',
        }
    }
    handleChange(event, type){
        this.setState({
            [type] : event.target.value
        })
    }
    render(){
        const { g, title, onSaveChange, onCancel, isLoading, isSuccess, openmodalpassword, close, validatebot } = this.props
        const inputStyle = {
            type: "password",
            className: "form-control input-sm",
            style: {
                width: 220,
                marginBottom: 5,
            }
        }
        const validationbot = validatebot(this.state.newpassword) || (this.state.newpassword != this.state.repassword)
            || (this.state.newpassword == this.state.oldpassword)
        return(
            <div style={{ backgroundColor: '#F2F2F2'}}>
                <div style={{  paddingTop: 5, paddingBottom: 5, paddingRight: 14 }}>
                    <a href="#" style={{ float: 'right', marginTop: 3, marginRight: -7 }}
                        onClick={() => onCancel()}>cancel</a>
                    <div style={{ width: '100%' }}>
                        <div style={{ width: 145, marginLeft: 13,  float: 'left'}}>
                            <h5>{g(title)}</h5>
                        </div>
                        <div style= {{ marginLeft: 158 }}>
                            <div className="form-group" style={{ width: '100%' }}>
                                <input {...inputStyle} value={this.state.oldpassword}
                                    placeholder={g('OLD_PASSWORD')}
                                    onChange={(event) => this.handleChange(event, 'oldpassword')}
                                />
                                <input {...inputStyle} value={this.state.newpassword}
                                    placeholder={g('NEW_PASSWORD')}
                                    onChange={(event) => this.handleChange(event, 'newpassword')}
                                />
                                <input {...inputStyle} value={this.state.repassword}
                                    placeholder={g('RE_PASSWORD')}
                                    onChange={(event) => this.handleChange(event, 'repassword')}
                                />
                                <div style={{ marginTop: 5, marginBottom: 5 }}>
                                    {g('NOTE')}{": "}
                                    <small>{g('NOTE_VERIFY_'+title)}</small>
                                </div>
                                {isLoading?
                                    <div className="loader-small" style={{ marginLeft: 40 }}></div>
                                :validationbot?
                                    <div className="btn btn-default btn-xs" disabled>{g('CHANGE')}</div>
                                :   <div className="btn btn-default btn-xs"
                                        onClick={() => onSaveChange(this.state.oldpassword,this.state.newpassword,this.state.repassword)}
                                        >
                                        {g('CHANGE')}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ margin: 0}}></hr>
                <ModalPassword open={openmodalpassword} close={close} g = {g} isSuccess={isSuccess}/>
            </div>
        )
    }
}

const RowSecurityProfileSmall = ({ g, title, onEdit }) => {
    return(
        <div>
            <div style={{ paddingTop: 8, paddingBottom: 8, paddingRight: 14 }}>
                <div style={{  width: 'calc(100% - 24px)' }}>
                    <div style={{ width: 145, marginLeft: 13,  float: 'left'}}>
                        {g(title)}
                    </div>
                    <div style= {{ padding: 2, marginLeft: 158, fontSize: 13}}>
                        <div className="btn btn-default btn-xs"
                            onClick={() => onEdit()}
                            >{g('CHANGE')+' '+g(title)+'?'}</div>
                        <div style={{ color: '#888888' }}>
                            {g('NOTE_'+title)}
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ margin: 0}}></hr>
        </div>
    )
}



const RowSecurityProfile = (props) => {
    const { open, itemId } = props
    if(open[itemId])
        return <RowSecurityProfileBig {...props}/>
    else
        return <RowSecurityProfileSmall {...props}/>
}

export default RowSecurityProfile
