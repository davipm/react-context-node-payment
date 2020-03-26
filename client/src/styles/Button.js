import styled, { css } from "styled-components";
import { boxShadow } from "./variables";

export const Button = styled("button")`
  display: block;
  margin-top: 1rem;
  padding: 0.5rem 0.7rem;
  width: 100%;
  text-align: center;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5;
  color: white;
  background-color: #9c88ff;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  box-shadow: ${boxShadow};
  outline: 0;

  ${props =>
    props.delete &&
    css`
      position: absolute;
      width: auto;
      top: 50%;
      left: 0;
      margin-top: 0;
      padding: 10px 15px;
      font-size: 20px;
      line-height: 20px;
      background-color: #e74c3c;
      transform: translate(-140%, -47%);
      opacity: 0;
    `}
`;
