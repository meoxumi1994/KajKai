import React from 'react'
import { Router, Route, hashHistory , browserHistory } from 'react-router'

import BarScreenContainer from '../containers/BarScreenContainer'

const App = (props) => (
    <div>
        <BarScreenContainer/>
        <hr style={{margin: 0}}></hr>
        { props.children }
    </div>
)

export default App
