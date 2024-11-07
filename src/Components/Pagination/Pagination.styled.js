import styled from "styled-components";

export const PaginationFlex = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 320px;
`;
export const DivFlex = styled.div`
  display: flex;
  justify-content: center;
`;

export const Enumeration = styled.li.attrs((props) => ({
  $isCurrent: props.$isCurrent,
}))`
  background-color: ${(props) =>
    props.$isCurrent ? `#ff9100` : `transparent`};
  border: 1px solid ${(props) => (props.$isCurrent ? `#00712d` : `transparent`)};

  padding: 6px 12px;
  border-radius: 35% 50%;
  cursor: pointer;
`;

export const ArrowButton = styled(Enumeration)`
  & svg {
    width: 20px;
    height: 20px;
  }
  & svg polygon {
    fill: #00712d;
  }
`;
