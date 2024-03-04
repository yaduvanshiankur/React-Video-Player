import React, { useState } from "react";
import { Link } from "react-router-dom";
import DraggableVideo from "./draggableThumbnail";
import videos from "../videos.json";

function Playlist() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVideos = videos.videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-6">
      <h2 className="text-2xl font-semibold ml-6 mb-4 text-white">Playlist</h2>
      <div className="ml-6 mb-4">
        <input
          type="text"
          placeholder="Search videos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 width-full rounded"
        />
      </div>
      <p className="mx-6 mb-4 text-white">{filteredVideos.length} videos</p>
      {filteredVideos.map((video, key) => (
        <Link
          to={`/video/${key + 1}`}
          key={key}
          className="text-decoration-none"
        >
          <div className="flex items-center p-3 gap-x-4 border rounded-lg mx-6 mb-3 bg-gray-50 border-black">
            <img
              src={video.thumb}
              alt={video.title}
              width="250px"
              className="object-cover rounded-lg"
            />
            <div className="flex flex-col">
              <h3 className="text-xl font-medium">{video.title}</h3>
              <p className="text-base text-slate-500">{video.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Playlist;
