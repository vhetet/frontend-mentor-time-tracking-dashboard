import './App.scss';

function App() {

  const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

  return (
    <div className="App">
      <div className="profile">
        <div className="description">
          <img src="" alt="" className="icon" />
          <div>
            <span>Report for</span>
            <span className="name">Jeremy Robson</span>
          </div>
        </div>
        <div className="timeframe-selector">
          { Object.keys(data[0].timeframes).map(t => (<button>{t}</button>))}
        </div>
      </div>
      <div className="tracker">
        {
          data.map(c => (
            <div className="card">
              <div className="title">
              <h4>{c.title}</h4>
              <span className="options">...</span>
              </div>
              <div className="info">
                <span className="current">{c.timeframes['daily'].current}hrs</span>
                <span className="previous">Last Day - {c.timeframes['daily'].previous}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
