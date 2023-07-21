import React from "react";

const Generator = () => {
  return (
    <div>
      <div className="flex">
        <div className="p-5">
          <h1 className="text-2xl mb-2 ">Basic Info</h1>
          <h2>Name</h2>
          <input className="text-black" type="text" placeholder="Your name" />
          <h2>Website</h2>
          <input
            className="text-black"
            type="text"
            placeholder="Your website"
          />
          <h2>Phone</h2>
          <input className="text-black" type="text" placeholder="Your number" />
          <h2>Email</h2>
          <input className="text-black" type="text" placeholder="Your email" />
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
        <div className="bg-white text-black w-1/2 h-40 border-2 overflow-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          libero. Aliquam tempore tempora, quam dignissimos voluptate commodi,
          inventore magni exercitationem perferendis odio doloribus aperiam hic
          qui rem ut animi excepturi.
        </div>
        <div className="flex gap-x-2">
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
