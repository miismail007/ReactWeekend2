import React, { useEffect, useState } from 'react'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import UserContainer from './Components/Users/UserContainer'

function GitFinder() {
    const [users, setUsers] = useState([])


    const initialUserList = async () => {
        const response = await fetch("https://api.github.com/users")
        const data = await response.json()
        setUsers(data);
    }

    useEffect(() => {
        initialUserList()
    }, [])
    return (
        <div>
            <Header />
            <Form />
            <br />
            <UserContainer users={users} />
        </div>
    )
}

export default GitFinder
