import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #E6E8FA;
    }

    input:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 6vh;
        padding-bottom: 3vh;
        background-color: #344150;
        color: white;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 18px;

        img {
            height: 50px;
            margin-top: 10px;
        }
    } 
`
