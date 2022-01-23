import React, { useEffect, useState } from 'react'

function Form(props) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [id, setId] = useState("")

    useEffect(() => {
        if (props.formData.id) {
            setName(props.formData.name)
            setDescription(props.formData.description)
            setPrice(props.formData.price)
            setId(props.formData.id)
        }
    }, [props.formData.id])
    return (
        <div className="container">
            <form onSubmit={(e) => {
                e.preventDefault()
                const data = {}
                data.name = name
                data.description = description
                data.price = price
                if (props.formData.id) {
                    data.id = id;
                    props.formSubmit("update", data)
                } else {
                    data.id = Math.trunc(Math.random() * 200) + 1;
                    props.formSubmit("add", data)
                }
                setName("")
                setDescription("")
                setPrice("")
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form
