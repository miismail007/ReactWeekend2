import React from 'react'

function Header(props) {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="https://youtube.com">{props.logo}</a>
            <ul className="navbar-nav">
                {props.menu.map((data)=>{
                    return <li key={Math.random()} className="nav-item">
                                <a className="nav-link" href="https://youtube.com">{data}</a>
                            </li>
                })}
                
            </ul>
        </nav>
    )
}

export default Header