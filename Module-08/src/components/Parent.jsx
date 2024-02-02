import { useEffect, useState } from "react";

const ChildComponent = ({ name }) => {
  const [state, setState] = useState("");

  return (
    <div>
      <h1>Hello {name} </h1>
      <input value={state} onChange={(e) => setState(e.target.value)} />
    </div>
  );
};

export default function Parent() {
  const [name, setName] = useState("Rahim");

  const changeName = () => {
    const names = ["Rahim", "Karim", "Jabbar"];
    var randomName = names[Math.floor(Math.random() * names.length)];
    setName(randomName);
  };
  return (
    <div>
      <button onClick={changeName}>Change Name</button>
      <ChildComponent key={name} name={name} />
    </div>
  );
}
