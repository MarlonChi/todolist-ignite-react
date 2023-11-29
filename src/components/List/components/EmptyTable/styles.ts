import styled, { css } from "styled-components";

export const EmptyTableContainer = styled.div`
  ${({ theme }) => css`
    padding-top: 6.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${theme.colors["gray-300"]};
    font-size: 1.6rem;
    font-style: normal;

    h3 {
      font-weight: 700;
      margin-top: 1.6rem;
    }

    p {
      font-weight: 400;
    }
  `}
`;
