import React from 'react'

import Enlarge from '~/containers/entity/thumnail/Enlarge'

import DisplayImage from '~/components/entity/thumnail/DisplayImage'

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
            <div className="btn"
                onMouseOver={() => this.setState({ hover: true })}
                onMouseLeave={() => this.setState({ hover: false })}
                style={{ ...style,
                    padding: 0,
                }}
                onClick={() => openModal() }>
                {more &&
                    <span style={{
                        marginTop: style.width/2 - 30,
                        color: 'white',
                        marginLeft: -15,
                        zIndex: 1,
                        fontSize: 37,
                        textShadow: '0px 0px 4px #000000',
                        position: 'absolute', }}>
                        {"+"+ more}
                    </span>
                }
                <div style={{ opacity: (this.state.hover)?0.6:1, }}>
                    <DisplayImage
                        src={src}
                        width={style.width-1}
                        height={style.height-1}
                    />
                </div>
            </div>
        )
    }
}

export default Magic
