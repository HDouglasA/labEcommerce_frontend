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
        justify-content:space-between;
        align-items: center;
        padding: 4vh;
        background-color: #ADEAEA;

        button{
            display: flex;
            align-items: flex-end;
            background-color: transparent;
            border: none;
            h6{
                font-size:18px
            }
        }

        p {
            font-size: 30px;
            text-decoration: none;
            color: black;
            cursor: pointer;
            
            span {
                font-size: 30px;
                font-weight: 900;
                text-transform: uppercase;
            }
        }

        img {
            width: 40px;
            cursor: pointer;
        }

        button:hover, img:hover, p:hover{
            transition: 0s;
            -webkit-filter: drop-shadow( 1px 1px 1px rgba(0,0,0,.5));
            filter: drop-shadow( 1px 1px 1px rgba(0,0,0,.5));
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
