import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState("")
    return (
        <div className="container">
            <form onSubmit={(e) => {
                e.preventDefault()
            }}>
                <div className="form-group">
                    <br />
                    <input type="text" className="form-control" placeholder="Enter User Name" id="email"
                        onChange={(text) => { setName(text.target.value) }}
                        value={name} />
                </div>
                <button type="submit" className="btn btn-dark btn-block">Search</button>
            </form>
        </div>
    )
}

export default Form
