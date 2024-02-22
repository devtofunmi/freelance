"use client";
import "../app/globals.css";
import Topbar from "@/components/Topbar";
import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

   const isValidEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("it work")

    if (!firstName || !lastName || !email || !password) {
      setErrorMessage("All fields are required");
      return;
    }else if (!isValidEmail(email)) {
        setErrorMessage("Please enter a valid email address");
      }

    try {
      const res = await fetch("api/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target as HTMLFormElement;
        form.reset();
        console.log(firstName)
      } else {
        console.log("user registration failed.");
      }
    } catch (error) {
      console.log("error during registration", error);
    }
  };

  return (
    <div>
      <Topbar />
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full px-5 md:px-0 md:w-[40%] justify-center items-center mt-20">
          {errorMessage && (
            <div className="bg-red-500 text-white w-fit px-3 py-1 text-lg rounded-lg">
              {errorMessage}
            </div>
          )}

          <h1 className="text-3xl text-center font-semibold mt-2">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-5 w-full mt-10">
              <div className="w-full">
                <h1 className="text-xl">First name</h1>
                <input
                  className="w-full rounded-lg py-2 px-1 mt-2 bg-transparent border-[1px] border-whute"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="w-full">
                <h1 className="text-xl">Last name</h1>
                <input
                  className="w-full rounded-lg py-2 px-1 mt-2 bg-transparent border-[1px] border-whute"
                  type="name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full mt-5">
              <h1 className="text-xl">Email</h1>
              <input
                className="w-full rounded-lg py-2 px-1 mt-2 bg-transparent border-[1px] border-whute"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full mt-5">
              <h1 className="text-xl">Password</h1>
              <input
                className="w-full rounded-lg py-2 px-1 mt-2 bg-transparent border-[1px] border-whute"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <Button text={"Create my account"} />
            </div>
          </form>

          <div className="flex gap-2 mt-5">
            <p>Already have an account?</p>
            <Link href="/login">
              <p className="underline hover:text-green-[500]">Login</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}