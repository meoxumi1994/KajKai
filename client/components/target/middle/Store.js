import React from 'react';

import Top from '~/containers/target/middle/Top'
import MainPost from '~/containers/target/middle/MainPost'

const Store = (props) => {
    return(
        <div>
            <Top {...props}/>
            <MainPost/>
        </div>
    )
}

export default Store
