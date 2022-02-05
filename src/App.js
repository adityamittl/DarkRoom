import React, { useState } from "react";
import { auth } from './services/firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import Main from "./container/Main";
import Login from "./pages/Login";
import Sound from "react-sound"
import Music from "./assets/music.mp3";
import { FcSpeaker } from "react-icons/fc";

function App(
  handleSingLoading
) {

  // state = {
  //   audio: new Audio(song),
  //   isPlaying: false,
  // };

  const [isPlaying, setisPlaying] = useState(false);

  let playPause = () => {
    let isPlaying = this.state.isPlaying;
    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }
    this.setState({ isPlaying: !isPlaying });
  };


  const [user] = useAuthState(auth);

  return (
    <div className="font-quintessential">

      <button onClick={playPause} className="absolute top-6 right-6">
        <FcSpeaker className="h-7 w-7" aria-hidden="false" />
      </button>

      {user ?
        <Main />
        :
        <Login />
      }
    </div>

  );
}

export default App;
