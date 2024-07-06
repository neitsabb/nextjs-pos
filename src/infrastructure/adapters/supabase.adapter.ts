import { IDatabaseAdapter } from "@/application/services/database.interface";
import { SupabaseClientType } from "./../services/supabase.service";

/**
 * Supabase adapter implementation
 * @param {SupabaseClientType} db
 */
export const SupabaseAdapter = (db: SupabaseClientType): IDatabaseAdapter => ({
  async all<T>(table: string): Promise<T[]> {
    const { data, error } = await db.from(table).select("*");
    if (error) throw new Error(error.message);
    return data || [];
  },
  async find<T>(table: string, id: string): Promise<T> {
    const { data, error } = await db
      .from(table)
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw new Error(error.message);
    return data || {};
  },
  async update<T>(table: string, id: string, data: T): Promise<T> {
    const { error } = await db.from(table).update(data).eq("id", id);
    if (error) throw new Error(error.message);
    return data;
  },
  async create<T>(table: string, data: T): Promise<T> {
    const { data: response, error } = await db.from(table).insert(data);
    if (error) throw new Error(error.message);
    return response ? response[0] : data;
  },
  async delete<T>(table: string, id: string): Promise<void> {
    const { error } = await db.from(table).delete().eq("id", id);
    if (error) throw new Error(error.message);
  },
});
