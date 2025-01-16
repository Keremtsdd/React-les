import React, { useState } from 'react'

function StateSample() {

    const [fullName, SetFullName] = useState("Kerem")

    const ChangeName2 = () => {

        SetFullName("Kerem Taşdemir")

    }

    // let name = "Kerem"

    // const changeName = () => {

    // console.log("worked")
    // name = "Kerem Taşdemir"
    // console.log(name)
    // }

    return (
        <div>
            <h1>{fullName}</h1>
            <button onClick={ChangeName2}>Change Name</button>
        </div>
    )
}

export default StateSample