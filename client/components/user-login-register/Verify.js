import React from 'react';

const Verify = ({ g, onBackRegisterClick }) =>{
    return (
        <div>
            <h3>{ g('CHECK') }</h3>
            { g('PLEASE_GO_EMAIL_TO_CHECK') }
            <hr style={{ borderColor: "#333333"}}/>
            <div className='btn' style={{ margin:0, padding: 0}}>
                <a>gửi lại email xác nhận</a>
            </div>
            <div className='btn' style={{ marginLeft: 10, padding: 0}} onClick={() => onBackRegisterClick()}>
                <a>quay trở lại</a>
            </div>
        </div>
    )
}

export default Verify;
