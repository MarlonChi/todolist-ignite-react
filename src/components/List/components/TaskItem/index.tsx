import { Check, Trash } from "phosphor-react";

import { Task } from "../..";

import * as S from "./styles";

interface TaskItemProps {
  tasks: Task[];
  handleToggleCheck: (id: number) => void;
  handleRemoveItem: (id: number) => void;
}

export function TaskItem({
  tasks,
  handleToggleCheck,
  handleRemoveItem,
}: TaskItemProps) {
  return (
    <>
      {tasks?.map((task: Task) => {
        return (
          <S.TaskItem
            key={task.id}
            checked={task.checked}
            onClick={() => handleToggleCheck(task.id)}
          >
            <div>
              <input type="checkbox" readOnly />
              <S.Checkbox checked={task.checked}>
                {task.checked && <Check size={12} color="#F2F2F2" />}
              </S.Checkbox>
              <p>{task.description}</p>
            </div>
            <S.DeleteButton onClick={() => handleRemoveItem(task.id)}>
              <Trash size={16} color="#808080" />
            </S.DeleteButton>
          </S.TaskItem>
        );
      })}
    </>
  );
}
