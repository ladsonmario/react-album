import styled from "styled-components";

export const Title = styled.div`
    text-align: center;
    font-size: 22px;
    margin-bottom: 25px;
`;

export const Photos = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;    
    gap: 20px;
`;

export const PhotoArea = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;    
    border: 1px solid #F9F7F7;
    border-radius: 10px;    
    background-color: #DBE2EF;
    color: #112D4E;
    cursor: pointer;
    transition: all ease .3s;
    padding: 2px;

    &:hover {
        opacity: .9;
        box-shadow: 0 0 5px #F9F7F7;
    }
`;

export const Photo = styled.img`
    width: 100%;  
    border-radius: 10px 10px 0 0;      
`;

export const PhotoTitle = styled.span`
    text-align: center;
    font-size: 13px;
    margin-top: 5px;
`;