import EDIT from "../../assets/icons/edit.svg";
import DELETE from "../../assets/icons/delete.svg";
import THREE_DOTS from "../../assets/icons/3dots.svg";
import { useAuthorAction } from "../../hooks/useAuthorAction";

const AuthorActionBtn = () => {
  const { show, setShow } = useAuthorAction();

  const handleShow = (e) => {
    e.stopPropagation();
    setShow(!show);
  };

  return (
    <div className="absolute right-0 top-0">
      <button onClick={handleShow}>
        <img src={THREE_DOTS} alt="3dots of Action" />
      </button>

      {show && (
        <div className="action-modal-container">
          <button className="action-menu-item hover:text-lwsGreen">
            <img src={EDIT} alt="Edit" />
            Edit
          </button>
          <button className="action-menu-item hover:text-red-500">
            <img src={DELETE} alt="Delete" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthorActionBtn;
