import React from "react";
import { Link } from "react-router-dom";

const UsersContainer = ({ users }) => {
  return (
    <div className="flex gap-5 flex-wrap justify-center py-5">
      {users &&
        users.map(
          (user, idx) =>
            user?.login && (
              <div
                key={idx}
                className="flex w-[250px] border border-zinc-600 bg-gray-900 p-3 flex-col items-center"
              >
                <img
                  src={user?.avatar_url}
                  alt=""
                  className="w-24 mt-4 border-solid border-2 border-teal-100 rounded-full"
                />
                <h1 className="text-xl">{user?.login}</h1>
                <h1 className="text-xs text-zinc-600">{user?.name}</h1>
                <Link to={`/${user?.login}`}>
                  <span className="text-white bg-teal-600 my-3 font-semibold block py-1 px-4 tracking-wide rounded">
                    View
                  </span>
                </Link>
              </div>
            )
        )}
    </div>
  );
};

export default UsersContainer;
