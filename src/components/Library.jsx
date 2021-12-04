import React from "react";
import LibrarySongs from "./LibrarySongs";

const Library = ({
  setSongs,
  songs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  console.log("Current songs", currentSong.active);
  return (
    <div className="library">
      <h2>Library </h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySongs
            song={song}
            key={song.id}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            songs={songs}
            audioRef={audioRef}
            isPlaying={isPlaying}
            id={song.id}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
