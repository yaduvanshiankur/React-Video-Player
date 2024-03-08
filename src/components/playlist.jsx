import React, { useState } from "react";
import { Link } from "react-router-dom";
import videos from "../videos.json";

function Playlist() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVideos = videos.videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-6">
      <h2 className="text-2xl font-semibold mx-6 mb-4 text-white">Playlist</h2>
      <div className="mx-6 mb-4">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 bg-slate-300 border border-gray-300 w-full rounded-3xl placeholder-gray-500"
        />
      </div>
      <p className="mx-6 mb-4 text-white">{filteredVideos.length} videos</p>
      {filteredVideos.map((video, key) => (
        <Link
          to={`/video/${key + 1}`}
          key={key}
          className="text-decoration-none"
        >
          <div className="flex flex-col sm:flex-row items-center p-3 gap-y-4 sm:gap-y-0 sm:gap-x-4 border rounded-xl mx-6 mb-3 bg-gray-50 border-black">
            <img
              src={video.thumb}
              alt={video.title}
              className="object-cover rounded-lg w-72 h-44"
            />
            <div className="flex flex-col">
              <h3 className="text-lg sm:text-xl font-medium">{video.title}</h3>
              <p className="text-base text-slate-500">{video.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Playlist;
