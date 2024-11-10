import styled from "styled-components";

export const PaginationFlex = styled.div`
  display: flex;
  justify-content: center;
  width: 120px;
`;
export const DivFlex = styled(PaginationFlex)`
  margin: 0 auto 20px;
  width: 278px;
`;
export const ButtonLike = styled.div`
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 35% 50%;
`;
export const PlaceholderDiv = styled.div`
  width: 48px;
`;

export const ArrowButton = styled(ButtonLike)`
  padding-top: 8px;
  outline: solid 3px #ff9100;
  border-style: none;
  & svg {
    width: 20px;
    height: 20px;
  }
  & svg polygon {
    fill: #00712d;
  }
  &:focus {
    outline: 1px solid transparent;
  }
`;

export const Enumeration = styled(ButtonLike).attrs((props) => ({
  $isCurrent: props.$isCurrent,
}))`
  background-color: ${(props) =>
    props.$isCurrent ? `#ff9100` : `transparent`};
  border: 1px solid ${(props) => (props.$isCurrent ? `#00712d` : `transparent`)};
`;
