import { useState } from "react"
import { ButtonCancel, InputPost, InputPost02, InputTitle, ButtonSave, DivForm, Form01, LabelContainer, LabelConteudo, MainCreate, TitleContainer, ContentInput, ButtonsArea, BackgrondStyle} from "./style"
import axios from "axios"
import { baseUrl } from '../../constants/url'

 
function CreatePost({isOpen, setOpenCreatePost}) {
    const [titulo, setTitulo] = useState()
    const [descricao, setDescricao] = useState()
    const id = localStorage.getItem("user")

    const handleClick = () =>{
        const formData = {
            titulo: titulo,
            descricao: descricao,
            idUser: id
        }
        axios.post(`${baseUrl}/post/create`, formData)
            .then(function (response){
                console.log(response)
            })
            .catch(function (error){
                console.log(error)
            })
    }

    if(isOpen) {
        return(
            <>
            <BackgrondStyle>
                <MainCreate>
                    <DivForm>
                        <TitleContainer> Criar Publicação </TitleContainer>
                        <Form01>
                            <InputTitle>
                                <LabelContainer>Título: </LabelContainer>
                                <InputPost onChange={(e)=> setTitulo(e.target.value)}/>
                            </InputTitle>
                            <ContentInput>
                                <LabelConteudo> Conteúdo: </LabelConteudo>
                                <InputPost02 onChange={(e)=> setDescricao(e.target.value)}/>
                            </ContentInput>
                            <ButtonsArea>
                                <ButtonCancel type="submit" value="Cancelar" onClick={setOpenCreatePost}/>
                                <ButtonSave type="submit">Salvar</ButtonSave>
                            </ButtonsArea>
                        </Form01>
                    </DivForm>
                   
                </MainCreate>
            </BackgrondStyle>  
            </>
        )  
    }
    return null
}

export default CreatePost