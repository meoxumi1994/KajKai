import React from 'react'

const RiseUp = ({ src, style, number }) => {
    return(
        <div style={{ width: style.width, height: style.height,
            display: 'inline-block', textAlign: 'left'}}>
            {number>0 &&
                <small  style={{
                    position: 'absolute',
                    right: 0,
                    fontSize: 11,
                    borderRadius: '2px',
                    backgroundColor: '#FA3E3E',
                    color: 'white',
                    padding: '0px 3px 0px 3px',
                }}>{number}</small>
            }
            <img src={src} style={{
                margin: 0,
                padding: 0,
                marginTop: (style.height - style.imgHeight)/2,
                marginLeft: (style.width - style.imgWidth)/2,
                width: style.imgWidth,
                height: style.imgHeight,
            }}/>
        </div>
    )
}

export default RiseUp
