import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ContactContainer = styled.div`
    min-height: 690px;
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    overflow: hidden;
    background-color: #000000;
    padding-top: 60px;
`;

export const ContactWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 75%
    }
`

export const ContactIcon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    padding: 70px;
    text-decoration: none;
    color: #8399FC;
    font-weight: 700;
    font-size: 40px; 

    @media screen and (max-width: 690px){
        margin-left: 16px;
        margin-top: 10px;
        font-size: 26px;
    }
`;

export const ContactContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`

export const Form = styled.form`
    background: #000A34;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 6px;

    @media screen and (max-width: 480px){
        padding: 32px 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 6px;
`

export const FormButton = styled.button`
    background: #019994;
    padding: 16px 0;
    border: none;
    border-radius: 6px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        background: #3BE2DD;
    }
`

export const ContactBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;