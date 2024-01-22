import { useState } from "react";
import AddItem from "./AddItem";
import PackingList from "./PackingList";

const initialItems = [
  { id: crypto.randomUUID(), title: "Warm socks", packed: true },
];

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);

  const picked = items.filter((item) => item.packed).length;

  const handleAddItem = (title) => {
    setItems([
      ...items,
      {
        id: crypto.randomUUID(),
        title: title,
        packed: false,
      },
    ]);
  };

  const handleChangeItem = (nextItem) => {
    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  };

  const handleDeleteItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  const handleEditItem = (editItem, title) => {
    setItems(
      items.map((item) => {
        if (item.id === editItem.id) {
          return { ...editItem, title: title };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <>
      <AddItem onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
        onEditItem={handleEditItem}
      />
      <hr />
      <b>
        {picked} out of {items.length} packed!
      </b>
    </>
  );
}
