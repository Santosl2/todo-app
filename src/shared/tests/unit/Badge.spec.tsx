import { Badge } from "@/components";
import { render, screen } from "@testing-library/react";

describe("Badge", () => {
  it("should render correctly", () => {
    render(<Badge>Test 1</Badge>);

    expect(screen.getByText("Test 1")).toBeInTheDocument();
  });

  it("match snapshot", () => {
    render(<Badge>Test 1</Badge>);

    expect(screen.getByText("Test 1")).toMatchSnapshot();
  });
});
