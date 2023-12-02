import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utilities/firebase";

export default function Browse() {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };
  return (
    <div>
      <h1>Hello Browse</h1>
      <button
        onClick={handleSignOut}
        className="text-xl font-bold py-6 px-6 rounded-full bg-red-600 text-white"
      >
        Sign out
      </button>
    </div>
  );
}
