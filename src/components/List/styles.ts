import styled, { css } from "styled-components";

export const ListContainer = styled.main`
  max-width: 736px;
  width: 100%;
  margin: 0 auto;
`;

export const TaskListContainer = styled.div`
  margin-top: 2.2rem;
`;

export const HeaderList = styled.header`
  ${({ theme }) => css`
    padding-bottom: 2.4rem;
    border-bottom: 1px solid ${theme.colors["gray-400"]};

    display: flex;
    justify-content: space-between;

    h4 {
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 700;
    }

    span {
      padding: 2px 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 999px;
      background: ${theme.colors["gray-400"]};

      font-size: 1.2rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      color: ${theme.colors["gray-200"]};
    }
  `}
`;

export const CreatedTasks = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 8px;

    h4 {
      color: ${theme.colors.blue};
    }
  `};
`;

export const FinishedTasks = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 8px;

    h4 {
      color: ${theme.colors.purple};
    }
  `}
`;

export const TasksTable = styled.div``;
