import React, { useEffect, useState } from 'react'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import UserContainer from './Components/Users/UserContainer'
import swal from 'sweetalert'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Info from './Components/Info/Info'

function GitFinder() {
    const [users, setUsers] = useState([])


    const initialUserList = async () => {
        const response = await fetch("https://api.github.com/users")
        const data = await response.json()
        setUsers(data);
    }

    const getUsersFromInput = async (username) => {
        const response = await fetch(`https://api.github.com/search/users?q=${username}`)
        const data = await response.json()
        setUsers(data.items);
        swal("Good job!", "We got the result!", "success");
    }

    useEffect(() => {
        initialUserList()
    }, [])
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <div>
                            <Form getUsersFromInput={getUsersFromInput} initialUserList={initialUserList} />
                            <br />
                            <UserContainer users={users} />
                        </div>
                    } />
                    <Route path="/about" element={<div>About</div>} />
                    <Route path="/info" element={<Info />} />
                </Routes>
            </Router>

        </div>
    )
}

export default GitFinder
