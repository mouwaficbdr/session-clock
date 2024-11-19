import { useState, useEffect } from "react"


function formatMinutes(minutes) {
  return minutes < 10 ? '0' + minutes : minutes.toString();
}

export default function App() {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionHour, setSessionHour] = useState(25);
  const [sessionMinutes, setSessionMinutes] = useState(0);
  const [sessionMinutesDisplay, setSessionMinutesDisplay] = useState(formatMinutes(sessionMinutes))


  // useEffect(() => {
  //   function countdown() {
  //     setInterval(() => {
  //       if (sessionMinutes === 0 && sessionHour = 0) {
          
  //       }
  //     }, 1000);
  //   }
  // }, [sessionMinutes])


  return (
    <div className="container">
      <h1 className="title">25 + 5 Clock</h1>
      <div className="time-lengths-container">
        <div className="break-length time-length">
          <h2 id="break-label">Break Length</h2>
          <div className="time-length-display">
            <button id="break-decrement" className="button-decrement">

            </button>
            <p className="length-value">{breakLength}</p>
            <button id="break-increment" className="button-increment">
              
            </button>
          </div>
        </div>
        <div className="session-length">

        </div>
      </div>
    </div>
  )
}