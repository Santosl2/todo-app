import { Item } from "@/components";
import { render, screen } from "@testing-library/react";

describe("Item", () => {
  it("should render correctly", () => {
    render(<Item id={0} text="Test Task" />);

    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  it("match snapshot", () => {
    render(<Item id={1} text="Test Task Snap" />);

    expect(screen.getByText("Test Task Snap")).toMatchSnapshot();
  });
});
