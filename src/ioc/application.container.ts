import { Container } from "inversify";
import { NetworkModule } from "./modules/network.module";
import { TodosModule } from "./modules/todos.module";

const ApplicationContainer = new Container({
  defaultScope: "Singleton",
  skipBaseClassChecks: true,
});

const initializeContainer = () => {
  // Wide range of modules can be loaded here
  ApplicationContainer.load(NetworkModule);

  // Domain modules
  ApplicationContainer.load(TodosModule);
};

initializeContainer();

export { ApplicationContainer, initializeContainer };
