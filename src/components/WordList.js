import React from "react";
import CharPlate from "./CharPlate.js";

function WordList({ word, selectedPos, setSelectedPos }) {
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
}

export default React.memo(WordList);
