import { useState } from "react";
import "./App.css";

function App() {
  const [noClicks, setNoClicks] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [yesSize, setYesSize] = useState(1);
  const [isAngry, setIsAngry] = useState(false);

  const noTexts = [
    "No",
    "NO?? Really?",
    "If u say NO again, I gonna put a virus on ur phone!",
    "Try Again 😤"
  ];

  const handleNoClick = () => {
    setNoClicks((prev) => prev + 1);
    setYesSize((prev) => prev + 0.25);
    setIsAngry(true);
  };

  // Alles innerhalb von <div className="container"> als Parent
  return (
    <div className="container">
      {!accepted ? (
        <>
          <h1>Hi Emma! 💕</h1>
          <h2>Will you be my valentine?!</h2>

          <img
            className="cat"
            src={
              isAngry
                ? "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzZrazUxaDRuM2Vzc2hoMTFqdTk5eWt6cmptaGRsZGY4cjlkczIyZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ETuDnzgfViziD4EhcC/giphy.gif"
                : "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
            }
            alt="cat reaction"
          />

          <div className="buttons">
            <button
              className="yes"
              style={{ transform: `scale(${yesSize})` }}
              onClick={() => setAccepted(true)}
            >
              YES 💖
            </button>

            <button className="no" onClick={handleNoClick}>
              {noTexts[Math.min(noClicks, noTexts.length - 1)]}
            </button>
          </div>
        </>
      ) : (
        <>
          <h1>Awww 🥰</h1>
          <h2>Love you! Now you're My Valentine 💖</h2>
          <img
            className="cat"
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmVwN2JjY3JwY2tmaWh6bTFzYXVxZTE4NnpjeTVqeGd2cDA3bXJoNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SgZtvjwcfq0ww/giphy.gif"
            alt="happy cat"
          />
        </>
      )}
    </div>
  );
}
export default App;
