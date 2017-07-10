import React from 'react'

import ContentEditable from '~/components/entity/ContentEditable'
import BasicInput from '~/containers/entity/input/BasicInput'
import KeepImage from '~/containers/entity/thumnail/KeepImage'
import ListProduct from '~/containers/entity/post/ListProduct'

const Row = ({ type, id, products, product_order, content, images, onChange }) => {
    switch (type) {
        case 'product':
            return(
                <div>
                    <ListProduct id={id} products={products} product_order={product_order}/>
                </div>
            )
        case 'title':
            return(
                <div style={{ backgroundColor: '#E9EBEE'}}>
                    <ContentEditable
                        minRows={1}
                        placehoder={" "}
                        content={content}
                        handleChange={(e) => onChange('content', e.target.value)}
                    />
                </div>
            )
        case 'normal':
            return(
                <div>
                    <ContentEditable
                        minRows={2}
                        placehoder={" "}
                        content={content}
                        handleChange={(e) => onChange('content', e.target.value)}
                    />
                </div>
            )
        case 'imagetext':
            return(
                <div>
                    <div style={{ float: 'left', marginTop: -2, marginLeft: -1 }}>
                        <KeepImage
                            canEdit={true}
                            type="Carousel"
                            width={242}
                            images={images}
                            imagesSuggest={images}/>
                    </div>
                    <div style={{ width: 248, marginLeft: 250 }}>
                        <ContentEditable
                            minRows={12}
                            placehoder={" "}
                            width={248}
                            content={content}
                            handleChange={(e) => onChange('content', e.target.value)}
                        />
                    </div>
                </div>
            )
        case 'textimage':
            return(
                <div>
                    <div style={{ float: 'right', marginTop: -2, marginRight: -2 }}>
                        <KeepImage
                            canEdit={true}
                            type="Carousel"
                            width={242}
                            images={images}
                            imagesSuggest={images}/>
                    </div>
                    <div style={{ width: 248 }}>
                        <ContentEditable
                            minRows={12}
                            placehoder={" "}
                            width={248}
                            content={content}
                            handleChange={(e) => onChange('content', e.target.value)}
                        />
                    </div>
                </div>
            )
        case 'groupimage':
            return(
                <div>
                    <KeepImage
                        canEdit={true}
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

class EditPostRow extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { id, type, products, product_order, content, images, onChange } = this.props
        return <Row {...this.props}/>
    }
}

export default EditPostRow
