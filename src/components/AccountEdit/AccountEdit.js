import { ContainerInput, ImgIcon, Input, Label, Main } from "./style"
import UserEdit from '../../assets/UserEdit.png'

function AccountEdit(){
    return(
        <Main>
            <ContainerInput>
                <Label> Nome:
                    <Input placeholder="Sheyla Cardoso"/>
                </Label>
                <ImgIcon src={UserEdit}/>
            </ContainerInput>
        </Main>
    )
}

export default AccountEdit