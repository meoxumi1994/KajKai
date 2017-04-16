import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './home/Home';
import Map from './Map';
import BarScreen from './BarScreen';
import History from './home/history/History';
import UserRegister from './UserRegister';
import Store from './store/Store';


const App = () => (
    <div>
        <Router>
            <div>
                <BarScreen/>
                <hr style={{margin: 0}}></hr>
                <Route exact path="/" component={Home}/>
                <Route path="/map" component={Map}/>
                <Route path="/register" component={UserRegister}/>
                <Route path="/store" component={Store}/>
            </div>
        </Router>
    </div>
)

export default App
