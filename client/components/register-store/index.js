import React from 'react';
import { Redirect } from 'react-router-dom'

import Left from '~/containers/register-store/Left'
import Right from '~/containers/register-store/Right'

class RegisterStore extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const {
            STORE,
            CREATE_STORE,
            CREATE_STORE_DESCRIPTION,
            CREATE_STORE_DESCRIPTION_0,
            CREATE_STORE_DESCRIPTION_1,
            CREATE_STORE_DESCRIPTION_2,
            CREATE_STORE_DESCRIPTION_3,
            CREATE_STORE_DESCRIPTION_4,
            CREATE_STORE_DESCRIPTION_5,
            isusername, iswhoing, onOpenStore, registerStoreOK, onGetCategory } = this.props
        if(iswhoing)
            return <div></div>
        if(!isusername)
            return <Redirect to="/register"/>
        if(registerStoreOK){
            return <Redirect to="/store"/>
        }
        return(
            <div style={{ marginLeft: 200, marginRight: 200, height: '100%'}}>
                <div style={{ padding: 15, backgroundColor: 'white', width: 700, height: '100%'}}>
                    <div style={{ fontSize: 25 }}>Create A New Store</div>
                    <div>{CREATE_STORE_DESCRIPTION}:</div>
                    <div style={{ fontSize: 13 }}>. {CREATE_STORE_DESCRIPTION_0}</div>
                    <div style={{ fontSize: 13 }}>. {CREATE_STORE_DESCRIPTION_1}</div>
                    <div style={{ fontSize: 13 }}>. {CREATE_STORE_DESCRIPTION_2}</div>
                    <div style={{ marginTop: 10, width: 340 }}>
                        <div style={{ fontSize: 13 }}>. {CREATE_STORE_DESCRIPTION_4}</div>
                        <div style={{ fontSize: 13 }}>. {CREATE_STORE_DESCRIPTION_5}</div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.onGetCategory();
    }
}

export default RegisterStore
