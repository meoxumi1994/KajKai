import React from 'react';
import { Redirect  } from 'react-router-dom';

import Middle from '~/containers/target/middle'

class Target extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        let { iswhoing, isusername, type } = this.props
        if(iswhoing)
            return <div></div>
        if(!isusername)
            return <Redirect to='/register'/>
        // if(!type)
        //     return <div>NOT FOUND</div>
        return(
            <div style={{ width: 1050, margin: 'auto'}}>
                <div>
                    <Middle location = {this.props.location}/>
                </div>
            </div>
        )
    }
    componentDidMount(){
        const { onGetTarget } = this.props
        onGetTarget()
    }
}

export default Target
