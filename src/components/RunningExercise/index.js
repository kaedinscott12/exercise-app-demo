import React from "react";
import { useState } from "react";

function LapTimesComponent() {
  const [laps, setLaps] = useState([]);

  // Function to add a new lap time
  function addLap() {
    const now = new Date();
    const lapTime = `${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()}`;
    setLaps([...laps, lapTime]);
  }

  return (
    <div>
      {/* Render the lap times */}
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>{`Lap ${index + 1}: ${lap}`}</li>
        ))}
      </ul>

      {/* Render the button to add a new lap */}
      <button onClick={addLap}>Add Lap</button>
    </div>
  );
}

export default LapTimesComponent;
