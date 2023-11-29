import { NewTaskForm } from "./components/NewTaskForm";

import * as S from "./styles";

export function TaskList() {
  return (
    <S.ListContainer>
      <NewTaskForm />
      <S.TaskListContainer>
        <S.HeaderList>
          <S.CreatedTasks>
            <h4>Tarefas criadas</h4>
            <span>0</span>
          </S.CreatedTasks>
          <S.FinishedTasks>
            <h4>Concluídas</h4>
            <span>0</span>
          </S.FinishedTasks>
        </S.HeaderList>
        <S.TasksTable></S.TasksTable>
      </S.TaskListContainer>
    </S.ListContainer>
  );
}
