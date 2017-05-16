import React from 'react';
import { Redirect } from 'react-router-dom'

import Left from '~/containers/store/Left'
import Middle from '~/containers/store/middle'
import Right from '~/containers/store/Right'

class Store extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { index } = this.props
        if(index == undefined)
            return <div></div>
        return(
            <div className="container-fluid" style={{ overflow: 'auto', height: window.innerHeight - 46 }}>
                <div className="row">
                    <div className="col-xs-2" style={{ padding:  0, margin:0, position: 'absolute', width: 180 }}>
                        <Left/>
                    </div>
                    <div className="col-xs-6" style={{ padding:  0, marginLeft: 180 }}>
                        <Middle/>
                    </div>
                    <div className="col-xs-3" style={{ padding:  0, margin:0,
                        position: 'absolute', right: 0, width: 350}}>
                        <Right/>
                    </div>
                </div>
            </div>
        )
    }
    // componentDidUpdate(){
    //     const {isusername} = this.props;
    //     if(!isusername)
    //         browserHistory.push('/register')
    // }
    // componentDidMount(){
    //     const {isusername} = this.props;
    //     if(!isusername)
    //         browserHistory.push('/register')
    // }
}

export default Store
