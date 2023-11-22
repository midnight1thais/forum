import { CommentContainer, CommentUserContainer } from "./style"
import { url } from "../../constants/url"
import axios from "axios"
import { useEffect, useState } from "react"

function Comments(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Buscar informações do usuário associado ao comentário
        axios.get(`${url.defaults.baseURL}/user/information/${props.userIdValue}`)
            .then(function (response) {
                setUser(response.data.data);
            })
            .catch(function (error) {
                console.log('Erro ao buscar informações do usuário');
            });
    }, [props.userIdValue]);

    return (
        <CommentContainer>
            <CommentUserContainer>
                {user ? (
                    <>
                        <p>{user.name}</p>
                    </>
                ) : (
                    <p>Carregando...</p>
                )}
            <div>
                <p>{props.comentario}</p>
            </div>
            </CommentUserContainer>
        </CommentContainer>
    );
}

export default Comments;

