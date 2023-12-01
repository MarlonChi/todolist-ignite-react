import { useState } from "react";
import { NewTaskForm } from "./components/NewTaskForm";
import { TaskItem } from "./components/TaskItem";

import * as S from "./styles";
import { EmptyTable } from "./components/EmptyTable";

export interface Task {
  id: number;
  description: string;
  checked: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createNewTask = (data: Task) => {
    setTasks([...tasks, data]);
  };

  const handleToggleCheck = (id: number) => {
    setTasks((prevItems) => {
      return prevItems.map((task) => {
        if (task.id === id) {
          return { ...task, checked: !task.checked };
        }
        return task;
      });
    });
  };

  const handleRemoveItem = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const numberOfCheckedItems = tasks.filter(
    (task) => task.checked === true
  ).length;

  return (
    <S.ListContainer>
      <NewTaskForm createNewTask={createNewTask} />
      <S.TaskListContainer>
        <S.HeaderList>
          <S.CreatedTasks>
            <h4>Tarefas criadas</h4>
            <span>{tasks.length}</span>
          </S.CreatedTasks>
          <S.FinishedTasks>
            <h4>Concluídas</h4>
            <span>
              {numberOfCheckedItems} de {tasks.length}
            </span>
          </S.FinishedTasks>
        </S.HeaderList>
        <S.TasksTable>
          {tasks?.length ? (
            <TaskItem
              tasks={tasks}
              handleToggleCheck={handleToggleCheck}
              handleRemoveItem={handleRemoveItem}
            />
          ) : (
            <EmptyTable />
          )}
        </S.TasksTable>
      </S.TaskListContainer>
    </S.ListContainer>
  );
}
