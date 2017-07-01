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
    componentWillMount(){
        const img = new Image();
        const that = this
        const { width, height, src } = this.props
        console.log({ width, height, src })
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
    render(){
        const { width, height, src } = this.props
        console.log(this.state.width, this.state.height, src )
        return(
            <div  style={{
                    // float: 'left',
                    height: width,
                    width: height,
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
