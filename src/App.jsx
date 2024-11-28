import { useState, useEffect } from "react"


function formatMinutes(minutes) {
  return minutes < 10 ? '0' + minutes : minutes.toString();
}

export default function App() {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
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
          <h2 id="break-label" className="labels">
            Break Length
          </h2>
          <div className="time-length-display">
            <button id="break-decrement" className="button-decrement">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                x="0px"
                y="0px"
                width="20"
                height="20"
              >
                <path
                  d="M26.29 20.29 18 28.59V0h-2v28.59l-8.29-8.3-1.42 1.42 10 10a1 1 0 0 0 1.41 0l10-10z"
                  data-name="2-Arrow Down"
                />
              </svg>
            </button>
            <p className="length-value">{breakLength}</p>
            <button id="break-increment" className="button-increment">
              <svg
                data-name="1-Arrow Up"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                x="0px"
                y="0px"
                width="20"
                height="20"
              >
                <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="session-length time-length">
          <h2 id="timer-label" className="labels">
            Session Length
          </h2>
          <div className="time-length-display">
            <button id="session-decrement" className="button-decrement">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                x="0px"
                y="0px"
                width="20"
                height="20"
              >
                <path
                  d="M26.29 20.29 18 28.59V0h-2v28.59l-8.29-8.3-1.42 1.42 10 10a1 1 0 0 0 1.41 0l10-10z"
                  data-name="2-Arrow Down"
                />
              </svg>
            </button>
            <p className="length-value">{sessionLength}</p>
            <button id="session-increment" className="button-increment">
              <svg
                data-name="1-Arrow Up"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                x="0px"
                y="0px"
                width="20"
                height="20"
              >
                <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="clock">
        <p className="clock-name">Session</p>
        <span className="time-display">25:00</span>
      </div>
      <div className="other-buttons">
        <button>
          <svg
            fill="#000000"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            width="30"
            height="30"
          >
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path d="M2,21 L2,3 C2,2.17595468 2.94076375,1.70557281 3.6,2.2 L15.6,11.2 C16.1333333,11.6 16.1333333,12.4 15.6,12.8 L3.6,21.8 C2.94076375,22.2944272 2,21.8240453 2,21 Z M4,19 L13.3333333,12 L4,5 L4,19 Z M22,22 L20,22 L20,2 L22,2 L22,22 Z M19,22 L17,22 L17,2 L19,2 L19,22 Z"></path>{' '}
            </g>
          </svg>
        </button>
        <button>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="30"
            height="30"
          >            
            <g id="SVGRepo_iconCarrier">
              {' '}
              <g>
                {' '}
                <path fill="none" d="M0 0h24v24H0z"></path>{' '}
                <path d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795z"></path>{' '}
              </g>{' '}
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}