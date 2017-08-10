import React from 'react'

import InterestCell from '~/containers/entity/row/InterestCell'

class GroupInterest extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { interests } = this.props
        if(!interests)
            return <div></div>
        return(
            <div>
                {interests.map((item) =>
                    <div key={item.id} style={{ width: 150 }}>
                        <InterestCell id={item.id}/>
                    </div>
                )}
            </div>
        )
    }
    componentDidMount(){
        this.props.onGetInterest()
    }
}

export default GroupInterest
