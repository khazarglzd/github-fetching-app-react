import React from "react";

const Logo = () => {
  return (
    <div className="flex pb-2 justify-center items-center border-b border-gray-500">
      <img
        src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
        alt="Github Logo"
        className="w-24 rounded-full"
      />
      <div className="flex">
        <h1 className="text-3xl px-2 first-letter:text-6xl">Github</h1>
        <h1 className="text-3xl px-2 first-letter:text-6xl">Users</h1>
      </div>
    </div>
  );
};

export default Logo;
