import React from "react";

const LibrarySongs = ({ song, setCurrentSong, audioRef, isPlaying }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    // check if the song is playinh or not?
    if (isPlaying) {
      audioRef.current.play();
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };
  return (
    <div className="library-song" onClick={songSelectHandler}>
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySongs;
