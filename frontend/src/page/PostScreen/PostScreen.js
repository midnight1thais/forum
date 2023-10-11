import PostsCard from "../../components/PostsCard/PostsCard"
import PostsMenu from "../../components/PostsMenu/PostsMenu"
import PostHeader from "../../components/PostHeader/PostHeader"
import { MainPostContainer, MenuContainerScreen, PostsContainerScreen } from "./style"


function PostScreen(props) {
    return(
        <>
            <PostHeader/>
            <MainPostContainer>
                <MenuContainerScreen>
                    <PostsMenu />
                </MenuContainerScreen>

                <PostsContainerScreen>
                    <PostsCard news={props.news} setNews={props.setNews}/>
                </PostsContainerScreen>
            </MainPostContainer>
            
        </>
    )
}

export default PostScreen