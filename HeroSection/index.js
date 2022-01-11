import React from 'react'
import Video from '../../videos/digitalgeo.mp4';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP} from './HeroElements';

export const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Hello (World), I'm Mike Crifo! </HeroH1>
                <HeroP>
                    Welcome to my portfolio website, built using React!
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}