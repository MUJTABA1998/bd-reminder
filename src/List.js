import React from "react";

const List = ({ name, age, picture }) => {
  return (
    <div className="flex items-center justify-start h-auto gap-5">
      <div className="">
        <img
          src={picture}
          alt={name}
          className="w-[60px] h-[60px] rounded-full object-cover"
        />
      </div>
      <div>
        <h2 className="font-extrabold tracking-widest text-gray-800 uppercase">
          {name}
        </h2>
        <h3 className="text-xs font-bold text-gray-400">{age + " year"}</h3>
      </div>
    </div>
  );
};

export default List;
