import React from 'react';
import { Button, Modal} from 'react-bootstrap';

const Register = (props) => {
    const { g, isloading, isshowmodalused, onCloseAlready, onRegisterClick,
        username, email, password, warningusername, warningemail, warningpassword, handleChange } = props
    return (
        <div>
            <h3>{g('CREATE_A_NEW_ACCOUNT')}</h3>
            <div className={"form-group" + (warningusername ?" has-error":"")}>
                <input type="text" className="form-control input-md"
                    value={username} placeholder={g('YOUR_NAME')}
                    onChange={(e) => handleChange('username', e.target.value)}
                />
                <div className="help-block">
                    {warningusername && g('USER_NAME_WARNING')}
                </div>
            </div>
            <div className={"form-group" + (warningemail ?" has-error":"")}>
                <input type="text" className="form-control input-md"
                    value={email} placeholder={g('EMAIL_NEED')}
                    onChange={(e) => handleChange('email', e.target.value)}
                />
                <div className="help-block">
                    {warningemail && g('EMAIL_WARNING')}
                </div>
            </div>
            <div className={"form-group" + (warningpassword ?" has-error":"")}>
                <input type="text" className="form-control input-md"
                    value={password} placeholder={g('PASSWORD')}
                    onChange={(e) => handleChange('password', e.target.value)}
                />
                <div className="help-block">
                    {warningpassword && g('PASSWORD_WARNING')}
                </div>
            </div>
            <div className='small'>
                {g('RULE')}
            </div>
            <button className="btn"
                style={{ backgroundColor: '#BD081C', color: 'white', width: 123}}
                onClick={() => onRegisterClick(username, email, password)}>
                {isloading?
                    <div className="loader" style={{ marginLeft: 40 }}></div>
                  : g('CREATE_ACCOUNT')
                }
            </button>
            <Modal show={isshowmodalused}
                style={{ marginTop: 100 }}
                onHide={ () => onCloseAlready() }>
                <Modal.Header closeButton>
                <Modal.Title>
                    { g('REGISTER_MODAL_HEADER_WARNING') }
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <strong>{email}</strong>
                    <div>{ g('REGISTER_MODAL_PHONE_WARNING') }</div>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={ () => onCloseAlready() }>{g('CLOSE')}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Register;
