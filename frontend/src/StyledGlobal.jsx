import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        
        scrollbar-width: none;

        /* Estilo para ocultar a barra de rolagem no Internet Explorer/Edge */
        -ms-overflow-style: none;

        /* Estilo para ocultar a barra de rolagem no Chrome */
        &::-webkit-scrollbar {
        display: none;
}
    }
`