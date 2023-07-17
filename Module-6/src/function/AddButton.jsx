export const handleButton = (task, setTask, allTask, setAllTask) => {
  task.trim() !== "" && (setAllTask([...allTask, task]), setTask(""));
};
