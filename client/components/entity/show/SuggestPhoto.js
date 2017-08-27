import React from 'react'

import DisplayImage from '~/components/entity/thumnail/DisplayImage'
import KeepImage from '~/components/entity/thumnail/KeepImage'

const GetTitle = ({ type, PHOTO_USER, PHOTO_STORE, PHOTO_POST, PHOTO_PRODUCT }) => {
    switch (type) {
        case 'user':
            return PHOTO_USER
        case 'store':
            return PHOTO_STORE
        case 'postrow':
            return PHOTO_POST
        case 'product':
            return PHOTO_PRODUCT
        default:
            return ''
    }
    return ''
}

class SuggestPhoto extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { kind, type, listImage, myState, name, width, onChooseImage, NO_IMAGE_OF_THIS_TYPE } = this.props
        if(kind == 'small')
            return(
                <div>
                    {(listImage && listImage.length > 0) &&
                        <div style={{ padding: '5px 5px 5px 5px ', color: '#979BA3' , fontSize: 14 }}>
                            {GetTitle(this.props)}
                        </div>
                    }
                    <div>
                        {listImage && listImage.map((item,index) =>
                            <div key={item.url+index} className="btn"
                                onClick={() => onChooseImage(item.url)}
                                style={{  marginLeft: 3, marginBottom: 0, padding: 0 }}>
                                <DisplayImage key={item.url+index} src={item.url}
                                    width={(width - 8*3)/7} height={(width - 8*3)/7}/>
                            </div>
                        )}
                    </div>
                </div>
            )
        return(
            <div style={{
                borderRadius: 2.5,
                border: '1px solid #CCCCCC',
                boxShadow: '0px 0px 4px #CCCCCC',
                backgroundColor: 'white',
                padding: 1,
                width: width, marginTop: 10,
                }}>
                <div style={{ padding: 10, borderRadius: 3.5,fontSize: 20, backgroundColor: '#F6F7F9'}}>
                    <img src={"/images/photo" + type + "icon.svg"} width={22} height={22}/>
                    <span style={{ marginLeft: 10, fontSize: 18 }}>
                        {GetTitle(this.props)}
                    </span>
                </div>
                <hr style={{ margin: 0, marginBottom: 5 }}/>
                {listImage && listImage.map((item,index) =>
                    <div key={item.url+index} style={{ display: 'inline-block', marginLeft: 5, marginBottom: 5 }}>
                        <KeepImage
                            canEdit={false}
                            type="Carousel"
                            width={(width - 28) / 4}
                            sellpostid={item.sellpostid}
                            images={[item.url]}
                            imagesSuggest={[item.url]}/>
                    </div>
                )}
                {(myState == 'GET_PHOTO_SUGGEST_ING' && !listImage) ?
                    <div id="loaderr" style={{ margin: 10, marginLeft: width/2 - 10 }}></div>
                :(!listImage || listImage.length == 0) ?
                    <div style={{ padding: 10, color: '#90949C'}}>{NO_IMAGE_OF_THIS_TYPE}</div>
                :   <div></div>
                }
            </div>
        )
    }
    componentDidMount(){
        this.props.onGetImageList()
    }
    // shouldComponentUpdatE(nextProps, nextState){
    //     if( nextProps.id != this.props.id ){
    //         this.props.onGetImageList()
    //     }
    //     return true
    // }
}

export default SuggestPhoto
