import React, { useState } from "react";
import { auth } from './services/firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import Main from "./container/Main";
import Login from "./pages/Login";
import Sound from "react-sound"
import Music from "./assets/music.mp3";

export default function App() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [user] = useAuthState(auth);

  return (
    <div className="font-quintessential">

      {/* <button onCLick={() => setIsPlaying(!isPlaying)} className="absolute top-6 right-6">{!isPlaying ? 'Play' : 'Stop' }</button>
      <Sound
      url={Music}
      playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
      playFromPosition={0}
      onLoading={handleSongLoading}
      onPlaying={handleSongPlaying}
      onFinishedPlaying={handleSongFinishedPlaying}
      /> */}

      {/* <audio src={Music} autoPlay /> */}

      {user ?
        <Main />
        :
        <Login />
      }
    </div>

  );
}
