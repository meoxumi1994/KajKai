import React from 'react'

class Tooltip extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { contents } = this.props
        return(
            <div style={{
                borderRadius: 2.5,
                padding: '5px 10px 5px 10px',
                backgroundColor: '#282828',
                color: 'white',
                position: 'absolute',
                marginLeft: -10,
                marginTop: -(16.8*contents.length+35),
                fontSize: 12.5,
            }}>
                {contents.map((item,index) =>
                    <div key={index}>{item}</div>
                )}
                <img style={{
                        position: 'absolute',
                        left: 7,
                        bot: 0,
                    }}
                    width={18}
                    height={9}
                    src="/images/arrowdown.svg"
                />
            </div>
        )
    }
}

export default Tooltip
