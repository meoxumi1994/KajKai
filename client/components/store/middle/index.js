import React from 'react'
import textarea from 'react-textarea-autosize';

import MainPost from '~/containers/store/middle/MainPost'
import Top from '~/containers/store/middle/Top'
import Info from '~/containers/store/middle/Info'

const Middle = ({}) => {
    return(
        <div className="container-fluid">
            {/* <MainPost/> */}
            <Top/>
            <Info/>
        </div>
    )
}

export default Middle
