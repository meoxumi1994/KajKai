import React from 'react'
import { Router, Route, hashHistory , browserHistory } from 'react-router'

import BarScreenContainer from '~/containers/BarScreenContainer'

class App extends React.Component {
    constructor(props){
        super(props)
    }
    componentClicked(){

    }
    render(){
        return(
            <div style={{ minWidth: 990, minHeight: 700 }}>
                <BarScreenContainer/>
                <hr style={{margin: 0}}></hr>
                { this.props.children }
            </div>
        )
    }
    componentDidMount(){
        this.props.onWho();
    }
}

export default App
