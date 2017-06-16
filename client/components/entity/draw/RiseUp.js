import React from 'react'

const RiseUp = ({ src, srcHas, height, width, number }) => {
    if(!number){
        return(
            <div>
                <img src={src} width={width} height={height}/>
            </div>
        )
    }
    return(
        <div>
            <img src={srcHas} width={width} height={height}/>
            <div style={{ marginTop: -30, marginLeft: 12 }}>
                <small  style={{
                    border: '1px solid #ffffff',
                    borderRadius: '3px',
                    backgroundColor: '#BB0F23',
                    color: 'white',
                    padding: '0px 1px 0px 1px'
                }}>{"+"+number}</small>
            </div>
        </div>
    )
}

export default RiseUp
