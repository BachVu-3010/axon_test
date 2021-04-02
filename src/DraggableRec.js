import React, { useState } from "react";
import Draggable from "react-draggable";

export default function DraggableRec({ id, item, handleSwitchPosition }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePos = (data) => {
    handleSwitchPosition(item, data);
  };

  return (
    <Draggable
      key={id}
      position={position}
      onStop={(e, data) => {
        updatePos(data);
      }}
    >
      <div className="rectangle" style={{ background: item.color }}></div>
    </Draggable>
  );
}
