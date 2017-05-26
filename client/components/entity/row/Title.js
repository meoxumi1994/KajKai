import React from 'react'

import BasicInput from '~/containers/entity/input/BasicInput'

const Title = ({ id, onChangeBasicInput }) => {
    console.log('Title', id)
    return(
        <div style={{ padding: '5px 8px 0px 8px' }}>
            <BasicInput id={id} fontSize={17} onChange={onChangeBasicInput}/>
        </div>
    )
}

export default Title
