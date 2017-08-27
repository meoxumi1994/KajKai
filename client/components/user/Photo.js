import React from 'react'

import DisplayImage from '~/components/entity/thumnail/DisplayImage'
import KeepImage from '~/containers/entity/thumnail/KeepImage'
import SuggestPhoto from '~/containers/entity/show/SuggestPhoto'

class Photo extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { id, username, storeList } = this.props
        return (
            <div>
                <SuggestPhoto width={787} type="user" kind="normal" name={username} id={id}/>
                {storeList.map((item,index) => {
                    return(
                        <div key={index+item}>
                            <div style={{ fontSize: 16, paddingLeft: 10, marginTop: 10,
                                fontWeight: 'bold', color: '#90949C' }}>{"@" + item.urlname}</div>
                            <SuggestPhoto width={787} type="store" kind="normal" name={item.storename} id={item.id}/>
                            <SuggestPhoto width={787} type="postrow" kind="normal" name={item.storename} id={item.id}/>
                            <SuggestPhoto width={787} type="product" kind="normal" name={item.storename} id={item.id}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Photo
