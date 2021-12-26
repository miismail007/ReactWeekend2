import React, { useState } from 'react'
// import SimpleProducts from './SimpleProducts/SimpleProducts'

function App() {
  const [logo , setLogo] = useState("")
  const [ textToDisplay , setTextToDisplay ] = useState("")
  const [ menu , setMenu ] = useState([])
  const [ menuInput , setMenuInput] = useState("")
  const [ counter , setCounter ] = useState(0)
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a className="navbar-brand" href="https://youtube.com">{logo} {counter}</a>
          <ul className="navbar-nav">
              {menu.map((data)=>{
                  return <li key={Math.random()} className="nav-item">
                              <a className="nav-link" href="https://youtube.com">{data}</a>
                          </li>
              })}
              
          </ul>
      </nav>
      <h1>{textToDisplay}</h1>
      <input onChange={(text)=>{
        setTextToDisplay(text.target.value)
        setLogo(text.target.value)
      }}/>

      <h1>{counter}</h1>
      <button onClick={()=>{
        setCounter(counter + 1)
      }}>+</button>
      <button onClick={()=>{
        setCounter(counter - 1)
      }}>-</button>
      <br/>
      <input value={menuInput} onChange={(text)=>{
        setMenuInput(text.target.value)
      }} placeholder="Enter Menu text"/>
      <button onClick={()=>{
        setMenu([...menu,menuInput])
        setMenuInput("")
      }}>add menu</button>

    </div>
  )
}

export default App
