import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, setIsPlaying, isPlaying }) => {
  // use Ref
  const audioRef = useRef(null);
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time </p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon size="2x" icon={faAngleLeft} className="play" />
        <FontAwesomeIcon
          onClick={playSongHandler}
          size="2x"
          icon={faPlay}
          className="play"
        />
        <FontAwesomeIcon size="2x" icon={faAngleRight} className="play" />
        <audio ref={audioRef} src={currentSong.audio} />
      </div>
    </div>
  );
};

export default Player;
