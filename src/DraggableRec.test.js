import { render, screen, cleanup } from "@testing-library/react";
import DraggableRec from "./DraggableRec";

describe("test DraggableRec component using react-tesing-library", () => {
  afterEach(cleanup);
  it("should render a translatable component", () => {
    const item = { color: "#F0DB4F" };
    const { container } = render(<DraggableRec id={1} item={item} />);
    expect(container.firstChild).toHaveStyle("transform: translate(0px,0px)");
  });

  it("should render a yellow component", () => {
    const item = { color: "#F0DB4F" };
    const { container } = render(<DraggableRec id={2} item={item} />);
    expect(container.firstChild).toHaveStyle(
      "background: rgb(240, 219, 79); transform: translate(0px,0px);"
    );
  });
});
