import React from 'react';
import { Redirect  } from 'react-router-dom';

import Top from '~/containers/store/Top'
import Page from '~/containers/store/Page'

class Store extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { iswhoing, isusername } = this.props
        if(iswhoing)
            return <div></div>
        if(!isusername)
            return <Redirect to='/register'/>
        return(
            <div style={{ width: 1100, margin: 'auto' }}>
                <div style={{ marginLeft: 160, float: 'left', width: 940 }}>
                    <Top/>
                </div>
                <Page/>
            </div>
        )
    }
    componentDidMount(){
        const { onGetStore } = this.props
        onGetStore()
    }
}

export default Store
