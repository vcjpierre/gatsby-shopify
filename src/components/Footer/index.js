import React from 'react';
import { FooterWrapper, LegalLinks } from './styles';
import { StyledLink } from '../StyledLink';

export function Footer() {
  return (
    <FooterWrapper>
      <LegalLinks>
        <div>
          <div>
            <StyledLink to="/">Privacy policy</StyledLink>
            <StyledLink to="/">Terms of service</StyledLink>
            <StyledLink to="/">Refund policy</StyledLink>
          </div>
        </div>
        <div style={{ margin: '20px auto' }}>
          <div style={{ textAlign: 'center', }}>
            © Copyright 2021 - Caps Store World - Fordem, 25717 Larry Place, West Island, US
          </div>
        </div>
      </LegalLinks>
    </FooterWrapper>
  );
}