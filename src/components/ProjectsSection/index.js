import React from 'react';
import {ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP, ProjectIconsLink} from './ProjectsElements'
import Icon1 from '../../images/candycrush.png';
import Icon2 from '../../images/pizzahutt.png';

export const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>My Projects!</ProjectsH1>
            <ProjectsWrapper>

                <ProjectsCard>
                <ProjectIconsLink href="//crifcandycrush.herokuapp.com/" target="_blank" aria-label="CrifCandyCrush">
                    <ProjectsIcon src={Icon1} />
                </ProjectIconsLink>
                <ProjectsH2>CrifCandyCrush - A CandyCrush Emulator</ProjectsH2>
                <ProjectsP>This was my very first application that I used Javascript to create
                It should be noted that minimal CSS and HTML was used, but was for the functionality
                of the game rather than aestetics. </ProjectsP>
                </ProjectsCard>

                <ProjectsCard>
                <ProjectIconsLink href="//pizzaface-crifapp.herokuapp.com/" target="_blank" aria-label="PizzaFace!">
                <ProjectsIcon src={Icon2} />
                </ProjectIconsLink>
                <ProjectsH2>PizzaFace! 2D Platform Jumper</ProjectsH2>
                <ProjectsP>My second gaming application using Javascript with KaboomJS -
                Note that I also deployed through Heroku as it's live! Will be working to update over time...
                ENJOY! </ProjectsP>
                </ProjectsCard>

            </ProjectsWrapper>
        </ProjectsContainer>

    )
}