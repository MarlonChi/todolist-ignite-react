import { PlusCircle } from "phosphor-react";

import * as S from "./styles";

export function NewTaskForm() {
  return (
    <S.NewTaskFormContainer>
      <input
        type="text"
        name="description"
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">
        Criar <PlusCircle size={16} weight="bold" />
      </button>
    </S.NewTaskFormContainer>
  );
}
