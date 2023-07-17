export const handleDeleteTask = (index, allTask, setAllTask) => {
  const updatedTasks = allTask.filter((_item, key) => key !== index);
  setAllTask(updatedTasks);
};
