import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserInfo = () => {
  const [user, setUser] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let BaseURL = "https://api.github.com/users";

  async function GetUserInfo() {
    const res = await fetch(BaseURL + pathname);
    const data = await res.json();
    setUser(() => [data]);
  }

  useEffect(() => {
    GetUserInfo();
  }, [pathname]);

  return (
    <div className="py-5">
      <button
        onClick={() => navigate("/")}
        className="px-4 py-1 font-medium mx-1 my-4 bg-teal-600 rounded text-gray-200"
      >
        BACK
      </button>
      {user &&
        user?.map((uinfo, i) => (
          <div
            key={i}
            className="flex justify-center md:flex-row items-center 
             md:px-0 px-4 flex-col gap-10"
          >
            <img
              alt=""
              src={uinfo.avatar_url}
              className="w-[350px] border-4 rounded-full border-zinc-400 md:mx-0 mx-auto"
            />
            <div className="text-lg px-3 leading-10">
              <h1 className="text-3xl pb-4 text-decoration-line: underline">
                {uinfo?.name}
              </h1>
              <h1>
                <span className="text-teal-200">
                  <b>Login Name: </b>
                </span>
                {uinfo?.login}
              </h1>
              <h1>
                <span className="text-teal-200">
                  <b>Followers: </b>
                </span>
                {uinfo?.followers}
              </h1>
              <h1>
                <span className="text-teal-200">
                  <b>Following: </b>
                </span>
                {uinfo?.following}
              </h1>
              <h1>
                <span className="text-teal-200">
                  <b>Public Repositories: </b>
                </span>
                {uinfo?.public_repos}
              </h1>
              <h1>
                <span className="text-teal-200">
                  <b>Join: </b>
                </span>
                {new Date(uinfo?.created_at).toLocaleDateString()}
              </h1>
              <a
                href={uinfo?.html_url}
                target="_blank"
                className="text-gray-200 font-semibold rounded cursor-pointer px-4 py-1  bg-teal-600 my-3 tracking-wide"
              >
                Visit
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UserInfo;
