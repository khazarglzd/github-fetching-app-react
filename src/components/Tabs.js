import React from "react";

const Tabs = ({ type, setType }) => {
  return (
    <>
      <button
        className={`${
          type === "repos" && "text-teal-200"
        } text-decoration-line: underline`}
        onClick={() => setType("repos")}
      >
        Repositories
      </button>
      <button
        className={`${
          type === "received_events" && "text-teal-200"
        } text-decoration-line: underline`}
        onClick={() => setType("received_events")}
      >
        Activity
      </button>
      <button
        className={`${
          type === "followers" && "text-teal-200"
        } text-decoration-line: underline `}
        onClick={() => setType("followers")}
      >
        Followers
      </button>
    </>
  );
};

export default Tabs;
