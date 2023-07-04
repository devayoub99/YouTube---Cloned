import { BiCheckCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function VideoCard({ videoDetails }) {
  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
    <div
      className="mx-auto max-w-full overflow-hidden pb-4 dark:bg-[#1E1E1E] dark:text-white"
      onClick={handleClick}
    >
      <Link to={`/video/${videoDetails?.id?.videoId}`}>
        <img
          src={videoDetails?.snippet?.thumbnails?.high?.url}
          alt="Video Thumbnails"
          className="h-[180px] w-[358px] object-cover"
        />
        <h3 className="pl-2 pt-2">
          {videoDetails?.snippet?.title.slice(0, 32)}...
        </h3>
      </Link>
      <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
        <p className="flex items-center gap-1 pl-2 text-gray-500 dark:text-gray-300">
          {videoDetails?.snippet?.channelTitle}
          <BiCheckCircle />
        </p>
      </Link>
    </div>
  );
}
