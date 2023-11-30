import { useState } from "react";
import { Check, Trash } from "phosphor-react";

import { Task } from "../..";

import * as S from "./styles";

interface TaskItemProps {
  tasks: Task[];
}

export function TaskItem({ tasks }: TaskItemProps) {
  const [checked, setChecked] = useState<boolean>(false);

  const handleToggleCheck = () => {
    setChecked(!checked);
  };

  return (
    <>
      {tasks?.map((task: Task) => {
        return (
          <S.TaskItem key={task.id} checked={task.checked}>
            <div onClick={handleToggleCheck}>
              <input type="checkbox" readOnly />
              <S.Checkbox checked={task.checked}>
                {task.checked && <Check size={12} color="#F2F2F2" />}
              </S.Checkbox>
              <p>{task.description}</p>
            </div>
            <S.DeleteButton>
              <Trash size={16} color="#808080" />
            </S.DeleteButton>
          </S.TaskItem>
        );
      })}
    </>
  );
}
