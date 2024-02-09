"use client";
import "../app/globals.css";
import Topbar from "@/components/Topbar";
import Button from "@/components/Button";
import Link from "next/link";


export default function SignUp() {
  return (
    <div>
     <Topbar />
        <div className="flex  items-center justify-center">
     <div className="flex flex-col w-full px-5 md:px-0 md:w-[40%] justify-center items-center mt-20">
        <h1 className="text-3xl text-center font-semibold">Sign up</h1>
        <div className="flex gap-5 w-full mt-10">
            <div className="w-full">
                <h1 className="text-xl">First name</h1>
                <input className="w-full rounded-lg py-2 px-1 mt-2 bg-transparent border-[1px] border-whute" type="text" />
            </div>
             <div className="w-full">
                <h1 className="text-xl">Last name</h1>
                <input className="w-full rounded-lg py-2 px-1 mt-2 bg-transparent border-[1px] border-whute" type="name" />
            </div>
        </div>
        <div className="w-full mt-5">
            <h1 className="text-xl">Email</h1>
            <input className="w-full rounded-lg py-2 px-1 mt-2 bg-transparent border-[1px] border-whute" type="email" />
        </div>
         <div className="w-full mt-5">
            <h1 className="text-xl">Password</h1>
            <input className="w-full rounded-lg py-2 px-1 mt-2 bg-transparent border-[1px] border-whute" type="password" />
        </div>
        <Link href={"/"}>
         <Button  text={"Create my account"} />
        </Link>
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