import React, { useEffect } from 'react'
import Product from './Product'

function ProductsContainer(props) {
    useEffect(()=>{
        console.log(props.products);
    },[props.products])
    return (
        <div className="container">
            {props.products.length === 0 && <h1 className="text-center text-info">No Products To Display</h1>}
            <div className="row">
                {props.products.map((singleProduct)=>{
                    return <Product key={singleProduct.id} singleProduct={singleProduct} removeProduct={props.removeProduct} setFormForUpdate={props.setFormForUpdate}/>
                })}
            </div>
        </div>
    )
}

export default ProductsContainer
