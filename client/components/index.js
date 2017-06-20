import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Cropper from 'react-cropper';

import App from '~/containers/App'
import Webcam from 'react-webcam';

class Comp extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const listpost = []
        return(
            <div style={{ height: '100%'}}>
                <div style={{ position: 'fixed', zIndex: 1, right: 0, top: 0, width: '100%', backgroundColor: 'blue', height: 48}}>
                </div>
                <div ref={ (scroll) => this.scroll = scroll }
                    onScroll={(e) => console.log('onScroll',
                    this.scroll.scrollTop,
                    this.sellpost.getBoundingClientRect().bottom - this.scroll.clientHeight - 48 )}
                    style={{ height: 'calc(100% - 48px)', backgroundColor: 'red'}}>
                    <div style={{ position: 'fixed',right: 0, top: 48, height: '100%', width: 280}}>

                    </div>
                    <div style={{ marginRight: 280}}>
                        <div style={{ width: 1100, margin: 'auto', backgroundColor: 'yellow'}}>
                            <div>
                                <div style={{ marginLeft: 170, float: 'left', width: 880}}>
                                    <div classNameName="panel panel-default" style={{ height: 300, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                </div>
                            </div>
                            <div classNameName="row">
                                <div classNameName="col col-xs-2">
                                    123123123
                                </div>
                                <div ref={ sellpost => this.sellpost = sellpost}
                                    classNameName="col col-xs-5">
                                    <div style={{ position: 'fixed' }}>
                                        <div classNameName="panel panel-default" style={{ height: 800,margin: '10px 0px 0px 0px'}}>
                                            123123123
                                        </div>
                                        <div
                                            classNameName="panel panel-default" style={{ height: 800 ,margin: '10px 0px 0px 0px'}}>
                                            123123123
                                        </div>
                                        <div classNameName="panel panel-default" style={{ height: 800,margin: '10px 0px 0px 0px'}}>
                                            123123123
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col col-xs-5">
                                    <div classNameName="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                    <div classNameName="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                    <div classNameName="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                    <div classNameName="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                    <div classNameName="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                    <div classNameName="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                    <div classNameName="panel panel-default" style={{ height: 600, margin: '10px 0px 0px 0px'}}>
                                        123123123
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const Components = () => (
    <BrowserRouter>
        <div>
            <Route path="*" component={App}/>
        </div>
    </BrowserRouter>

)

class Camera extends React.Component {
    constructor(props){
        super(props)
        this.state = { hover: false }
    }
    toggleHover(){
        this.setState({hover: !this.state.hover})
    }
    render(){
        const { style, src, onClick, textChange } = this.props
        return(
            <div
                className ="btn"
                style={{ padding: 0 }}
                onMouseEnter={() => this.toggleHover()}
                onMouseLeave={() => this.toggleHover()}
                onClick={() => { document.getElementById("myinput_file").click(), onClick() } }>
                <input style={{
                    position: 'absolute',
                    visibility: 'hidden',
                    width: 0,
                    height: 0,
                }} accept="image/*" type="file" id="myinput_file"/>
                <img src={src} style={{ width: style.width, height: style.height }}/>
                {this.state.hover ?
                    <div style={{
                        textAlign: 'left',
                        position: 'absolute',
                        zIndex: 1,
                        width: style.width,
                        opacity: 0.8,
                        marginTop: - style.height,
                        backgroundColor: '#000000' }}>
                        <img src="/images/camera.svg" style={{ margin: 8 ,height: style.height / 8 }}/>
                        <span style={{ marginLeft: 8, fontSize: 12, color: 'white'}}>{textChange}</span>
                    </div>
                :   <div  style={{
                        textAlign: 'left',
                        position: 'absolute',
                        zIndex: 1,
                        marginTop: - style.height }}>
                        <img src="/images/camera.svg" style={{ margin: 12 ,height: style.height / 10 }}/>
                    </div>
                }
            </div>
        )

    }
}



class Carousel extends React.Component {
    constructor(props){
        super(props)
        this.state = { hover: false }
    }
    toggleHover(){
        this.setState({hover: !this.state.hover})
    }
    render(){
        const { images, style, onClick, textChange, onedit } = this.props
        return(
            <div className="container-fluid" style={{ width: style.width + 30, height: style.height }}>
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div
                    style={{ padding: 0 }}
                    onMouseEnter={() => this.toggleHover()}
                    onMouseLeave={() => this.toggleHover()}
                    onClick={() => { onClick() } }
                    className="btn carousel-inner">
                    {images.map((item, index) =>
                        <div key={index} className={index?"item":"item active"}>
                          <img key={index} src={item} style={{ width: style.width, height: style.height }}/>
                        </div>
                    )}
                    { (onedit && this.state.hover) ?
                        <div style={{
                            textAlign: 'left',
                            position: 'absolute',
                            zIndex: 1,
                            width: style.width,
                            opacity: 0.8,
                            marginTop: - style.height / 9 - 16,
                            backgroundColor: '#000000' }}>
                            <img src="/images/camera.svg" style={{ margin: 8 ,height: style.height / 9 }}/>
                            <span style={{ marginLeft: 8, fontSize: 12, color: 'white'}}>{textChange}</span>
                        </div>
                    : onedit &&  <div  style={{
                            position: 'absolute',
                            zIndex: 1,
                            textAlign: 'left', marginTop: - style.height / 11 - 16, }}>
                            <img src="/images/camera.svg" style={{ margin: 8 ,height: style.height / 11 }}/>
                        </div>
                    }
                </div>
                {images.length > 1 &&
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                      <span style={{ marginTop: style.height / 2 - 10}} className="glyphicon glyphicon-menu-left"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                }
                {images.length > 1 &&
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                      <span style={{ marginTop: style.height / 2 - 10}} className="glyphicon glyphicon-menu-right"></span>
                      <span className="sr-only">Next</span>
                    </a>
                }
              </div>
            </div>
        )
    }
}

// class ViewModal extends React.Component {
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return(
//
//         )
//     }
// }

class WebcamCapture extends React.Component {
    constructor(props){
        super(props)
    }
    capture(){
        const imageSrc = this.webcam.getScreenshot()
        const imgData = document.getElementById("imgData")
        imgData.src = imageSrc
    }
    render() {
        const { style } = this.props
        return (
          <div>
            <Webcam
              audio={false}
              width={style.width}
              height={style.height}
              ref={ (webcam) => this.webcam = webcam }
              screenshotFormat="image/jpeg"
            />
            <button onClick={() => this.capture() }>Capture photo</button>
            <img id="imgData"/>
          </div>
        );
    }
}

class AlignImage extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { style } = this.props
        return (
            <div>

            </div>
        )
    }
}

class Croppie extends React.Component {
    constructor(props){
        super(props)
    }
    // _crop(){
    //     console.log('crop', )
    // }
    onZoom(){
        this.refs.cropper.zoomTo(2)
    }
    onSave(){
        this.img.src = this.refs.cropper.getCroppedCanvas().toDataURL()
    }
    render() {
        const { style } = this.props
        return (
            <div style={{ width: style.width, backgroundColor: '#F2F2F2'}}>
                <Cropper
                    viewMode={1}
                    ref='cropper'
                    src='https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg'
                    style={{height: style.height, width: style.width }}
                    aspectRatio={1 / 1}
                    guides={false}
                    modal={false}
                    scalable={false}
                    cropBoxMovable={false}
                    cropBoxResizable={false}
                    dragMode='move'
                    background={false}
                    autoCropArea={0.7}
                    // crop={this._crop.bind(this)}
                />
                <div>
                    <div className="btn btn-xs btn-default"
                        onClick={() => this.onSave()}> save </div>
                    <div className="btn btn-xs btn-default"
                        onClick={() => this.onZoom()}> zoom </div>
                </div>
                <div>
                    <img ref={(img) => this.img = img }/>
                </div>
            </div>
        );
    }
}

const Compp = ({}) => (
    <div>
        {/* <Carousel style={{ width: 260, height: 260 }}
            images={["/images/flower001.jpg", "/images/flower002.jpg", "/images/flower004.jpg"]}
            onClick={() => console.log('onClick')}
            textChange="Add photo"
            onedit={true}/>
        <Camera style={{ width: 170, height: 170 }}
            src="/images/flower001.jpg"
            onClick={() => console.log('onClick')}
            textChange="Add photo"
        /> */}
        {/* <WebcamCapture style={{ width: 500, height: 300 }}/> */}
        <Croppie style={{ width: 780, height: 440 }}/>
    </div>
)

export default Compp
