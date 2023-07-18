export const handleDeleteTask = (index, allTask, setAllTask) => {
  const updatedTasks = allTask.filter((_item, key) => key !== index);
  alert(`Are you sure? Do you wanna delete your task?`);
  setAllTask(updatedTasks);
};
