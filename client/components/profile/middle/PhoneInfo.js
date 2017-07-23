import React from 'react';
import { Modal, Button } from 'react-bootstrap'

const PhoneInfo = (props) => {
    let { open, close, isused, issuccess, newvalue,handleChange, code,
    CHECK, PHONE_USED, PHONE_VERIFY, CLOSE, PHONE_FAILED } = props
    return(
        <Modal style={{ marginTop: 120 }} show={open} onHide={() => close()}>
            <Modal.Header closeButton>
            <Modal.Title>{CHECK}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>{newvalue}</div>
                { isused?
                    <div>{PHONE_USED}</div>
                  :issuccess?
                    <div>
                        {PHONE_VERIFY}
                        <input type="text" style={{ display: 'inline' }} className="form-control input-sm"
                            style={{ width: 100 }} value={code}
                            onChange={(e) => handleChange(e.target.value)}
                        />
                    </div>
                  :<div>{PHONE_FAILED}</div>
                }
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => close()}>{CLOSE}</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PhoneInfo
