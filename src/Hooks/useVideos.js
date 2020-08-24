import { useState, useEffect } from "react";
import Youtube from "../APIs/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const KEY = "AIzaSyC7VJ8NzeVtCuIZKPFz-xdGqvd7r_3V6y4";

    const youtubeData = await Youtube.get("/search", {
      params: {
        maxResults: 5,
        part: "snippet",
        type: "video",
        key: KEY,
        q: term,
      },
    });
    setVideoData(youtubeData.data.items);
  };

  return [videoData, search];
};

export default useVideos;
