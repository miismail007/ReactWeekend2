import React from 'react'
import { Link } from 'react-router-dom'

function User(props) {
    return (
        <div className="card col-md-6 text-center">
            <img src={props.singleUser.avatar_url} className="rounded-circle mt-4" alt="Card" style={{ width: 100, height: 100 }} />
            <h2 className="text-center">{props.singleUser.login}</h2>
            <Link to={`/info?username=${props.singleUser.login}`} className="btn btn-dark mb-4">more</Link>
        </div>
    )
}

export default User
