import React from 'react'

function Product(props) {
    const data = props.singleProduct
    return (
        <div className="card col-md-3">
            <img className="card-img-top" src="https://picsum.photos/200" alt="Card" />
            <div className="card-body">
                <h4 className="card-title">{data.name}</h4>
                <p className="card-text">{data.description}</p>
                <button className="btn btn-primary">{data.price}</button>
            </div>
        </div>
    )
}

export default Product
