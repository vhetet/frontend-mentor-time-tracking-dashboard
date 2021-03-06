import "./App.scss";
import { useState } from "react";
import profilePicture from "./assets/images/image-jeremy.png";

function App() {
  const data = [
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7,
        },
        weekly: {
          current: 32,
          previous: 36,
        },
        monthly: {
          current: 103,
          previous: 128,
        },
      },
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 7,
        },
        monthly: {
          current: 13,
          previous: 19,
        },
      },
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 5,
        },
        monthly: {
          current: 11,
          previous: 18,
        },
      },
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3,
        },
        weekly: {
          current: 5,
          previous: 10,
        },
        monthly: {
          current: 21,
          previous: 23,
        },
      },
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 2,
          previous: 2,
        },
        monthly: {
          current: 7,
          previous: 11,
        },
      },
    },
  ];

  const timeframeText = {
    daily: 'day',
    weekly: 'week',
    monthly: 'month'
  }

  const [timeframe, setTimeframe] = useState("daily");

  return (
    <div className="App">
      <div className="profile">
        <div className="description">
          <img src={profilePicture} alt="jeremy profile" className="icon" />
          <div>
            <span>Report for</span>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        <div className="timeframe-selector">
          {Object.keys(data[0].timeframes).map((t) => (
            <button key={t} style={{ textTransform: "capitalize" }} onClick={() => setTimeframe(t)} className={t === timeframe ? 'active' : null}>
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="tracker">
        {data.map((c) => (
          <div
            key={c.title}
            className={`card ${c.title.toLocaleLowerCase().replace(" ", "-")}`}
          >
            <div className="card-content">
              <div className="title">
                <h4>{c.title}</h4>
                <span className="options">...</span>
              </div>
              <div className="info">
                <h3 className="current">{c.timeframes[timeframe].current}hrs</h3>
                <span className="previous">
                  Last {timeframeText[timeframe]} - {c.timeframes[timeframe].previous}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
