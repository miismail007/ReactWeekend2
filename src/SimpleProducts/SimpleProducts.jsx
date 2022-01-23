import React, { useState, useEffect } from 'react'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import ProductsContainer from './Components/Products/ProductsContainer'

function SimpleProducts() {
    const logo = "FlipKart"
    const menu = ["Home", "About", "Services","Contact"]
    const [ products , setProducts ] =  useState([])
    const [ formData , setFormData ] = useState({})

    const formSubmit = (type,data) => {
        console.log(type,data);
        if(type === "add"){
            setProducts([...products,data])
        }else{
            let newProducts = products
            newProducts.map(product => {
                if(product.id === data.id){
                    product.name = data.name
                    product.description = data.description
                    product.price = data.price
                }
            })
            setProducts(newProducts);
            setFormData({})
        }        
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

    const setFormForUpdate = (data) => {
        setFormData(data)
    }
    return (
        <div>
            <Header logo={logo} menu={menu}/>
            <Form formSubmit = {formSubmit} formData={formData}/>
            <ProductsContainer products = {products} removeProduct={removeProduct} setFormForUpdate={setFormForUpdate}/>
        </div>
    )
}

export default SimpleProducts
