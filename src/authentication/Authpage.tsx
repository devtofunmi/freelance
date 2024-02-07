"use client";

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
    <div className="flex space-x-4">
      <div className="border p-4">
        <p>im a client hiring for a project</p>
        <input type="checkbox" onChange={handleClientCheckboxChange} />
      </div>

      <div className="border p-4">
        <p>im a freelancer looking for work</p>
        <input type="checkbox" onChange={handleFreelancerCheckboxChange} />
      </div>

      <button className="bg-blue-500 text-white p-2 rounded">{buttonText}</button>
    </div>
  );
};

export default Authpage;