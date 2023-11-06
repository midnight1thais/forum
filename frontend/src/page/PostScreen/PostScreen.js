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

 
function PostScreen(props) {
 
    // funcionalidade do modal (antes)
    const[openCreatePost, setOpenCreatePost] = useState(false)
 

    const toggleCreatePost = () => {
        setOpenCreatePost(!openCreatePost);
      };

      const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
    try {
        const response = await axios.get(`${url.defaults.baseURL}/posts/posts`);
        setPosts(response.data); // Supondo que os dados estejam no formato de array JSON
    } catch (error) {
        console.error("Erro ao buscar posts:", error);
    }
    };

    useEffect(() => {
    fetchPosts();
    }, []);

    return(
        <>
        {openCreatePost && <Overlay show={true} />} 
       
            <PostHeader/>
            <MainPostContainer>
                <MenuContainerScreen>
                    <PostsMenu />
                </MenuContainerScreen>
 
                <PostsContainerScreen>
                {Array.isArray(posts) && posts.map((post) => (
                    <PostsCard
                    key={post.id}
                    titulo={post.post_name}
                    usuario={post.user_id}
                    descricao={post.post_descricao}
                    criado={post.created_at}
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