import React from 'react'

import FullScreen from '~/containers/entity/thumnail/FullScreen'

class Enlarge extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hoverClose: false,
            hoverImage: false,
            hoverPost: false,
            hoverFullScreen: false,
            openFullScreen: false,
            hoverRight: false,
            hoverLeft: false,
        }
    }
    close(){
        if(!this.state.hoverImage && !this.state.hoverPost && !this.state.openFullScreen)
            this.props.close()
    }
    render(){
        const { TITLE, FULL_SCREEN,
            height, width, close, left, right,
            images, index, imgHeight, imgWidth, } = this.props
        const src = images[index]
        const ratio = imgWidth / imgHeight
        const myHeight = Math.max(400, height - 44)
        const myWidth = Math.max(900, width - 80)
        const newImgWidth = Math.min(Math.min(imgHeight, myHeight) * ratio, myWidth - 400)
        const newImgHeight = Math.min(Math.min(imgWidth, myWidth - 400 ) / ratio, myHeight)
        const blackWidth = Math.max(500, Math.min(myWidth - 400, newImgWidth + 200 ))
        return(
            <div onClick={() => this.close()}
                style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: height,
                width: width,
                backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
                <div
                    style={{ right: 0, top : 0,
                        padding: 10,
                        position: 'absolute', width: 40, height: 40 }}
                    className="btn btn-transperant"
                    onMouseOver={() => this.setState({ hoverClose: true })}
                    onMouseLeave={() => this.setState({ hoverClose: false })}>
                    <img style={{
                        width: 20,
                        height: 20,
                        opacity: this.state.hoverClose?1:0.3}}
                        src="/images/close.svg"/>
                </div>
                <div
                    onMouseOver={() => this.setState({ hoverImage: true })}
                    onMouseLeave={() => this.setState({ hoverImage: false })}
                    style={{
                    backgroundColor: 'black',
                    position: 'absolute',
                    left: (width - blackWidth - 400 )/2,
                    top: 22,
                    width: blackWidth,
                    height: myHeight }}>
                    <img src={src} style={{
                        maxWidth: newImgWidth,
                        maxHeight: newImgHeight,
                        marginTop: (myHeight - newImgHeight)/2,
                        marginLeft: (blackWidth - newImgWidth )/2
                    }}/>
                    {this.state.hoverImage &&
                        <div onClick={() => close()}
                            style={{ left: 0, top : 0,
                                paddingTop: 10,
                                position: 'absolute', height: 80 }}
                            className="btn"
                            onMouseOver={() => this.setState({ hoverTitle: true })}
                            onMouseLeave={() => this.setState({ hoverTitle: false })}>
                            <span style={{ color: 'white',
                                textShadow: '1px 1px 2px #000000',
                                opacity: this.state.hoverTitle?1:0.5 }}>
                                {TITLE}
                            </span>
                        </div>
                    }
                    {this.state.hoverImage &&
                        <div className="btn"
                            style={{
                            right: 5,
                            top: (myHeight - 80)/2,
                            color: 'white',
                            position: 'absolute',
                            opacity: this.state.hoverRight?1:0.5,
                            }}
                            onMouseOver={() => this.setState({ hoverRight: true })}
                            onMouseLeave={() => this.setState({ hoverRight: false })}
                            onClick={() => right()}>
                            <span style={{ fontSize : 40, textShadow: '1px 1px 2px #000000',}}
                                className="glyphicon glyphicon-menu-right">
                            </span>
                        </div>
                    }
                    {this.state.hoverImage &&
                        <div className="btn"
                            style={{
                                left: 5,
                                top: (myHeight - 80)/2,
                                color: 'white',
                                position: 'absolute',
                                opacity: this.state.hoverLeft?1:0.5,
                            }}
                            onMouseOver={() => this.setState({ hoverLeft: true })}
                            onMouseLeave={() => this.setState({ hoverLeft: false })}
                            onClick={() => left()}>
                            <span style={{ fontSize : 40, textShadow: '1px 1px 2px #000000'}}
                                className="glyphicon glyphicon-menu-left">
                            </span>
                        </div>
                    }
                    {this.state.hoverImage &&
                        <div className="btn"
                            style={{
                            height: 80,
                            top: 0,
                            paddingTop: 10,
                            right: 5, color: 'white',
                            position: 'absolute',
                            opacity: this.state.hoverFullScreen?1:0.5,
                            }}
                            onMouseOver={() => this.setState({ hoverFullScreen: true })}
                            onMouseLeave={() => this.setState({ hoverFullScreen: false })}
                            onClick={() => this.setState({ openFullScreen: true })}>
                            <span style={{ fontSize : 14, textShadow: '1px 1px 2px #000000'}}>
                                {FULL_SCREEN}
                            </span>
                        </div>
                    }
                </div>
                <div
                    onMouseOver={() => this.setState({ hoverPost: true })}
                    onMouseLeave={() => this.setState({ hoverPost: false })}
                    style={{
                    top: 22,
                    right: (width - blackWidth - 400) / 2,
                    position: 'absolute',
                    width: 400,
                    height: myHeight,
                    backgroundColor: 'white'}}>
                </div>
                {this.state.openFullScreen &&
                    <FullScreen close={() => this.setState({ openFullScreen: false })}
                        TITLE={src}
                        imgHeight={imgHeight}
                        imgWidth={imgWidth}
                        src={src}/>
                }
            </div>
        )
    }
}

export default Enlarge
