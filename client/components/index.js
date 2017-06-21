import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Cropper from 'react-cropper';
import Cropperjs from 'cropperjs'

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
        this.state = {
            click_capture : false,
            iswaitting: false,
            cowndown: undefined,
        }
    }
    capture(){
        if(this.state.iswaitting) return;
        this.setState({
            iswaitting: true,
            cowndown: 3,
        })
        const myInterval = setInterval(() => {
            this.setState({
                cowndown: this.state.cowndown - 1,
            })
            if(this.state.cowndown == 0){
                clearInterval(myInterval)
                this.setState({
                    click_capture: true,
                    iswaitting: false,
                    cowndown: undefined,
                })
                const imageSrc = this.webcam.getScreenshot()
                const imgData = document.getElementById("imgData")
                imgData.src = imageSrc
            }
        },1000)
    }
    openModal(){
        this.setState({
            click_capture : false,
            iswaitting: false,
            cowndown: undefined,
        })
    }
    onSave(){
        if(this.state.iswaitting) return;
        console.log('onSave')
    }
    render() {
        const { style, TITLE, DESCRIPTION, CAPTURE_PHOTO, SAVE , RETAKE_PHOTO} = this.props
        return (
            <div>
                <button type="button" className="btn btn-default"
                    data-toggle="modal" data-target="#webcamcapture"
                    style={{ width: 380, height: 110 , padding: 0 }}
                    onClick={() => this.openModal()}>
                    <span style={{ fontSize: 17}} className="glyphicon glyphicon-camera"></span>
                    <span style={{ fontSize: 17}} >{" " + TITLE}</span>
                </button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    
                </Modal>
                <div id="webcamcapture" className="modal fade" role="dialog">
                    <div className="modal-dialog" style={{ width: style.width + 16}}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <strong>{TITLE}</strong>
                                <div className="text-muted">{DESCRIPTION}</div>
                            </div>
                            <div className="modal-body" style={{ padding: 8 }}>
                                <Webcam
                                  audio={false}
                                  width={style.width}
                                  height={style.width / 1.32}
                                  ref={ (webcam) => this.webcam = webcam }
                                  screenshotFormat="image/jpeg"
                                />
                                <div style={{
                                    position: 'absolute',
                                    // visibility: (!this.state.iswaitting && this.state.click_capture)?'visible':'hidden'
                                    marginTop: - style.width / 1.32 - 3,
                                    paddingTop: 140,
                                }}>
                                    <strong style={{
                                        marginLeft: style.width / 2,
                                        fontSize: 30,
                                        textShadow: '1px 1px 0px #000000',
                                        color: 'white'}}>
                                        {this.state.cowndown}
                                    </strong>
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    // visibility: (!this.state.iswaitting && this.state.click_capture)?'visible':'hidden'
                                    marginTop: - style.width / 1.32 - 3
                                }}>
                                    <img id="imgData"
                                        style={{
                                            width: style.width,
                                            visibility: (!this.state.iswaitting && this.state.click_capture)?'visible':'hidden'
                                        }}/>
                                </div>
                            </div>
                            {this.state.click_capture?
                                <div className="modal-footer">
                                    <div className="btn btn-sm btn-default"
                                        disabled={this.state.iswaitting}
                                            style={{ backgroundColor: '#BB0F23', borderColor: '#BB0F23',
                                            color: 'white' }}
                                        onClick={() => this.capture()}>{RETAKE_PHOTO}</div>
                                    {!this.state.iswaitting &&
                                        <button className="btn btn-sm btn-default"
                                                style={{ backgroundColor: '#BB0F23', borderColor: '#BB0F23', color: 'white'}}
                                            onClick={() => {this.onSave()}}>
                                            {SAVE}</button>
                                    }
                                </div>
                            :    <div className="modal-footer">
                                    <div className="btn btn-sm btn-default"
                                        disabled={this.state.iswaitting}
                                        style={{ backgroundColor: '#BB0F23', borderColor: '#BB0F23', color: 'white'}}
                                        onClick={() => this.capture()}>{CAPTURE_PHOTO}</div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

class Croppie extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            first : true,
            cropper_src: "/images/flower001.jpg",
        }
    }
    onZoom(){
        this.refs.cropper.zoomTo(0.1)
    }
    onSave(){
        this.img.src = this.cropper.getCroppedCanvas().toDataURL()
    }
    uploadPhoto(){
        document.getElementById("myinput_file").click()
    }
    readURL(){
        const file = this.refs.imagefile.files[0];
        const reader = new FileReader();
        const url = reader.readAsDataURL(file);
        reader.onloadend = (e) => {
            this.setState({
                cropper_src: reader.result
            })
            document.getElementById("btn_open_modal").click()
        }
    }
    render() {
        const { style, TITLE, DESCRIPTION} = this.props
        return (
            <div>
                <button type="button" className="btn btn-default"
                    style={{ width: 380, height: 110 , padding: 0 }}
                    onClick={() => this.uploadPhoto()}
                    >
                    <span style={{ fontSize: 17}} className="glyphicon glyphicon-plus"></span>
                    <span style={{ fontSize: 17}} >{" " + TITLE}</span>
                </button>
                <input
                    onChange={() => this.readURL()}
                    ref="imagefile"
                    style={{
                    position: 'absolute',
                    visibility: 'hidden',
                    width: 0,
                    height: 0,
                }} accept="image/*" type="file" id="myinput_file"/>
                <button id="btn_open_modal" type="button" className="btn btn-default"
                    data-toggle="modal" data-target="#croppie"
                    style={{ width: 0, height: 0 , padding: 0 }}
                    ></button>
                <div id="croppie" className="modal fade" role="dialog">
                    <div className="modal-dialog" style={{ width: style.width + 2 }}>
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <strong>{TITLE}</strong>
                          </div>
                          <div className="modal-body" style={{ padding: 0 }}>
                              {/* <img ref={(imgcropper) => this.imgcropper = imgcropper }/> */}
                              {/* <Croppii ref="cropper"/> */}
                              <Cropper
                                  viewMode= {1}
                                  dragMode= 'move'
                                  src={this.state.cropper_src}
                                  aspectRatio= {1}
                                  minContainerWidth = {this.props.style.width}
                                  minContainerHeight =  {this.props.style.height}
                                  guides = {true}
                                  modal = {true}
                                  cropBoxMovable = {false}
                                  cropBoxResizable = {false}
                                  background = {false}
                                  autoCropArea = {1}
                              />
                          </div>
                          <div style={{ paddingLeft: 20 }}>
                              {DESCRIPTION}
                              <img ref={(img) => this.img = img }/>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-sm btn-default" data-dismiss="modal">Cancel</button>
                              <div className="btn btn-sm btn-default"
                                  style={{ backgroundColor: '#BB0F23', borderColor: '#BB0F23', color: 'white'}}
                                  onClick={() => this.onSave()}> Save </div>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
        );
    }
}

