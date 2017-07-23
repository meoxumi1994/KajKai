import React from 'React';

const ShowInput = ({ content, fontSize }) => {
    return(
        <div>
            <div style={{ fontSize: fontSize }}>
                {content.split('\n').map((item, index) => {
                    if(item) return <div key={index}>{item}</div>
                    return <br key={index}/>
                })}
            </div>
        </div>
    )
}

export default ShowInput
