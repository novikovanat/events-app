import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 8px;
  flex-grow: 1;
  text-shadow: 1px -1px 0 #93ca8d;

  &::first-letter {
    text-transform: uppercase;
  }
  @media (min-width: 1280px) {
    font-size: 28px;
  }
`;
export const Paragraph = styled.p`
  font-family: EB Garamond, serif;
  &::first-letter {
    text-transform: uppercase;
  }
  @media (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 12px 24px 0 8px;
`;
export const StyledLink = styled(NavLink)`
  text-shadow: 0 1px 0 rgba(31, 61, 2, 1);
  display: inline-block;
  color: #ff9100;
  width: 108.5px;
  padding: 16px 8px;
  text-align: center;
  &:active,
  &:hover {
    background-color: #00712d;
    border-radius: 46px 18px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
  @media (min-width: 768px) {
    width: 112.5px;
    font-size: 18px;
  }
  @media (min-width: 1280px) {
    width: 186.5px;
    font-size: 20px;
  }
`;
