import { LabelContainerRegister, MainRegister, Form02, DivImagemRegister, DivFormRegister, DivContentFormRegister, TitleRegister, ImgRegister, ButtonRegister } from './style'
import InputRegister from "../../components/InputRegister/InputRegister"
import LoginHeader from '../../components/LoginHeader/LoginHeader'

import ImagemRegister from '../../assets/ImagemRegister.png'
import { useNavigate } from 'react-router'


function RegisterScreen() {

    const navigate = useNavigate()

    function goToHomePage() {
        navigate("/home")
    }
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
                        <ButtonRegister onClick={goToHomePage} type="submit" value="Entrar"/>
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