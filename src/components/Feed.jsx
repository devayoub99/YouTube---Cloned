import { useEffect, useState } from "react";
import { Sidebar, Videos } from "./index";
import fetchFromAPI from "../utils/fetchFromAPI";

export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(
      `search?q=${selectedCategory}&part=snippet&regionCode=US&maxResults=50&order=date`
    ).then((data) => setVideos(data));
  }, [selectedCategory]);

  return (
    <div className="flex min-h-[92.5vh] flex-col px-4 py-2 dark:bg-[#010101] dark:text-white md:flex-row">
      <Sidebar
        selectedCategory={selectedCategory}
        toggleCategory={setSelectedCategory}
      />
      <section className="flex-1 md:pl-4">
        <h2 className="my-4 text-2xl">
          <span className="font-medium text-red-500">{selectedCategory}</span>{" "}
          Videos
        </h2>
        <Videos videos={videos?.items} />
      </section>
    </div>
  );
}
