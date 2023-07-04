import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import fetchFromAPI from "../utils/fetchFromAPI";
import ReactPlayer from "react-player";
import Videos from "./Videos";
import { BiCheckCircle } from "react-icons/bi";

export default function VideoDetails() {
  const { id: videoId } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const reactPlayerHeight = "md:h-[450px]";
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`).then((data) =>
      setVideoDetails(data.items[0])
    );

    fetchFromAPI(
      `search?part=snippet&relatedToVideoId=${videoId}&type=video`
    ).then((data) => setRelatedVideos(data.items));
  }, [videoId]);

  document.title = videoDetails?.snippet?.title || "Loading";

  // console.log(videoDetails);

  return (
    <section className="flex min-h-[92.5vh] flex-col gap-10 px-4 pt-10 dark:bg-black dark:text-white lg:flex-row">
      <div className="react-player-container">
        <div className="h-[200px] sm:h-[360px] xl:h-[500px]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="my-4 flex flex-col items-baseline justify-between gap-4 md:flex-row">
          <h2 className="py-2 text-xl md:text-2xl">
            {videoDetails?.snippet?.title}
          </h2>
          {videoDetails && (
            <div className="ml-auto flex justify-end gap-4">
              <p className="whitespace-nowrap text-red-500">
                {parseInt(videoDetails?.statistics?.likeCount).toLocaleString()}
                Likes
              </p>
              <p className="whitespace-nowrap">
                {parseInt(videoDetails?.statistics?.viewCount).toLocaleString()}
                Views
              </p>
            </div>
          )}
        </div>
        <Link
          to={`/channel/${videoDetails?.snippet?.channelId}`}
          className="flex w-fit items-center gap-1 text-gray-500 dark:text-gray-300"
        >
          {videoDetails?.snippet?.channelTitle}
          <BiCheckCircle />
        </Link>
      </div>
      <Videos videos={relatedVideos} suggestions={true} />
    </section>
  );
}
