import React, { useState, useEffect } from 'react'

import axios from 'axios'
import style from 'test.css'

const Apod = () => {

    const [apiData, setApiData] = useState({})

    useEffect( () =>{    
        getData()    
    }, [])

    const API_KEY = "gzIgMiYckDzYhWLYcb4SQQIewpP8e4KWZCePMRxz"
    const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

    const getData = async () => {
        let data = await axios.get(URL)
        setApiData(data.data)        
        console.log(data.data)
    }

    return (
        <div style={style.test}>
            <h2>{apiData.title}</h2>
            <p>{apiData.explanation}</p>
            <img src={apiData.url} alt="" />
        </div>
    )
}

export default Apod;
