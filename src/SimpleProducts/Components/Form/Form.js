import React, { useState } from 'react'

function Form(props) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    return (
        <div className="container">
            <form onSubmit={(e) => {
                e.preventDefault()
                const data = {}
                data.name = name
                data.description = description
                data.price = price
                data.image = image
                data.id = Math.random()
                props.formSubmit(data)
                setName("")
                setDescription("")
                setPrice("")
                setImage("")
            }}>
                <div className="form-group">
                    <label htmlFor="email">Product Name : </label>
                    <input type="text" className="form-control" placeholder="Enter Product Name" id="email"
                        onChange={(text) => { setName(text.target.value) }}
                        value={name} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Description : </label>
                    <input type="text" className="form-control" placeholder="Enter Description" id="email"
                        onChange={(text) => { setDescription(text.target.value) }}
                        value={description} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Price : </label>
                    <input type="text" className="form-control" placeholder="Enter Price" id="email"
                        onChange={(text) => { setPrice(text.target.value) }}
                        value={price} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Image URL : </label>
                    <input type="text" className="form-control" placeholder="Enter Image URL" id="email"
                        onChange={(text) => { setImage(text.target.value) }}
                        value={image} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form
