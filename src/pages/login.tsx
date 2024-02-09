"use client";
import Link from "next/link";
import "../app/globals.css";
import Button from "@/components/Button";
import Topbar from "@/components/Topbar";

export default function Login() {
  return (
     <div>
     <Topbar />
        <div className="flex  items-center justify-center">
     <div className="flex flex-col w-full px-5 md:px-0 md:w-[40%] justify-center items-center mt-20">
        <h1 className="text-3xl text-center font-semibold">Log in</h1>
        <div className="w-full mt-5">
            <h1 className="text-xl">Email</h1>
            <input className="w-full rounded-lg py-2 px-1 mt-2 bg-transparent border-[1px] border-whute" type="email" />
        </div>
         <div className="w-full mt-5">
            <h1 className="text-xl">Password</h1>
            <input className="w-full rounded-lg py-2 px-1 mt-2 bg-transparent border-[1px] border-whute" type="password" />
        </div>
        <Link href={"/"}>
         <Button text={"Log in"} />
        </Link>
         <div className="flex gap-2 mt-5">
       <p>Dont have an account?</p>
       <Link href="/signup">
       <p className="underline hover:text-green-[500]">Sign up</p></Link>
       </div>
     </div>
    </div>
    </div> 
  );
}