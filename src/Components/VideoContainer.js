import React, { useEffect, useState } from "react";
import { VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    loadAllVideos();
  }, []);

  const loadAllVideos = async () => {
    try {
      const response = await fetch(VIDEO_API);
      const data = await response.json();

      setVideoData((prevData) => data?.items);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-wrap ml-3 justify-center">
      {videoData ? (
        videoData?.map((videoObj) => {
          return <VideoCard key={videoObj?.id} info={videoObj} />;
        })
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default VideoContainer;
