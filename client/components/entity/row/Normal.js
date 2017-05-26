import React from 'react'

import BasicInput from '~/containers/entity/input/BasicInput'

const Normal = ({ id, onChangeBasicInput }) => {
    console.log('Normal', id)
    return(
        <div style={{ padding: '5px 8px 0px 12px' }}>
            <BasicInput id={id} fontSize={14} onChange={onChangeBasicInput}/>
        </div>
    )
}

export default Normal
