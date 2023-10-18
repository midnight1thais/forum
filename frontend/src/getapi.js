import axios from "axios"
import { useEffect, useState } from "react"

const Card = () =>{

    const [array, setArray] = useState([])
    const pegarPosts = () =>{
        
        axios
        .get('https://forum-backend-3zv0.onrender.com/post/all')
        .then((response) =>{
            setArray(response.data)
        })
        .catch((error)=>{
            return(error.response)
        })
    }

    useEffect(()=>{
        pegarPosts()
    },[])
    return(
        <>
        {
            array && array.map((dados)=>{
                return(
                    <>{dados.creator_username}</>
                )
            })
        }
        </>
    )
}