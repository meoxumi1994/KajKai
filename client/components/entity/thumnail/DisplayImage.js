import React from 'react'

class DisplayImage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            width: 0,
            height: 0,
            marginTop: 0,
            marginLeft: 0,
        }
    }
    componentDidMount(){
        const img = new Image();
        const that = this
        const { width, height, src } = this.props
        img.onload = function() {
            if(that.props.width / that.props.height < this.width / this.height){
                that.setState({
                    marginTop: 0,
                    marginLeft: - (this.width * that.props.height/this.height - that.props.width)/2,
                    width: this.width * that.props.height/this.height,
                    height: that.props.height,
                })
            } else {
                that.setState({
                    marginTop: - (this.height * that.props.width/this.width - that.props.height)/2,
                    marginLeft: 0,
                    width: that.props.width,
                    height: this.height * that.props.width/this.width,
                })
            }

        }
        img.src = this.props.src;
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     if(nextProps.width != this.props.width || nextProps.height != this.props.height || nextProps.src != this.props.src){
    //         const img = new Image();
    //         let that = this
    //         const { width, height, src } = this.props
    //         img.onload = function() {
    //             if(nextProps.width / nextProps.height < this.width / this.height){
    //                 that.setState({
    //                     marginTop: 0,
    //                     marginLeft: - (this.width * nextProps.height/this.height - nextProps.width)/2,
    //                     width: this.width * nextProps.height/this.height,
    //                     height: nextProps.height,
    //                 })
    //             } else {
    //                 that.setState({
    //                     marginTop: - (this.height * nextProps.width/this.width - nextProps.height)/2,
    //                     marginLeft: 0,
    //                     width: nextProps.width,
    //                     height: this.height * nextProps.width/this.width,
    //                 })
    //             }
    //
    //         }
    //         img.src = this.props.src;
    //     }
    //     return true
    // }
    render(){
        const { width, height, src } = this.props
        return(
            <div  style={{
                    display: 'inline-block',
                    height: height,
                    width: width,
                    overflow: 'hidden'}}>
                <img src={src}
                    style={{
                        height: this.state.height ,
                        width: this.state.width,
                        marginTop: this.state.marginTop,
                        marginLeft: this.state.marginLeft,
                    }}/>
            </div>
        )
    }
}

export default DisplayImage
