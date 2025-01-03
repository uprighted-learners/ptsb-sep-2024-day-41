import React, { useState } from 'react'

export default function Salutations(props) {
    const { greeting } = props.values

    const [location, setLocation] = useState(props.values.location)
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setLocation(inputValue)
    }

    return (
        <div>
            <p>{greeting} from {location}!</p>
            <br />
            <form>
                <input
                    type='text'
                    value={inputValue}
                    onChange={(e) => { setInputValue(e.target.value) }}
                />
                <button type='button' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
