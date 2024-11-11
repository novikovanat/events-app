import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiHomeModern } from "react-icons/hi2";

export const NavStyled = styled.nav`
  width: 320px;
  padding: 0 21px;
  margin: 25px auto;
  font-size: 56px;
`;
export const Home = styled(HiHomeModern)`
  width: 56px;
  height: 56px;
  margin-right: 15px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;
