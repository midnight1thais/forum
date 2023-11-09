import { ButtonAddComment, CommentsOpenedPost, ContentOpenedPost, HeaderComments, HeaderOpenedPost, ImgProfilePost, OpenedPostContainer, ProfileNameContainer, TagsPostContainer, TitlePostContainer } from "./style"

import profileTest from "../../assets/profile.svg"
import addCircle from "../../assets/add-circle.svg"
import axios from "axios";
import { url } from "../../constants/url";
import Comments from "../Comments/Comments";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function PostOpened() {
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState(null);
    const [postData, setPostData] = useState('');

    const param = useParams()
    const postIdValue = param.postId
    console.log('------------postIdValue :', postIdValue);
    
    useEffect(() => {
        axios.get(`${url.defaults.baseURL}/posts/find/${postIdValue}`)
        .then(response => {
          const postDataFromServer = response.data; 
          setPostData(postDataFromServer.data);
        })
        .catch(error => {
          console.error('Erro ao buscar dados do post:', error);
        });
    }, []);


    useEffect(() => {
        axios.get(`${url.defaults.baseURL}/user/information/${postData.userPost_id}`)
            .then(function (response) {
                setUser(response.data.data);
            })
            .catch(function (error) {
                console.log("Erro ao buscar informações do usuário");
            });
    }, [postData.userPost_id]);

    console.log('aaaaaaa', user)



    // useEffect(() => {
    //     // Buscar informações de todos os usuários e armazenar em um objeto
    //     axios.get(`${url.defaults.baseURL}/users`)
    //         .then(function (response) {
    //             const usersData = response.data.data;
    //             const usersObject = {};
    //             usersData.forEach(user => {
    //                 usersObject[user.id] = user;
    //             });
    //             setUsers(usersObject);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //             alert('Erro ao carregar informações dos usuários.');
    //         });
    // }, []);

    // useEffect(() => {
    //     axios.get(`${url.defaults.baseURL}/comments/:id`)
    //         .then(function (response) {
    //             const sortedPosts = response.data.data.sort((a, b) => {
    //                 const dateA = new Date(a.created_at);
    //                 const dateB = new Date(b.created_at);
    //                 return dateB - dateA;
    //             });

    //             setPosts(sortedPosts);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //             alert("erro");
    //         });
    // }, []);

    // const [users, setUsers] = useState({});

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
                        <input type="text"/>
                        <button>Enviar</button>
                    </form>
                </HeaderComments>
                <div>
                    {/* {comments.map((comment) => 
                        <Comments
                        key={comment.id}
                        titulo={comment.comment_name}
                        userIdValue={comment.userComment_id}
                        user={users[comment.userComment_id]}
                        date={calculateTime(comment.created_at)}
                        />
                    )} */}
                </div>
            </CommentsOpenedPost>
        </OpenedPostContainer>
    )
}

export default PostOpened