import { NoResults } from "@/components";
import { render, screen } from "@testing-library/react";

describe("Badge", () => {
  it("should render correctly", () => {
    render(<NoResults />);

    expect(
      screen.getByText("Você ainda não tem tarefas cadastradas")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Crie tarefas e organize seus itens a fazer")
    ).toBeInTheDocument();
    expect(screen.getByText(/Feito por/)).toBeInTheDocument();
  });

  it("match snapshot", () => {
    const { container } = render(<NoResults />);

    expect(container).toMatchSnapshot();
  });
});
