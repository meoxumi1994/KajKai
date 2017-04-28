import React from 'react';

import allString from '../../config/allString'

class UserVerify extends React.Component {
    constructor(props){
        super(props)
    }
    clickBack(){
        this.props.onBackRegisterClick()
    }
    render(){
        let { language } = this.props
        const getlanguage = (lang) => allString.get( language, lang )
        return (
            <div>
                <h3>{ getlanguage('CHECK') }</h3>
                { getlanguage('PLEASE_GO_EMAIL_TO_CHECK') }
                <hr style={{ borderColor: "#333333"}}/>
                <div className='btn' style={{ margin:0, padding: 0}}>
                    <a>gửi lại email xác nhận</a>
                </div>
                <div className='btn' style={{ marginLeft: 10, padding: 0}} onClick={this.clickBack.bind(this)}>
                    <a>quay trở lại</a>
                </div>
            </div>
        )
    }
}

export default UserVerify;
