import { useContext } from "react";
import User from "../context/userContext";

export default function Dashboard() {
  const { email, displayName } = useContext(User);

  return (
    <div>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">User Account</h1>
        </div>
      </header>
      <div className="container mx-auto flex mt-8">
        <div className="container mx-auto mt-8">
          <div className="max-w-lg mx-auto bg-white p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>

            <p>Name: {displayName}</p>
            <p>Email: {email}</p>
          </div>
        </div>
        <div className="bg-gray-200 h-screen w-1/4 py-8">
          <ul>
            <li className="px-4 py-2 border-b">Dashboard</li>
            <li className="px-4 py-2 border-b">Settings</li>
            {/* Add more sidebar items */}
          </ul>
        </div>
      </div>
    </div>
  );
}
