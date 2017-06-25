import React from 'react'

import Enlarge from '~/containers/entity/thumnail/Enlarge'

class Magic extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hover: false,
            openModal: false,
        }
    }
    render(){
        const { src, openModal, more, style } = this.props
        return(
            <div style={{ ...style, float: 'left'}} >
                <div className="btn"
                    onMouseOver={() => this.setState({ hover: true })}
                    onMouseLeave={() => this.setState({ hover: false })}
                    style={{ ...style, padding: 0 }}
                    onClick={() => openModal() }>
                    <img src={src}
                        style={{
                        width: '100%',
                        height: '100%',
                        opacity: (more || this.state.hover)?0.6:1,
                        }}/>
                    {more &&
                        <span style={{
                            marginTop: 63,
                            marginLeft: -107,
                            color: 'white',
                            fontSize: 37,
                            textShadow: '2px 2px 4px #000000',
                            position: 'absolute', }}>
                            {"+"+ more}
                        </span>
                    }
                </div>
            </div>
        )
    }
}

export default Magic
