import { ITodosPresenter } from "@/application/presenters/interfaces/todos.interface";
import { ApplicationPresentersSymbols } from "@/application/symbols";
import { inject } from "@/ui/common/utils/inject";

const { fetchTodos, addTodo } = inject<ITodosPresenter>(
  ApplicationPresentersSymbols.TodosPresenter
);

export { fetchTodos, addTodo };
