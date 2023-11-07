import PostsCard from "../../components/PostsCard/PostsCard"
import PostsMenu from "../../components/PostsMenu/PostsMenu"
import PostHeader from "../../components/PostHeader/PostHeader"
import { ButtonCreatePost, FooterPostScreen, ImageCreate, MainPostContainer, MenuContainerScreen, Overlay, PostsContainerScreen } from "./style"
import { useEffect, useState } from "react"
import CreatePost from "../../components/CreatePost/CreatePost"
import Button from "../../assets/add-circle.svg"
import { url } from "../../constants/url"
import { useNavigate } from "react-router-dom"
import axios from "axios"

 
function PostScreen() {
 
    // funcionalidade do modal (antes)
    const[openCreatePost, setOpenCreatePost] = useState(false)
 

    const toggleCreatePost = () => {
        setOpenCreatePost(!openCreatePost);
      };

      const [posts, setPosts] = useState([]);
      console.log('--------------posts :', posts);

      useEffect(() => {
        axios.get(`${url.defaults.baseURL}/posts/posts`)
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

    console.log('aaaaaaa', users)
    

    return(
        <>
        {openCreatePost && <Overlay show={true} />} 
       
            <PostHeader/>
            <MainPostContainer>
                <MenuContainerScreen>
                    <PostsMenu />
                </MenuContainerScreen>
 
                <PostsContainerScreen>
                    {posts.map((post) => (
                        <PostsCard
                            key={post.id}
                            titulo={post.post_name}
                            userIdValue={post.userPost_id}
                            user={users[post.userPost_id]}
                            date='data'
                        />
                    ))}
                </PostsContainerScreen>

                <FooterPostScreen>
                    <ButtonCreatePost onClick={()=> setOpenCreatePost(true)}> <ImageCreate src={Button} alt="imagem de um sinal de mais (+)"/> </ButtonCreatePost>
                </FooterPostScreen>
            </MainPostContainer>  
        <CreatePost isOpen={openCreatePost} setOpenCreatePost={toggleCreatePost}/>  
        </>
    )
}
 
export default PostScreen