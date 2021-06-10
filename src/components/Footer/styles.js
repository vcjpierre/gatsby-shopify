import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const FooterWrapper = styled.footer`
  border-top: 1px solid rgb(221, 221, 221);
  font-size: 14;
`;

export const LegalLinks = styled.div`
  max-width: 1200px;
  margin: 0px auto;
  padding: 20px;
  box-sizing: border-box;
  > div {
    display: flex;
    > div {
      margin: 0px auto;
      > ${StyledLink} {
        padding: 0px 10px;
        color: black;
      }
    }
  }
`;