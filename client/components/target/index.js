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
        if(!type)
            return <div>NOT FOUND</div>
        return(
            <div className="container-fluid" style={{ overflow: 'scroll', height: window.innerHeight - 46 }}>
                <div className="row">
                    <div className="col-xs-2 " style={{ padding: 0, margin: 0}}>

                    </div>
                    <div className="col-xs-6 " style={{ padding: 0, margin: 0}}>
                        <Middle/>
                    </div>
                    <div className="col-xs-4" style={{ padding: 0, margin: 0}}>

                    </div>
                </div>
            </div>
        )
    }
    componentDidUpdate(){
        const { id, onGetTarget } = this.props
        onGetTarget(id)
    }
}

export default Target
