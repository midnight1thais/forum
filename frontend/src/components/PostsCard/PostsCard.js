import tecnology from '../../assets/tecnnology.svg'
import userImg from '../../assets/userImg.svg'
import menssages from '../../assets/messages.svg'

import { BlueTextCard, ButtonContainer, ButtonContainer2, CardContainer, Content, ContentCard, FooterContent, HeaderContent, ImageUserHeader, ImgCard, MenssageImg, NameUserHeader, UserTextCard } from './style'
import { useEffect } from 'react'
import axios from 'axios'

function PostsCard(props) {

    // const pegarNoticias=()=>{
    //     axios.get('http://localhost:8000/news')
    //     .then(response => props.setNews(response.data))
    //     .catch(error => console.error(error))
    // }

    // useEffect( ()=> {
    //     pegarNoticias()
    // }, [])

    // const novasNoticias = props.news.map( (item) =>{
    //     return(
    //         <div key={item.id}>
    //             <h2>{item.titulo}</h2>
    //             <p>{item.content}</p>
    //         </div>
    //     )
    // })
    return(
        <CardContainer>
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
                    <h2>Exemplo de título de uma públicação realizada em um post</h2>
                </Content>
                <FooterContent>
                    <ButtonContainer>
                        <MenssageImg src={menssages} alt='Ícone de mensagens'/>
                        Comentários
                    </ButtonContainer>
                </FooterContent>
            </ContentCard>
        </CardContainer>
    )
}

export default PostsCard