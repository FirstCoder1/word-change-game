import React from "react";
import CharPlate from "./CharPlate.js";
import { useMemo } from "react";

export default function WordList({
  word,
  selectedPos,
  setSelectedPos,
  restartHandler,
}) {
  const memoValue = useMemo(() => {
    console.log("now, " + word + " is being rendered. ");
    return (
      <div>
        {console.log(word)}
        {word &&
          word.map((cha, index) => (
            <CharPlate
              key={index}
              cha={cha}
              index={index}
              selectedPos={selectedPos}
              setSelectedPos={setSelectedPos}
            />
          ))}
      </div>
    );
  }, [word, selectedPos, setSelectedPos, restartHandler]);
  return memoValue;
}
