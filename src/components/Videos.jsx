import { ChannelCard, VideoCard } from "./";

export default function Videos({ videos, suggestions }) {
  return (
    <div className="videos overflow-hidden">
      {suggestions && (
        <p className="mb-4 w-fit border-b-2 border-black capitalize dark:border-white dark:text-white md:text-xl">
          related videos
        </p>
      )}
      <div className="videos-grid">
        {videos?.map((video) => {
          if (video.id.videoId) {
            return <VideoCard key={video.id.videoId} videoDetails={video} />;
          } else if (video.id.channelId) {
            return (
              <ChannelCard key={video.id.channelId} channelDetails={video} />
            );
          }
        })}
      </div>
    </div>
  );
}
