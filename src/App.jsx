import { useState, useEffect, useRef } from "react"


export default function App() {

  const [breakLength, setBreakLength] = useState(5); //In minutes
  const [sessionLength, setSessionLength] = useState(25); //In minutes
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60); //Converts the minutes in seconds
  const [isSessionTime, setIsSessionTime] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  // const [timeLabel, setTimeLabel] = useState("Session");

  const minutes = Math.floor(timeLeft / 60); //Find the correponding minutes
  const seconds = timeLeft % 60;
  const audio = document.getElementById("beep");
  const latestIsSessionTime = useRef(isSessionTime);

  useEffect(() => {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength])

  useEffect(() => {
    latestIsSessionTime.current = isSessionTime;
  }, [isSessionTime])

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime < 1) {
          audio.play();
          clearInterval(timer);
          setIsSessionTime((prev) => !prev); // Alterne entre session et pause
          // setTimeLabel(latestIsSessionTime ? 'Session' : 'Break');
          return latestIsSessionTime ? sessionLength * 60 : breakLength * 60; // Bascule entre les temps
        }
        return prevTime - 1; // Décrémentation classique
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, isSessionTime, sessionLength, breakLength, audio]);

  // useEffect(() => {
  //   setTimeLabel(isSessionTime ? 'Session' : 'Break');
  // }, [isSessionTime]);



  function handleReset() {
    setIsRunning(false);
    setBreakLength(5);
    setSessionLength(25);
    setIsSessionTime(true);
    setTimeLeft(25 * 60);
    // setTimeLabel('Session');

    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }

  }

  const clockStyle = {
    color: timeLeft < 60 ? "red" : ""
  }


  return (
    <div className="container">
      <h1 className="title">25 + 5 Clock</h1>
      <div className="time-lengths-container">
        <div className="break-length time-length">
          <h2 id="break-label" className="labels">
            Break Length
          </h2>
          <div className="time-length-display">
            <button
              disabled={isRunning}
              id="break-decrement"
              className="button-decrement"
              onClick={() => {
                setBreakLength((prev) => (prev <= 1 ? 1 : prev - 1));
              }}
            >
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
            <p className="length-value" id="break-length">
              {breakLength}
            </p>
            <button
              disabled={isRunning}
              id="break-increment"
              className="button-increment"
              onClick={() => {
                setBreakLength((prev) => (prev === 60 ? 60 : prev + 1));
              }}
            >
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
          <h2 id="session-label" className="labels">
            Session Length
          </h2>
          <div className="time-length-display">
            <button
              disabled={isRunning}
              id="session-decrement"
              className="button-decrement"
              onClick={() => {
                setSessionLength((prev) => (prev <= 1 ? 1 : prev - 1));
              }}
            >
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
            <p className="length-value" id="session-length">
              {sessionLength}
            </p>
            <button
              disabled={isRunning}
              id="session-increment"
              className="button-increment"
              onClick={() => {
                setSessionLength((prev) => (prev === 60 ? 60 : prev + 1));
              }}
            >
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
        <p className="clock-name" id="timer-label" style={clockStyle}>
          {latestIsSessionTime ? 'Session' : 'Break'}
        </p>
        <span className="time-display" id="time-left" style={clockStyle}>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
        <audio
          id="beep"
          src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/2.mp3"
        ></audio>
        ;
      </div>
      <div className="other-buttons">
        <button id="start_stop" onClick={() => setIsRunning((prev) => !prev)}>
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
        <button id="reset" onClick={() => handleReset()}>
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