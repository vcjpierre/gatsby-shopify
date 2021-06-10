import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const HeaderWrapper = styled.header`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

export const Nav = styled.div`
  display: flex;
  margin: auto 0;
  padding-left: 15px;
  > ${StyledLink} {
    color: black;
    text-decoration: none;
    padding-left: 8px;
    margin: auto 0;
    &:hover {
      text-decoration: underline;
    }
  }
`;