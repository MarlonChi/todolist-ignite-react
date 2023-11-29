import { ClipboardText } from "phosphor-react";

import * as S from "./styles";

export function EmptyTable() {
  return (
    <S.EmptyTableContainer>
      <ClipboardText size={56} />
      <h3>Você ainda não tem tarefas cadastradas</h3>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </S.EmptyTableContainer>
  );
}
