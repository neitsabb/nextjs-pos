import { z } from "zod";

export const CreateTodoSchema = z.object({
  title: z.string().min(1, { message: "Titre de la todo requis" }).max(255),
});

export type CreateTodoInput = z.infer<typeof CreateTodoSchema>;
