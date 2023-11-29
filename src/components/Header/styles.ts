import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors["gray-700"]};
    height: 20rem;

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
