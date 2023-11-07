import axios from "axios"
import { useState } from "react"
import { url } from "../../constants/url"
import { ButtonCancel, InputPost, InputPost02, InputTitle, ButtonSave, DivForm, Form01, LabelContainer, LabelConteudo, MainCreate, TitleContainer, ContentInput, ButtonsArea, BackgrondStyle} from "./style"
 
function CreatePost({isOpen, setOpenCreatePost}) {

    const [post_name, setTitulo] = useState()
    const [post_descricao, setDescricao] = useState()
    const userPost_id = localStorage.getItem("@Auth:id")

    const handleClick = async (e) => {
        e.preventDefault();
        const formData = {
            post_name,
            post_descricao,
            userPost_id
        }
        try {
            await url.post('/posts/create', formData)
            setOpenCreatePost()
            window.location.reload();
        } catch (error) {
          console.error("Erro ao criar artigo:", error);
        }
      };
 
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
                                <InputPost
                                value={post_name} 
                                onChange={(e) => setTitulo(e.target.value)}
                                placeholder="Digite aqui seu titulo"/>
                            </InputTitle>
                            <ContentInput>
                                <LabelConteudo> Conteúdo: </LabelConteudo>
                                <InputPost02
                                value={post_descricao} 
                                onChange={(e) => setDescricao(e.target.value)} 
                                placeholder="Descreva o seu assunto"/>
                            </ContentInput>
                            <ButtonsArea>
                                <ButtonCancel onClick={setOpenCreatePost}>Cancelar</ButtonCancel>
                                <ButtonSave onClick={handleClick}>Salvar</ButtonSave>
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