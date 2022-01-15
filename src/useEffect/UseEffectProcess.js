import React, { useEffect, useState } from 'react'

function UseEffectProcess() {
    const [image, setImage] = useState("")


    const setImageFromApi = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await response.json()
        setImage(data.message)
    }
    useEffect(() => {
        setImageFromApi()
    }, [])
    return (
        <div>
            <img src={image} />
            <button onClick={() => { setImageFromApi() }}>change image</button>
        </div>
    )
}

export default UseEffectProcess
