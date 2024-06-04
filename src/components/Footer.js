import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>&copy; 2024 Agostina Quevedo. Todos los derechos reservados.</p>
        <FooterLinks>
          <a href="/">Inicio</a>
          <a href="/shop">Tienda</a>
          <a href="/cart">Carrito</a>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
  margin-top: auto;
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterLinks = styled.div`
  margin-top: 10px;

  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Footer;
