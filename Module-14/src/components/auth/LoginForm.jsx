import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Field from "../common/Field";
import Button from "../common/Button";
import { LOGIN_URL } from "../../services";
import { useAuth } from "../../hooks/useAuth";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm();

  const submitForm = async (formData, e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, formData);
      if (response.status === 200) {
        const { token, user } = response.data;
        if (token) {
          const { accessToken, refreshToken } = token;
          setAuth({ user, accessToken, refreshToken });
          navigate("/author");
        }
      }
    } catch (error) {
      setError("root.random", {
        type: "random",
        message: `User with email ${formData.email} is not found!`,
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Field label={"Email"} error={errors.email}>
        <input
          {...register("email", { required: "Email is Required!" })}
          type="email"
          id="email"
          name="email"
          className={`w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:${
            errors.email ? "border-red-600" : "border-indigo-500"
          }`}
        />
      </Field>

      <Field label={"Password"} error={errors.password}>
        <input
          {...register("password", {
            required: "Password is Required!",
            minLength: {
              value: 8,
              message: "Your password must be at-least 8 characters!",
            },
          })}
          type="password"
          id="password"
          name="password"
          className={`w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:${
            errors.password ? "border-red-600" : "border-indigo-500"
          }`}
        />
      </Field>

      <div className="my-6">
        <p className="text-xs font-semibold text-red-600 mb-4">
          {errors?.root?.random?.message}
        </p>

        <Button>Login</Button>
      </div>
      <p className="text-center text-white">
        Do not have an account?{" "}
        <Link to="/register" className="text-indigo-600 hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
