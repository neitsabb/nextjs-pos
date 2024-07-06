import { Container } from "inversify";
import { TodosModule } from "./modules/todos.module";
import { NetworkModule } from "./modules/network.module";
import { OrdersModule } from "./modules/orders.module";

const ApplicationContainer = new Container({
  defaultScope: "Singleton",
  skipBaseClassChecks: true,
});

const initializeContainer = () => {
  // Wide range of modules can be loaded here
  ApplicationContainer.load(NetworkModule);

  // Domain modules
  ApplicationContainer.load(TodosModule);
  ApplicationContainer.load(OrdersModule);
};

initializeContainer();

export { ApplicationContainer, initializeContainer };
