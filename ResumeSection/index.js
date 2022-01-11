import React from "react";
import {Button2} from '../ButtonElements';
import { ResumeContainer,
        ResumeWrapper,
        ResumeRow,
        Column1,
        TextWrapper,
        TopLine,
        Heading,
        Subtitle,
        BtnWrap,
        Column2,
        Img,
        ImgWrap } from './ResumeElements';


export const ResumeInfo = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, buttonLabel, img, alt}) => {

  
  return (
    <>
      <ResumeContainer lightBg={lightBg} id={id}>
        <ResumeWrapper>
          <ResumeRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>Javascript, HTML5, CSS3, NodeJS, RESTful API,
                ExpressJS, React, MongoDB, MySQL,<br></br> Docker and Kubernetes <br></br><br></br> 
                Thanks to the great team over at KnowledgeHut who set up my full stack dev boot-camp curriculum and worked with me through my initial learning phases in programming!<br></br><br></br>
                Please press the button below to see full resume and what I've accomplished prior to my coding jumpstart! </Subtitle>
                <BtnWrap >
                  <Button2 to='/resume'>{buttonLabel}</Button2>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
                <ImgWrap>
                    <Img src={img} alt={alt} />
                </ImgWrap>
            </Column2>
          </ResumeRow>
        </ResumeWrapper>
      </ResumeContainer>
    </>
  );
};