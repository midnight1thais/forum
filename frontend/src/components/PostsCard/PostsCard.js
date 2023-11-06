import userImg from '../../assets/userImg.svg'
import menssages from '../../assets/messages.svg'

import { BlueTextCard, ButtonContainer, ButtonContainer2, CardContainer, Content, ContentCard, FooterContent, HeaderContent, ImageUserHeader, MenssageImg, NameUserHeader, UserTextCard, TempoPubli } from './style'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios'
import { url } from '../../constants/url'


function PostsCard(props) {

    const [user, setUser] = useState()
    const navigate = useNavigate()
    const id = props.usuario
    const [comentarios, setComentarios] = useState([])

    const navegar = () => {
        navigate(`publicacao/${props.id}`)
    }

    function calcularTempo(dataCriacao) {
        const dataAtual = new Date();
        const diferencaEmMilissegundos = dataAtual - new Date(dataCriacao);
        const segundos = Math.floor(diferencaEmMilissegundos / 1000);
        const minutos = Math.floor(segundos / 60);
        const horas = Math.floor(minutos / 60);
        const dias = Math.floor(horas / 24);

        if (dias > 0) {
            return `${dias} dias atrás`;
        } else if (horas > 0) {
            return `${horas} horas atrás`;
        } else if (minutos > 0) {
            return `${minutos} minutos atrás`;
        } else {
            return `${segundos} segundos atrás`;
        }
    }

    useEffect(() => {
        const formData = {
            id: id
        }

        axios.post(`${url}/find/findUser`, formData)
            .then(function (response) {
                setUser(response.data.data)
            })
            .catch(function (error) {
                alert("erro")
            });
    }, [id])

    useEffect(() => {
        axios.get(`${url}/comments/comments/${props.id}`)
            .then(function (response) {
                setComentarios(response.data.data)
            })
            .catch(function (error) {
                console.log(error)
            });
    })

    return(
    <>
    {user && comentarios ? (
        <CardContainer onClick={navegar}>
            <ContentCard>
                <HeaderContent>
                    <ButtonContainer2>
                        <ImageUserHeader src={userImg} alt="Imagem do usuario"/>
                    </ButtonContainer2>
                    <NameUserHeader>
                        <UserTextCard>{user.nome}</UserTextCard>
                        <BlueTextCard>{user.cargo}</BlueTextCard>
                    </NameUserHeader>
                    <TempoPubli>{calcularTempo(props.criado)}</TempoPubli>
                </HeaderContent>
                <Content>
                    <h2>{props.titulo}</h2>
                </Content>
                <FooterContent>
                    <ButtonContainer>
                        <MenssageImg src={menssages} alt='Ícone de mensagens'/>
                        {comentarios.length} comentários
                    </ButtonContainer>
                </FooterContent>
            </ContentCard>
        </CardContainer>
        ) : (
            <></>
        )}
    </>
    )
}

export default PostsCard