import React, { useState, useEffect } from 'react'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import ProductsContainer from './Components/Products/ProductsContainer'

function SimpleProducts() {
    const logo = "FlipKart"
    const menu = ["Home", "About", "Services","Contact"]
    const [ products , setProducts ] =  useState([])

    const formSubmit = (data) => {
        setProducts([...products,data])
    }

    const removeProduct = (id) => {
        let newProducts = []
        products.forEach((singleProduct)=>{
            if(id !== singleProduct.id){
                newProducts.push(singleProduct)
            }
        })
        setProducts(newProducts)
    }
    return (
        <div>
            <Header logo={logo} menu={menu}/>
            <Form formSubmit = {formSubmit}/>
            <ProductsContainer products = {products} removeProduct={removeProduct}/>
        </div>
    )
}

export default SimpleProducts
