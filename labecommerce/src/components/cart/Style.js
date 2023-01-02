import styled from "styled-components";

export const ContainerProduct = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2% 4%;
    background-color: white;
    padding: 5%;
    border: 1px solid #d3d3d3;

    img{
        width: 120px;
        height: 180px;
    }
    h4{
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 10%;
    }

    p {
        padding: 8px 10px;
        background-color: #C0D9D9;
        border-radius: 5px;
        font-size: 16px;
        box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.25);
        align-items: center;
        margin-bottom: 10%;
    }

    div {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    span {
        display: flex;
        align-items: center;
        gap: 50px;
    }

    section {
        gap: 50px;
    }

    button {
        background-color:white;
        border: none;
        font-size: 16px;
        text-align: end;
        color: gray;
    }
    
    button:hover{
        border: none;
        cursor: pointer;
        border-bottom: 1px solid red;
        color: red;
    }
`
export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 3px 6px 3px rgba(0, 0, 0, 0.25);
    padding: 3%;
    background-color: white;
    gap: 20px;


`

export const SubAndTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 50%;

    p{
        font-size: 18px;

        span {
            font-size: 20px;
            font-weight: 900;
        }
    }
`

export const  ContainerCart = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
`

export const NotProduct = styled.h2`
    display: flex;
    justify-content: center;
    background-color: white;
    align-items: center;
    padding: 20vh 0;
`