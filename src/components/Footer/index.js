import React from 'react';
import {FooterContainer, 
        FooterWrap, 
        FooterLinksContainer, 
        FooterLinksWrapper, 
        FooterLinkItems,
        FooterLinkTitle,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        SocialIcons,
        SocialIconsLink} from './FooterElements';
import {FiFacebook, FiLinkedin, FiInstagram, FiGithub} from 'react-icons/fi';

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>My Social Media Links!</FooterLinkTitle>
                            <SocialMedia>
                                <SocialMediaWrap>
                                    <SocialLogo to="/">

                                    </SocialLogo>
                                    <SocialIcons>
                                        <SocialIconsLink href="//www.facebook.com/michael.crifo" target="_blank" aria-label="Facebook">
                                            <FiFacebook />
                                        </SocialIconsLink>
                                        <SocialIconsLink href="//www.instagram.com/crifology/" target="_blank" aria-label="Instagram">
                                            <FiInstagram />
                                        </SocialIconsLink>
                                        <SocialIconsLink href="//www.linkedin.com/in/michael-crifo-5775b142/" target="_blank" aria-label="LinkedIn">
                                            <FiLinkedin />
                                        </SocialIconsLink>
                                        <SocialIconsLink href="//github.com/Crifology" target="_blank" aria-label="GitHub">
                                            <FiGithub />
                                        </SocialIconsLink>
                                    </SocialIcons>
                                </SocialMediaWrap>
                            </SocialMedia>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}
