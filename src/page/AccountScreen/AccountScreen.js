import { Container, ContentWrapper,} from './style'

import AccountHeader from "../../components/AccountHeader/AccountHeader"
import PostsMenu from "../../components/PostsMenu/PostsMenu"
import AccountProfileHeader from "../../components/AccountProfileHeader/AccountProfile"
import AccountMain from "../../components/AccountMain/AccountMain"
import AccountButtons from '../../components/AccountButtons/AccountButtons'

function AccountScreen(){
    return(
        <>
        <AccountHeader/>
        <Container>
            <ContentWrapper>
                    <PostsMenu/>
                    <AccountProfileHeader/>
                    <AccountMain/>
                    <AccountButtons/>
            </ContentWrapper>
        </Container>
            </>
    )
}

export default AccountScreen