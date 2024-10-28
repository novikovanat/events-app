import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const CardFrame = styled.div`
  /* border: solid #ff9100; */
  /* border-radius: 25%; */
  /* padding: 16px 20px; */
  text-align: center;
  /* display: flex; */
  flex-direction: column;
  justify-content: space-evenly;
  width: 300px;
  height: 200px;
`;
export const StyledTitle = styled.h2`
  font-size: 36px;

`
export const StyledLink = styled(NavLink)`
color: red;
&:active
{
background-color:blue;
}
`
