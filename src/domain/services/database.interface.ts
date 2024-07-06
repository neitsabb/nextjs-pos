/**
 * Database Adapter Interface
 */
export interface IDatabaseAdapter {
  all<T>(table: string): Promise<T[]>;
  find<T>(table: string, id: string): Promise<T>;
  update<T>(table: string, id: string, data: T): Promise<T>;
  create<T>(table: string, data: T): Promise<T>;
  delete<T>(table: string, id: string): Promise<void>;
}
