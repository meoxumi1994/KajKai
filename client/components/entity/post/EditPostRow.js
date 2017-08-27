import React from 'react'

import ContentEditable from '~/components/entity/ContentEditable'
import BasicInput from '~/containers/entity/input/BasicInput'
import KeepImage from '~/containers/entity/thumnail/KeepImage'
import ListProduct from '~/containers/entity/post/ListProduct'

const Row = ({ type, id, products, products_order, content, images, numline, onAddProduct, onChange, ADD_PRODUCT, onRemoveProductEdit}) => {
    switch (type) {
        case 'product':
            return(
                <div>
                    <ListProduct id={id} products={products}
                        products_order={products_order}
                        onRemoveProductEdit={(id) => onRemoveProductEdit(products_order, id)}
                        canEdit={true}/>
                    <div className="btn"
                        style={{ padding: 0, fontSize: 12.5 }}
                        onClick={() => {
                            onAddProduct(products_order)
                            onChange('numline', numline + 1)
                        }}>
                        <a>{ADD_PRODUCT}</a>
                    </div>
                </div>
            )
        case 'listproduct':
            return(
                <div>
                    <ListProduct id={id} onRemoveProductEdit={(id) => onRemoveProductEdit(products_order, id)}
                        products={products} products_order={products_order} canEdit={true}/>
                    <div className="btn"
                        style={{ padding: 0, }}
                        onClick={() => {
                            onAddProduct(products_order)
                        }}>
                        <a>{ADD}</a>
                    </div>
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
                        getLine={(line) => onChange('numline', line)}
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
                        getLine={(line) => onChange('numline', line)}
                    />
                </div>
            )
        case 'imagetext':
            return(
                <div>
                    <div style={{ float: 'left', marginTop: -2, marginLeft: -1 }}>
                        <KeepImage
                            onRemove={(index) =>
                                onChange('images', [
                                    ...images.slice(0,index),
                                    ...images.slice(index+1,images.length),
                                ])
                            }
                            onAddImage={(src) => onChange('images', [...images, src])}
                            action={{
                                type: 'UPDATE_POST_ROW',
                                id: id,
                                images: images,
                            }}
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
                            getLine={(line) => onChange('numline', line)}
                        />
                    </div>
                </div>
            )
        case 'textimage':
            return(
                <div>
                    <div style={{ float: 'right', marginTop: -2, marginRight: -2 }}>
                        <KeepImage
                            onRemove={(index) =>
                                onChange('images', [
                                    ...images.slice(0,index),
                                    ...images.slice(index+1,images.length),
                                ])
                            }
                            onAddImage={(src) => onChange('images', [...images, src])}
                            action={{
                                type: 'UPDATE_POST_ROW',
                                id: id,
                                images: images,
                            }}
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
                            getLine={(line) => onChange('numline', line)}
                        />
                    </div>
                </div>
            )
        case 'groupimage':
            return(
                <div>
                    <KeepImage
                        onRemove={(index) =>
                            onChange('images', [
                                ...images.slice(0,index),
                                ...images.slice(index+1,images.length),
                            ])
                        }
                        onAddImage={(src) => onChange('images', [...images, src])}
                        action={{
                            type: 'UPDATE_POST_ROW',
                            id: id,
                            images: images,
                        }}
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
        const { id, type, products, products_order, content, images, onChange } = this.props
        return <Row {...this.props}/>
    }
}

export default EditPostRow
