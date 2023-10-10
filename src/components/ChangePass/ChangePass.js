import { ButtonCancel, ButtonSave, ChangeTitleContainer, DivButtons, DivChangeTitle, DivForm, FormContainer, MainChange, TitleForm } from "./style"


function ChangePass(){
    return(
        <>
        
        <MainChange>
            <div>
            <DivChangeTitle>
                <ChangeTitleContainer>Alterar senha</ChangeTitleContainer>
            </DivChangeTitle>
            <DivForm>
                <TitleForm>Digite sua senha antiga:</TitleForm>
                <FormContainer/>
                <TitleForm>Digite sua nova senha:</TitleForm>
                <FormContainer/>
                <TitleForm>Confirme sua nova senha:</TitleForm>
                <FormContainer/>
                <DivButtons>
                    <ButtonCancel>Cancelar</ButtonCancel>
                    <ButtonSave>Salvar</ButtonSave>
                </DivButtons>
            </DivForm>
            </div>
        </MainChange>

        
        </>
    )
}

export default ChangePass