import { ButtonCancel, ButtonSave, DivButtons, DivForm, DivTitle, FormContainer, MainAdd, TitleContainer, TitleForm } from "./style"


function AddSubject(){
    return(
        <>
        
        <MainAdd>
            <div>
            <DivTitle>
                <TitleContainer>Adicionar assunto</TitleContainer>
            </DivTitle>
            <DivForm>
                <TitleForm>Novo assunto:</TitleForm>
                <FormContainer/>
                <DivButtons>
                    <ButtonCancel>Cancelar</ButtonCancel>
                    <ButtonSave>Salvar</ButtonSave>
                </DivButtons>
            </DivForm>
            </div>
        </MainAdd>

        </>
    )
}

export default AddSubject