class KeepImage extends React.Component {
    constructor(props){
        super(props)
    }
    uploadPhoto(){
        document.getElementById("myinput_file").click()
    }
    render(){
        const { TITLE, UPLOAD_PHOTO, TAKE_PHOTO, SUGGEST_PHOTO } = this.props
        return(
            <div>
                <button type="button" className="btn btn-info btn-lg"
                    data-toggle="modal" data-target="#keepimage">Open Modal</button>
                <div id="keepimage" className="modal fade" role="dialog">
                    <div className="modal-dialog" style={{ width: 784, height: '100%'}}>
                        <div className="modal-content">
                            <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal">&times;</button>
                              <strong>{TITLE}</strong>
                            </div>
                            <div className="modal-body" style={{ padding: 8 }}>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col col-xs-6" style={{ padding: 0}}>
                                            <Croppie
                                                DESCRIPTION={'scroll to zoom in and zoom out'}
                                                TITLE="Upload Photo"
                                                src="/images/flower005.jpg"
                                                style={{ width: 780, height: 440 }} />
                                        </div>
                                        <div className="col col-xs-6" style={{ padding: 0}}>
                                            <WebcamCapture
                                                TITLE='Take Photo'
                                                DESCRIPTION='Your current profile picture is always public.'
                                                CAPTURE_PHOTO='Capture Photo'
                                                RETAKE_PHOTO='Retake Photo'
                                                SAVE='Save'
                                                style={{ width: 440 }}/>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ padding: 8 }}>
                                    <span className="text-muted"
                                        fontSize={17}>{SUGGEST_PHOTO}</span>
                                </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-sm btn-default" data-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const Compp = ({}) => (
    <div>
        {/* <Carousel style={{ width: 260, height: 260 }}
            images={["/images/flower001.jpg", "/images/flower002.jpg", "/images/flower004.jpg"]}
            onClick={() => console.log('onClick')}
            textChange="Add photo"
            onedit={true}/> */}

        {/* <Camera style={{ width: 170, height: 170 }}
            src="/images/flower001.jpg"
            onClick={() => console.log('onClick')}
            textChange="Add photo"
        /> */}

        <KeepImage
            TITLE='Add Photo'
            UPLOAD_PHOTO='Upload Photo'
            TAKE_PHOTO='Take Photo'
            SUGGEST_PHOTO='Suggest Photo'/>
    </div>
)

export default Compp
