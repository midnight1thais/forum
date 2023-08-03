import tecnology from '../../assets/tecnnology.svg'
import userImg from '../../assets/userImg.svg'

import { CardContainer, Content, ContentCard, FooterContent, HeaderContent, ImgCard, ImgCardContainer } from './style'

function PostsCard() {
    return(
        <CardContainer>
            <div>
                <ImgCard src={tecnology} alt="Logo"/>
            </div>
            <ContentCard>
                <HeaderContent>
                    <img src={userImg} alt="Imagem do usuario"/>
                </HeaderContent>
                <Content>
                    <h2>Teste</h2>
                </Content>
                <FooterContent></FooterContent>
            </ContentCard>
        </CardContainer>
    )
}

export default PostsCard