import React from 'react'
import { Router, Route, hashHistory , browserHistory } from 'react-router'

import BarScreenContainer from '../containers/BarScreenContainer'


class App extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
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
