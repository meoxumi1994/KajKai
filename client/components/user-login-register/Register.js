import React from 'react';
import { Button, Modal} from 'react-bootstrap';

const Register = (props) => {
    const {
        CREATE_A_NEW_ACCOUNT, YOUR_NAME, USER_NAME_WARNING, EMAIL_NEED, EMAIL_WARNING, PASSWORD_WARNING,
        PASSWORD, RULE, CREATE_ACCOUNT, REGISTER_MODAL_HEADER_WARNING, REGISTER_MODAL_PHONE_WARNING, CLOSE,
        isloading, isshowmodalused, onCloseAlready, onRegisterClick,
        username, email, password, warningusername, warningemail, warningpassword, handleChange } = props
    return (
        <div>
            <h3>{CREATE_A_NEW_ACCOUNT}</h3>
            <div className={"form-group" + (warningusername ?" has-error":"")}>
                <input type="text" className="form-control input-md"
                    value={username} placeholder={ YOUR_NAME }
                    onChange={(e) => handleChange('username', e.target.value)}
                />
                <div className="help-block">
                    {warningusername && USER_NAME_WARNING }
                </div>
            </div>
            <div className={"form-group" + (warningemail ?" has-error":"")}>
                <input type="text" className="form-control input-md"
                    value={email} placeholder={ EMAIL_NEED }
                    onChange={(e) => handleChange('email', e.target.value)}
                />
                <div className="help-block">
                    {warningemail && EMAIL_WARNING }
                </div>
            </div>
            <div className={"form-group" + (warningpassword ?" has-error":"")}>
                <input type="text" className="form-control input-md"
                    value={password} placeholder={ PASSWORD }
                    onChange={(e) => handleChange('password', e.target.value)}
                />
                <div className="help-block">
                    {warningpassword && PASSWORD_WARNING}
                </div>
            </div>
            <div className='small'>
                {RULE}
            </div>
            <button className="btn"
                style={{ backgroundColor: '#BD081C', color: 'white', width: 123}}
                onClick={() => onRegisterClick(username, email, password)}>
                {isloading?
                    <div className="loader" style={{ marginLeft: 40 }}></div>
                  : CREATE_ACCOUNT
                }
            </button>
            <Modal show={isshowmodalused}
                style={{ marginTop: 100 }}
                onHide={ () => onCloseAlready() }>
                <Modal.Header closeButton>
                <Modal.Title>
                    { REGISTER_MODAL_HEADER_WARNING }
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <strong>{email}</strong>
                    <div>{ REGISTER_MODAL_PHONE_WARNING }</div>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={ () => onCloseAlready() }>{CLOSE}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Register;
