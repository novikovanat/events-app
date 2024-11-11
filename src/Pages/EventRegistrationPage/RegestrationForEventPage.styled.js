import styled from "styled-components";
import { Form, ErrorMessage, Field } from "formik";
import { StyledLink } from "../../Components/EventCard/EventCard.styled";

export const StyledForm = styled(Form)`
  max-width: 320px;
  margin: 70px auto 0;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  display: block;
  font-family: EB Garamond, serif;
  color: #ff9100;
  text-shadow: 0px 1px 0px #00712d;
`;

export const BlockElement = styled(Field)`
  display: block;
  height: 40px;
  width: 100%;
  border-radius: 4px;
  margin: 8px 0 16px;
`;

export const LiFlex = styled.li`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
export const UlPadding = styled.ul`
  padding: 24px 10px;
`;

export const RadioInputs = styled(Field)`
  accent-color: #00712d;
`;

export const RegisterButton = styled(StyledLink)`
  display: block;
  margin: 0 auto;
  border-style: none;
  margin-top: 12px;
`;
