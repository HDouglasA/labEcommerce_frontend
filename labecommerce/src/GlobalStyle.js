import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #F5F5F5;
    }

    header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7vh 0;
        background-color: #F5F5F5;
        box-shadow: 1px 2px 2px 2px #696969;

        a {
            font-size: 26px;
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
        padding-top: 5vh;
        background-color: #344150;
        justify-content: center;
        align-items: center;
        padding-bottom: 2vh;
        color: white;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 18px;

        img {
            height: 50px;
            margin-top: 10px;
        }
    }
`
