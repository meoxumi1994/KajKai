import React from 'react'

import DisplayImage from '~/components/entity/thumnail/DisplayImage'
import KeepImage from '~/containers/entity/thumnail/KeepImage'

class Photo extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { storePhotos, postPhotos, productPhotos } = this.props
        console.log('Photo', this.props)
        return (
            <div>
                <div style={{
                    borderRadius: 4,
                    border: '1px solid #CCCCCC',
                    boxShadow: '0px 0px 4px #CCCCCC',
                    backgroundColor: 'white',
                    width: 938, marginTop: 10, marginLeft: -23,
                    }}>
                    <div style={{ padding: 10, fontSize: 20, backgroundColor: '#F6F7F9'}}>
                        Photos Store
                    </div>
                    <hr style={{ margin: 0 }}/>
                    {storePhotos.map((item,index) => {
                        return(
                            <div key={index} style={{ display: 'inline-block', padding: '5px 0px 0px 5px'}}>
                                <KeepImage
                                    canEdit={false}
                                    type="Carousel"
                                    width={227.6}
                                    images={[item.url]}
                                    imagesSuggest={[item.url]}/>
                            </div>
                        )
                    })}
                </div>
                <div style={{
                    borderRadius: 4,
                    border: '1px solid #CCCCCC',
                    boxShadow: '0px 0px 4px #CCCCCC',
                    backgroundColor: 'white',
                    width: 938, marginTop: 10, marginLeft: -23,
                    }}>
                    <div style={{ padding: 10, fontSize: 20, backgroundColor: '#F6F7F9'}}>
                        Photos Post
                    </div>
                    <hr style={{ margin: 0 }}/>
                    {postPhotos.map((item,index) => {
                        return(
                            <div key={index} style={{ display: 'inline-block', padding: '5px 0px 0px 5px'}}>
                                <KeepImage
                                    canEdit={false}
                                    type="Carousel"
                                    width={227.6}
                                    images={[item.url]}
                                    imagesSuggest={[item.url]}/>
                            </div>
                        )
                    })}
                </div>
                <div style={{
                    borderRadius: 4,
                    border: '1px solid #CCCCCC',
                    boxShadow: '0px 0px 4px #CCCCCC',
                    backgroundColor: 'white',
                    width: 938, marginTop: 10, marginLeft: -23,
                    }}>
                    <div style={{ padding: 10, fontSize: 20, backgroundColor: '#F6F7F9'}}>
                        Photos Product
                    </div>
                    <hr style={{ margin: 0 }}/>
                    {productPhotos.map((item,index) => {
                        return(
                            <div key={index} style={{ display: 'inline-block', padding: '5px 0px 0px 5px'}}>
                                <KeepImage
                                    canEdit={false}
                                    type="Carousel"
                                    width={227.6}
                                    images={[item.url]}
                                    imagesSuggest={[item.url]}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.onGetPhoto()
    }
}

export default Photo
