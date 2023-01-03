import styled from "styled-components";

export const ComponentHeader = styled.header`
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
        cursor: pointer;

        h6{
            font-size:18px
        }

        img{
            width: 40px;
        }

        :hover {
            transition: 0s;
            -webkit-filter: drop-shadow( 1px 1px 1px rgba(0,0,0,.5));
            filter: drop-shadow( 1px 1px 1px rgba(0,0,0,.5));
        }
    }
`

export const Logo = styled.img`
    width: 40px;
    cursor: pointer;

    :hover {
        transition: 0s;
        -webkit-filter: drop-shadow( 1px 1px 1px rgba(0,0,0,.5));
        filter: drop-shadow( 1px 1px 1px rgba(0,0,0,.5));
    }
`
export const NameEcommercce = styled.h1`
    font-size: 30px;
    text-decoration: none;
    color: black;
    cursor: pointer;
        
    span {
        font-size: 30px;
        font-weight: 900;
        text-transform: uppercase;
    }

    :hover {
        transition: 0s;
        -webkit-filter: drop-shadow( 1px 1px 1px rgba(0,0,0,.5));
        filter: drop-shadow( 1px 1px 1px rgba(0,0,0,.5));
    }
`
