import { ContainerModule, interfaces } from "inversify";

import { IDatabaseAdapter } from "@/domain/services/database.interface";
import { SupabaseAdapter } from "@/infrastructure/adapters/supabase.adapter";
import {
  SupabaseClient,
  SupabaseClientType,
} from "@/infrastructure/services/supabase.service";
import {
  InfrastructureAdaptersSymbols,
  InfrastructureServicesSymbols,
} from "@/infrastructure/symbols";
import { applyDependencies } from "../common/utils";

const initializeModule = (bind: interfaces.Bind) => {
  // Bind for supabase
  bind<SupabaseClientType>(
    InfrastructureServicesSymbols.SupabaseClient
  ).toDynamicValue(() => {
    return SupabaseClient();
  });

  // Bind for adapters
  bind<IDatabaseAdapter>(
    InfrastructureAdaptersSymbols.DatabaseAdapter
  ).toConstantValue(
    applyDependencies(SupabaseAdapter, [
      InfrastructureServicesSymbols.SupabaseClient,
    ])
  );
};

export const NetworkModule = new ContainerModule(initializeModule);
