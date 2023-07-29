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
    <div className="flex flex-wrap justify-center">
      {list?.map((title) => {
        return <Button key={title} title={title} />;
      })}
    </div>
  );
};

export default ButtonList;
