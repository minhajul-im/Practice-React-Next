import { useSyncExternalStore } from "react";

function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

function useOnlineStatus() {
  return useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );
}

export default function OnlineStatus() {
  const online = useOnlineStatus();

  return (
    <div>
      <h1>Oneline Status check!</h1>
      <b>{online ? "Online 🟢" : "Offline 🔴"}</b>
    </div>
  );
}
