import React from 'react';
import { FooterContainer, LinkedInIconStyled, LinkedInLink, Name, Photo } from './footer.style';

const Footer = () => {
  return (
    <FooterContainer>
      <Photo
        src="src/assets/perfil.jpg"
        alt="Sua Foto"
      />
      <Name>Suzane Ferreira Pinto</Name>
      <LinkedInLink
        href="https://www.linkedin.com/in/suzaneferreirapinto/"
      >
        <LinkedInIconStyled />
        LinkedIn
      </LinkedInLink>
    </FooterContainer>
  );
}

export default Footer;
