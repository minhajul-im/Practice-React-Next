import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    // check the online status
    window.addEventListener("offline", () => setOnline(false));
    window.addEventListener("online", () => setOnline(true));
  }, []);

  // return boolean value
  return online;
};

export default useOnlineStatus;
