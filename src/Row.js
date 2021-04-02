import React from "react";
import DraggableRec from "./DraggableRec";

export default function Row({ items, handleSwitchPosition }) {
  const row = items.map((item, index) => {
    return (
      <DraggableRec
        key={index}
        id={index}
        item={item}
        handleSwitchPosition={handleSwitchPosition}
      />
    );
  });
  return <div className="row">{row}</div>;
}
