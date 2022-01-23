import React from 'react'
import Product from './Product'

function ProductsContainer(props) {
    return (
        <div className="container">
            {props.products.length === 0 && <h1 className="text-center text-info">No Products To Display</h1>}
            <div className="row">
                {props.products.map((singleProduct)=>{
                    return <Product key={singleProduct.id} singleProduct={singleProduct} removeProduct={props.removeProduct}/>
                })}
            </div>
        </div>
    )
}

export default ProductsContainer
