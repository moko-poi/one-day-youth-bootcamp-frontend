import React from 'react';
import { Task } from '../';

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  newTaskLabel: string;
  setNewTaskLabel: React.Dispatch<React.SetStateAction<string>>;
};
export const TaskForm: React.FC<Props> = ({
  tasks,
  setTasks,
  newTaskLabel,
  setNewTaskLabel,
}) => {
  // フォームの値を保持する
  const handleNewTaskLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(e.target.value);
  };
  // Taskの登録
  const handleAddTask = () => {
    const newTask = { label: newTaskLabel, isDone: false }
    setTasks([...tasks, newTask]);
    setNewTaskLabel('');
  };
  // 完了したTaskを削除する
  const handleClearTasks = () => {
    const newTasks = tasks.filter((task) => !task.isDone);
  };

  return (
    <>
      <input
      onChange={handleNewTaskLabel}
      type="text"
      value={newTaskLabel}
      
      />
    </>
  );
};
