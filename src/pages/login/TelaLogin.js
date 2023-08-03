import { Input, Stack } from '@chakra-ui/react'
import { Formulario01} from './styles'



function TelaLogin() {
    return (
        <main class="containerA">
            <h2> Entre no fórum </h2>
            <p>Acesse sua conta aqui para visualizar os assuntos mais falados sobre trabalho</p>
            {/* <section class="form">
                <div class="form">
                    <div class="tit_login">
                        <hi>Login</hi>
                    </div>
                    <form id="login">
                        <label>Nome</label>
                        <input type="text" id="campo" required/>
                        <label class="distancia_input">Senha</label>
                        <input type="password"id="campo2" required/>
                        <div class="class_0button1">
                            <input class="button1" type="submit" value="Entrar"/>
                        </div>
                    </form>
                    <div class="msg_cadastro">
                        <p>Não possui cadastro?</p>
                    </div>
                </div>
            </section> */}

            <Formulario01> 
                <Stack spacing={3}>
                    <label> Nome de usuário: </label>
                    <Input 
                    bg='blue.100'
                    w="40vw"
                    h="9vh"
                        isInvalid
                        errorBorderColor='blue.600'
                    />
                    <label> Senha: </label>
                    <Input
                        isInvalid
                        errorBorderColor='crimson'
                    />
                </Stack>
            </Formulario01>
        </main>
    )
}

export default TelaLogin


