import React, { useEffect, useState } from "react";

export default function Closer() {
  const [text, setText] = useState("a");

  useEffect(() => {
    console.log(`Calling "${text}" ...`);

    const timer = setTimeout(() => {
      console.log(`🟢 timing ${text}...`);
    }, 3000);

    return () => {
      console.log(`🔴 Cancel ... ${text}`);
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <div>
      <label htmlFor=''>
        Input :
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type='text'
        />
      </label>
      <h1>{text}</h1>
    </div>
  );
}
