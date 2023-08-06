import { DivImagemHello, ImgHello, MainLogin, DivForm, DivContentForm, LabelPassword, SubTitleContainer, TitleContainer, ButtonLogin, Form01, LabelContainer, DivDontHaveAccount, ButtonCreateAccount} from './styles'
import ImagemLogin from '../../assets/ImagemLogin.png'
import LoginHeader from '../../components/LoginHeader/LoginHeader'
import Input from '../../components/Input/Input'


function LoginScreen() {
    return (
        <MainLogin>
            <DivForm>
                <LoginHeader/>
                <DivContentForm>
                    <TitleContainer> Entre no fórum </TitleContainer>
                    <SubTitleContainer>Acesse sua conta aqui para visualizar os assuntos mais falados sobre trabalho</SubTitleContainer>
                    <Form01> 
                        <LabelContainer>Nome</LabelContainer>
                        <Input/>
                        <LabelPassword>Senha</LabelPassword>
                        <Input/>
                        <ButtonLogin type="submit" value="Entrar"/>
                    </Form01>
                    <DivDontHaveAccount>
                        <p>Não possui cadastro?</p>
                        <ButtonCreateAccount>Criar conta</ButtonCreateAccount>
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


