import * as Redux from "react-redux";

import { MainForm } from "@/components";
import { fireEvent, screen } from "@testing-library/react";

import { renderWithRedux } from "../utils/CustomRender";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

describe("MainForm", () => {
  const mockedDispatch = Redux.useDispatch;

  afterEach(() => {
    (mockedDispatch as jest.Mock).mockClear();
  });

  it("should render correctly", () => {
    renderWithRedux(<MainForm />);

    expect(
      screen.getByPlaceholderText("O que você precisa fazer?")
    ).toBeInTheDocument();
    expect(screen.getByTestId("createBtnTest")).toBeInTheDocument();
  });

  it("should not be able to create a new todo when value is empty ", () => {
    renderWithRedux(<MainForm />);

    const createBtn = screen.getByTestId("createBtnTest");

    expect(createBtn).toHaveAttribute("disabled");
  });

  it("should not be able to create a new todo", () => {
    (mockedDispatch as jest.Mock).mockReturnValue((e: any) => {
      return e;
    });

    renderWithRedux(<MainForm />);

    const inputAddTodo = screen.getByPlaceholderText(
      "O que você precisa fazer?"
    ) as HTMLInputElement;

    fireEvent.change(inputAddTodo, {
      target: { value: "Only a test" },
    });

    const createBtn = screen.getByTestId("createBtnTest");

    expect(createBtn).not.toHaveAttribute("disabled");

    fireEvent.click(createBtn);

    expect(mockedDispatch).toHaveBeenCalledTimes(3);
  });

  it("match snapshot", () => {
    const { container } = renderWithRedux(<MainForm />);

    expect(container).toMatchSnapshot();
  });
});
