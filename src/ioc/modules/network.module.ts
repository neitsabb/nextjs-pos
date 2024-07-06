import { IDatabaseAdapter } from "@/domain/services/database.interface";
import {
  SupabaseClient,
  SupabaseClientType,
} from "@/infrastructure/services/supabase.service";
import {
  InfrastructureAdaptersSymbols,
  InfrastructureDataSymbols,
  InfrastructureServicesSymbols,
} from "@/infrastructure/symbols";
import { ContainerModule, interfaces } from "inversify";
import { applyDependencies } from "../common/utils";
import { SupabaseAdapter } from "@/infrastructure/adapters/supabase.adapter";

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
