import React from 'react';
import Small from './Small';

const List = (props) => (
    <div>
        <div className="list-group" >
            <Small {...props}/>
            <Small {...props}/>
            <Small {...props}/>
            <Small {...props}/>
            <Small {...props}/>
            <Small {...props}/>
        </div>
    </div>
)

export default List
