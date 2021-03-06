import React from 'react'

import ShowInMap from '~/containers/entity/map/ShowInMap'

class InterestCell extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const { position, categoryName, onRemove } = this.props
        if(!categoryName || !position ){
            return <div></div>
        }
        let width = this.props.width || 230
        return(
            <div>
                <div style={{ margin:0, width: width }}>
                    <div className="btn"
                        style={{ padding: 0, fontSize: 12, float: 'right', marginRight: 5, marginTop: 3}}
                        onMouseOver={() => this.setState({ hoverRemove: true })}
                        onMouseLeave={() => this.setState({ hoverRemove: false })}
                        onClick={() => onRemove()}>
                        <img src={this.state.hoverRemove ?
                            "/images/removehover.svg" : "/images/remove.svg"} height={10} width={10}/>
                    </div>
                    <div style={{ padding: '5px 10px 5px 5px'}}>
                        {categoryName}
                    </div>
                    <div style={{ padding: 5 }}>
                        <ShowInMap position={position} width={width-8} height={140}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default InterestCell
