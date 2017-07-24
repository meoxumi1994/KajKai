import React from 'react'

import Product from '~/containers/entity/post/Product'

class ListProduct extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { products, products_order, canEdit, sellpostId } = this.props
        return(
            <div>
                <table>
                    {products_order.map((item, index) =>
                        <tbody key={index}>
                            <Product id={item} sellpostId={sellpostId} canEdit={canEdit} width={index?120:160}/>
                        </tbody>
                    )}
                </table>
            </div>
        )
    }
}

export default ListProduct
