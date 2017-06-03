import React from 'react';

import Top from '~/containers/target/middle/Top'
import Post from '~/containers/target/middle/Post'

const Store = ({ id, mainPostId, onCreateStore}) => {
    return(
        <div>
            <Top/>
            <Post id={mainPostId}/>
            <div className="btn btn-default" onClick={() => onCreateStore()}>
                create store
            </div>
        </div>
    )
}

export default Store
