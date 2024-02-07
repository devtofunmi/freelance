"use client";
import "../app/globals.css";

import React, { useState } from 'react';

const Authpage: React.FC = () => {
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

  const buttonText = isClient
    ? 'Join as a Client'
    : isFreelancer
    ? 'Apply as a Freelancer'
    : 'Join';

  return (
    <div className="flex flex-col justify-center items-center mt-60 ">
        <div className="flex gap-20">
             <div className="w-[300px] border-[1px] border-green-500">
        <p>im a client hiring for a project</p>
        <input type="checkbox" onChange={handleClientCheckboxChange} />
      </div>

      <div className="w-[300px] border-[1px] border-green-500">
        <p>im a freelancer looking for work</p>
        <input type="checkbox" onChange={handleFreelancerCheckboxChange} />
      </div>
        </div>
     

      <button className="bg-blue-500 text-white p-2 mt-5 rounded">{buttonText}</button>
    </div>
  );
};

export default Authpage;