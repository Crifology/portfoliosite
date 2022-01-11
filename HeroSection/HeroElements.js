import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 700px;
    position: relative;
    z-index: 2;
` 

  
export const HeroBg = styled.div`
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

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: white;
    font-size: 46px;
    text-align: center;

    @media screen and (max-width: 760px) {
        font-size: 38px;
    }

    @media screen and (max-width: 480px) {
        font-size: 30px;
    }
`;

export const HeroP = styled.p`
    margin-top: 22px;
    color: white;
    font-size: 28px;
    text-align: center;
    max-width: 500px;

    @media screen and (max-width: 760px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 10px;
    }
`;

