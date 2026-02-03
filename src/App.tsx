import { useState } from "react";
import "./App.css";

function App() {
  const [yes, setYes] = useState(false);

  return (
    <div className="container">
      {yes ? (
        <h1>
          💖 Yaaay!! 💖 <br />
          Ich freu mich 😍
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

            <button className="no">
              Nein 🙈
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
