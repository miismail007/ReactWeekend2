import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
function Info() {
    const [userInfo, setUserInfo] = useState({})
    const [repos, setRepos] = useState([])

    const getSingleUserDetails = async (username) => {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        setUserInfo(data);
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`)
        const reposData = await reposResponse.json()
        setRepos(reposData)
    }
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const username = urlParams.get('username');
        getSingleUserDetails(username)
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 card text-center">
                    <img src={userInfo.avatar_url} className="rounded-circle" style={{ width: 200, height: 200 }} />
                    <h1>{userInfo.name == null ? "NIL" : userInfo.name}</h1>
                    <h2>{userInfo.bio == null ? "NIL" : userInfo.bio}</h2>
                    <h2>{userInfo.blog == null ? "NIL" : userInfo.blog}</h2>
                    <h2>{userInfo.company == null ? "NIL" : userInfo.company}</h2>
                </div>
            </div>
            <div className="row">
                <h1>Repos count : {repos.length}</h1>
                {repos.map((repo) => <h2 className="col-md-6 card">{repo.name}</h2>)}
            </div>
        </div>
    )
}

export default Info
