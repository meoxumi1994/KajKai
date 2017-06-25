import React from 'react'

class FullScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hoverClose: false,
            hoverImage: false,
            hoverFullScreen: false,
            hoverRight: false,
            hoverLeft: false,
            hoverTitle: false,
        }
    }
    render(){
        const { TITLE, height, width, close, left, right, imgWidth, imgHeight, src } = this.props
        const newImgWidth = Math.min(width, Math.min(imgHeight, height) * imgWidth / imgHeight)
        const newImgHeight = Math.min(height, Math.min(imgWidth, width) * imgHeight / imgWidth)
        return(
            <div style={{
                position: 'fixed',
                zIndex: 1,
                top: 0,
                left: 0,
                height: height,
                width: width,
            }}>
                <div onClick={() => close()}
                    style={{ left: 0, top : 0,
                        paddingTop: 20,
                        position: 'absolute', height: 100 }}
                    className="btn btn"
                    onMouseOver={() => this.setState({ hoverTitle: true })}
                    onMouseLeave={() => this.setState({ hoverTitle: false })}>
                    <span style={{ color: 'white', fontSize: 20,
                        textShadow: '1px 1px 2px #000000',
                        opacity: this.state.hoverTitle?1:0.8 }}>
                        {TITLE}
                    </span>
                </div>
                <div onClick={() => close()}
                    style={{ right: 0, top : 0,
                        paddingTop: 20,
                        position: 'absolute', width: 70, height: 100 }}
                    className="btn btn"
                    onMouseOver={() => this.setState({ hoverClose: true })}
                    onMouseLeave={() => this.setState({ hoverClose: false })}>
                    <img style={{
                        width: 19,
                        height: 19,
                        opacity: this.state.hoverClose?1:0.3}}
                        src="/images/close.svg"/>
                </div>
                <div className="btn"
                    style={{
                        right: 5,
                        top: 100,
                        height: height - 200,
                        width: 400,
                        paddingTop: (height - 280)/2,
                        paddingLeft: 300,
                        color: 'white',
                        position: 'absolute',
                        opacity: this.state.hoverRight?1:0.3,
                    }}
                    onMouseOver={() => this.setState({ hoverRight: true })}
                    onMouseLeave={() => this.setState({ hoverRight: false })}
                    onClick={() => right()}>
                    <span style={{ fontSize : 40, textShadow: '1px 1px 2px #000000',}}
                        className="glyphicon glyphicon-menu-right">
                    </span>
                </div>
                <div className="btn"
                    style={{
                        left: 5,
                        top: 100,
                        height: height - 200,
                        width: 400,
                        paddingTop: (height - 280)/2,
                        paddingRight: 300,
                        color: 'white',
                        position: 'absolute',
                        opacity: this.state.hoverLeft?1:0.3,
                    }}
                    onMouseOver={() => this.setState({ hoverLeft: true })}
                    onMouseLeave={() => this.setState({ hoverLeft: false })}
                    onClick={() => left()}>
                    <span style={{ fontSize : 40, textShadow: '1px 1px 2px #000000'}}
                        className="glyphicon glyphicon-menu-left">
                    </span>
                </div>
                <div
                    style={{
                    backgroundColor: 'black',
                    float: 'left',
                    width: width,
                    height: height }}>
                    <img src={src} style={{
                        width: newImgWidth,
                        height: newImgHeight,
                        marginTop: (height - newImgHeight) / 2,
                        marginLeft: (width - newImgWidth) / 2,
                    }}/>
                </div>
            </div>
        )
    }
}

export default FullScreen
