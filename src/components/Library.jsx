import React from "react";
import LibrarySongs from "./LibrarySongs";

const Library = ({ songs }) => {
  return (
    <div className="library">
      <h2>Library </h2>
      <div className="library-songs">
        {songs.map((song, index) => (
          <LibrarySongs song={song} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Library;
