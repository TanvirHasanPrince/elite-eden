"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { signUp } from "next-auth-sanity/client";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";

const defaultFormData = {
  name: "",
  email: "",
  password: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const { data: session } = useSession();
  console.log(session);

  const loginHandler = async () => {
    try {
      await signIn();
      // push the user to the homepage
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const user = await signUp(formData);
      if (user) {
        toast.success("Sccuess. Pleas sign in");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setFormData(defaultFormData);
    }
  };
  const inputStyles =
    "border border-gray-300 focus:border-orange-500 sm:text-sm text-base rounded-lg w-full md:w-[50%] lg:w-[50%] p-2.5 focus:outline-none";

  const signUpButtonStyles =
    "md:w-[50%] lg:w-[50%] bg-tertiary-dark focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center font-bold text-white";

  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[30%] lg:w-[30%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="font-bold leading-tight text-xl tracking-tight">
            Create an account
          </h1>
          <p>OR</p>
          <span className="inline-flex items-center">
            <AiFillGithub
              className="mr-3 text-4xl cursor-pointer text-black dark:text-white "
              onClick={loginHandler}
            />
            <FcGoogle
              className="ml-3 text-4xl cursor-pointer"
              onClick={loginHandler}
            />
          </span>
        </div>
      </div>

      {/* Starting of Form */}
      <form
        className="space-y-4 md:space-y-6 lg:space-y-6 flex items-center justify-center flex-col"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Tanvir Hasan Prince"
          required
          className={inputStyles}
          value={formData.name}
          onChange={handleInputChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email Here...."
          required
          className={inputStyles}
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Your Password Here...."
          minLength={6}
          required
          className={inputStyles}
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="submit" className={signUpButtonStyles}>
          Sign Up
        </button>

        <button
          type="submit"
          className="text-blue-700 underline"
          onClick={loginHandler}
        >
          Login
        </button>
      </form>

      {/* Ending of Form */}
    </section>
  );
};

export default Auth;
