import React, { useState } from "react";
// import styles
import "./styles/app.scss";
// Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
// import util
import data from "./util.js";
import Library from "./components/Library";

function App() {
  // Adding state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(data[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;
