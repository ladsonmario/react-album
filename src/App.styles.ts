import styled from "styled-components";

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;    
    margin: auto;
    padding: 10px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LogoText = styled.div`       
    font-size: 40px; 
    
    @media (max-width: 750px) {
        font-size: 30px;
    }
`;

export const LogoImg = styled.img`
    width: 60px;
    height: 60px;
    object-fit: contain;
    margin: 0 5px;          
`;

export const Line = styled.hr``;