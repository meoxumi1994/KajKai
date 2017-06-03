import React from 'react';

import Top from '~/containers/target/middle/Top'
import Post from '~/containers/target/middle/Post'

const Store = ({ id, onCreateStore}) => {
    return(
        <div>
            <Top/>
            <Post id={id}/>
            <div className="btn btn-default" onClick={() => onCreateStore()}>
                create store
            </div>
        </div>
    )
}

export default Store
