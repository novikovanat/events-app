import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CardFrame = styled.div`
  /* move to List
  /* border: solid #ff9100; */
  /* border-radius: 25%; */
  /* padding: 16px 20px; */
  /* text-align: center; */
  /* display: flex; */
  flex-direction: column;
  justify-content: space-evenly;
  /* width: 300px;
  height: 200px; */
  margin-bottom: 46px;
`;
export const StyledTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 8px;
  &::first-letter {
    text-transform: uppercase;
  }
`;
export const Paragraph = styled.p`
  font-family: EB Garamond, serif;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const StyledNav = styled.nav`
  /* text-align: center; */
  display: flex;
  justify-content: space-between;
  margin: 16px 24px 0 8px;
`;
export const StyledLink = styled(NavLink)`
  display: inline-block;
  color: #ff9100;
  width: 108.5px;
  padding: 16px 8px;
  text-align: center;
  border-radius: 46px 18px;
  /* background-color: #00712d; */
  &:active {
    background-color: #00712d;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
`;
