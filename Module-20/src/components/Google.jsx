export default function Google() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-8 shadow-md rounded-md flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Login with Google & GitHub</h1>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mb-4">
          Login with Google
        </button>
        <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md">
          Login with GitHub
        </button>
      </div>
    </div>
  );
}
// https://module-20-329fc.firebaseapp.com/__/auth/handler

import { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext(null);

export function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      <Form />
    </CurrentUserContext.Provider>
  );
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <LoginButton />
    </Panel>
  );
}

function LoginButton() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (currentUser !== null) {
    return <p>You logged in as {currentUser.name}.</p>;
  }

  return (
    <Button
      onClick={() => {
        setCurrentUser({ name: "Advika" });
      }}
    >
      Log in as Advika
    </Button>
  );
}

function Panel({ title, children }) {
  return (
    <section className="panel">
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
