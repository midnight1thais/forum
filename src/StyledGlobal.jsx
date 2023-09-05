import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        scrollbar-width: thin;
    }

    *::-webkit-scrollbar {
        width: 6px;
        height: 0vh;
    }

  
  *::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 20px;
    border: none;
  }
`
