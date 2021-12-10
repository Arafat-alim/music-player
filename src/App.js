import React, { useState, useRef } from "react";
// import styles
import "./styles/app.scss";
// Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
// import util
import data from "./data.js";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  // use Ref
  const audioRef = useRef(null);
  // Adding state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [autoplay, setAutoPlay] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  // handler
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };
  const skipTrackHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    // await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    // if (isPlaying) audioRef.current.play();
    const nextSongIndex = (currentIndex + 1) % songs.length;
    const nextSong =
      nextSongIndex > -1 ? songs[nextSongIndex] : songs[songs.length - 1];
    changeSong(nextSong);
  };
  const changeSong = (nextSong) => {
    setCurrentSong(nextSong);
    if (!autoplay) {
      setAutoPlay(true);
    }
  };
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const onLoadedMetadata = (e) => {
    timeUpdateHandler(e);
    setIsLoading(false);
    if (autoplay) {
      audioRef.current.play();
    }
  };
  const volumeHandler = () => {};
  const onError = (e) => {
    console.log(e);
  };
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}  `}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        id={Song.id}
        isLoading={isLoading}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        playSongHandler={playSongHandler}
      />
      <Library
        setSongs={setSongs}
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        libraryStatus={libraryStatus}
        playSongHandler={playSongHandler}
      />
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onError={onError}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={timeUpdateHandler}
        onLoadStart={() => setIsLoading(true)}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={() => skipTrackHandler()}
        onVolumeChange={volumeHandler}
      />
    </div>
  );
}

export default App;
