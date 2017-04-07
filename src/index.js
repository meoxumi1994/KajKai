import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Button } from 'react-bootstrap'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

render((
    <App/>
), document.getElementById('app'));
