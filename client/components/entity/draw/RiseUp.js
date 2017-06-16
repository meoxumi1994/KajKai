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
            <div style={{ marginTop: -32, marginLeft: 15 }}>
                <small  style={{
                    border: '1px solid #888888',
                    borderRadius: '3px',
                    backgroundColor: 'white',
                    color: '#888888',
                    padding: '0px 1px 0px 1px'
                }}>{number}</small>
            </div>
        </div>
    )
}

export default RiseUp
