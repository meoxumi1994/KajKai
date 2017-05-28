import React from 'react'

const ShowTextArea = ({ content, fontSize }) => {
    return(
        <div style={{ margin: '3px 3px 8px 3px', fontSize: fontSize }}>
            {content.split('\n').map((item, index) => {
                if(item) return <div key={index}>{item}</div>
                return <br key={index}/>
            })}
        </div>
    )
}

export default ShowTextArea
