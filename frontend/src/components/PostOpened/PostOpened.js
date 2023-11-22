import { ButtonAddComment, ButtonComment, CommentsOpenedPost, ContentOpenedPost, HeaderComments, HeaderOpenedPost, ImgProfilePost, InputComment, OpenedPostContainer, ProfileNameContainer, TagsPostContainer, TitlePostContainer } from "./style"

import profileTest from "../../assets/profile.svg"
import addCircle from "../../assets/add-circle.svg"
import axios from "axios";
import { url } from "../../constants/url";
import Comments from "../Comments/Comments";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function PostOpened() {
    const [comments, setComments] = useState([]);
    const [newCommentText, setNewCommentText] = useState('');
    const [user, setUser] = useState(null);
    const [postData, setPostData] = useState([]);
    const [users, setUsers] = useState({});
    const [userPost_id, setUserPostId] = useState(null); // Adicionei um estado para userPost_id
    const param = useParams();
    const postIdValue = parseInt(param.postId, 10);

    const idUserComment = parseInt(localStorage.getItem("@Auth:id"),10)
    
    
    useEffect(() => {
        // Buscar informações de todos os usuários e armazenar em um objeto
        axios
        .get(`${url.defaults.baseURL}/users`)
        .then(function (response) {
            const usersData = response.data.data;
            const usersObject = {};
            usersData.forEach((user) => {
                usersObject[user.id] = user;
            });
            setUsers(usersObject);
        })
        .catch(function (error) {
            console.log(error);
            console.log('Erro ao carregar informações dos usuários.');
        });
    }, []);
    
    useEffect(() => {
        axios
        .get(`${url.defaults.baseURL}/posts/find/${postIdValue}`)
            .then((response) => {
                const postDataFromServer = response.data;
                setPostData(postDataFromServer.data);
                setUserPostId(postDataFromServer.data.userPost_id);
            })
            .catch((error) => {
                console.error('Erro ao buscar dados do post:', error);
            });
        }, [postIdValue]);
        
        useEffect(() => {
            // Verificar se userPost_id está definido antes de fazer a solicitação para obter informações do usuário
            if (userPost_id) {
                axios
                .get(`${url.defaults.baseURL}/user/information/${userPost_id}`)
                .then(function (response) {
                    setUser(response.data.data);
                })
                .catch(function (error) {
                    console.log('Erro ao buscar informações do usuário');
                });
            }
        }, [userPost_id]);
        
        useEffect(() => {
            // Após adicionar um novo comentário, busque novamente os comentários no servidor
            axios.get(`${url.defaults.baseURL}/comments/${postIdValue}`)
            .then(function (response) {
                const sortedComments = response.data.data;
                console.log('--------sortedComments :', sortedComments);
                
                setComments(sortedComments);
            })
            .catch(function (error) {
                console.log(error);
                console.log("erro");
            });
        }, [])
        
        const handleCommentSubmit = async (e) => {
            e.preventDefault();
            console.log("Novo comentário:", newCommentText, userPost_id, postIdValue);
            
            axios.post(`${url.defaults.baseURL}/comments/create`, {
                comment_descricao: newCommentText,
                commentUser_id: idUserComment,
                commentPost_id: postIdValue
            })
            .then(response => {
                console.log("Resposta do servidor:", response.data);
                setNewCommentText("");
                window.location.reload();
            })
        }
        
        console.log('-------comments :', comments);
        return(
            <OpenedPostContainer>
            <HeaderOpenedPost>
                <ProfileNameContainer>
                    <ImgProfilePost src={profileTest} alt="Imagem de exemplo do perfil"/>
                    <p>{user ? user.name : 'Carregando...'}</p>
                </ProfileNameContainer>
                <TitlePostContainer>
                    <h2>{postData.post_name}</h2>
                </TitlePostContainer>
            </HeaderOpenedPost>
            <ContentOpenedPost>
                <p>
                    {postData.post_descricao}
                </p>
            </ContentOpenedPost>
            <CommentsOpenedPost>
                <HeaderComments>
                    <div>
                        <h3>Comentários</h3>
                    </div>
                    
                    <form>
                        <InputComment 
                        type="text"
                        placeholder='coloque seu comentário'
                        value={newCommentText}
                        onChange={(e) => setNewCommentText(e.target.value)}
                        />
                        <ButtonComment onClick={handleCommentSubmit}>Enviar</ButtonComment>
                    </form>
                </HeaderComments>
                <div>

                    {comments ? (
                        <>
                            {comments.map((comment, index) => (
                                <Comments key={index}
                                    criado={comment.created_at}
                                    comentario={comment.comment_descricao}
                                    userIdValue={comment.commentUser_id}
                                    user={users[comment.commentUser_id]}
                                />
                            ))}
                        </>
                    ) : (
                        <p>Carregando comentários...</p>
                    )}

                </div>
            </CommentsOpenedPost>
        </OpenedPostContainer>
    )
}

export default PostOpened