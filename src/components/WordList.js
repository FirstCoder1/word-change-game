import React from "react";
import CharPlate from "./CharPlate.js";

export default function WordList({ word, selectedPos, setSelectedPos }) {
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
}
