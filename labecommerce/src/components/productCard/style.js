import styled from "styled-components";

export const ContainerProduct = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 3px 6px 3px rgba(0, 0, 0, 0.25);
    border-radius: 5%;
    border: 2px solid black; 
    margin: 5%;
    padding: 10% 5%;
    gap: 5%;

    img {
        width: 250px;
        height: 500%;
    }
`

export const NameAndImage = styled.div`
    display: flex;

    h3{
        color: gray;
    }
`
