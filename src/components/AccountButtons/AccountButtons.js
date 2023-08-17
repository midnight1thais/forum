import { ButtonEdit, ButtonPassword, ContainerButtons } from "./style";

function AccountButtons(){
    return(
        <ContainerButtons>
            <ButtonEdit>
                Editar
            </ButtonEdit>
            <ButtonPassword>
                Alterar Senha
            </ButtonPassword>
        </ContainerButtons>
    )
}

export default AccountButtons