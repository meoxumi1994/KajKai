import React from 'react'

import DisplayImage from '~/components/entity/thumnail/DisplayImage'
import KeepImage from '~/containers/entity/thumnail/KeepImage'

class Photo extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { storePhotos, postPhotos, productPhotos, userPhotos } = this.props
        return (
            <div>
                {userPhotos.length > 0 &&
                    <div style={{
                        borderRadius: 2.5,
                        border: '1px solid #CCCCCC',
                        boxShadow: '0px 0px 4px #CCCCCC',
                        backgroundColor: 'white',
                        width: 790, marginTop: 10,  paddingBottom: 8,
                        }}>
                        <div style={{ padding: 10, borderRadius: 3.5,fontSize: 20, backgroundColor: '#F6F7F9'}}>
                            <img src={"/images/photousericon.svg"} width={22} height={22}/>
                            <span style={{ marginLeft: 10, fontSize: 18 }}>Photos User</span>
                        </div>
                        <hr style={{ margin: 0 }}/>
                        {userPhotos.map((item,index) => {
                            return(
                                <div key={index} style={{ display: 'inline-block', padding: '5px 0px 0px 5px'}}>
                                    <KeepImage
                                        canEdit={false}
                                        type="Carousel"
                                        width={190.7}
                                        images={[item.url]}
                                        imagesSuggest={[item.url]}/>
                                </div>
                            )
                        })}
                    </div>
                }
                {/* {storePhotos.length > 0 &&
                    <div style={{
                        borderRadius: 2.5,
                        border: '1px solid #CCCCCC',
                        boxShadow: '0px 0px 4px #CCCCCC',
                        backgroundColor: 'white',
                        width: 838, marginTop: 10,  paddingBottom: 8,
                        }}>
                        <div style={{ padding: 10, borderRadius: 3.5,fontSize: 20, backgroundColor: '#F6F7F9'}}>
                            <img src={"/images/photostoreicon.svg"} width={22} height={22}/>
                            <span style={{ marginLeft: 10, fontSize: 18 }}>Photos Store</span>
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
                }
                {postPhotos.length > 0 &&
                    <div style={{
                        borderRadius: 2.5,
                        border: '1px solid #CCCCCC',
                        boxShadow: '0px 0px 4px #CCCCCC',
                        backgroundColor: 'white',
                        width: 838, marginTop: 10,  paddingBottom: 8,
                        }}>
                        <div style={{ padding: 10,  borderRadius: 3.5,fontSize: 20, backgroundColor: '#F6F7F9'}}>
                            <img src={"/images/photoproducticon.svg"} width={22} height={22}/>
                            <span style={{ marginLeft: 10, fontSize: 18 }}>Photos Post</span>
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
                }
                {productPhotos.length > 0 &&
                    <div style={{
                        borderRadius: 2.5,
                        border: '1px solid #CCCCCC',
                        boxShadow: '0px 0px 4px #CCCCCC',
                        backgroundColor: 'white',
                        width: 838, marginTop: 10,  paddingBottom: 8,
                        }}>
                        <div style={{ padding: 10, borderRadius: 3.5, fontSize: 20, backgroundColor: '#F6F7F9'}}>
                            <img src={"/images/photoproducticon.svg"} width={22} height={22}/>
                            <span style={{ marginLeft: 10, fontSize: 18 }}>Photos Product</span>
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
                } */}
            </div>
        )
    }
    componentDidMount(){
        this.props.onGetPhoto()
    }
}

export default Photo
