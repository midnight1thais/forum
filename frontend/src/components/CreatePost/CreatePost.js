import { ButtonCancel, InputPost, InputPost02, ButtonSave, DivForm, Form01, LabelContainer, LabelConteudo, LabelImagem, MainCreate, TitleContainer, InputPost01, InputTitle, ContentInput, ButtonsArea, ImgInput, BackgrondStyle} from "./style"
 
import galeryImport from "../../assets/gallery-import.svg"
 
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
                            <ImgInput>
                                <LabelImagem> Imagem: </LabelImagem>
                                <InputPost01>
                                    <input type="image" src={galeryImport}/>
                                </InputPost01>
                            </ImgInput>
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