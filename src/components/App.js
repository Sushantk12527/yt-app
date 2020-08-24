import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import useVideos from "../Hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedvideo] = useState(null);
  const [videoData, search] = useVideos("cars");

  useEffect(() => {
    setSelectedvideo(videoData[0]);
  }, [videoData]);

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={(video) => {
                setSelectedvideo(video);
              }}
              VideoList={videoData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
