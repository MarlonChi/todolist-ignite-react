import styled, { css } from "styled-components";

interface RadioButtonProps {
  checked: boolean;
}

export const TaskItem = styled.div<Pick<RadioButtonProps, "checked">>`
  ${({ theme, checked }) => css`
    padding: 1.6rem;
    background: ${theme.colors["gray-500"]};
    border: 1px solid ${theme.colors["gray-400"]};
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;

    div {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      cursor: pointer;
    }

    p {
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      color: ${checked ? theme.colors["gray-300"] : theme.colors["gray-100"]};
      text-decoration: ${checked ? "line-through" : ""};
      line-height: 140%;
    }

    input[type="checkbox"] {
      display: none;
    }
  `}
`;

export const Checkbox = styled.span<Pick<RadioButtonProps, "checked">>`
  ${({ theme, checked }) => css`
    border-radius: 100%;
    height: 2.4rem;
    width: 2.4rem;

    transition: 0.2s all;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid
      ${checked ? theme.colors["purple-dark"] : theme.colors.blue};
    background: ${checked ? theme.colors["purple-dark"] : ""};

    &:hover {
      background-color: rgba(30, 111, 159, 0.2);
    }
  `}
`;

export const DeleteButton = styled.button`
  padding: 5px 5.522px 5px 6px;
  background: transparent;
  border: none;
  cursor: pointer;
`;
