import React from 'react'

class OneImage extends React.Component {
    constructor(props){
        super(props)
        this.state = { hover: false }
    }
    render(){
        const { isTop, style, src, onClick, ADD_PHOTO } = this.props
        return(
            <div
                className ="btn"
                style={{ padding: 0 }}
                onMouseOver={() => this.setState({ hover: true })}
                onMouseLeave={() => this.setState({ hover: false })}
                onClick={() => {
                    this.setState({ hover: false })
                    onClick()
                }}>
                <img src={src} style={{ width: style.width, height: style.height }}/>
                {this.state.hover ?
                    <div style={{
                        textAlign: 'left',
                        position: 'absolute',
                        width: style.width,
                        opacity: 0.6,
                        top: isTop?0:undefined,
                        marginTop: isTop?0:(- 16 - style.height / 8),
                        backgroundColor: '#000000' }}>
                        <img src="/images/camera.svg" style={{ margin: 8 , height: style.height / 8 }}/>
                        <span style={{ marginLeft: 8, fontSize: 12, color: 'white'}}>{ADD_PHOTO}</span>
                    </div>
                :   <div  style={{
                        textAlign: 'left',
                        position: 'absolute',
                        top: isTop?0:undefined,
                        marginTop: isTop?0:(- 16 - style.height / 8), }}>
                        <img src="/images/camera.svg" style={{ margin: 12 ,height: style.height / 10 }}/>
                    </div>
                }
            </div>
        )

    }
}

export default OneImage
