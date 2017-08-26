import React from 'react'

import FullScreen from '~/containers/entity/thumnail/FullScreen'
import SellPost from '~/containers/entity/post/SellPost'

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
    componentDidMount(){
        $('#enlargeimage').on('mousewheel DOMMouseScroll', function(e) {
            var scrollTo = null;
            if(e.type === 'mousewheel') {
                scrollTo = (e.originalEvent.wheelDelta * -1);
            }
            else if(e.type === 'DOMMouseScroll') {
                scrollTo = 40 * e.originalEvent.detail;
            }
            scrollTo = scrollTo / 5
            if(scrollTo) {
                e.preventDefault();
                $(this).scrollTop(scrollTo + $(this).scrollTop());
            }
        })
        $('#sellpost').on('mousewheel DOMMouseScroll', function(e) {
            var scrollTo = null;
            if(e.type === 'mousewheel') {
                scrollTo = (e.originalEvent.wheelDelta * -1);
            }
            else if(e.type === 'DOMMouseScroll') {
                scrollTo = 40 * e.originalEvent.detail;
            }
            scrollTo = scrollTo / 5
            if(scrollTo) {
                e.preventDefault();
                $(this).scrollTop(scrollTo + $(this).scrollTop());
            }
        })
    }
    render(){
        const { TITLE, FULL_SCREEN, height, width, close, left, right,
            images, index, imgHeight, imgWidth, sellpostid } = this.props
        const src = images[index]
        const ratio = imgWidth / imgHeight
        const myHeight = Math.max(520, height - 44)
        const myWidth = Math.max(900, width - 80)
        const newImgWidth = Math.min(Math.min(imgHeight, myHeight) * ratio, myWidth - 520)
        const newImgHeight = Math.min(Math.min(imgWidth, myWidth - 520 ) / ratio, myHeight)
        const blackWidth = Math.max(500, Math.min(myWidth - 520, newImgWidth + 200 ))
        return(
            <div onClick={() => this.close()}
                style={{
                position: 'fixed',
                zIndex: 1000,
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
                    id="enlargeimage"
                    onMouseOver={() => this.setState({ hoverImage: true })}
                    onMouseLeave={() => this.setState({ hoverImage: false })}
                    style={{
                    backgroundColor: 'black',
                    position: 'absolute',
                    left: (width - blackWidth - 520 )/2,
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
                            right: 0,
                            height: myHeight - 160,
                            top: 80,
                            width: (blackWidth/2 - 5),
                            color: 'white',
                            position: 'absolute',
                            opacity: this.state.hoverRight?1:0.5,
                            paddingLeft: (blackWidth/2 - 172 ),
                            }}
                            onMouseOver={() => this.setState({ hoverRight: true })}
                            onMouseLeave={() => this.setState({ hoverRight: false })}
                            onClick={() => right()}>
                            <span style={{ fontSize : 40, marginRight: -100, marginTop: (myHeight/2 - 120), textShadow: '1px 1px 2px #000000',}}
                                className="glyphicon glyphicon-menu-right">
                            </span>
                        </div>
                    }
                    {this.state.hoverImage &&
                        <div className="btn"
                            style={{
                                left: 0,
                                width: (blackWidth/2 - 5),
                                height: myHeight - 160,
                                top: 80,
                                color: 'white',
                                position: 'absolute',
                                opacity: this.state.hoverLeft?1:0.5,
                                paddingRight: (blackWidth/2 - 80),
                            }}
                            onMouseOver={() => this.setState({ hoverLeft: true })}
                            onMouseLeave={() => this.setState({ hoverLeft: false })}
                            onClick={() => left()}>
                            <span style={{ fontSize : 40, marginTop: (myHeight/2 - 120), textShadow: '1px 1px 2px #000000'}}
                                className="glyphicon glyphicon-menu-left">
                            </span>
                        </div>
                    }
                    {this.state.hoverImage &&
                        <div className="btn"
                            style={{
                            height: 80,
                            top: 0,
                            paddingTop: 15,
                            right: 5, color: 'white',
                            position: 'absolute',
                            opacity: this.state.hoverFullScreen?1:0.5,
                            }}
                            onMouseOver={() => this.setState({ hoverFullScreen: true })}
                            onMouseLeave={() => this.setState({ hoverFullScreen: false })}
                            onClick={() => this.setState({ openFullScreen: true })}>
                            {/* <span style={{ fontSize : 14, textShadow: '1px 1px 2px #000000'}}>
                                {FULL_SCREEN}
                            </span> */}
                            <img src="/images/fullscreen.svg" width={20} height={20}/>
                        </div>
                    }
                </div>
                <div
                    id="sellpost"
                    onMouseOver={() => this.setState({ hoverPost: true })}
                    onMouseLeave={() => this.setState({ hoverPost: false })}
                    style={{
                    top: 22,
                    right: (width - blackWidth - 520) / 2,
                    position: 'absolute',
                    width: 520,
                    height: myHeight,
                    overflow: 'scroll',
                    backgroundColor: 'white'}}>
                    <SellPost
                        disableClickImage={true}
                        closeBorder={true}
                        id={sellpostid}/>
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
