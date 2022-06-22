import { Button } from "@/components";
import { render, screen } from "@testing-library/react";

describe("ButtonTest", () => {
  it("should render correctly", () => {
    render(
      <Button type="button" disabled={false}>
        Test
      </Button>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("match snapshot", () => {
    render(
      <Button type="button" disabled={false}>
        Test
      </Button>
    );
    expect(screen.getByText("Test")).toMatchSnapshot();
  });
});
