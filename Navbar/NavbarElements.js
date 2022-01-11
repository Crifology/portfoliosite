import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`   
    background: white;
    height: 120px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (min-width: 960px) {
        transition: 0.75s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`   
    color: purple;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
        background-color: #DEF5FD;
        border-radius: 20%;
    }
`;


export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -200px;

    @media screen and (max-width:760px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    color: purple;
    background-color: white;
    border-radius: 7px;
    text-align: center;
`;

export const NavLinks = styled(LinkS)`
    color: white,
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        border-bottom: 3px solid #6F29FC;
        padding-bottom: 5px;
        border-radius: 5px;
        transition: 0.3s all ease-out;
    }

    &.active {
        border-bottom: 4px solid #6F29FC;
        padding-bottom: 5px;
        border-radius: 10px;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 760px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: lightblue;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: #00A2FF;
        color: #010606;

    }
`;