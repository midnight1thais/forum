import PostsCard from "../../components/PostsCard/PostsCard"
import PostsMenu from "../../components/PostsMenu/PostsMenu"
import PostHeader from "../../components/PostHeader/PostHeader"


function PostScreen() {
    return(
        <>
            <PostHeader/>
          
            <PostsMenu />
         
            <PostsCard />
            
        </>
    )
}

export default PostScreen