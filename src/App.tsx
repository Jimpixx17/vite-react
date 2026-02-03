import { useState } from "react";
import "./App.css";

function App() {
  const [yes, setYes] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const moveNo = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setPos({ x, y });
  };

  return (
    <div className="container">
      {yes ? (
        <h1>
          💖 YAAAY 💖 <br />
          Dann ist es ein Date 😍
        </h1>
      ) : (
        <>
          <h1>
            Willst du mein <br />
            Valentinstag-Date sein? 💘
          </h1>

          <div className="buttons">
            <button className="yes" onClick={() => setYes(true)}>
              Ja 💕
            </button>

            <button
              className="no"
              onMouseEnter={moveNo}
              onClick={moveNo}
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`
              }}
            >
              Nein 🙈
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
