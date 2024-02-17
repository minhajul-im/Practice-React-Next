import ToDo from "./Todo";

interface ToDo {
  id: string;
  title: string;
  isDone: boolean;
}
interface ToDosProps {
  todos: ToDo[];
  onEdit: (todo: ToDo) => void;
  onDelete: (id: string) => void;
}

export default function Todos({ todos, onEdit, onDelete }: ToDosProps) {
  return (
    <ul>
      {todos?.map((todo) => (
        <ToDo key={todo?.id} todo={todo} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  );
}
