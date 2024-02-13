"use client";
import "../app/globals.css";
import Topbar from "@/components/Topbar";
import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";


export default function SignUp() {
  const [firstName, setFirstName] =useState<string>('')
  const [lastName, setLastName] =useState<string>('')
  const [password, setPassword] =useState<string>('')
  const [email, setEmail] =useState<string>('')
  const [errorMessage, setErrorMessage] =useState<string>('errormessage')

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!firstName || ! lastName || email || password){
      setErrorMessage("All fields are required")
      return;
    }
  }
  return (
    <div>
     <Topbar />
        <div className="flex  items-center justify-center">
     <div className="flex flex-col w-full px-5 md:px-0 md:w-[40%] justify-center items-center mt-20">
      {
        errorMessage && (
      <div className="bg-red text-white py-1 px-3 rounded-md">{errorMessage}</div>
        )
      }
        <h1 className="text-3xl text-center font-semibold">Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 w-full mt-10">
            <div className="w-full">
                <h1 className="text-xl" onChange={(e) => {
                  setFirstName(e.target.value)
                }}>First name</h1>
                <input className="w-full rounded-lg py-2 px-1 mt-2 bg-transparent border-[1px] border-whute" type="text" />
            </div>
             <div className="w-full">
                <h1 className="text-xl" onChange={(e) => {
                  setLastName(e.target.value)
                }}>Last name</h1>
                <input className="w-full rounded-lg py-2 px-1 mt-2 bg-transparent border-[1px] border-whute" type="name" />
            </div>
        </div>
        <div className="w-full mt-5">
            <h1 className="text-xl" onChange={(e) => {
                  setEmail(e.target.value)
                }}>Email</h1>
            <input className="w-full rounded-lg py-2 px-1 mt-2 bg-transparent border-[1px] border-whute" type="email" />
        </div>
         <div className="w-full mt-5">
            <h1 className="text-xl"  onChange={(e) => {
                  setPassword(e.target.value)
                }}>Password</h1>
            <input className="w-full rounded-lg py-2 px-1 mt-2 bg-transparent border-[1px] border-whute" type="password" />
        </div>
         <Button  text={"Create my account"} />
        </form>
        
         <div className="flex gap-2 mt-5">
       <p>Already have an account?</p>
       <Link href="/login">
       <p className="underline hover:text-green-[500]">Login</p></Link>
       </div>
     </div>
    </div>
    </div> 
  );
}