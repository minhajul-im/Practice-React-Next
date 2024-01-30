import { useRef, useState } from "react";

export default function ChallengeThree() {
  const [index, setIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const refItems = useRef(null);

  const handleNextImg = () => {
    if (index < catList.length - 1) {
      setIndex(index + 1);
      getItem(index);
    }
    if (index === catList.length - 2) {
      setIsActive(true);
    }
  };

  const handlePrevImg = () => {
    if (index >= 1) {
      setIndex(index - 1);
      getItem(index);
      setIsActive(false);
    }
  };

  const getItem = (i) => {
    const map = getMap(i);
    const node = map.get(i);

    return node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const getMap = () => {
    if (!refItems.current) {
      refItems.current = new Map();
    }
    return refItems.current;
  };
  return (
    <>
      <nav>
        <button disabled={index === 0} onClick={handlePrevImg}>
          prev
        </button>
        <button disabled={isActive} onClick={handleNextImg}>
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id, node);
                }
              }}
            >
              <img
                className={index === i ? "active" : ""}
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}
