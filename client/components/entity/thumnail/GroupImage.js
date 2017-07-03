import React from 'react'

import Magic from '~/containers/entity/thumnail/Magic'
import Enlarge from '~/containers/entity/thumnail/Enlarge'
import classNames from 'classnames'

class GroupImage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hoverEdit: false,
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
                index: index
            })
        }
        img.src = this.props.images[index];
    }
    render(){
        const { EDIT, onEdit, images, canEdit, width, height } = this.props
        const Group = () => {
            switch (images.length) {
                case 1:
                    return(
                        <div>
                            <Magic src={images[0]} openModal={() => this.openModal(0)}
                                style={{ width: width, height: height }}/>
                        </div>
                    )
                case 2:
                    return(
                        <div>
                            <Magic src={images[0]} openModal={() => this.openModal(0)}
                                style={{ width: width/2, height: height }}/>
                            <Magic src={images[1]} openModal={() => this.openModal(1)}
                                style={{ width: width/2, height: height }}/>
                        </div>
                    )
                case 3:
                    return(
                        <div style={{ width: 520 }}>
                            <Magic src={images[0]} openModal={() => this.openModal(0)}
                                style={{ width: width, height: height*3/5 }}/>
                            <Magic src={images[1]} openModal={() => this.openModal(1)}
                                style={{ height: height*2/5, width: width/2 }}/>
                            <Magic src={images[2]} openModal={() => this.openModal(2)}
                                style={{ height: height*2/5, width: width/2 }}/>
                        </div>
                    )
                case 4:
                    return(
                        <div style={{ width: 520 }}>
                            <Magic src={images[0]} openModal={() => this.openModal(0)}
                                style={{ height: height/2, width: width/2 }}/>
                            <Magic src={images[1]} openModal={() => this.openModal(1)}
                                style={{ height: height/2, width: width/2 }}/>
                            <Magic src={images[2]} openModal={() => this.openModal(2)}
                                style={{ height: height/2, width: width/2 }}/>
                            <Magic src={images[3]} openModal={() => this.openModal(3)}
                                style={{ height: height/2, width: width/2 }}/>
                        </div>
                    )
                case 5:
                    return(
                        <div style={{ width: 520 }}>
                            <Magic src={images[0]} openModal={() => this.openModal(0)}
                                style={{ height: height*2/3, width: width/2 }}/>
                            <Magic src={images[1]} openModal={() => this.openModal(1)}
                                style={{ height: height*2/3, width: width/2 }}/>
                            <Magic src={images[2]} openModal={() => this.openModal(2)}
                                style={{ height: width/3, width: width/3 }}/>
                            <Magic src={images[3]} openModal={() => this.openModal(3)}
                                style={{ height: width/3, width: width/3 }}/>
                            <Magic src={images[4]} openModal={() => this.openModal(4)}
                                style={{ height: width/3, width: width/3 }}/>
                        </div>
                    )
                default:
                    return(
                        <div style={{ width: 520 }}>
                            <Magic src={images[0]} openModal={() => this.openModal(0)}
                                style={{ height: height*2/3, width: width/2 }}/>
                            <Magic src={images[1]} openModal={() => this.openModal(1)}
                                style={{ height: height*2/3, width: width/2 }}/>
                            <Magic src={images[2]} openModal={() => this.openModal(2)}
                                style={{ height: width/3, width: width/3 }}/>
                            <Magic src={images[3]} openModal={() => this.openModal(3)}
                                style={{ height: width/3, width: width/3 }}/>
                            <Magic src={images[4]} openModal={() => this.openModal(4)}
                                more={images.length - 5}
                                style={{ height: width/3, width: width/3 }}/>
                        </div>
                    )
            }
        }
        return(
            <div>
                {canEdit &&
                    <div className="btn"
                        onClick={() => onEdit()}
                        style={{
                            padding: '2px 4px 2px 4px',
                            position: 'absolute',
                            zIndex: 1,
                            marginLeft: width - 30,
                            marginTop: 10,
                            backgroundColor: 'white',
                            boxShadow: '0px 0px 4px #000000',
                        }}>
                        <span className="glyphicon glyphicon-edit" style={{ color: 'black'}}></span>
                    </div>
                }
                <Group/>
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

export default GroupImage
