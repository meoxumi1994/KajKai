import React from 'react'

import Product from '~/containers/entity/post/Product'

class ListProduct extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { products, product_order } = this.props
        return(
            <div>
                <table>
                    {product_order.map((item, index) =>
                        <tbody key={index}>
                            <Product id={item}/>
                        </tbody>
                    )}
                </table>
            </div>
        )
    }
}

export default ListProduct