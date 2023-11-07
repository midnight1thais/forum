import { CommentContainer, CommentUserContainer } from "./style"
import { url } from "../../constants/url"
import axios from "axios"
import { useEffect, useState } from "react"



function Comments(props) {
    const [user, setUser] = useState()
    const [comentarios, setComentarios] = useState()

    useEffect(() => {
        const formData = {
            id: props.user
        }

        axios.post(`${url.defaults.baseURL}/find/findUser`, formData)
            .then(function (response) {
                setUser(response.data.data)
            })
            .catch(function (error) {
                alert("erro")
            });
    }, [props.user])

    return(
        <CommentContainer>
            <CommentUserContainer>
                <h4>{user.name}</h4>
            </CommentUserContainer>
            <div>
                <p>{props.comentario} </p>
            </div>
        </CommentContainer>
    )
}

export default Comments