// import { useContext } from "react";
// import User from "../context/userContext";

export default function Header() {
  //   const { data, setData } = useContext(User);
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Account</h1>
      </div>
    </header>
  );
}
