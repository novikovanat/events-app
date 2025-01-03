import styled from "styled-components";

export const Header = styled.header`
  margin: 0 auto;
  background-image: url("https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTI5OTZ8MHwxfHNlYXJjaHw4fHxldmVudHxlbnwwfHx8fDE3Mjc5NTAzNjl8MA&ixlib=rb-4.0.3&q=80&w=1080");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 150%;
  aspect-ratio: 4/2;
  text-align: left;
  color: #33372c;
  letter-spacing: 1px;
  padding: 22px 0 0 46px;
  font-weight: 500;
  text-shadow: 0 0 1px #ccc, 0 0 2px #c9c9c9, 0 1px 1px #000, 0 0 3px #bbb,
    0 0 4px #33372c;
 
  @media (min-width: 375px) {
    padding: 26px 0 0 59px;
    width: 375px;
  }
  @media (min-width: 768px) {
    padding: 46px 0 0 105px;
    width: 768px;
    font-size: 41px;
  }
  @media (min-width: 1280px) {
    padding: 84px 0 0 175px;
    width: 1280px;
    font-size: 69px;
  }
`;
