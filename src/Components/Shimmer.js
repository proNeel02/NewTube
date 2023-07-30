import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      <div className="p-2 m-2 w-80 shadow-lg">
        <div className="animate-pulse">
          <div className="bg-gray-200 w-full h-40  rounded-lg"></div>

          <div className="mt-3 flex flex-col">
            <div className="h-2 w-20 bg-gray-200 rounded p-2"></div>
            <div className="h-2 w-15 bg-gray-200 rounded p-2"></div>
            <div className="h-2 w-10 bg-gray-200 rounded p-2"></div>
          </div>
        </div>
      </div>
      <div className="p-2 w-72 m-2 shadow-lg">
        <div className="animate-pulse">
          <div className="bg-gray-200 w-full h-40  rounded-lg"></div>

          <div className="mt-3 flex flex-col">
            <div className="h-2 w-20 bg-gray-200 rounded p-2"></div>
            <div className="h-2 w-15 bg-gray-200 rounded p-2"></div>
            <div className="h-2 w-10 bg-gray-200 rounded p-2"></div>
          </div>
        </div>
      </div>
      <div className="p-2 w-72 m-2 shadow-lg">
        <div className="animate-pulse">
          <div className="bg-gray-200 w-full h-40  rounded-lg"></div>

          <div className="mt-3 flex flex-col">
            <div className="h-2 w-20 bg-gray-200 rounded p-2"></div>
            <div className="h-2 w-15 bg-gray-200 rounded p-2"></div>
            <div className="h-2 w-10 bg-gray-200 rounded p-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
