import React from 'react'
import Product from './Product'

function ProductsContainer(props) {
    return (
        <div className="container">
            <div className="row">
                {props.products.map((singleProduct)=>{
                    return <Product key={singleProduct.id} singleProduct={singleProduct}/>
                })}
            </div>
        </div>
    )
}

export default ProductsContainer
