import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableVideo = ({ id, index, moveVideo, title }) => {
  const [, drag] = useDrag({
    type: 'VIDEO',
    item: { id, index },
  });

  return (
    <div ref={drag} style={{ cursor: 'move' }}>
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
    </div>
  );
};

export default DraggableVideo;
