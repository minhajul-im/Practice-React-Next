import useOnlineStatus from "../hooks/useOnlineStatus";

const OnlineStatus = () => {
  const online = useOnlineStatus();
  return (
    <h1 style={{ textAlign: "center" }}>
      Online Status: {online ? "🟢" : "🔴"}
    </h1>
  );
};

export default OnlineStatus;
