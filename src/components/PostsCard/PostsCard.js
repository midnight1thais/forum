import tecnology from '../../assets/tecnnology.svg'
import userImg from '../../assets/userImg.svg'
import menssages from '../../assets/messages.svg'

import { BlueTextCard, ButtonContainer, ButtonContainer2, CardContainer, Content, ContentCard, FooterContent, HeaderContent, ImageUserHeader, ImgCard, MenssageImg, NameUserHeader, TitleCard, UserTextCard } from './style'
import { useNavigate } from 'react-router-dom'

function PostsCard() {
    const navigate = useNavigate()

    function goToOpenedPost() {
        navigate("/post-opened");
    }

    return(
        <CardContainer>
            <div>
                <ImgCard src={tecnology} alt="Imagem do conteúdo"/>
            </div>
            <ContentCard>
                <HeaderContent>
                    <ButtonContainer2>
                        <ImageUserHeader src={userImg} alt="Imagem do usuario"/>
                    </ButtonContainer2>
                    <NameUserHeader>
                        <UserTextCard>Nome do Usuário</UserTextCard>
                        <BlueTextCard>Tempo da publicação</BlueTextCard>
                    </NameUserHeader>
                </HeaderContent>
                <Content>
                    <ButtonContainer>
                        <TitleCard onClick={goToOpenedPost}>Exemplo de título de uma públicação realizada em um post</TitleCard>
                    </ButtonContainer>
                </Content>
                <FooterContent>
                    <ButtonContainer onClick={goToOpenedPost}>
                        <MenssageImg src={menssages} alt='Ícone de mensagens'/>
                        Comentários
                    </ButtonContainer>
                </FooterContent>
            </ContentCard>
        </CardContainer>
    )
}

export default PostsCard