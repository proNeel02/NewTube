import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Computer programming",
    "Gaming",
    "Live",
    "Comedy",
    "Anime",
    "Recently uploaded",
    "Watched",
    "New to you",
  ];

  return (
    <div className="flex justify-center items-center flex-wrap mt-12 p-5">
      {list?.map((title) => {
        return <Button key={title} title={title} />;
      })}
    </div>
  );
};

export default ButtonList;
