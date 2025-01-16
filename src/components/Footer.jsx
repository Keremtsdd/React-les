import React from 'react'

function Footer({ footerText, text1, number1 }) {
    return (
        <>
            <h1>{footerText}</h1>
            <h1>{text1}</h1>
            <h1>{number1}</h1>
        </>
    )
}

export default Footer