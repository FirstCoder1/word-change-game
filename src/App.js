import "./App.css";
import WordList from "./components/WordList";
import { useState, useEffect } from "react";
function App() {
  const wordList = [
    "apple",
    "orange",
    "man",
    "woman",
    "male",
    "female",
    "tree",
    "strone",
    "gold",
    "food",
  ];
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [selectedPos1, setSelectedPos1] = useState(-1);
  const [selectedPos2, setSelectedPos2] = useState(-1);
  const [result, setResult] = useState("Result: //");

  //select random words
  const getRandomWord = () => {
    setWord1([...wordList[Math.floor(wordList.length * Math.random())]]);
    setWord2([...wordList[Math.floor(wordList.length * Math.random())]]);
  };

  const resetResult = () => {
    setResult("Result: //");
  };

  // reset all one time at first rendering
  useEffect(() => {
    getRandomWord();
    resetResult();
  }, []);

  // eventHanders
  const swapHandler = () => {
    console.log(selectedPos1, selectedPos2);
    if (selectedPos1 > -1 && selectedPos2 > -1) {
      let newWord = [...word1];
      newWord[selectedPos1] = word2[selectedPos2];
      setWord1(newWord);
      newWord = [...word2];
      newWord[selectedPos2] = word1[selectedPos1];
      setWord2(newWord);
      setSelectedPos1(-1);
      setSelectedPos2(-1);
    }
  };

  const getResultHandler = () => {
    setResult("Result: " + word1.join("") + "//" + word2.join(""));
  };

  const restartHandler = () => {
    getRandomWord();
    resetResult();
  };

  return (
    <div className="App">
      <div className="show-area">
        <WordList
          word={word1}
          selectedPos={selectedPos1}
          setSelectedPos={setSelectedPos1}
        />
        <button onClick={swapHandler}>Swap</button>
        <WordList
          word={word2}
          selectedPos={selectedPos2}
          setSelectedPos={setSelectedPos2}
        />
      </div>
      <p className="result">{result}</p>
      <div className="buttonArea">
        <button onClick={getResultHandler}>Result</button>
        <button onClick={restartHandler}>Restart</button>
      </div>
    </div>
  );
}

export default App;
