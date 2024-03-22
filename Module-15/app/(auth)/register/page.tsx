import { fetched } from "@/app/api/api";
import { redirect } from "next/navigation";

const waiting = async () => {
  const result = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Waited for 10 seconds");
    }, 5000);
  });

  return result;
};

const Register = async () => {
  const data = await waiting();

  if (data) {
    redirect("/");
  }

  return (
    <div>
      <h1>Hello User You can sign up!</h1>
    </div>
  );
};

export default Register;
