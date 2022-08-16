import styled from "styled-components";

export const Container = styled.div`
    margin: 20px 0;
`;

export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 20px 0;
`;

export const Albums = styled.div`    
    border: 1px solid #F9F7F7;
    cursor: pointer;    
    border-radius: 10px;
    background-color: #3F72AF;
    text-align: center;
    transition: all ease .3s;

    &:hover {
        opacity: .9;
        box-shadow: 0 0 5px #F9F7F7;
    }

    a {
        display: block;
        width: 100%;  
        padding: 10px 5px;           
    }    
`;
