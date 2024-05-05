import React, { useState } from 'react';
import Loading from './components/Loading';
import "./App.css"
import GameScreen from './components/GameScreen';
const App = () => {
  const [isGamestarted, setIsGamestarted] = useState(false);
  const togglegameplay = () => {
    setIsGamestarted((prev) => !prev);
  };
  return (
    <>
      {isGamestarted ? <GameScreen /> : <Loading toggle={togglegameplay} />}
    </>
  )
}

export default App
