import React from 'react'

import BasicInput from '~/containers/entity/input/BasicInput'

const Normal = ({ onChangeBasicInput }) => {
    return(
        <div style={{ padding: '5px 8px 0px 12px' }}>
            <BasicInput fontSize={14} onChange={onChangeBasicInput}/>
        </div>
    )
}

export default Normal
