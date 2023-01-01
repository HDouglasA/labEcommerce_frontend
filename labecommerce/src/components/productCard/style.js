import styled from "styled-components";

export const ContainerProduct = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 3px 6px 3px rgba(0, 0, 0, 0.25);
    border-radius: 3%;
    margin: 5%;
    padding: 10% 5%;
    background-color: white;
    gap: 10px;
    border: 2px solid #ADEAEA;

    img{
        width: 140px;
        height: 200px;
    }

    h3{
        color: #545454;
    }

    p{
        font-size: 18px;
        font-weight: 900;
        border-bottom: 2px solid black;
    }

    button {
        padding: 5%;
        background-color:white;
        border: none;
        border-radius: 25px;
        font-size: 16px;
        box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.25);
        margin-top: 2%;
        border: 1px solid gray;
    }
    
    button:hover{
        background-color: #ADEAEA;
        border: none;
        cursor: pointer;
        transition: 0.3s;
        box-shadow: 0 1px 2px 1px #696969;

    }

    button:active{
        transition: 0s;
        -webkit-filter: drop-shadow(1px 6px 3px rgba(0,0,0,.5));
        filter: drop-shadow(6px 3px 3px rgba(0,0,0,.5));
        background-color: #70DBDB;
    }
`
