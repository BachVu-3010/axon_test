import React, { useEffect, useState } from "react";
import "./App.css";
import Row from "./Row";

const randomColor = require("randomcolor");

const numberOfRow = process.env.REACT_APP_GRID_DIMENSION
  ? parseInt(process.env.REACT_APP_GRID_DIMENSION)
  : 8;
const sizeOfASquare = 50; // pixel

const makeDistinctColors = (size) => {
  const colorSet = new Set();
  while (colorSet.size < size * size) {
    colorSet.add(randomColor());
  }

  return colorSet;
};

const colorSet = makeDistinctColors(numberOfRow);
const colorList = [...colorSet];

function App() {
  const [elementList, setElementList] = useState([]);

  const elementList1 = colorList.map((color, index) => {
    return {
      color: color,
      x_coord: (index % numberOfRow) * sizeOfASquare,
      y_coord: Math.floor(index / numberOfRow) * sizeOfASquare,
    };
  });

  useEffect(() => {
    setElementList(elementList1);
  }, []);

  const findIndexEndPosition = (position, start_index) => {
    const row_number = Math.round(position.y_coord / sizeOfASquare) + 1;
    const column_number = Math.round(position.x_coord / sizeOfASquare) + 1;
    const check_row = row_number > 0 && row_number < numberOfRow + 1;
    const check_column = column_number > 0 && column_number < numberOfRow + 1;

    if (check_row && check_column) {
      const end_index = (row_number - 1) * numberOfRow + column_number - 1;
      return end_index;
    } else {
      return start_index;
    }
  };
  const handleSwitchPosition = (initial, delta) => {
    const list = [...elementList];

    const end = {};
    end.x_coord = initial.x_coord + delta.x;
    end.y_coord = initial.y_coord + delta.y;

    const start_index = list.findIndex((item) => item.color === initial.color);
    const end_index = findIndexEndPosition(end, start_index);
    const item = list[start_index];
    list[start_index] = list[end_index];
    list[end_index] = item;
    setElementList(list);
  };

  const rendered = [];
  for (let i = 0; i < numberOfRow; i++) {
    rendered.push(
      <Row
        handleSwitchPosition={handleSwitchPosition}
        items={elementList.slice(
          i * numberOfRow,
          i * numberOfRow + numberOfRow
        )}
      />
    );
  }

  return (
    <div className="App">
      <div>{rendered}</div>
    </div>
  );
}

export default App;
