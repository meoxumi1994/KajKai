import React from 'react'

import ContentShow from '~/components/entity/ContentShow'
import BasicInput from '~/containers/entity/input/BasicInput'
import KeepImage from '~/containers/entity/thumnail/KeepImage'
import ListProduct from '~/containers/entity/post/ListProduct'

class PostRow extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { id, type, products, product_order, content, images, canEdit } = this.props
        const Row = () => {
            switch (type) {
                case 'product':
                    return(
                        <div>
                            <ListProduct id={id}
                                products={products}
                                product_order={product_order}/>
                        </div>
                    )
                case 'title':
                    return(
                        <div>
                            <ContentShow
                                fontSize={13.5}
                                fontWeight={'bold'}
                                heightEachRow={16}
                                content={content}
                                handleChange={(e) => this.setState({ })}
                            />
                        </div>
                    )
                case 'normal':
                    return(
                        <div>
                            <ContentShow
                                fontSize={13.5}
                                heightEachRow={16}
                                content={content}
                                handleChange={(e) => this.setState({ })}
                            />
                        </div>
                    )
                case 'imagetext':
                    return(
                        <div>
                            <KeepImage
                                type="Carousel"
                                width={245}
                                images={images}
                                imagesSuggest={images}/>
                            <div style={{ marginLeft: 255, marginTop: -245 }}>
                                <ContentShow
                                    fontSize={13.5}
                                    heightEachRow={16}
                                    content={content}
                                    handleChange={(e) => this.setState({ })}
                                />
                            </div>
                        </div>
                    )
                case 'textimage':
                    return(
                        <div>
                            <ContentShow
                                fontSize={13.5}
                                heightEachRow={16}
                                content={content}
                                handleChange={(e) => this.setState({ })}
                            />
                            <div style={{ marginLeft: 255, marginTop: -245 }}>
                                <KeepImage
                                    type="Carousel"
                                    width={245}
                                    images={images}
                                    imagesSuggest={images}/>
                            </div>
                        </div>
                    )
                case 'groupimage':
                    return(
                        <div>
                            <KeepImage
                                type="GroupImage"
                                width={499}
                                images={images}
                                imagesSuggest={images}/>
                        </div>
                    )
                default:
                    return <div></div>
            }
        }

        return <Row/>
    }
}

export default PostRow
