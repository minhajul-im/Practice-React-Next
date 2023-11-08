import { useTaskContext } from "../../contexts/TaskContext";

import Tags from "./Tags";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function Task({ task }) {
  const { dispatch } = useTaskContext();

  return (
    <>
      <tr className='border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2'>
        <td
          onClick={() =>
            dispatch({
              type: "TOGGLE",
              taskId: task.id,
            })
          }
        >
          {task.isFovarite ? (
            <FaStar className='cursor-pointer  text-yellow-500' size={20} />
          ) : (
            <FaRegStar className='cursor-pointer text-gray-300' size={20} />
          )}
        </td>
        <td>{task?.title}</td>
        <td>
          <div>{task?.description}</div>
        </td>
        <td>
          <Tags tags={task?.tags} />
        </td>
        <td className='text-center'>{task?.priority}</td>
        <td>
          <div className='flex items-center justify-center space-x-3'>
            <button
              className='text-red-500'
              onClick={() =>
                dispatch({
                  type: "DELETE_TASK",
                  taskId: task.id,
                })
              }
            >
              Delete
            </button>
            <button
              onClick={() => dispatch({ type: "EDIT_TASK", task: { ...task } })}
              className='text-blue-500'
            >
              Edit
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
