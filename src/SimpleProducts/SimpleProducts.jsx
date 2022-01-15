import React, { useState, useEffect } from 'react'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import ProductsContainer from './Components/Products/ProductsContainer'

function SimpleProducts() {
    const logo = "FlipKart"
    const menu = ["Home", "About", "Services","Contact"]
    const [ products , setProducts ] =  useState([])
    const [text , setText] = useState("")

    const formSubmit = (data) => {
        setProducts([...products,data])
    }

    useEffect(()=>{
        setText(Math.random())
    },[products])
    return (
        <div>
            <Header logo={text} menu={menu}/>
            <Form formSubmit = {formSubmit}/>
            <ProductsContainer products = {products}/>
        </div>
    )
}

export default SimpleProducts
