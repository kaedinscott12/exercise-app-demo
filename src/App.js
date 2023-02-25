import "./App.css";
import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise";

function App() {
  let [page, differentScreen] = useState(0);

  if (page === 0) {
    return (
      <div className="App">
        <div>
          <h1>
            <br></br>
            <b>Hustle for that Muscle!</b>
          </h1>
          <br></br>
          <p>Select an Exercise:</p>
          <br></br>
          <button onClick={() => differentScreen(page + 1)}>Push Ups</button>
          <br></br>
          <button onClick={() => differentScreen(page + 2)}>Bicycling</button>
          <br></br>
          <button onClick={() => differentScreen(page + 1)}>
            Jumping Jacks
          </button>
          <br></br>
          <button onClick={() => differentScreen(page + 2)}>Running</button>
          <br></br>
          <button onClick={() => differentScreen(page + 1)}>Sit Ups</button>
          <br></br>
          <button onClick={() => differentScreen(page + 3)}>Lap Timer </button>
        </div>
      </div>
    );
  }

  if (page === 1) {
    return (
      <div className="App">
        <div>
          <RepetitionExercise></RepetitionExercise>
        </div>
      </div>
    );
  }

  if (page === 2) {
    return (
      <div className="App">
        <div>
          <DurationExercise></DurationExercise>
        </div>
      </div>
    );
  }

  if (page === 3) {
    return (
      <div className="App">
        <div>
          <RunningExercise></RunningExercise>
        </div>
      </div>
    );
  }
}

export default App;
