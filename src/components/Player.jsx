import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Playbutton from "./Playbutton";

const Player = ({
  isLoading,
  currentSong,
  isPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  setCurrentSong,
  setSongs,
  playSongHandler,
}) => {
  // event handler
  const activeLibraryHandler = (nextPrev) => {
    // Add active state
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  // draggable
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  // handler
  const skipHandlder = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-backward") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }

    if (isPlaying) audioRef.current.play();
  };
  //Animation track
  const trackAnime = {
    transform: `translate(${songInfo.animationPercentage}%)`,
  };
  const trackBackground = `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`;
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: trackBackground,
          }}
          className="track"
        >
          <input
            type="range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          <div style={trackAnime} className="animate-track"></div>
        </div>

        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          size="2x"
          icon={faAngleLeft}
          className="play"
          onClick={() => skipHandlder("skip-backward")}
        />

        <Playbutton
          playSongHandler={playSongHandler}
          isPlaying={isPlaying}
          isLoading={isLoading}
        />
        <FontAwesomeIcon
          size="2x"
          icon={faAngleRight}
          className="play"
          onClick={() => skipHandlder("skip-forward")}
        />
      </div>
    </div>
  );
};

export default Player;
