import styled, { css } from "styled-components";

interface IContainerProps {
  type: "error" | "success" | "info";
  hasDescription: boolean;
}

const toastTypeVariation = {
  info: css`
    background: #ebfefe;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e564a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled.div<IContainerProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  ${props => toastTypeVariation[props.type] || "info"}

  > svg {
    margin: 4px 12px 0 0;
  }

  & + div {
    margin-top: 12px;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 8px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
    margin-right: 16px;
  }

  ${props =>
    !!props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;