import styled from 'styled-components';

export const Button = styled.button`
    font-size: 20px;
    text-transform: uppercase;
    padding: 10px 15px;
    margin: 20px 0;
    color: #F9F7F7;
    background-color: #3F72AF;
    border: 0;
    border-radius: 10px;
    transition: all ease .3s;

    &:hover {
        opacity: .9;
        box-shadow: 0 0 5px #F9F7F7;
    }

    @media (max-width: 750px) {
        font-size: 16px;   
    }
`;