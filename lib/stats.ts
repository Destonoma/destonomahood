import { supabase } from "./supabase";

export async function getClaimCount() {
  const { count, error } = await supabase
    .from("claims")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error(error);
    return 0;
  }

  return count || 0;
}