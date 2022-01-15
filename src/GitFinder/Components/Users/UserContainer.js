import React from 'react'
import User from './User'

function UserContainer(props) {
    return (
        <div className="container">
            <div className="row">
                {props.users.map((singleUser) => {
                    return <User key={singleUser.id} singleUser={singleUser} />
                })}
            </div>
        </div>
    )
}

export default UserContainer
