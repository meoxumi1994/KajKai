import React from 'react'

import BasicInput from '~/containers/entity/input/BasicInput'

const TextImage = ({ id, onChangeBasicInput}) => {
    return(
        <div>
            <img src='./images/avatardefault.png' style={{ float: 'right', width: 250, height: 250 }}/>
            <div style={{ marginRight: 250 }}>
                <BasicInput id={id} minRows={12} onChange={onChangeBasicInput}/>
            </div>
        </div>
    )
}

export default TextImage
