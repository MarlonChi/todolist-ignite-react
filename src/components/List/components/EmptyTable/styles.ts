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
    border-top: 1px solid ${theme.colors["gray-400"]};

    h3 {
      font-weight: 700;
      margin-top: 1.6rem;
    }

    p {
      font-weight: 400;
    }
  `}
`;
