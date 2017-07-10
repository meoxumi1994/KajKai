import React from 'react'

import Enlarge from '~/containers/entity/thumnail/Enlarge'
import DisplayImage from '~/components/entity/thumnail/DisplayImage'

class Carousel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hover: false,
            openModal: false,
        }
    }
    openModal(index){
        const img = new Image();
        const that = this
        img.onload = function() {
            that.setState({
                openModal: true,
                imgHeight: this.height,
                imgWidth: this.width,
                index: index,
            })
        }
        img.src = this.props.images[index];
    }
    render(){
        const { EDIT, canEdit, images, style, onEdit, textChange } = this.props
        return(
            <div style={{ width: style.width, height: style.height }}>
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div
                    style={{ padding: 0, borderRadius: 0, opacity: this.state.hover?0.5:1 }}
                    onMouseOver={() => this.setState({ hover: true })}
                    onMouseLeave={() => this.setState({ hover: false })}
                    onClick={() => {
                        if(canEdit)
                            onEdit()
                        else
                            this.openModal(0)
                    }}
                    className="btn carousel-inner">
                    {images.map((item, index) =>
                        <div key={index} className={index?"item":"item active"}>
                          <DisplayImage
                              src={item}
                              width={style.width}
                              height={style.height}/>
                        </div>
                    )}
                    {/* { (canEdit && onedit && this.state.hover) ?
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
                    : (canEdit && onedit ) && <div  style={{
                            position: 'absolute',
                            zIndex: 1,
                            textAlign: 'left', marginTop: - style.height / 11 - 16, }}>
                            <img src="/images/camera.svg" style={{ margin: 8 ,height: style.height / 11 }}/>
                        </div>
                    } */}
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
              {/* {canEdit &&
                  <div className="btn"
                      onMouseOver={() => this.setState({ hoverEdit: true })}
                      onMouseLeave={() => this.setState({ hoverEdit: false })}
                      onClick={() => onEdit()}
                      style={{
                          position: 'absolute',
                          left: style.width - 50 ,
                          top: 4,
                          opacity: this.state.hoverEdit?1:0.8,
                      }}>
                      <span style={{ color: 'white', textShadow: '1px 1px 0px #000000'}}>
                          {EDIT}
                      </span>
                  </div>
              } */}
              {this.state.openModal &&
                  <Enlarge close={() => this.setState({ openModal: false })}
                      imgHeight={this.state.imgHeight}
                      imgWidth={this.state.imgWidth}
                      images={images}
                      index={this.state.index}
                      left={() => this.openModal((this.state.index + images.length - 1 ) % images.length)}
                      right={() => this.openModal((this.state.index + images.length + 1 ) % images.length)}
                  />
              }
            </div>
        )
    }
}

export default Carousel
