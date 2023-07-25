"use client";

import React, { useState } from "react";

const Generator = () => {
  const [nameText, setNameText] = useState("");
  const [websiteText, setWebsiteText] = useState("");
  const [numberText, setNumberText] = useState("");
  const [emailText, setEmailText] = useState("");

  const [linkedinText, setLinkedinText] = useState("");
  const [facebookText, setFacebookText] = useState("");
  const [instagramText, setInstagramText] = useState("");
  const [youtubeText, setYoutubeText] = useState("");
  const [githubText, setGithubText] = useState("");

  // GENERAL ================================================================
  const handleChange = (e, func) => {
    const newValue = e.target.value;
    func(newValue);
  };

  return (
    <div>
      {/* GENERAL ================================================================ */}
      <div className="flex">
        <div className="p-5">
          <h1 className="text-2xl mb-2 ">Basic Info</h1>
          <h2>Name</h2>
          <input
            className="text-black"
            type="text"
            placeholder="Your name"
            onChange={(e) => handleChange(e, setNameText)}
          />
          <h2>Website</h2>
          <input
            className="text-black"
            type="text"
            placeholder="Your website"
            onChange={(e) => handleChange(e, setWebsiteText)}
          />
          <h2>Phone</h2>
          <input
            className="text-black"
            type="text"
            placeholder="Your number"
            onChange={(e) => handleChange(e, setNumberText)}
          />
          <h2>Email</h2>
          <input
            className="text-black"
            type="text"
            placeholder="Your email"
            onChange={(e) => handleChange(e, setEmailText)}
          />
        </div>

        {/* SOCIALS ================================================================ */}
        <div className="p-5">
          <h1 className="text-2xl mb-2">Socials</h1>
          <h2>LinkedIn</h2>
          <input
            className="text-black"
            type="text"
            placeholder="Your LinkedIn"
            onChange={(e) => handleChange(e, setLinkedinText)}
          />
          <h2>Facebook</h2>
          <input
            className="text-black"
            type="text"
            placeholder="Your Facebook"
            onChange={(e) => handleChange(e, setFacebookText)}
          />
          <h2>Instagram</h2>
          <input
            className="text-black"
            type="text"
            placeholder="Your Instagram"
            onChange={(e) => handleChange(e, setInstagramText)}
          />
          <h2>YouTube</h2>
          <input
            className="text-black"
            type="text"
            placeholder="Your YouTube"
            onChange={(e) => handleChange(e, setYoutubeText)}
          />
          <h2>Github</h2>
          <input
            className="text-black"
            type="text"
            placeholder="Your Github"
            onChange={(e) => handleChange(e, setGithubText)}
          />
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
        <div className="bg-white text-black w-1/2 h-40 border-2 overflow-auto grid-cols-1">
          <div>{linkedinText}</div>
          <div>{facebookText}</div>
          <div>{instagramText}</div>
          <div>{youtubeText}</div>
          <div>{githubText}</div>
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
