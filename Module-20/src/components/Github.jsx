import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

export default function Github() {
  const provider = new GithubAuthProvider();
  const auth = getAuth();

  const handleSignUpByGithub = () => {
    provider.addScope("repo");

    provider.setCustomParameters({
      allow_signup: "false",
    });

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        console.log(token, "||", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GithubAuthProvider.credentialFromError(error);

        console.log(errorCode, errorMessage, credential, email);
      });
  };

  return (
    <button
      onClick={handleSignUpByGithub}
      className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md"
    >
      Login with GitHub
    </button>
  );
}
