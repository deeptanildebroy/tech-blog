import React from "react";
import Button from "../Button";
import Input from "../Input";
import { Link } from "react-router-dom";

const RegisterForm = () => {

  
  return (
    <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <h1 className="mt-6 text-2xl font-bold text-blue-600 sm:text-3xl md:text-4xl">
          Welcome to Tech Bloggie
        </h1>

        <p className="mt-4 leading-relaxed text-gray-500">
          Create an account to get started.
        </p>

        <form className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <Input type="text" label="First Name" name="first-name" />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <Input type="text" label="Last Name" name="last-name" />
          </div>

          <div className="col-span-6">
            <Input type="email" label="Email" name="email" />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <Input type="password" label="Password" name="password" />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <Input
              type="password"
              label="Confirm Password"
              name="confirm-password"
            />
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <Button type="submit">Create Account</Button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <Link to={"/login"} className="text-blue-600 bold ml-2">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
