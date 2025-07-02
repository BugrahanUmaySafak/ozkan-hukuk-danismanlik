import PageHeader from "@/components/PageHeader";
import VideoList from "../components/VideoList";
import { getVideos } from "../hooks/useVideos";

export default async function VideoListWrapper() {
  const videos = await getVideos();

  return (
    <>
      <PageHeader
        title="Videolarımız"
        description="Hukuk alanında bilgilendirici videolar ve eğitim içerikleri"
      />
      <VideoList videos={videos} />
    </>
  );
}
