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

    // novo para ver posts

    // const navigate = useNavigate()
    // const [posts, setPosts] = useState()

    // useEffect(() => {
    //     const token = localStorage.getItem('@Auth:token')
    //     if (!token) {
    //         navigate('/')
    //     }
    // }, [navigate])

    // useEffect(() => {
    //     axios.get(`${url}/posts/posts`)
    //         .then(function (response) {
    //             setPosts(response.data.data)
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //             alert("erro no post screen")
    //         });
    // })

    return(
        <>
        {openCreatePost && <Overlay show={true} />} 
       
            <PostHeader/>
            <MainPostContainer>
                <MenuContainerScreen>
                    <PostsMenu />
                </MenuContainerScreen>
 
                <PostsContainerScreen>
                {/* {posts ? (
                            <>
                                {posts.map((post, index) => (
                                    <PostsCard id={post.id}
                                        key={index}
                                        titulo={post.titulo}
                                        usuario={post.user_id}
                                        descricao={post.descricao}
                                        criado={post.created_at}
                                    />
                                ))}
                            </>
                        ) : (
                            <></>
                        )} */}
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