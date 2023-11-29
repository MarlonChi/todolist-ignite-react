import styled, { css } from "styled-components";

export const NewTaskFormContainer = styled.form`
  ${({ theme }) => css`
    display: flex;
    gap: 8px;
    position: relative;
    top: -2.6rem;

    input {
      flex: 1;
      border-radius: 8px;
      background: ${theme.colors["gray-500"]};
      border: 1px solid ${theme.colors["gray-700"]};
      padding: 1.6rem;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      color: ${theme.colors["gray-100"]};

      &:focus {
        border-color: ${theme.colors["purple-dark"]};
      }

      &::placeholder {
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        color: ${theme.colors["gray-300"]};
      }
    }

    button {
      padding: 1.6rem;
      border-radius: 8px;
      background: ${theme.colors["blue-dark"]};
      color: ${theme.colors["gray-100"]};
      border: none;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 700;
      cursor: pointer;

      display: flex;
      align-items: center;
      gap: 8px;

      &:hover {
        background: ${theme.colors.blue};
        transition: background 0.2s;
      }
    }
  `}
`;
