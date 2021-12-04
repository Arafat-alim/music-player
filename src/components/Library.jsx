import React from "react";
import LibrarySongs from "./LibrarySongs";

const Library = ({ songs, currentSong, setCurrentSong }) => {
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
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
