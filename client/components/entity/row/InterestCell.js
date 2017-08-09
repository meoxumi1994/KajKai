import React from 'react'

import ShowInMap from '~/containers/entity/map/ShowInMap'

class InterestCell extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { position, categoryName } = this.props
        return(
            <div className="panel panel-default" style={{ padding:0, margin:0, width: 150 }}>
                <div style={{ padding: 5 }}>
                    {categoryName}
                </div>
                <div style={{ padding: 5 }}>
                    <ShowInMap position={position} width={137} height={140}/>
                </div>
            </div>
        )
    }
}

export default InterestCell
