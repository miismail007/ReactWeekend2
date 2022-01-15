import React from 'react'

function User(props) {
    return (
        <div className="card col-md-6 text-center">
            <img src={props.singleUser.avatar_url} className="round-img mt-4" alt="Card" style={{ width: 100, height: 100 }} />
            <h2 className="text-center">{props.singleUser.login}</h2>
            <button className="btn btn-dark mb-4">more</button>
        </div>
    )
}

export default User
