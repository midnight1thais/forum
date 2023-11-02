import PostsCard from "../../components/PostsCard/PostsCard"
import PostsMenu from "../../components/PostsMenu/PostsMenu"
import PostHeader from "../../components/PostHeader/PostHeader"
import { ButtonCreatePost, FooterPostScreen, ImageCreate, MainPostContainer, MenuContainerScreen, Overlay, PostsContainerScreen } from "./style"
import { useState } from "react"
import CreatePost from "../../components/CreatePost/CreatePost"
import Button from "../../assets/add-circle.svg"
 
 
function PostScreen(props) {
 
    // funcionalidade do modal
    const[openCreatePost, setOpenCreatePost] = useState(false)
 

    const toggleCreatePost = () => {
        setOpenCreatePost(!openCreatePost);
      };

    return(
        <>
        {openCreatePost && <Overlay show={true} />} 
       
            <PostHeader/>
            <MainPostContainer>
                <MenuContainerScreen>
                    <PostsMenu />
                </MenuContainerScreen>
 
                <PostsContainerScreen>
                    <PostsCard />
                    <PostsCard />
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