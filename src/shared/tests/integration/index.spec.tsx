/* eslint-disable testing-library/no-unnecessary-act */

import Home from "@/pages";
import { fireEvent, screen } from "@testing-library/react";

import { renderWithRedux } from "../utils/CustomRender";

const initialState = {
  todos: [
    {
      id: 1,
      value: "Test Task",
      isCompleted: false,
    },
    {
      id: 2,
      value: "Test Task 2",
      isCompleted: true,
    },
  ],
};

function render() {
  const { mockStore, rerenderWithRedux } = renderWithRedux(
    <Home />,
    initialState
  );

  return { mockStore, rerenderWithRedux };
}
describe("IndexPage", () => {
  const dataValueToCreate = "FinishTasks";

  it("should be able to render correctly", () => {
    renderWithRedux(<Home />, initialState);

    expect(screen.getByAltText("Logo Todo App")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("O que você precisa fazer?")
    ).toBeInTheDocument();
    expect(screen.getByText("Tarefas concluídas")).toBeInTheDocument();
    expect(screen.getByText("Tarefas criadas")).toBeInTheDocument();
    expect(screen.getByTestId("createBtnTest")).toBeInTheDocument();
  });

  it("should be able to see all Todos", () => {
    const { mockStore } = render();

    mockStore.getState().todos.forEach((t) => {
      expect(screen.getByText(t.value)).toBeInTheDocument();
    });
  });

  it("should be able to add Todo", () => {
    render();

    const inputAddTodo = screen.getByPlaceholderText(
      "O que você precisa fazer?"
    ) as HTMLInputElement;
    const createBtn = screen.getByTestId("createBtnTest");

    fireEvent.change(inputAddTodo, {
      target: { value: dataValueToCreate },
    });

    expect(inputAddTodo.value).toBe(dataValueToCreate);

    expect(createBtn).not.toHaveAttribute("disabled");

    fireEvent.click(createBtn);

    expect(screen.getByText(dataValueToCreate)).toBeInTheDocument();
  });

  it("should be able to create and delete Todo", () => {
    render();

    const inputAddTodo = screen.getByPlaceholderText(
      "O que você precisa fazer?"
    ) as HTMLInputElement;
    const createBtn = screen.getByTestId("createBtnTest");

    fireEvent.change(inputAddTodo, {
      target: { value: dataValueToCreate },
    });

    expect(inputAddTodo.value).toBe(dataValueToCreate);

    expect(createBtn).not.toHaveAttribute("disabled");

    fireEvent.click(createBtn);

    const deleteBtn = screen.getAllByTestId("deleteItemTest")[0];

    expect(screen.getByText(dataValueToCreate)).toBeInTheDocument();

    fireEvent.click(deleteBtn);

    expect(screen.queryByText(dataValueToCreate)).not.toBeInTheDocument();
  });

  it("should not be able to create change Todo when input is empty", () => {
    render();

    expect(screen.getByTestId("createBtnTest")).toHaveAttribute("disabled");
  });

  it("should be able to to create change Todo to completed", () => {
    render();

    const inputAddTodo = screen.getByPlaceholderText(
      "O que você precisa fazer?"
    ) as HTMLInputElement;
    const createBtn = screen.getByTestId("createBtnTest");

    fireEvent.change(inputAddTodo, {
      target: { value: dataValueToCreate },
    });

    expect(inputAddTodo.value).toBe(dataValueToCreate);

    expect(createBtn).not.toHaveAttribute("disabled");

    fireEvent.click(createBtn);

    const checkCompleteCheckbox = screen.getAllByTestId("checkboxItemTest")[0];

    expect(screen.getByText(dataValueToCreate)).toBeInTheDocument();

    fireEvent.click(checkCompleteCheckbox);

    expect(screen.getByText(dataValueToCreate)).toHaveClass("line-through");
    expect(screen.getByText(dataValueToCreate)).toHaveClass("text-gray-300");
  });
});
