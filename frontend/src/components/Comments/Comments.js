import { CommentContainer, CommentUserContainer } from "./style"
import { url } from "../../constants/url"
import axios from "axios"
import { useEffect, useState } from "react"



function Comments(props) {
    const [user, setUser] = useState()
    const [comentarios, setComentarios] = useState()


    return(
        <CommentContainer>
            <CommentUserContainer>
                <h4>{props.user_name}</h4>
            </CommentUserContainer>
            <div>
                <p>{props.comentario} </p>
            </div>
        </CommentContainer>
    )
}

export default Comments