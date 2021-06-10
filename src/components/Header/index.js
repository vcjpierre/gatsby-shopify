import React from 'react';
import { HeaderWrapper, Nav } from './styles';
import { Cart } from '../Cart';
import { Search } from '../Search';
import { Logo } from '../Logo';
import { StyledLink } from '../StyledLink';
import { Link } from 'gatsby';

export function Header() {
  return (
    <HeaderWrapper>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <Nav>
        <StyledLink to="/all-products">
          Shop
        </StyledLink>
        <StyledLink to="/">
          About
        </StyledLink>
        <StyledLink to="/">
          FAQs
        </StyledLink>
        <StyledLink to="/">
          Contact Us
        </StyledLink>
      </Nav>        
      <Search />
      <Cart />      
    </HeaderWrapper>
  );
}