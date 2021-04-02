import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

describe("test App component using react-tesing-library", () => {
  afterEach(cleanup);
  it("should render rows of draggable components", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toHaveClass("App");
    expect(container.firstChild.firstChild.firstChild).toHaveClass("row");
    expect(container.firstChild.firstChild.firstChild.firstChild).toHaveClass(
      "rectangle react-draggable"
    );
    screen.debug();
  });
});
