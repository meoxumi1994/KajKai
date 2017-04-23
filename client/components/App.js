import React from 'react'
import { Router, Route, hashHistory , browserHistory} from 'react-router'

import BarScreen from './BarScreen'

const App = (props) => (
    <div>
        <BarScreen/>
        <hr style={{margin: 0}}></hr>
        { props.children }
    </div>
)

export default App
