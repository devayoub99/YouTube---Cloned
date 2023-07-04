import { Link } from "react-router-dom";

export default function ChannelCard({ channelDetails }) {
  return (
    <div className="rounded-2x mx-auto flex w-full flex-col items-center justify-center border border-slate-200">
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
        <img
          src={channelDetails?.snippet?.thumbnails?.high?.url}
          alt="Video Thumbnails"
          className="mx-auto max-h-[180px] max-w-[180px] overflow-hidden rounded-full object-cover"
        />
        <h3 className="pl-2 pt-2 text-center text-xl">
          {channelDetails?.snippet?.title}
        </h3>
      </Link>
    </div>
  );
}
