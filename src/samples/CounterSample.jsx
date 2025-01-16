import React, { useState } from 'react'

function CounterSample() {


    const [Counter, setCounter] = useState(0)

    const increment = () => {

        if (Counter < 10) {
            setCounter(Counter + 1)
        }

    }

    const functionTest = (value) => {
        console.log(value)
    }

    return (
        <div>
            <h1>{Counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={Counter > 0 ? () => setCounter(Counter - 1) : null}>-</button>
            <button onClick={() => functionTest("Kerem")}>Fonksiyon Test</button>
        </div>
    )
}

export default CounterSample