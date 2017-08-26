import React from 'react'
import { Modal } from 'react-bootstrap'

class accountLogin extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let account
        let password
        const { login } = this.props
        return (
          <div className="modal-container">
            <Modal show={true} style={{height: 600, width: 500, marginLeft: '35%', marginTop: '5%'}}>
                <Modal.Body>
                <div style={{marginLeft: '15%', marginBottom: 30, marginTop: 30}}>
                    <img src="/images-admin/kajkai.png" style={{width: 60, height: 60, marginRight: 10}}/>
                    <label><p style={{fontSize: 18}}>KAJKAI ADMINISTRATION</p></label>
                </div>
                    <div style={{width: 300, height: 200, marginLeft: '15%'}}>
                        <form onSubmit={e => {
                            e.preventDefault()
                            if (account.value.trim() != '' && password.value.trim() != '') {
                                login(account.value.trim(), password.value.trim())
                            }
                        }}>
                            <input ref={ref => account = ref} className="form-control" type="text" placeholder="Account" style={{height: 40, textAlign: 'center'}}/>
                            <input ref={ref => password = ref} className="form-control" type="password" placeholder="Password" style={{height: 40, marginTop: 10, textAlign: 'center'}}/>

                            <button className="btn btn-primary" type="submit" style={{float: 'right', marginTop: 25, width: "100%", height: 40}}>LOGIN</button>
                            <span className="text-help">
                            </span>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
          </div>
        )
    }
}

export default accountLogin
