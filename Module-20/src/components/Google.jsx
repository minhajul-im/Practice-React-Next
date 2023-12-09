import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Github from "./Github";

export default function Google() {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const auth = getAuth();

  const handleSignUpByGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        console.log(token, "|", user);
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log(errorCode, errorMessage, email, credential);
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-8 shadow-md rounded-md flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Login with Google & GitHub</h1>
        <button
          onClick={handleSignUpByGoogle}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mb-4"
        >
          Login with Google
        </button>
        <Github />
      </div>
    </div>
  );
}
// https://module-20-329fc.firebaseapp.com/__/auth/handler
