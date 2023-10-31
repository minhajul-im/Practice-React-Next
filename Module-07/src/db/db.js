export const initialValue = {
  tasks: [
    {
      id: crypto.randomUUID(),
      title: "Create Tasker Application!",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil illum aspernatur molestiae, placeat fugiat ntur adipisicing elit.",
      tags: ["JavaScript", "python", "java"],
      priority: "High",
      isFovarite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Tasker Application!",
      description:
        "Lorem, ipsum ctetur adipisicing elit. Nihil illum aspernatur molestiae, placeat fugiat nullaipsum ctetur adipisicing elit.",
      tags: ["JavaScript", "python", "java"],
      priority: "Low",
      isFovarite: false,
    },
  ],
  show: false,
  editTask: null,
};

export const addTask = {
  title: "",
  description: "",
  tags: [],
  priority: "",
  isFavorite: false,
};
