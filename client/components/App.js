import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './home/Home';
import Map from './mapp/Map';

import BarScreen from './BarScreen';
import History from './home/history/History';
import UserRegister from './UserRegister';
import Store from './store/Store';


var ages = [1,2,3,4];

console.log(ages.filter( (age) => age > 2 ));

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
