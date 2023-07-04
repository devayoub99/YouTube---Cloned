import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchFromAPI from "../utils/fetchFromAPI";
import { Videos } from "./";
import { BiCheckCircle } from "react-icons/bi";

export default function ChannelDetails() {
  const { id: channelId } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [channelVideos, setChannelVideos] = useState(null);
  const [pageToken, setPageToken] = useState("");

  function loadPage() {
    fetchFromAPI(
      `search?channelId=${channelId}&part=snippet&id=order=date&maxResults=50&pageToken=${pageToken}`
    ).then((data) => {
      setChannelVideos(data?.items);
      setPageToken(data?.nextPageToken);
    });
  }
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${channelId}`).then((data) => {
      setChannelDetails(data.items[0]);
    });

    loadPage();
  }, [channelId]);

  console.log(pageToken);

  return (
    <section className="min-h-screen pb-4 dark:bg-[#010101] dark:text-white">
      <div className="gradient-cover min-h-[20vh]"></div>
      {channelDetails && (
        <div className="relative -top-[4.5rem] mb-32 flex h-16 flex-col items-center text-center">
          <img
            src={channelDetails?.snippet?.thumbnails?.high?.url}
            alt="Channel Logo"
            className="h-36 w-36 rounded-full border border-black"
          />
          <div>
            <h3 className="mt-2 flex items-center justify-center gap-1">
              <span className="text-2xl font-medium">
                {channelDetails?.snippet.title}
              </span>
              <BiCheckCircle />
            </h3>
            <p className="text-[18px]] font-medium">
              {parseInt(
                channelDetails?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </p>
            <p className="text-[18px]]">
              {parseInt(
                channelDetails?.statistics?.videoCount
              ).toLocaleString()}{" "}
              videos
            </p>
          </div>
        </div>
      )}
      <Videos videos={channelVideos} />
      <div className="my-4 flex justify-center">
        <button
          className="border border-red-500 p-2 font-medium text-red-500"
          onClick={() => {
            window.scrollTo(0, 0);
            loadPage();
          }}
        >
          Next Page
        </button>
      </div>
    </section>
  );
}
