export const TodosRepository = ({ db }: { db: any }) => ({
  fetchTodos: async () => {
    const { data, error } = await db.from("todos").select("*");
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },
  fetchTodoById: async (id: string) => {
    const { data, error } = await db.from("todos").select("*").eq("id", id);
    if (error) {
      throw new Error(error.message);
    }
    return data[0];
  },
  addTodo: async (todo: any) => {
    const { data, error } = await db.from("todos").insert([todo]);
    if (error) {
      throw new Error(error.message);
    }
    return data[0];
  },
  deleteTodoById: async (id: string) => {
    const { error } = await db.from("todos").delete().eq("id", id);
    if (error) {
      throw new Error(error.message);
    }
  },
});
