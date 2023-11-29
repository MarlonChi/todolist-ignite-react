import { NewTaskForm } from "./components/NewTaskForm";

import * as S from "./styles";

export function List() {
  return (
    <S.ListContainer>
      <NewTaskForm />
      <div>Tasks</div>
    </S.ListContainer>
  );
}
