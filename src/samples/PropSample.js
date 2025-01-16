import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function PropSample() {

    let headerText = "Merhaba Ben Header için gönderilmiş bir propum"
    let mainText = "Merhaba Ben Main için gönderilmiş bir propum"
    let footerText = "Merhaba Ben Footer için gönderilmiş bir propum"
    return (
        <>
            <Header yazi={headerText} />
            <Main yazi2={mainText} />
            <Footer footerText={footerText} text1={"Hello"} number1={10} arr1={[1, 2, 3]} isVasible={true} />
        </>
    )
}

export default PropSample