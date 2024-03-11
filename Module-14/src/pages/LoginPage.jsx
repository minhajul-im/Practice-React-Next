import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <section className="container">
      <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Login</h2>
        <LoginForm></LoginForm>
      </div>
    </section>
  );
};

export default LoginPage;
