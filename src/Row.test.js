import { render, screen, cleanup } from "@testing-library/react";
import Row from "./Row";
import { makeDistinctColors } from "./App";

const numOfElement = 2;
const colorSet = makeDistinctColors(numOfElement);
const colorList = [...colorSet];
const elementList_ = colorList.map((color, index) => {
  return {
    color: color,
  };
});

describe("test Row component using react-tesing-library", () => {
  afterEach(cleanup);
  it("should render a row of 4 rectangles component with distinct color", () => {
    const { container } = render(<Row items={elementList_} />);
    expect(container.firstChild).toHaveClass("row");
  });
});
