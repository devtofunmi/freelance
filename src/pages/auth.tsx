"use client";
import Button from "@/components/Button";
import "../app/globals.css";

import React, { useState } from 'react';
import Link from "next/link";
import Topbar from "@/components/Topbar";

const Auth: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [isFreelancer, setIsFreelancer] = useState(false);

  const handleClientCheckboxChange = () => {
    setIsClient(!isClient);
    setIsFreelancer(false);
  };

  const handleFreelancerCheckboxChange = () => {
    setIsFreelancer(!isFreelancer);
    setIsClient(false);
  };

   const uncheckCheckbox = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const checkbox = event.target as HTMLInputElement;
    checkbox.checked = false;
  };

  const buttonText = isClient
    ? 'Join as a Client'
    : isFreelancer
    ? 'Apply as a Freelancer'
    : 'Create Account';

  const isCreateAccountDisabled = !(isClient || isFreelancer);

  return (
    <div>
      <Topbar />
    <div className="flex flex-col justify-center items-center mt-40">
      <h1 className="text-3xl font-semibold ">Join as a client or freelancer</h1>
        <div className="flex gap-10 mt-5">
        <div className="w-[300px] h-[200px] p-5 border-[2px] border-white rounded-md transition duration-300 ease-in-out hover:border-green-500 cursor-pointer"  onClick={handleClientCheckboxChange}>
          <div className="flex justify-end">
            <input  className="cursor-pointer appearance-none rounded-full border-2 border-white checked:bg-green-500 checked:border-transparent focus:outline-none h-6 w-6" type="checkbox" checked={isClient}
              onChange={handleClientCheckboxChange}
              onClick={uncheckCheckbox} />
          </div>
            
        <p className="text-2xl mt-6">I&apos;m  a client,hiring for a project</p>
      
      </div>

      <div className="w-[300px] h-[200px] p-5 border-[2px] border-white rounded-md transition duration-300 ease-in-out hover:border-green-500 cursor-pointer" onClick={handleFreelancerCheckboxChange}>
        <div className="flex justify-end">
              <input
              className="cursor-pointer appearance-none rounded-full border-2 border-white checked:bg-green-500 checked:border-transparent focus:outline-none h-6 w-6"
              type="checkbox"
              checked={isFreelancer}
              onChange={handleFreelancerCheckboxChange}
              onClick={uncheckCheckbox}
            />
          </div>
        <p  className="text-2xl mt-6">I&apos;m  a freelancer, looking for work</p>
       
      </div>
        </div>
        <div className="mt-5" >
       <Button onClick={() => {}} text={buttonText} disabled={isCreateAccountDisabled} />
       </div>
       <div className="flex gap-2 mt-5">
       <p>Already have an account?</p>
       <Link href="/login">
       <p className="underline">Login</p></Link>
       </div>
    </div>
    </div>
  );
};

export default Auth;