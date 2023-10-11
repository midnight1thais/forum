import { LabelContainerRegister, MainRegister, Form02, DivImagemRegister, DivFormRegister, DivContentFormRegister, TitleRegister, ImgRegister, ButtonRegister } from './style'
import InputRegister from "../../components/InputRegister/InputRegister"
import LoginHeader from '../../components/LoginHeader/LoginHeader'

import ImagemRegister from '../../assets/ImagemRegister.png'
import { useNavigate } from 'react-router'
import { useForm } from '../../hooks/useForm'


function RegisterScreen() {

    const [form, onChangeForm] = useForm({nome:'', password:'', email:''})

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
                        <InputRegister
                            type='text'
                            name='nome'
                            value={form.username}
                            onChange={onChangeForm}
                        />
                        <LabelContainerRegister>E-mail</LabelContainerRegister>
                        <InputRegister
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={onChangeForm}
                        />
                        <LabelContainerRegister>Idade</LabelContainerRegister>
                        <InputRegister/>
                        <LabelContainerRegister>Senha</LabelContainerRegister>
                        <InputRegister
                            type='password'
                            name='password'
                            value={form.password}
                            onChange={onChangeForm}
                        />
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