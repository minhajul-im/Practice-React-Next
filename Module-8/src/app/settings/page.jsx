"use client";
import { useRouter } from "next/navigation";

const Settings = () => {
  const route = useRouter();
  const goTo = (path) => {
    route.push(path);
  };
  return (
    <div>
      <h1>Settings</h1>
      <div>
        <button
          className="m-6 px-4 py-2 border border-spacing-1 rounded-sm bg-purple-400 hover:bg-purple-800"
          onClick={() => goTo("settings/logs?go=buy")}
        >
          logs
        </button>
        <button
          className="m-6 px-4 py-2 border border-spacing-1 rounded-sm bg-purple-400 hover:bg-purple-800"
          onClick={() => goTo("settings/delete?name=minhaj")}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Settings;
