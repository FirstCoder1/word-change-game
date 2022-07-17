import React from "react";

export default function CharPlate({ cha, index, selectedPos, setSelectedPos }) {
  return (
    <div
      className={index === selectedPos ? "char-plate-select" : "char-plate"}
      onClick={() => setSelectedPos(index)}
    >
      <p>{cha}</p>
    </div>
  );
}
