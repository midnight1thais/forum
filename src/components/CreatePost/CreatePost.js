
import { ButtonCancel, InputPost, InputPost02, ButtonSave, DivForm, Form01, LabelContainer, LabelConteudo, LabelImagem, MainCreate, TitleContainer, InputPost01} from "./style"

function CreatePost() {
    return(
        <>
        <MainCreate>
            <DivForm>
                <TitleContainer> Criar Publicação </TitleContainer>
                <Form01> 
                    <LabelContainer>Título: </LabelContainer>
                    <InputPost/>
                    <LabelImagem> Imagem: </LabelImagem>
                    <InputPost01/>
                    <ButtonCancel type="submit" value="Cancelar"/>
                    <LabelConteudo> Conteúdo: </LabelConteudo>
                    <InputPost02/>
                    <ButtonSave type="submit" value="Salvar"/>
                </Form01>
            </DivForm>
            
        </MainCreate>

        </>
    )
}

export default CreatePost