import React, { useState } from "react";
import { auth } from './services/firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import Main from "./container/Main";
import Login from "./pages/Login";

export default function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="font-quintessential">

      {user ?
        <Main />
        :
        <Login />
      }
    </div>

  );
}
