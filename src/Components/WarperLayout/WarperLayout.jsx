import { styled } from "styled-components";
export  const Container = ({children}) =>{
  const Layout = styled.div`
    padding: 0 20px;
    @media (min-width: 375px) {
      padding: 0 80px;
    }
    @media (min-width: 768px) {
      backgroud-color: blue;
    }
    @media (min-width: 1280px) {
      backgroud-color: green;
    }
  `;
  return <Layout>{children}</Layout>;
}
