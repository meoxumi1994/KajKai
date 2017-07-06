import React from 'react'

class LikeGroup extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { typeLikes, content, size } = this.props
        return(
            <div style={{ fontSize: 12.5, color: '#365899'}}>
                {typeLikes.map((item, index) =>
                    <div key={index} className="btn"
                        style={{
                            position: 'absolute',
                            zIndex: 6-index,
                            padding: 0}}>
                        <img src={"/images/reactting/"+item+".svg"}
                            style={{
                                marginLeft: index*size*3/4 - 2,
                                width: size, height: size }}
                        />
                    </div>
                )}
                <div className="btn" style={{ fontSize: 12.5,
                    marginTop: 3,
                    marginLeft: (typeLikes.length*size*3/4)+7, padding: 0}}>
                    <a style={{ color: '#365899'}}>{content}</a>
                </div>
            </div>
        )
    }
}

export default LikeGroup
