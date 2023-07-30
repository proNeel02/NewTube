import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
 
  return (
    <div className="p-2 m-2 w-80 shadow-lg">
      <img
        className="rounded-xl hover:rounded-none cursor-pointer object-cover"
        src={thumbnails?.medium?.url}
        alt="thumbnails"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
