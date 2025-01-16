import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard'

function GetDataSample() {

    // LİFECYCLE ;

    useEffect(() => {

        getDataAxios()

    }, [])

    // FETCH İLE DATA ÇEKME ;

    const [data, setData] = useState([])

    const getDataFetch = async () => {

        try {
            let response = await fetch("https://rickandmortyapi.com/api/character")
            console.log(response)
            let secondResponse = await response.json()
            console.log(secondResponse)

        } catch (error) {

            console.log('Get Data Error', error)
        }
    }

    // AXIOS İLE DATA ÇEKME ;

    const getDataAxios = async () => {
        try {
            let response = await axios.get("https://rickandmortyapi.com/api/character")
            console.log(response.data)
            setData(response.data.results)

        } catch (error) {
            console.log('Get Data Error', error)
        }
    }
    return (

        <div>
            {/* <button onClick={getDataFetch}>Get Data With Fetch</button>
            <button onClick={getDataAxios}>Get Data With Axios</button> */}

            {/* {
                data.map((character, key) => {

                    return (

                        <div key={key}>

                            <h1 style={{ color: "tomato", textDecoration: "underline", fontWeight:"normal" }}>{character.name}</h1>
                            <h3 className="statusSytle">{character.status}</h3>

                        </div>
                    )

                })
            } */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-8 my-10 bg-black'>

                {
                    data.map((character) => (

                        <CharacterCard character={character} />

                    ))
                }

            </div>

        </div>
    )
}
export default GetDataSample
