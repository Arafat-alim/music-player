import React from "react";
import LibrarySongs from "./LibrarySongs";

const Library = ({
  songs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
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
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
