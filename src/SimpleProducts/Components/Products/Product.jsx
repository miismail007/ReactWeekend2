import React from 'react'

function Product(props) {
    const data = props.singleProduct
    return (
        <div className="card col-md-3">
            <div className="card-body">
                <h4 className="card-title">{data.name}</h4>
                <p className="card-text">{data.description}</p>
                <p className="card-text">{data.price}</p>
                <button className="btn btn-primary mr-2">Update</button>
                <button className="btn btn-danger" onClick={()=>{
                <button className="btn btn-danger" onCanPlay>Delete</button>
                    props.removeProduct(data.id)
                }}>Delete</button>
            </div>
        </div>
    )
}

export default Product
