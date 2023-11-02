import { ButtonCancel, InputPost, InputPost02, InputTitle, ButtonSave, DivForm, Form01, LabelContainer, LabelConteudo, MainCreate, TitleContainer, ContentInput, ButtonsArea, BackgrondStyle} from "./style"
 
function CreatePost({isOpen, setOpenCreatePost}) {
 
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
                                <InputPost/>
                            </InputTitle>
                            <ContentInput>
                                <LabelConteudo> Conteúdo: </LabelConteudo>
                                <InputPost02/>
                            </ContentInput>
                            <ButtonsArea>
                                <ButtonCancel type="submit" value="Cancelar" onClick={setOpenCreatePost}/>
                                <ButtonSave type="submit" value="Salvar"/>
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