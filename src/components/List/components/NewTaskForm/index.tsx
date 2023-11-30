import { ChangeEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";

import * as S from "./styles";
import { Task } from "../..";

interface NewTaskFormProps {
  createNewTask: (data: Task) => void;
}

export function NewTaskForm({ createNewTask }: NewTaskFormProps) {
  const [description, setDescription] = useState<string>("");

  const handleCreateNewTask = (event: ChangeEvent) => {
    event.preventDefault();
    const data = {
      id: Date.now(),
      description: description,
      checked: false,
    };
    createNewTask(data);
    setDescription("");
  };

  return (
    <S.NewTaskFormContainer onSubmit={handleCreateNewTask}>
      <input
        type="text"
        name="description"
        placeholder="Adicione uma nova tarefa"
        value={description}
        onChange={(event) => setDescription(event?.target.value)}
        required
      />
      <button type="submit">
        Criar <PlusCircle size={16} weight="bold" />
      </button>
    </S.NewTaskFormContainer>
  );
}
