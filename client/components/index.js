import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import App from '~/containers/App'

const Components = () => (
    <BrowserRouter>
        <div>
            <Route path="*" component={App}/>
        </div>
    </BrowserRouter>
)

export default Components
