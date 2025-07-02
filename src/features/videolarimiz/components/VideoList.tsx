"use client";

import VideoCard from "@/features/videolarimiz/components/VideoCard";
import type { Video } from "../hooks/useVideos";

interface Props {
  videos: Video[];
}

export default function VideoList({ videos }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <VideoCard
            key={video._id}
            _id={video._id}
            title={video.title}
            description={video.description}
            youtubeId={video.youtubeId}
            createdAt={video.createdAt}
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
