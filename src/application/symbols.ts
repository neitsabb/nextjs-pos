export const ApplicationPresentersSymbols = {
  TodosPresenter: Symbol.for("TodosPresenter"),
  OrdersPresenter: Symbol.for("OrdersPresenter"),
};

export const ApplicationUseCasesSymbols = {
  FetchTodosUseCase: Symbol.for("fetchTodosUseCase"),
  FetchTodoByIdUseCase: Symbol.for("fetchTodoByIdUseCase"),
  AddTodoUseCase: Symbol.for("addTodoUseCase"),
  DeleteTodoByIdUseCase: Symbol.for("deleteTodoByIdUseCase"),

  FetchOrdersUseCase: Symbol.for("fetchOrdersUseCase"),
};
