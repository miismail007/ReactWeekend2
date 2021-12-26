import React from 'react'
import Header from './Components/Header/Header'
import ProductsContainer from './Components/Products/ProductsContainer'

function App() {
  const logo = "FlipKart"
  const menu = ["Home", "About", "Services","Contact"]
  const products = [
    {
      id : 1,
      name : "Samsung s20",
      description : "Recent flagship mobile from samsung",
      image : "https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png",
      price : 45000
    },
    {
      id : 2,
      name : "One Plus 10 pro",
      description : "Recent flagship mobile from One Plus",
      image : "https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png",
      price : 45000
    },
    {
      id : 3,
      name : "Oppo a7",
      description : "Recent flagship mobile from Oppo",
      image : "https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png",
      price : 45000
    },
    {
      id : 4,
      name : "Vivo v20",
      description : "Recent flagship mobile from Vivo",
      image : "https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png",
      price : 45000
    },
    {
      id : 5,
      name : "Redmi k20",
      description : "Recent flagship mobile from Redmi",
      image : "https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png",
      price : 45000
    }
  ]
  return (
    <div>
      <Header logo={logo} menu={menu}/>
      <ProductsContainer products = {products}/>
    </div>
  )
}

export default App
