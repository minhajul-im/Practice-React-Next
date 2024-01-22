import { useState } from "react";
import { initialLetters } from "./data";

const data = [
  {
    id: 0,
    subject: "Ready for adventure?",
    isStarred: true,
  },
  {
    id: 1,
    subject: "Time to check in!",
    isStarred: false,
  },
  {
    id: 2,
    subject: "Festival Begins in Just SEVEN Days!",
    isStarred: false,
  },
];

export default function MailClient() {
  const [letters, setLetters] = useState(data);

  const handleToggle = (item, e) => {
    setLetters(
      letters.map((letter) => {
        if (item.id === letter.id) {
          return { ...item, isStarred: e };
        } else {
          return letter;
        }
      })
    );
  };

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter key={letter.id} letter={letter} onToggle={handleToggle} />
        ))}
        <hr />
        <p>
          <b>
            You selected {letters.filter((letter) => letter.isStarred).length}{" "}
            letters
          </b>
        </p>
      </ul>
    </>
  );
}

////////////////////////////////////////////////

function Letter({ letter, onToggle }) {
  return (
    <li
      className={letter.isStarred ? "selected" : ""}
      style={{ margin: "1rem 0" }}
    >
      <label>
        <input
          onChange={(e) => onToggle(letter, e.target.checked)}
          type='checkbox'
          checked={letter.isStarred}
        />
        {letter.subject}
      </label>
    </li>
  );
}
