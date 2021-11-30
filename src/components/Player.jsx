import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time </p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon size="2x" icon={faAngleLeft} className="play" />
        <FontAwesomeIcon size="2x" icon={faPlay} className="play" />
        <FontAwesomeIcon size="2x" icon={faAngleRight} className="play" />
      </div>
    </div>
  );
};

export default Player;
