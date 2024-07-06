import { createClient } from "@supabase/supabase-js";

export const SupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  return createClient(supabaseUrl, supabaseKey);
};

export type SupabaseClientType = ReturnType<typeof SupabaseClient>;
