import { z } from "zod";

export const CreateOrderSchema = z.object({
  title: z.string().min(1, { message: "Titre de la Order requis" }).max(255),
});

export type CreateOrderInput = z.infer<typeof CreateOrderSchema>;
