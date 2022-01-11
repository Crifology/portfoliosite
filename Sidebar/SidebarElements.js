import styled from 'styled-components';
import {CgCloseR} from 'react-icons/cg';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: white;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.4s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;
 
export const CloseIcon = styled(CgCloseR)`  
    color: purple;
`;

export const Icon = styled.div`
    position: absolute;
    top 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: grey;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 80px);
    text-align: center;

    @media screen and (max-width: 475px) {
        grid-template-rows: repeat(2, 40px)
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    color: purple;
    cursor: pointer;

    &:hover {
        color: aqua;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: lightblue;
    white-space: nowrap;
    padding: 16px 64px;
    color: purple;
    font-size: 1.5rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: orange;
        color: red;
    }
`;