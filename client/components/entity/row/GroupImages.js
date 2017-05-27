import React from 'react'

const GroupImages = ({}) => {
    return(
        <div style={{ width: 515 }}>
            <img src='./images/default.png'
            style={{ position: 'relative', padding: '5px 0px 5px 5px', width: 250, height: 250, display: 'inline' }}/>
            <img src='./images/default.png'
            style={{ position: 'absolute', padding: '5px 0px 5px 5px', width: 250, height: 250 }}/>
        </div>
    )
}

export default GroupImages
