import { ButtonCancel, ButtonDelete, ButtonSave, ContainerButtons } from "./style";

function EditButtons(){
    return(
        <ContainerButtons>
            <ButtonCancel>
                Cancelar
            </ButtonCancel>
            <ButtonSave>
                Salvar
            </ButtonSave>
            <ButtonDelete>
                Apagar Conta
            </ButtonDelete>
        </ContainerButtons>
    )
}

export default EditButtons