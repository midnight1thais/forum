import { ContainerInput, ImgIcon, Input, Label, Main } from "./style"
import UserEdit from '../../assets/UserEdit3.png'

function AccountMain(){
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

export default AccountMain