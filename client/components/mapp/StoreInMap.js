import React from 'react';
import Small from './Small';

import Status from './status/Status.js';

const StoreInMap = (props) => {
    return (
        <div className="panel panel-default" style={{ overflow: 'scroll', margin: 0,padding: 0,height: window.innerHeight - 46 }} >
            <div className="btn btn-default btn-sm" style={{ float: 'right', whiteSpace: 'nowrap'}}
                onClick = { ()=> props.changeScreenLeft() }
                >
                <i className="glyphicon glyphicon-remove"></i>
            </div>
            <Status/>
        </div>
    )
}

export default StoreInMap
