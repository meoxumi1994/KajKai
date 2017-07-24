import React from 'react'

const RiseUp = ({ src, style, number }) => {
    if(!number){
        return(
            <div>
                <img src={src} width={style.width} height={style.height}/>
            </div>
        )
    }
    return(
        <div style={{ width: style.width, height: style.height }}>
            <small  style={{
                position: 'absolute',
                marginLeft: style.width - style.imgWidth,
                fontSize: 12,
                border: '1px solid #ffffff',
                borderRadius: '3px',
                backgroundColor: '#BB0F23',
                color: 'white',
                padding: '0px 1px 0px 1px'
            }}>{"+"+number}</small>
            <img src={src} style={{
                marginTop: (style.height - style.imgHeight)/2,
                marginLeft: (style.width - style.imgWidth)/2,
                width: number?(style.imgWidth+2):style.imgWidth,
                height: number?(style.imgHeight+2):style.imgHeight,
            }}/>
        </div>
    )
}

export default RiseUp
