import React from 'react'

import Magic from '~/containers/entity/thumnail/Magic'
import Enlarge from '~/containers/entity/thumnail/Enlarge'
import classNames from 'classnames'

const Group = ({ images, width, height, openModal }) => {
    switch (images.length) {
        case 1:
            return(
                <div>
                    <Magic src={images[0]} openModal={() => openModal(0)}
                        style={{ width: width, height: height }}/>
                </div>
            )
        case 2:
            return(
                <div>
                    <Magic src={images[0]} openModal={() => openModal(0)}
                        style={{ width: width/2, height: height }}/>
                    <Magic src={images[1]} openModal={() => openModal(1)}
                        style={{ width: width/2, height: height }}/>
                </div>
            )
        case 3:
            return(
                <div style={{ width: 520 }}>
                    <Magic src={images[0]} openModal={() => openModal(0)}
                        style={{ width: width, height: height*3/5 }}/>
                    <Magic src={images[1]} openModal={() => openModal(1)}
                        style={{ height: height*2/5, width: width/2 }}/>
                    <Magic src={images[2]} openModal={() => openModal(2)}
                        style={{ height: height*2/5, width: width/2 }}/>
                </div>
            )
        case 4:
            return(
                <div style={{ width: 520 }}>
                    <Magic src={images[0]} openModal={() => openModal(0)}
                        style={{ height: height/2, width: width/2 }}/>
                    <Magic src={images[1]} openModal={() => openModal(1)}
                        style={{ height: height/2, width: width/2 }}/>
                    <Magic src={images[2]} openModal={() => openModal(2)}
                        style={{ height: height/2, width: width/2 }}/>
                    <Magic src={images[3]} openModal={() => openModal(3)}
                        style={{ height: height/2, width: width/2 }}/>
                </div>
            )
        case 5:
            return(
                <div style={{ width: 520 }}>
                    <Magic src={images[0]} openModal={() => openModal(0)}
                        style={{ height: height*2/3, width: width/2 }}/>
                    <Magic src={images[1]} openModal={() => openModal(1)}
                        style={{ height: height*2/3, width: width/2 }}/>
                    <Magic src={images[2]} openModal={() => openModal(2)}
                        style={{ height: width/3, width: width/3 }}/>
                    <Magic src={images[3]} openModal={() => openModal(3)}
                        style={{ height: width/3, width: width/3 }}/>
                    <Magic src={images[4]} openModal={() => openModal(4)}
                        style={{ height: width/3, width: width/3 }}/>
                </div>
            )
        default:
            return(
                <div style={{ width: 520 }}>
                    <Magic src={images[0]} openModal={() => openModal(0)}
                        style={{ height: height*2/3, width: width/2 }}/>
                    <Magic src={images[1]} openModal={() => openModal(1)}
                        style={{ height: height*2/3, width: width/2 }}/>
                    <Magic src={images[2]} openModal={() => openModal(2)}
                        style={{ height: width/3, width: width/3 }}/>
                    <Magic src={images[3]} openModal={() => openModal(3)}
                        style={{ height: width/3, width: width/3 }}/>
                    <Magic src={images[4]} openModal={() => openModal(4)}
                        more={images.length - 5}
                        style={{ height: width/3, width: width/3 }}/>
                </div>
            )
    }
}

class GroupImage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hoverEdit: false,
        }
    }
    openModal(index){
        if(this.props.canEdit){
            this.props.onEdit()
        }else{
            if(!this.props.disableClickImage){
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
        }
    }
    render(){
        const { EDIT, onEdit, images, canEdit, sellposts } = this.props
        const width = this.props.width - ((images.length>1)? 1 : 2);
        const height = width;
        return(
            <div style={{ marginLeft: -1 }}>
                <Group width={width} height={height} images={images} openModal={(index) => this.openModal(index)}/>
                {this.state.openModal &&
                    <Enlarge close={() => this.setState({ openModal: false })}
                        sellposts={sellposts}
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
