import { TextWithBadge } from "@/components";
import { render, screen } from "@testing-library/react";

describe("TextWithBadge", () => {
  it("should render correctly", () => {
    render(<TextWithBadge text="Test" value="0" />);

    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
