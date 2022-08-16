import styled from 'styled-components';

export const PhotoArea = styled.figure`
    width: 100%;
    max-width: 600px;
    margin: auto;    
    border: 1px solid #F9F7F7;
    border-radius: 10px;    
    background-color: #DBE2EF;
    color: #112D4E;
    padding: 5px;
`;

export const Photo = styled.img`
    width: 100%;    
    border-radius: 0 0 10px 10px;
`;

export const PhotoTitle = styled.span`
    display: block;            
    text-align: center; 
    padding: 10px 0;       
`;