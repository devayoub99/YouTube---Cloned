import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchFromAPI from "../utils/fetchFromAPI";
import { Videos } from ".";

export default function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(
      `search?q=${searchTerm}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`
    ).then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <div className="min-h-screen px-4 dark:bg-black">
      <h2 className="mb-4 text-2xl dark:text-white">
        <span className="font-medium text-red-500">{searchTerm}</span> search
        results
      </h2>
      <Videos videos={videos} />
    </div>
  );
}
