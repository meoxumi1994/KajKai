import React from 'react';
import { Modal, Button} from 'react-bootstrap'

const ModalPassword = ({openmodalpassword, close, isSuccess,
    CHECK, PASSWORD_CHANGE_SUCCESS, PASSWORD_CHANGE_FAILED, CLOSE}) => {
    return (
        <Modal style={{ marginTop: 120 }} show={openmodalpassword} onHide={() => close()}>
            <Modal.Header closeButton>
                <Modal.Title>{CHECK}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {isSuccess?
                    <div>{PASSWORD_CHANGE_SUCCESS}</div>
                :<div>{PASSWORD_CHANGE_FAILED}</div>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => close()}>{CLOSE}</Button>
            </Modal.Footer>
        </Modal>
    )
}

const RowSecurityProfileBig = (props) => {
    const { onSaveChange, onCancel, isLoading, isSuccess, openmodalpassword, close, validatebot,
    oldpassword, newpassword, repassword, handleChange,
    CHANGE, NOTE, NOTE_VERIFY_TILLE, TITLE, OLD_PASSWORD, NEW_PASSWORD, RE_PASSWORD, CANCEL} = props
    const inputStyle = {
        type: "password",
        className: "form-control input-sm",
        style: {
            width: 220,
            marginBottom: 5,
        }
    }
    return(
        <div style={{ backgroundColor: '#F2F2F2'}}>
            <div style={{  paddingTop: 5, paddingBottom: 5, paddingRight: 14 }}>
                <a href="#" style={{ float: 'right', marginTop: 3, marginRight: -7 }}
                    onClick={() => onCancel()}>{CANCEL}</a>
                <div style={{ width: '100%' }}>
                    <div style={{ width: 145, marginLeft: 13,  float: 'left'}}>
                        <h5>{TITLE}</h5>
                    </div>
                    <div style= {{ marginLeft: 158 }}>
                        <div className="form-group" style={{ width: '100%' }}>
                            <input {...inputStyle} value={oldpassword}
                                placeholder={OLD_PASSWORD}
                                onChange={(event) => handleChange('oldpassword', event.target.value)}
                            />
                            <input {...inputStyle} value={newpassword}
                                placeholder={NEW_PASSWORD}
                                onChange={(event) => handleChange('newpassword', event.target.value)}
                            />
                            <input {...inputStyle} value={repassword}
                                placeholder={RE_PASSWORD}
                                onChange={(event) => handleChange('repassword', event.target.value)}
                            />
                            <div style={{ marginTop: 5, marginBottom: 5 }}>
                                {NOTE}{": "}
                                <small>{NOTE_VERIFY_TILLE}</small>
                            </div>
                            {isLoading?
                                <div className="loader-small" style={{ marginLeft: 40 }}></div>
                            :validatebot?
                                <div className="btn btn-default btn-xs" disabled>{CHANGE}</div>
                            :   <div className="btn btn-default btn-xs"
                                    onClick={() => onSaveChange(oldpassword,newpassword,repassword)}
                                    >
                                    {CHANGE}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ margin: 0}}></hr>
            <ModalPassword {...props}/>
        </div>
    )
}

const RowSecurityProfileSmall = ({ onEdit, CHANGE, TITLE, NOTE_TITLE }) => {
    return(
        <div>
            <div style={{ paddingTop: 8, paddingBottom: 8, paddingRight: 14 }}>
                <div style={{  width: 'calc(100% - 24px)' }}>
                    <div style={{ width: 145, marginLeft: 13,  float: 'left'}}>
                        {TITLE}
                    </div>
                    <div style= {{ padding: 2, marginLeft: 158, fontSize: 13}}>
                        <div className="btn btn-default btn-xs"
                            onClick={() => onEdit()}
                            >{CHANGE+' '+TITLE+'?'}</div>
                        <div style={{ color: '#888888' }}>
                            {NOTE_TITLE}
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
