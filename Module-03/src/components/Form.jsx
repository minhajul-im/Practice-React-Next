import React, { useState } from "react";

export default function Form() {
  const [input, setInput] = useState({ john: "John", jacobs: "Jacobs" });
  const [edit, setEdit] = useState(false);
  const [showName, setShowName] = useState({ ...input });

  const handleEdit = () => {
    setEdit(!edit);
    setShowName(input);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>
        First Friend name:
        {!edit && <span>{input.john}</span>}
        <input
          style={{ display: edit ? "block" : "none" }}
          name='john'
          value={input.john}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          type='text'
        />
      </label>
      <br />
      <label>
        Second Friend name:
        {!edit && <span>{input.jacobs}</span>}
        <input
          style={{ display: edit ? "block" : "none" }}
          name='jacobs'
          value={input.jacobs}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          type='text'
        />
      </label>
      <br />
      <button onClick={handleEdit} type='submit'>
        {!edit ? "Edit" : "Save"}
      </button>
      <p>
        <i>
          Hello, {showName.john}
          {showName.john.trim() === ""
            ? ""
            : showName.jacobs.trim() === ""
            ? ""
            : " & "}
          {showName.jacobs}
        </i>
      </p>
    </form>
  );
}
