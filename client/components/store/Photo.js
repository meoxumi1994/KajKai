import React from 'react'

import DisplayImage from '~/components/entity/thumnail/DisplayImage'
import KeepImage from '~/containers/entity/thumnail/KeepImage'
import SuggestPhoto from '~/containers/entity/show/SuggestPhoto'

class Photo extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { urlname, id } = this.props
        return (
            <div>
                <div style={{ fontSize: 16, paddingLeft: 10, marginTop: 10,
                    fontWeight: 'bold', color: '#90949C' }}>{"@" + urlname}</div>
                <SuggestPhoto width={787} type="store" kind="normal" id={id}/>
                <SuggestPhoto width={787} type="postrow" kind="normal" id={id}/>
                <SuggestPhoto width={787} type="product" kind="normal" id={id}/>
            </div>
        )
    }
}

export default Photo
