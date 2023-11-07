import { ButtonAddComment, CommentsOpenedPost, ContentOpenedPost, HeaderComments, HeaderOpenedPost, ImgProfilePost, OpenedPostContainer, ProfileNameContainer, TagsPostContainer, TitlePostContainer } from "./style"

import profileTest from "../../assets/profile.svg"
import addCircle from "../../assets/add-circle.svg"
import axios from "axios";
import { url } from "../../constants/url";
import Comments from "../Comments/Comments";


function PostOpened() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Buscar informações de todos os usuários e armazenar em um objeto
        axios.get(`${url.defaults.baseURL}/users`)
            .then(function (response) {
                const usersData = response.data.data;
                const usersObject = {};
                usersData.forEach(user => {
                    usersObject[user.id] = user;
                });
                setUsers(usersObject);
            })
            .catch(function (error) {
                console.log(error);
                alert('Erro ao carregar informações dos usuários.');
            });
    }, []);

    useEffect(() => {
        axios.get(`${url.defaults.baseURL}/comments/:id`)
            .then(function (response) {
                const sortedPosts = response.data.data.sort((a, b) => {
                    const dateA = new Date(a.created_at);
                    const dateB = new Date(b.created_at);
                    return dateB - dateA;
                });

                setPosts(sortedPosts);
            })
            .catch(function (error) {
                console.log(error);
                alert("erro");
            });
    }, []);

    const [users, setUsers] = useState({});

    return(
        <OpenedPostContainer>
            <HeaderOpenedPost>
                <ProfileNameContainer>
                    <ImgProfilePost src={profileTest} alt="Imagem de exemplo do perfil"/>
                    <p>Carlinhos Meneguel</p>
                </ProfileNameContainer>
                <TitlePostContainer>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem  Odio alias distinctio dolorem  Odio alias distinctio dolorem  Odio alias distinctio dolorem aaaaaa</h2>
                </TitlePostContainer>
            </HeaderOpenedPost>
            <ContentOpenedPost>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem 
                </p>
            </ContentOpenedPost>
            <CommentsOpenedPost>
                <HeaderComments>
                    <div>
                        <h3>Comentários</h3>
                    </div>
                    <div>
                        <ButtonAddComment><img src={addCircle} alt="Botão de adicionar comentário"/></ButtonAddComment>
                    </div>
                </HeaderComments>
                <div>
                    {comments.map((comment) => 
                        <Comments
                        key={comment.id}
                        titulo={comment.comment_name}
                        userIdValue={comment.userComment_id}
                        user={users[comment.userComment_id]}
                        date={calculateTime(comment.created_at)}
                        />
                    )}
                </div>
            </CommentsOpenedPost>
        </OpenedPostContainer>
    )
}

export default PostOpened