import React from 'react'

import BasicInput from '~/containers/entity/input/BasicInput'

const Image = ({}) => {
    return(
        <div>
            <img src='./images/avatardefault.png' style={{ float: 'left', width: 250, height: 250 }}/>
        </div>
    )
}

const ImageText = ({ id, onChangeBasicInput}) => {
    return(
        <div>
            <Image/>
            <div style={{ marginLeft: 250 }}>
                <BasicInput id={id} minRows={12} onChange={onChangeBasicInput}/>
            </div>
        </div>
    )
}

export default ImageText
