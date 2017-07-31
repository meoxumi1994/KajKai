import React from 'react'

import SellPost from '~/containers/entity/post/SellPost'
import MinorPost from '~/containers/entity/post/MinorPost'
import TimeLine from '~/components/entity/draw/TimeLine'
import EditSellPost from '~/containers/entity/post/EditSellPost'
import EditMinorPost from '~/containers/entity/post/EditMinorPost'
import ShowInMap from '~/containers/entity/map/ShowInMap.js'
import Link from 'react-router-dom'

class Interest extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const {  } = this.props
        return(
            <div>
                Interest
            </div>
        )
    }
    componentDidUpdate(){
        // if(this.props.sellposts.length>=2 && this.sellpost.getBoundingClientRect().bottom - this.props.height < 780){
        //     this.props.onNeedSellPost()
        // }
    }
    componentDidMount(){
        this.props.onNeedPost();
    }
}

export default Interest
