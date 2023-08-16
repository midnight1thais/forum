import AccountHeader from "../../components/AccountHeader/AccountHeader"
import PostsMenu from "../../components/PostsMenu/PostsMenu"
import AccountProfile from "../../components/AccountProfile/AccountProfile"

import { Container, ContentWrapper,} from './style'

function AccountScreen(){
    return(
        <>
        <AccountHeader/>
        <Container>
            <ContentWrapper>
                    <PostsMenu/>
                    <AccountProfile />
            </ContentWrapper>
        </Container>
            </>
    )
}

export default AccountScreen