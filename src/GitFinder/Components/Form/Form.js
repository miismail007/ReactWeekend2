import React, { useState } from 'react'
import swal from 'sweetalert'

function Form(props) {
    const [name, setName] = useState("")
    const [clear, setClear] = useState(false)
    return (
        <div className="container">
            <form onSubmit={(e) => {
                e.preventDefault()
                if (name !== "") {
                    props.getUsersFromInput(name)
                    setClear(true)
                } else {
                    swal("Oops!", "Username is empty!", "warning");
                }
            }}>
                <div className="form-group">
                    <br />
                    <input type="text" className="form-control" placeholder="Enter User Name" id="email"
                        onChange={(text) => { setName(text.target.value) }}
                        value={name} />
                </div>
                <button type="submit" className="btn btn-dark btn-block">Search</button>
                {clear && <a onClick={() => {
                    setName("")
                    setClear(false)
                    props.initialUserList()
                }} className="btn btn-dark btn-block">Clear</a>}
            </form>
        </div>
    )
}

export default Form
