import React from "react";
import Button from "../Button";
import Input from "../Input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../redux/features/authSlice";
import authService from "../../appwrite";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (data) => {
    console.log(data.email)
    const sessionData = await authService.login(data);
    if (sessionData) {
      try {
        dispatch(authLogin(sessionData));
        navigate("/home");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <h1 className="mt-6 text-2xl font-bold text-blue-600 sm:text-3xl md:text-4xl">
          Welcome Back, Techie
        </h1>

        <p className="mt-4 leading-relaxed text-gray-500">
          Log in to get started.
        </p>

        <form
          onSubmit={handleSubmit(login)}
          className="mt-8 grid grid-cols-6 gap-6"
        >
          <div className="col-span-6">
            <Input
              type="email"
              label="Email"
              name="email"
              {...register("email", { required: true })}
            />
          </div>

          <div className="col-span-6">
            <Input
              type="password"
              label="Password"
              name="password"
              {...register("password", { required: true })}
            />
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <Button type="submit">Log In</Button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Do'nt have an account?
              <Link to={"/"} className="text-blue-600 bold ml-2">
                Create Account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
