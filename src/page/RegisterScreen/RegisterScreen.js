import { LabelContainerRegister, MainRegister, Form02, DivImagemRegister, DivFormRegister, DivContentFormRegister, TitleRegister, ImgRegister, ButtonRegister } from './styles'
import InputRegister from "../../components/InputRegister/InputRegister"
import LoginHeader from '../../components/LoginHeader/LoginHeader'

import ImagemRegister from '../../assets/ImagemRegister.png'


function RegisterScreen() {
    return (
        <MainRegister>
            <DivFormRegister>
                <LoginHeader/>
                <DivContentFormRegister>
                    <TitleRegister> Criar conta </TitleRegister>
                    <Form02> 
                        <LabelContainerRegister>Nome de usuário</LabelContainerRegister>
                        <InputRegister/>
                        <LabelContainerRegister>E-mail</LabelContainerRegister>
                        <InputRegister/>
                        <LabelContainerRegister>Idade</LabelContainerRegister>
                        <InputRegister/>
                        <LabelContainerRegister>Senha</LabelContainerRegister>
                        <InputRegister/>
                        <LabelContainerRegister>Confirmar senha</LabelContainerRegister>
                        <InputRegister/>
                        <ButtonRegister type="submit" value="Entrar"/>
                    </Form02>
                </DivContentFormRegister>
            </DivFormRegister>
            <DivImagemRegister>
                <ImgRegister src={ImagemRegister} alt='Imagem da tela de login'/>
            </DivImagemRegister>
        </MainRegister>
    )
}

export default RegisterScreen