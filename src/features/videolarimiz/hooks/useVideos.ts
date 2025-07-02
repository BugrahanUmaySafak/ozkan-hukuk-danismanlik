import { getVideosDatabase } from "../../../lib/mongodb";

export interface Video {
  _id: string;
  title: string;
  description: string;
  youtubeId: string;
  createdAt: string;
}

export async function getVideos(): Promise<Video[]> {
  try {
    const collection = await getVideosDatabase();
    const videos = await collection.find({}).sort({ createdAt: -1 }).toArray();
    return videos.map((video) => ({
      _id: video._id.toString(),
      title: video.title ?? "",
      description: video.description ?? "",
      youtubeId: video.youtubeId ?? "",
      createdAt: video.createdAt ?? "",
    }));
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
}
