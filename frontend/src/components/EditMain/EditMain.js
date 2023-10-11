import { ContainerInput, Input, Label, Main, ContainerTopics, BorderTopics, TitleTopics, ImgUser, EditInput} from "./style"

import User from '../../assets/UserEdit4.png'

function EditMain(){
    return(
        <Main>
            <ContainerInput>
                <Label> Nome:
                    <ImgUser src={User}/>
                    <Input placeholder="Sheyla Cardoso"/>   
                </Label>
                <Label> Email:
                    <ImgUser src={User}/>
                    <Input placeholder="sheyla@gmail.com"/>
                </Label>
                <Label> Profissão:
                    <ImgUser src={User}/>
                    <Input placeholder="Astronauta"/>
                </Label>
                <Label> Idade:
                    <ImgUser src={User}/>
                    <Input placeholder="23"/>
                </Label>
            </ContainerInput>
            <ContainerTopics>
                <TitleTopics> Assuntos de Interesse</TitleTopics>
                <BorderTopics>

                </BorderTopics>
            </ContainerTopics>
        </Main>
    )
}

export default EditMain