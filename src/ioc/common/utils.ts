import { ApplicationContainer } from "../application.container";
import { interfaces } from "inversify";

/**
 * Get the dependencies and apply them to the function
 *
 * @param func
 * @param dependencies
 * @returns
 */
export const applyDependencies = (
  func: Function,
  dependencies: interfaces.ServiceIdentifier<unknown>[] = []
) => {
  const injections = dependencies.map((dependency) =>
    ApplicationContainer.get(dependency)
  );
  return func.apply(func, injections);
};
