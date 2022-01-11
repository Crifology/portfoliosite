import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom'


export const Button = styled(LinkS)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? 'lightblue' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : 'lightblue')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({primary}) => (primary ? '#00A2FF' : '#01BF71')}; 
    }
`;

export const Button2 = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? 'lightblue' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : 'lightblue')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({primary}) => (primary ? '#00A2FF' : '#01BF71')}; 
    }
`;