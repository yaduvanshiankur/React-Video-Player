import React from "react";
import { useParams, Link } from "react-router-dom";
import videos from "../videos.json";

const VideoPlayer = () => {
  const { id } = useParams();
  const videoId = parseInt(id, 10);

  // Retrieve the video data based on the videoId
  const selectedVideo = videos.videos[videoId - 1];

  if (!selectedVideo) {
    return <div>Video not found</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center h-screen justify-center">
        <Link
          to="/"
          prefetch="true"
          className="my-2 text-gray-50 cursor-pointer hover:text-fuchsia-600 "
        >
          &#8592; Back to Playlist
        </Link>
        <div className=" p-3 gap-x-4 border rounded-lg bg-gray-50 border-black w-3/5">
          <video controls autoPlay className="w-full">
            <source src={selectedVideo.sources[0]} type="video/mp4" />
          </video>
          <div className="">
            <h3 className="text-xl font-medium">{selectedVideo.title}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
