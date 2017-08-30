import React from 'react'

// import DisplayImage from '~/components/entity/thumnail/DisplayImage'

class OneImage extends React.Component {
    constructor(props){
        super(props)
        this.state = { hover: false }
    }
    render(){
        const { isTop, style, src, onClick, ADD_PHOTO } = this.props
        return(
            <div
                className ="btn"
                style={{ padding: 0 }}
                onMouseOver={() => this.setState({ hover: true })}
                onMouseLeave={() => this.setState({ hover: false })}
                onClick={() => {
                    this.setState({ hover: false })
                    onClick()
                }}>
                {this.state.hover ?
                    <div style={{
                        textAlign: 'left',
                        position: 'absolute',
                        width: style.width,
                        marginTop: isTop?0:(style.height - 22) - 16,
                        backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <img src="/images/camera.svg" style={{ margin: 8 , height: 22 }}/>
                        <span style={{ marginLeft: 8, fontSize: 12, color: 'white'}}>{ADD_PHOTO}</span>
                    </div>
                :   <div  style={{
                        textAlign: 'left',
                        position: 'absolute',
                        marginTop: isTop?0:(style.height - 22) - 16,
                        }}>
                        <img src="/images/camera.svg" style={{ margin: 9 ,height: 20 }}/>
                    </div>
                }
                <img src={src} width={style.width} height={style.height}/>
                {/* <DisplayImage src={src} width={style.width} height={style.height}/> */}
            </div>
        )

    }
}

export default OneImage
