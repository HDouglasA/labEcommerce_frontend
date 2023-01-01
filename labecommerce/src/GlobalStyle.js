import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #E6E8FA;
    }

    header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4vh;
        background-color: #ADEAEA;

        a {
            font-size: 30px;
            text-decoration: none;
            color: black;
            span {
                font-size: 30px;
                font-weight: 900;
                text-transform: uppercase;
            }
        }
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

    input:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    } 
`
