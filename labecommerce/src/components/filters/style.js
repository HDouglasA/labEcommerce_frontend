import styled from "styled-components";

export const ContainerFilters = styled.div`
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    padding: 2vh;
    box-shadow: 2px 2px 2px #696969;
    background-color: #70DBDB;

    section {
        display: flex;
        gap: 7px;
    }
`

export const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-radius: 15px;
    width: 350px;
    height: 35px;
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.25);
    margin-right: 15px;
    
    img {
        width: 30px;
        padding-right: 8px;
        cursor: pointer;
    }

    input {
        background-color: transparent;
        padding-left: 10px;
        font-style: italic;
        font-size: 15px;
        border: none;
        height: 35px;
        width: 350px;
    }
`

export const InputPrice = styled.input`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.25);
    padding-left: 10px;
    font-style: italic;
    font-size: 15px;
    border: none;
    height: 35px;
    width: 92px;
`

export const Sorting = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    label {
        font-size:18px;
    }

    select{
        background-color: #70DBDB;
        border-radius:10px;
        box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.25);
        font-style:italic;
        font-size:15px;
        border:none;
        height:35px;
        width:120px;
        text-align: center;
        border: 1px solid black;
    }

    select:focus {
        border: 1px solid black;
        outline: 0;
    }
`
