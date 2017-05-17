import React from 'react';
import { Redirect } from 'react-router-dom'

import Left from '~/containers/register-store/Left'
import Right from '~/containers/register-store/Right'

const RegisterStore = ({ STORE, isusername, iswhoing, onOpenStore, registerStoreOK }) => {
    if(iswhoing)
        return <div></div>
    if(!isusername)
        return <Redirect to="/register"/>
    if(registerStoreOK){
        return <Redirect to="/store"/>
    }
    return(
        <div className="container-fluid">
            <div className = "row">
                <div className = "col-xs-6"
                    style={{ minHeight: 700-146, height: window.innerHeight - 146, minwidth: 460, backgroundColor: 'white'}}>
                    <Left/>
                </div>
                <div className = "col-xs-6"
                    style={{ minHeight: 700-146, height: window.innerHeight - 146, minwidth: 460 }}>
                    <Right/>
                </div>
            </div>
        </div>
    )
}

export default RegisterStore
