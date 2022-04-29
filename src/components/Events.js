import React from "react";
import { format } from "timeago.js";

const Events = ({ events }) => {
  return (
    <>
      {events?.map((ev, i) => (
        <div key={i} className="flex gap-x-4 items-center">
          <img
            src={ev.actor?.avatar_url}
            alt=""
            className="w-16 mt-4 border-solid border-2 border-teal-100 rounded-full"
          />
          <h1 className="break-words">
            {ev?.actor?.login} {ev?.type}
            <br />
            {ev?.repo?.name}
            <br />
            <span className="text-sm">{format(ev?.created_at)}</span>
          </h1>
        </div>
      ))}
    </>
  );
};

export default Events;
