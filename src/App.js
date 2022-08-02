import React, { useState } from "react";
import "./App.css";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <div className="w-full h-screen bg-primary">
      <div className="main-container">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="max-w-[400px] w-full bg-white drop-shadow-lg flex flex-col rounded-md items-start justify-start h-auto gap-10 px-10 py-10">
            <h1 className="text-lg font-extrabold tracking-wide text-gray-500 capitalize ">
              {people.length + ` birthdays today`}
            </h1>
            <div className="flex flex-col items-start justify-start gap-3">
              {people.map((el) => (
                <List
                  key={el.id}
                  name={el.name}
                  age={el.age}
                  picture={el.picture}
                />
              ))}
            </div>
            <button
              className="w-full py-2 font-bold tracking-wider text-white capitalize rounded-sm cursor-pointer bg-primary"
              onClick={() => setPeople([])}
            >
              clear all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
