"use client";

import { useState } from "react";

const HomePage = <T extends number | null>() => {
  const [count, setCount] = useState<T>(null as T);
  return (
    <div className="m-20">
      <button
        className="py-4 px-6 rounded border"
        onClick={() => setCount(((count as number) + 1) as T)}>
        {count} {" -> "} counter
      </button>
    </div>
  );
};

export default HomePage;

const typeScript = <K, V>() => {
  return new Map<K, V>();
};
const map1 = typeScript<string, string>();
map1.set("name", "minhaj");

const map2 = typeScript<string, number>();
map2.set("age", 23);

const map3 = typeScript<number, boolean>();
map3.set(1, true);

const javaScript = new Map();
javaScript.set("name", "minhaj");
javaScript.set("age", 23);
javaScript.set(1, true);
