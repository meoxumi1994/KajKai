import React from 'react'

import InterestCell from '~/containers/entity/row/InterestCell'

class GroupInterest extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { interests, HAVE_NO_INTEREST } = this.props
        if(!interests)
            return <div></div>
        return(
            <div>
                {(interests.length > 0 ) ? interests.map((item, index) =>
                    <div key={item.id}>
                        {index > 0 && <hr style={{ margin: 0 }}/>}
                        <InterestCell id={item.id}/>
                    </div>
                ):  <div style={{ padding: 10, fontSize: 12.5, color: '#90949C'}}>
                        {HAVE_NO_INTEREST}
                    </div>
                }
            </div>
        )
    }
    componentDidMount(){
        this.props.onGetInterest()
    }
}

export default GroupInterest
