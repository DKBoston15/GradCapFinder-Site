import  React, {useEffect} from "react"
import {navigate} from 'gatsby'
const Home = () => {
    useEffect(() => {
        navigate("/")
    }, [])

    return (
        <>
           
        </>
    )
}

export default Home
