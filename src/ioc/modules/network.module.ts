import { ContainerModule, interfaces } from "inversify";

const initializeModule = (bind: interfaces.Bind) => {
  // Bind for supabase
};

export const NetworkModule = new ContainerModule(initializeModule);
