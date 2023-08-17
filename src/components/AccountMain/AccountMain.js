import { ContainerInput, Input, Label, Main, ContainerTopics, BorderTopics, TitleTopics} from "./style"

function AccountMain(){
    return(
        <Main>
            <ContainerInput>
                <Label> Nome:
                    <Input placeholder="Sheyla Cardoso"/>
                </Label>
                <Label> Email:
                    <Input placeholder="sheyla@gmail.com"/>
                </Label>
                <Label> Profissão:
                    <Input placeholder="Astronauta"/>
                </Label>
                <Label> Idade:
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

export default AccountMain