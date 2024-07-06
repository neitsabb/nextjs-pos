import { ITodosPresenter } from "@/application/presenters/interfaces/todos.interface";
import { CreateTodoSchema } from "@/application/schemas/todo.schema";
import { ApplicationPresentersSymbols } from "@/application/symbols";
import { inject } from "@/ui/common/utils/inject";
import { revalidatePath } from "next/cache";
import { createServerAction } from "zsa";

const { fetchTodos, addTodo } = inject<ITodosPresenter>(
  ApplicationPresentersSymbols.TodosPresenter
);

const createTodoAction = createServerAction()
  .input(CreateTodoSchema)
  .handler(async ({ input }) => {
    await addTodo(input);

    revalidatePath("/todos");
  });

export { fetchTodos, createTodoAction };
