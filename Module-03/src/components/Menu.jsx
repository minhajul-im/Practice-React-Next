import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const findItem = items.find((item) => item.id === selectedId);

  const onChange = (e, id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, title: e };
        } else {
          return { ...item };
        }
      })
    );
  };

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item) => (
          <li>
            <input
              key={item.id}
              value={item.title}
              onChange={(e) => onChange(e.target.value, item.id)}
            />
            <button onClick={() => setSelectedId(item.id)}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You pickedn {findItem.title} </p>
    </>
  );
}
