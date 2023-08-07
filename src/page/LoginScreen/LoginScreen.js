import { DivImagemHello, ImgHello, MainLogin, DivForm, DivContentForm, LabelPassword, SubTitleContainer, TitleContainer, ButtonLogin, Form01, LabelContainer, DivDontHaveAccount, ButtonCreateAccount} from './style'
import ImagemLogin from '../../assets/ImagemLogin.png'
import LoginHeader from '../../components/LoginHeader/LoginHeader'
import InputLogin from '../../components/InputLogin/InputLogin'
import { useNavigate } from 'react-router';


function LoginScreen() {
    const navigate = useNavigate()

    function goToRegisterPage() {
        navigate("/register");
    }

    function goToHomePage() {
        navigate("/home")
    }

    return (
        <MainLogin>
            <DivForm>
                <LoginHeader/>
                <DivContentForm>
                    <TitleContainer> Entre no fórum </TitleContainer>
                    <SubTitleContainer>Acesse sua conta aqui para visualizar os assuntos mais falados sobre trabalho</SubTitleContainer>
                    <Form01> 
                        <LabelContainer>Nome</LabelContainer>
                        <InputLogin/>
                        <LabelPassword>Senha</LabelPassword>
                        <InputLogin/>
                        <ButtonLogin onClick={goToHomePage} type="submit" value="Entrar"/>
                    </Form01>
                    <DivDontHaveAccount>
                        <p>Não possui cadastro?</p>
                        <ButtonCreateAccount onClick={goToRegisterPage}>Criar conta</ButtonCreateAccount>
                    </DivDontHaveAccount>
                </DivContentForm>
            </DivForm>
            <DivImagemHello>
                <ImgHello src={ImagemLogin} alt='Imagem da tela de login'/>
            </DivImagemHello>
        </MainLogin>
    )
}

export default LoginScreen


