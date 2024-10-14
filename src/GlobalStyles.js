import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {font-family: IBM Plex Serif ,serif;
    box-sizing: border-box;
  line-height: 1.5;
  font-weight: 400;
  text-decoration:none;
  list-style: none;
  color: #00712d;
  background-color: #d5ed9f;
  padding: 0;
  margin: 0;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export const Layout = styled.div`
/* margin: auto; */
  padding: 0 20px;
  /* width: 375px; */

  @media (min-width: 768px) {
    padding: 0 100px;
    /* width: 768px; */
  }
  @media (min-width: 1280px) {
    /* padding: 0 100px; */
    /* width: 1280px; */

  }
`;
