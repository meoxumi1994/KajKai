import React from 'react';
import { Redirect } from 'react-router-dom'

import Left from '~/containers/register-store/Left'
import Right from '~/containers/register-store/Right'


class RegisterStore extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { STORE } = this.props
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
    // componentDidUpdate(){
    //     const { registerStoreOK, isusername, newindex, onOpenStore } = this.props
    //     if(!isusername){
    //         browserHistory.push('/register');
    //     }
    //     if(registerStoreOK){
    //         onOpenStore(newindex)
    //         browserHistory.push('/store');
    //     }
    // }
}

export default RegisterStore
