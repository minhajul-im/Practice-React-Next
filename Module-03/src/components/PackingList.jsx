export default function PackingList({
  items,
  onChangeItem,
  onDeleteItem,
  onEditItem,
}) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <label>
            <input
              style={{ cursor: "pointer" }}
              type='checkbox'
              checked={item.packed}
              onChange={(e) => {
                onChangeItem({
                  ...item,
                  packed: e.target.checked,
                });
              }}
            />{" "}
            <input
              type='text'
              value={item.title}
              style={{ border: "none", cursor: "pointer" }}
              onChange={(e) => onEditItem(item, e.target.value)}
            />
          </label>
          <button onClick={() => onDeleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
