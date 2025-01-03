import React, { useState } from 'react'

const Welcome = () => {
    return <h1>Welcome to React!</h1>
}

const Goodbye = () => {
    return <h1>Goodbye from React!</h1>
}

export default function Salutations(props) {
    const { greeting } = props.values

    const [location, setLocation] = useState(props.values.location)
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setLocation(inputValue)
    }

    {/* IF / ELSE STATEMENT EXAMPLE: */ }
    // if (greeting === "hi") {
    //     return (
    //         <div>
    //             <p>hello from this if else statement</p>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <p>goodbye from this if else statement</p>
    //         </div>
    //     )
    // }

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

            {/* TERNARY STATEMENT EXAMPLE: */}
            {location === "admin" && greeting === "sky" ? <Welcome /> : <Goodbye />}

            {/* CIRCUIT BREAKER EXAMPLE: */}
            {!greeting === "hello" && <p>Welcome User!</p>}
        </div>
    )
}
