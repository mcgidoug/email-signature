"use client";

import React, { useState } from "react";

const Generator = () => {
  const [nameText, setNameText] = useState("");
  const [websiteText, setWebsiteText] = useState("");
  const [numberText, setNumberText] = useState("");
  const [emailText, setEmailText] = useState("");

  const handleNameText = (event) => {
    const newNameText = event.target.value;
    setNameText(newNameText);
  };

  const handleWebsiteText = (event) => {
    const newWebsiteText = event.target.value;
    setWebsiteText(newWebsiteText);
  };

  const handleNumberText = (event) => {
    const newNumberText = event.target.value;
    setNumberText(newNumberText);
  };

  const handleEmailText = (event) => {
    const newEmailText = event.target.value;
    setEmailText(newEmailText);
  };

  return (
    <div>
      <div className="flex">
        <div className="p-5">
          <h1 className="text-2xl mb-2 ">Basic Info</h1>
          <h2>Name</h2>
          <input
            className="text-black"
            type="text"
            placeholder="Your name"
            onChange={handleNameText}
          />
          <h2>Website</h2>
          <input
            className="text-black"
            type="text"
            placeholder="Your website"
            onChange={handleWebsiteText}
          />
          <h2>Phone</h2>
          <input
            className="text-black"
            type="text"
            placeholder="Your number"
            onChange={handleNumberText}
          />
          <h2>Email</h2>
          <input
            className="text-black"
            type="text"
            placeholder="Your email"
            onChange={handleEmailText}
          />
        </div>

        <div className="p-5">
          <h1 className="text-2xl mb-2">Socials</h1>
          <h2>LinkedIn</h2>
          <input
            className="text-black"
            type="text"
            placeholder="Your LinkedIn"
          />
          <h2>Facebook</h2>
          <input
            className="text-black"
            type="text"
            placeholder="Your Facebook"
          />
          <h2>Instagram</h2>
          <input
            className="text-black"
            type="text"
            placeholder="Your Instagram"
          />
          <h2>YouTube</h2>
          <input
            className="text-black"
            type="text"
            placeholder="Your YouTube"
          />
          <h2>Github</h2>
          <input className="text-black" type="text" placeholder="Your Github" />
        </div>
      </div>

      <div className="p-5">
        <h2>Results</h2>
        <div className="bg-white text-black w-1/2 h-40 border-2 overflow-auto grid-cols-1">
          <div>{nameText}</div>
          <div>{websiteText}</div>
          <div>{numberText}</div>
          <div>{emailText}</div>
        </div>
        <div className="flex gap-x-2">
          <div className="bg-white text-black my-2 p-2 cursor-pointer">Run</div>
          <div className="bg-white text-black my-2 p-2 cursor-pointer">
            Copy
          </div>
          <div className="bg-white text-black my-2 p-2 cursor-pointer">
            Clear
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
